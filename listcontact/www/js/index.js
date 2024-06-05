// Attendre que le périphérique soit prêt avant de charger les contacts
document.addEventListener("deviceready", loadContacts, false);

// Fonction pour charger les contacts
function loadContacts() {
    let options = new ContactFindOptions();
    // options.filter = ""; // Pas de filtre, récupérer tous les contacts
    options.multiple = true; // Permettre de récupérer plusieurs contacts
    options.hasPhoneNumber = true; // Seulement les contacts avec numéro de téléphone

    let fields = ["name", "phoneNumbers"]; // Champs à récupérer

    navigator.contacts.find(fields, showContacts, handleError, options);
}

// Fonction pour afficher les contacts
function showContacts(contacts) {
    let code = '';

    // Boucle pour traiter chaque contact
    for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i];
        let name = contact.name ? contact.name.formatted : "Nom inconnu";
        let phoneNumber = contact.phoneNumbers && contact.phoneNumbers[0] ? contact.phoneNumbers[0].value : "Numéro inconnu";

        code += `
            <li>
                <a href="#">
                    <img src="img/avatar.png" alt="photo de profil">
                    <h1>${name}</h1>
                    <p>${phoneNumber}</p>
                </a>
            </li>
        `;
    }

    // Ajouter les contacts à la liste
    let contactList = document.getElementById('contactList');
    contactList.innerHTML = code;
    $('#contactList').listview('refresh'); // Actualiser la liste jQuery Mobile
}

// Fonction pour gérer les erreurs
function handleError(error) {
    console.log("Erreur : ", error);
}
