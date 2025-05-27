# Database

Now we want to connect to a database from Node.js.

First we need to install some packages:

```shell
npm install knex sqlite3
```

---

Create a new SQLite database named `hyf_node_week1.sqlite3`.
In `app.js` we can now establish the database connection.
Add the following to the top of `app.js`:

```js
import knex from "knex";
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./hyf_node_week1.sqlite3",
  },
});

// The code from before is down here
// const app = express();
```

---

Using `knex.raw` we can now execute SQL queries.
Let's extend the `/info` route to also respond with the SQLite version, for example: `{ "nodeVersion":"v17.3.0", "sqliteVersion":"3.36.0" }`

```js
app.get("/info", async (req, res) => {
  const [rows] = await knexInstance.raw("SELECT sqlite_version() as version");

  res.json({
    nodeVersion: process.version,
    sqliteVersion: rows.version,
  });
});
```
