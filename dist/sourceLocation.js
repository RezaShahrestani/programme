export const sourceLocationOf = (needle, haystack) => {
    const index = haystack.indexOf(needle);
    if (index < 0)
        return null;
    const lines = haystack.substring(0, index).split("\n");
    const lastLine = lines.pop();
    const line0 = lines.length;
    const column0 = lastLine.length;
    return {
        line0,
        column0,
    };
};
