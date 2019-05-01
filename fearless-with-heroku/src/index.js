const { fearless, get, post, send, sendAsync } = require("@fearless/fearless");
const json = require("@fearless/json");

const options = {
  handlers: [
    get("/", (req, res) => {
      send(res, 200, "Hello, World!");
    }),
    get("/", (req, res) => {
      sendAsync(res, 200, async () => {
        const data = await json(res);
        return data;
      });
    })
  ],
  listen: {
    port: process.env.PORT,
    handler: () => {}
  }
};

fearless(options);
