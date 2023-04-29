var arguments = process.argv;
// Les deux premières élements du tableau stocké dans la  variable arguments n'ont pas d'utilité ici, j'utilise donc la méthode slice(2) pour les retirer
 var sliced = arguments.slice(2)
// J'affiche comme souhaité tout les arguments qui suivent l'execution de mon fichier javascript
 for( i = 0 ; i < sliced.length;i++){
    console.log(sliced[i]);
 }
