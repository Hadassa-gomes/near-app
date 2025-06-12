const express = require("express");
const cors = require("cors");
const data = require("./data");

const app = express();
app.use(cors());

app.get("/places", (req, res) => {
  const { lat, lng } = req.query;
  if (!lat || !lng) return res.status(400).json({ error: "Missing coordinates" });

  const userLat = parseFloat(lat);
  const userLng = parseFloat(lng);

  const nearby = data.filter(place => {
    const distance = Math.sqrt(
      Math.pow(place.latitude - userLat, 2) + Math.pow(place.longitude - userLng, 2)
    );
    return distance < 0.05; // ~5km de raio
  });

  res.json(nearby);
});

app.listen(3000, () => {
  console.log("API rodando em http://localhost:3000");
});
