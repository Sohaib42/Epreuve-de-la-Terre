const path = require('node:path');
// __filename contient le chemin absolue du fichier executé, la méthode basename nous permet de récupérer le dernier élement du chemin, qui correspondra à notre nom de fichier
var filename = path.basename(__filename);
console.log(filename);
