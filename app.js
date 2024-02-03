const express = require("express");
const app = express();
const itineraires = require("./data.json");

var cors = require("cors");
app.use(express.json())
app.use(cors());
// Route pour obtenir les itinéraires d'une ville spécifique
app.post("/itineraire", (req, res) => {
  let content = req.body.prompt
  let cities = [];
  for (const key in itineraires) {
    cities.push(key)
  }
  let wordsArray = content.split(" ")
  wordsArray.forEach(word => {
    if (word !="") {
      word = word.toLowerCase()
      console.log(word)
    if (cities.includes(word)) {
      if (itineraires[word]) {
        res.json(itineraires[word]);
      } else {
        res.status(404).send("Ville non trouvée");
      }
    }
    }
    
  }); 
});

app.get("/villes", (req, res) => {
    res.json(itineraires);
});


app.get("/test", (req, res) => {
  res.send("test");
});

// Démarrer le serveur
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});