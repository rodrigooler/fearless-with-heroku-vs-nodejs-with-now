const { fearless, get, post, send, sendAsync } = require("@fearless/fearless");
const json = require("@fearless/json");

fearless([
  get("/", (req, res) => {
    send(res, 200, "Hello, World!");
  }),
  get("/", (req, res) => {
    sendAsync(res, 200, async () => {
      const data = await json(res);
      return data;
    });
  })
]);
