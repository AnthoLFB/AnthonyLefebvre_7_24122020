//Cette classe permet de créer les tags contenant les appareils utilisée pour les recettes
class DevicesTagsView
{
    constructor(recipes)
    {
        this.recipes = recipes;

        this.devices = [];

        this.removalDuplicates();
    }

    //Supprime les doublons
    removalDuplicates()
    {
        this.recipes.forEach(recipe => {

            let deviceTag = this.devices.find((deviceTag) => deviceTag.toLowerCase() === recipe.appliance.toLowerCase());
            
            if(typeof deviceTag === "undefined")
            {
                this.devices.push(recipe.appliance);
            }            
        });

        //Triage du tableau
        this.devices.sort(); 

        //Création du html
        this.createDomElement();
    }

    createDomElement()
    {
        //Récupération du container
        let container = document.getElementById("devicesList");

        this.devices.forEach( device => {

            // Création du li contenant le lien
            let listItem = document.createElement("li");

            // Ajout d'une classe
            listItem.classList.add("main__nav__dropdown__list__item");

            // Ajout de l'item à la liste
            container.appendChild(listItem);

            // Création du lien
            this.element = document.createElement("a");

            // Ajout d'une classe
            this.element.classList.add("main__nav__dropdown__list__item__link");

            //Accessibilité
            this.element.setAttribute("aria-label", "Permet d'afficher les recettes ou l'utilisation de l'ustensile suivant : " + device + ", est requise.");

            // Création du nom du lien
            let htmlLinkName = document.createTextNode(device);

            // Ajout du texte
            this.element.appendChild(htmlLinkName);

            // Cible du lien (redirection)
            this.element.href = "#";

            //event & affichage à gérer ici

            listItem.appendChild(this.element);
        });
    }
}

export default DevicesTagsView;