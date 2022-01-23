//Import classes utiles
import TagView from "./tag_view";

//Cette classe permet de créer les tags contenant les ustensiles des recettes
class UstensilsListView
{
    constructor(recipes, eventDispatcher)
    {
        this.recipes = recipes;

        this.ustensils = [];

        this.eventDispatcher = eventDispatcher;

        this.removalDuplicates();
    }

    //Supprime les doublons
    removalDuplicates()
    {
        this.recipes.forEach(recipe => {

            recipe.ustensils.forEach(ustensil => {
               
                let ustensilTag = this.ustensils.find((ustensilTag) => ustensilTag.name.toLowerCase() === ustensil.name.toLowerCase());
                
                if(typeof ustensilTag === "undefined")
                {
                    this.ustensils.push(ustensil);
                }                
            });
        });

        //Triage du tableau
        this.ustensils.sort(this.sortArray); 

        //Création du html
        this.createDomElement();
    }

    //Trie par ordre alphabétique un tableau d'objet
    sortArray(x, y)
    {
        return x.name.localeCompare(y.name);
    }

    createDomElement()
    {
        //Récupération du container
        let container = document.getElementById("ustensilsList");

        this.ustensils.forEach( ustensil => {

            // Création du li contenant le lien
            let listItem = document.createElement("li");

            // Ajout d'une classe
            listItem.classList.add("main__nav__dropdown__list__item");

            // Ajout de l'item à la liste
            container.appendChild(listItem);

            let tag = new TagView(ustensil, this.eventDispatcher);

            listItem.appendChild(tag.element);
        });
    }

}

export default UstensilsListView;