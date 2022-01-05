//Cette classe permet de créer les tags contenant les ingrédients des recettes
class IngredientsTagsView
{
    constructor(recipes)
    {
        this.recipes = recipes;

        this.ingredients = [];

        this.removalDuplicates();
    }

    //Supprime les doublons
    removalDuplicates()
    {
        this.recipes.forEach(recipe => {

            recipe.ingredients.forEach(ingredient => {
               
                let ingredientTag = this.ingredients.find((ingredientTag) => ingredientTag.name.toLowerCase() === ingredient.name.toLowerCase());
                
                if(typeof ingredientTag === "undefined")
                {
                    this.ingredients.push(ingredient);
                }                
            });
        });

        //Triage du tableau
        this.ingredients.sort(this.sortArray); 

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
        let container = document.getElementById("ingredientsList");

        this.ingredients.forEach( ingredient => {

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
            this.element.setAttribute("aria-label", "Permet d'afficher les recettes contenant l'ingrédient suivant : " + ingredient.name + ".");

            // Création du nom du lien
            let htmlLinkName = document.createTextNode(ingredient.name[0].toUpperCase() + ingredient.name.slice(1));

            // Ajout du texte
            this.element.appendChild(htmlLinkName);

            // Cible du lien (redirection)
            this.element.href = "#";

            //event & affichage à gérer ici

            listItem.appendChild(this.element);
        });
    }
}

export default IngredientsTagsView;