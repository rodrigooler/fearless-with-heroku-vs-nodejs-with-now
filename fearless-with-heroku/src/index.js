require('dotenv/config')

const { fearless, get, post, send, sendAsync } = require("@fearless/fearless");
const json = require("@fearless/json");

console.log('PORT', process.env.PORT || 3000);

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
    port: process.env.PORT || 3000,
    handler: () => {}
  }
};

fearless(options);
