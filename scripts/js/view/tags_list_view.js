//Import classes utiles
import TagView from "./tag_view";

//Cette classe permet de créer les tags contenant les appareils utilisée pour les recettes
class TagsListView
{   
    constructor(recipes, eventDispatcher)
    {
        this.recipes = recipes;

        this.ingredients = [];
        this.devices = [];
        this.ustensils = [];

        this.eventDispatcher = eventDispatcher;

        this.removalDuplicates();
    }

    //Supprime les doublons
    removalDuplicates()
    {
        
        this.recipes.forEach(recipe => {

            //Recupère les ingrédients sans doublons
            recipe.ingredients.forEach(ingredient => {
               
                let ingredientTag = this.ingredients.find((ingredientTag) => ingredientTag.name.toLowerCase() === ingredient.name.toLowerCase());
                
                if(typeof ingredientTag === "undefined")
                {
                    this.ingredients.push(ingredient);
                }                
            });

            //Recupère les ustensiles sans doublons
            recipe.ustensils.forEach(ustensil => {
               
                let ustensilTag = this.ustensils.find((ustensilTag) => ustensilTag.name.toLowerCase() === ustensil.name.toLowerCase());
                
                if(typeof ustensilTag === "undefined")
                {
                    this.ustensils.push(ustensil);
                }                
            });

            //Recupère les appareils sans doublons
            let deviceTag = this.devices.find((deviceTag) => deviceTag.name.toLowerCase() === recipe.appliance.name.toLowerCase());

            if(typeof deviceTag === "undefined")
            {
                this.devices.push(recipe.appliance);
            }
        });

        console.log(this.ingredients);
        
        //Triage des tableaux
        this.ingredients.sort(this.sortArray);
        this.devices.sort(this.sortArray); 
        this.ustensils.sort(this.sortArray); 

        //Création du html
        this.checkError();
    }

    //Trie par ordre alphabétique un tableau d'objet
    sortArray(x, y)
    {
        return x.name.localeCompare(y.name);
    }

    checkError()
    {   
        //retire les elements et/ou les messages d'erreur
        this.removeElementsByClass("main__nav__dropdown__list__item");
        this.removeElementsByClass("main__nav__dropdown__list__error");
 
        //Récupération des conteneurs
        let ingredientsContainer = document.getElementById("ingredientsList");
        let devicesContainer = document.getElementById("devicesList");
        let ustensilsContainer = document.getElementById("ustensilsList");

        if(this.ingredients.length == 0)
        {
            ingredientsContainer.innerHTML = `<li class="main__nav__dropdown__list__error">Aucun ingrédient n'a été trouvé.</li>`;
        }
        else
        {
            this.ingredients.forEach( ingredient => {
                this.createDomElement(ingredientsContainer, ingredient);
                console.log(ingredient);
            });
        }

        if(this.devices.length == 0)
        {
            devicesContainer.innerHTML = `<li class="main__nav__dropdown__list__error">Aucun appareil n'a été trouvé.</li>`;
        }
        else
        {
            this.devices.forEach( device => {
                this.createDomElement(devicesContainer, device);
            });
        }

        if(this.ustensils.length == 0)
        {
            ustensilsContainer.innerHTML = `<li class="main__nav__dropdown__list__error">Aucun ustensiles n'a été trouvé.</li>`;
        }
        else
        {
            this.ustensils.forEach( ustensil => {
                this.createDomElement(ustensilsContainer, ustensil);
            });
        }
    }

    createDomElement(container, objet)
    {
        // Création du li contenant le lien
        let listItem = document.createElement("li");

        // Ajout d'une classe
        listItem.classList.add("main__nav__dropdown__list__item");

        // Ajout de l'item à la liste
        container.appendChild(listItem);

        let tag = new TagView(objet, this.eventDispatcher);

        listItem.appendChild(tag.element);
    }

    //Permet de retirer les éléments du dom déjà existant pour éviter les doublons
    removeElementsByClass(className)
    {
        var elements = document.getElementsByClassName(className);

        while(elements.length > 0)
        {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
}

export default TagsListView;