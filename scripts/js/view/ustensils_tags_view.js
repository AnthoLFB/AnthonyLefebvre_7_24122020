//Cette classe permet de créer les tags contenant les ustensiles des recettes
class UstensilsTagsView
{
    constructor(recipes)
    {
        this.recipes = recipes;

        this.ustensils = [];

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

            // Création du lien
            this.element = document.createElement("a");

            // Ajout d'une classe
            this.element.classList.add("main__nav__dropdown__list__item__link");

            //Accessibilité
            this.element.setAttribute("aria-label", "Permet d'afficher les recettes contenant l'ustensile suivant : " + ustensil.name + ".");

            // Création du nom du lien
            let htmlLinkName = document.createTextNode(ustensil.name[0].toUpperCase() + ustensil.name.slice(1));

            // Ajout du texte
            this.element.appendChild(htmlLinkName);

            // Cible du lien (redirection)
            this.element.href = "#";

            //event & affichage à gérer ici

            listItem.appendChild(this.element);
        });
    }

}

export default UstensilsTagsView;