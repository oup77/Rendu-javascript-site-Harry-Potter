let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  // Permet de désactiver le comportement par défaut (envoi du formulaire)
  event.preventDefault();
  // Conteneur des erreurs
  let errorContainer = document.querySelector(".message-error");
  //   Liste des errreurs
  let errorList = document.querySelector(".message-error ul");
  // On vide les erreurs et on cache le conteneur
  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");
  // On récupère le champ email
  let email = document.querySelector("#email");
  //   si l'email est vide
  if (email.value === "") {
    // on affiche le conteneur des erreur et suprime le succès
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    // Créer un <li></li> dans le HTML
    let err = document.createElement("li");
    err.innerText = "Le champ email ne peut pas être vide";
    // On ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    // On affiche le succès
    email.classList.add("success");
  }
  // On récupère le champ pseudo
  let pseudo = document.querySelector("#pseudo");
  //   si pseudo inférieur à 6 caractères
  if (pseudo.value.length < 6) {
    // on affiche le conteneur des erreur et suprime le succès
    errorContainer.classList.add("visible");
    pseudo.classList.remove("success");

    // Créer un <li></li> dans le HTML
    let err = document.createElement("li");
    err.innerText = "Le pseudo ne peut pas être inférieur à 6 caractères";
    // On ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    // On affiche le succès
    pseudo.classList.add("success");
  }
  // On récupère le champ pseudo
  let axePréféré = document.querySelector("#axe-préféré");
  //   si pseudo inférieur à 6 caractères
  if (axePréféré.value == "vide") {
    // on affiche le conteneur des erreur et suprime le succès
    errorContainer.classList.add("visible");
    axePréféré.classList.remove("success");

    // Créer un <li></li> dans le HTML
    let err = document.createElement("li");
    err.innerText = "Un choix de personnage est obligatoire.";
    // On ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    // On affiche le succès
    axePréféré.classList.add("success");
  }

  //   Ici, tous les checks sont passés

  let successContaineur = document.querySelector(".message-success");
  successContaineur.classList.remove("visible");

  if (
    email.classList.contains("success") &&
    pseudo.classList.contains("success") &&
    axePréféré.classList.contains("success")
  ) {
    successContaineur.classList.add("visible");
  }
});
