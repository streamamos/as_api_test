const express = require("express");
const app = express();
const main = require("./rabbit");

// Define the route for the API
app.get("/rabbit/:provider/:id", async (req, res) => {
  try {
    const { provider, id } = req.params;
    const result = await main(provider, id);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
