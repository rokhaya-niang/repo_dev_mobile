// Fonction pour ajouter une tâche à la liste
function ajouterTache() {
    const task = document.getElementById("task").value; // Récupère la valeur de la tâche
    const taskListInProgress = document.getElementById('taskListInProgress'); // Liste des tâches en cours
    const taskListDone = document.getElementById('taskListDone'); // Liste des tâches terminées

    if (task.trim() !== '') { // Vérifie si la tâche n'est pas vide
        let newItem = document.createElement('li'); // Crée un nouvel élément li
        newItem.innerHTML = task; // Définit le texte de l'élément li avec la valeur de la tâche
        taskListInProgress.appendChild(newItem); // Ajoute l'élément li à la liste des tâches en cours

        // Gestion du geste de balayage vers la droite (swiperight)
        $(newItem).on('swiperight', function () {
            taskListDone.appendChild(this); // Déplace l'élément vers la liste des tâches terminées
        });

        // Gestion du geste de balayage vers la gauche (swipeleft)
        $(newItem).on('swipeleft', function () {
            $(this).hide('slow', function () {
                $(this).remove(); // Supprime l'élément de la liste après l'animation de disparition
            });
        });

        // Rafraîchit les listes pour mettre à jour l'affichage
        $(taskListInProgress).listview('refresh');
        $(taskListDone).listview('refresh');
    }

    document.getElementById("task").value = ''; // Réinitialise le champ de saisie de la tâche
    document.getElementById("task").focus(); // Place le curseur de texte dans le champ de saisie
}

// Fonction pour réinitialiser la liste de tâches
function reinitialiserListe() {
    const taskListInProgress = document.getElementById('taskListInProgress'); // Liste des tâches en cours
    const task = document.getElementById("task"); // Champ de saisie de la tâche

    task.value = ''; // Réinitialise le champ de saisie de la tâche
    taskListInProgress.innerHTML = ''; // Supprime tous les éléments de la liste des tâches en cours
    task.focus(); // Place le curseur de texte dans le champ de saisie
}
