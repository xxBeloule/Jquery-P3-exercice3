var result = (Math.floor((101-0)*Math.random())+0); // Calcul aléatoire
var click = 0; // Nombre de tentatives
// On récuper #check qui est le boutton de validation, a son clicque il déclenche la fonction sans nom.
$('#check').click(function () {
  // définition de la valeur value qui récupere la valeur de #number qui est la valeur de l'input que le visiteur rentre.

  // Un If qui englobe tout les autres if, et contient un else si jamais autre chose qu'un nombre une alerte s'affiche.
  if ($('#number').val() && !isNaN($('#number').val())) {
    // Si, la valeur rentrée est plus grande que la valeur aléatoire alors on affiche une alerte l'indiquant que le resultat est plus bas
    if ($('#number').val() > result) {
      // On rajoute au compteur de click +1
      click ++;
      alert("C'est moins");
    }
    // Si, la valeur rentrée est plus petite que la valeur aléatoire alors on affiche une alerte l'indiquant que le resultat est plus haut
    if  ($('#number').val() < result) {
      // On rajoute au compteur de click +1
      click ++;
      alert("C'est plus");
    }
    // Enfin, si la valeur rentrée par l'utilisateur est égal à la valeur aléatoire alors on lui affiche que le résultat est bon
    if ($('#number').val() == result) {
      // On rajoute au compteur de click +1
      click ++;
      // On lui indique le resultat, et le compteur d'essaies
      alert(" Le resultat était : "+ result +" bien joué ! Vous avez trouvé en "+ click+" essaie(s)");
      // Changement de la bordure de l'input en vert
      $('#number').css('border','3px solid green');
    }

  } else {
    alert('Entrez des chiffres');
  }
});
