//Import classes utiles
import TagView from "./tag_view";

//Cette classe permet de créer les tags contenant les appareils utilisée pour les recettes
class DevicesListView
{   
    constructor(recipes, eventDispatcher)
    {
        this.recipes = recipes;

        this.devices = [];

        this.eventDispatcher = eventDispatcher;

        this.removalDuplicates();
    }

    //Supprime les doublons
    removalDuplicates()
    {
        this.recipes.forEach(recipe => {

            let deviceTag = this.devices.find((deviceTag) => deviceTag.name.toLowerCase() === recipe.appliance.name.toLowerCase());

            if(typeof deviceTag === "undefined")
            {
                this.devices.push(recipe.appliance);
            }   
        });

         //Triage du tableau
         this.devices.sort(this.sortArray); 

         //Création du html
         this.createDomElement();
    }

    //Trie par ordre alphabétique un tableau d'objet
    sortArray(x, y)
    {
        return x.name.localeCompare(y.name);
    }

    //Trie par ordre alphabétique un tableau d'objet
    sortArray(x, y)
    {
        return x.name.localeCompare(y.name);
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

            let tag = new TagView(device, this.eventDispatcher);

            listItem.appendChild(tag.element);
        });
    }
}

export default DevicesListView;