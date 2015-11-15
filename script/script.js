/**
 * Created by BENATHMANE on 09/11/2015.
 */
function soumettre() {
    console.log('formulaire soumis');

    // Soumission en Ajax, si on est là c'est que le formulaire est valide

    var request = new XmlHttpRequest();

    // etc.

    return false;
}

function traiteFichiers(evt) {
    var files = event.target.files;

    console.log("fichiers selectionnés : " + files.length);

    // ici utiliser le code du cours pour tester si ce sont des images et afficher les previews
}

/*function geolocalise() {
    console.log("geoloc");

    navigator.geolocation.getCurrentPosition(displayPosition);
}*/

/*function displayPosition(position) {
    console.log("long = " + position.coords.longitude);
}*/