import { spawn } from "node:child_process";
import { watch } from "node:fs";
const args = process.argv.slice(2);
if (args.length === 0) {
    console.error("Usage: node dist/watch.js COMMAND [ARGS...]");
    process.exit(1);
}
const cmdAndArgs = args;
let state = { tag: "waiting" };
const markAsDirty = () => {
    if (state.tag === "waiting") {
        setTimeout(startRun, 200);
        state = { tag: "delaying" };
    }
    else if (state.tag === "running-clean") {
        state = {
            ...state,
            tag: "running-dirty",
        };
    }
    else if (state.tag === "running-dirty") {
        //
    }
};
const startRun = () => {
    console.log("Spawning child process");
    const child = spawn(cmdAndArgs[0], cmdAndArgs.slice(1), {
        stdio: ["ignore", "inherit", "inherit"],
    });
    child.on("close", (code, signal) => {
        if (code) {
            console.log(`Child process failed: exited with code ${code}`);
        }
        else if (signal) {
            console.log(`Child process failed: killed by ${signal}`);
        }
        else {
            console.log(`Child process succeeded`);
        }
        if (state.tag === "running-clean") {
            console.log("Waiting...");
            state = { tag: "waiting" };
        }
        else if (state.tag === "running-dirty") {
            startRun();
        }
    });
    state = {
        tag: "running-clean",
        child,
    };
};
const listener = (event, filename) => {
    console.log(`Watcher event: ${event} ${filename}`);
    if (filename?.startsWith(".git/"))
        return;
    if (filename?.startsWith("node_modules/"))
        return;
    markAsDirty();
};
watch(".", { recursive: true, encoding: "binary" }, listener);
console.log("Initiating first run");
startRun();
