const server = require("./api/server");

server.get("/api/welcome", (req, res) => {
  res.status(200).json({
    message: "You done did it maifrend",
  });
});

const PORT = process.env.PORT || 6969;

server.listen(PORT, () => {
  console.log("====API LISTENING ON PORT 6969====");
});
