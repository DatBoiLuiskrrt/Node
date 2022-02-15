const server = require("./api/server");
const PORT = process.env.PORT || 6969;

server.listen(PORT, () => {
  console.log("====API LISTENING ON PORT 6969====");
});
