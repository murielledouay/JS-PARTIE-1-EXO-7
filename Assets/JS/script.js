//on déclare la fonction du calcul quand on l'appelle
function clickFunction(){
  //on déclare la variable "Ma pointure" et on lui attribue une valeur, valeur de l'élément dont l'id est myShoeSize
  var myAge = document.getElementById('myAge').value;
  //on déclare la variable "Mon année de naissance""et on lui attribue une valeur, valeur de l'élément dont l'id est myYearOfBirth
  if (myAge >= 18) {
    alert('Vous êtes majeur');
  } else {
    var result = (myAge < 18);
    alert('Vous êtes mineur');
  }
}
