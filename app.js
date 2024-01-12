const express = require("express");
const app = express();
const itineraires = require("./data.json");

var cors = require("cors");
app.use(cors());
// Route pour obtenir les itinéraires d'une ville spécifique
app.get("/itineraire/:ville", (req, res) => {
  const ville = req.params.ville;
  if (itineraires[ville]) {
    res.json(itineraires[ville]);
  } else {
    res.status(404).send("Ville non trouvée");
  }
});

app.get("/test", (req, res) => {
  res.send("test");
});

// Démarrer le serveur
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
