class RecipeView
{
    constructor(recipes)
    {
        //Tableaux avec toutes les recettes
        this.recipes = recipes
        this.createDomElement();
    }

    createDomElement()
    {
        //Récupération du container
        let container = document.querySelector('.main__content');

        //Boucle sur les recettes
        this.recipes.forEach(recipe => {

            //Création de l'article
            let article = document.createElement("article");

            //Ajout d'une classe
            article.classList.add("main__content__recipe-card");

            //Ajout de l'article à la section
            container.appendChild(article);

            let htmlSegment =

            `
                <img class="main__content__recipe-card__img" src="https://via.placeholder.com/700x250?text=Work+In+Progress" alt="placeholder - image de la recette."/>
                <div class="main__content__recipe-card__primary-information-container">
                    <h2 class="main__content__recipe-card__information-container__title">${recipe.name}</h2>
                    <p class="main__content__recipe-card__information-container__time"><i class="far fa-clock"></i> ${recipe.time} min</p>
                </div>

                <div class="main__content__recipe-card__secondary-information-container">
                    <div class="main__content__recipe-card__secondary-information-container__list-keeper">
                        <ul class="main__content__recipe-card__secondary-information-container__list-keeper__ingredients">
                
                        </ul>
                    </div>

                    <div class="main__content__recipe-card__secondary-information-container__text-keeper">
                        <p class="main__content__recipe-card__secondary-information-container__text-keeper__description">${recipe.description.substr(0, 175) + " ..."}</p>
                    </div>
                </div>
            `;

            //Ajout d'une partie du contenu
            article.innerHTML = htmlSegment;

            htmlSegment = "";

            //Récupération de l'élément du DOM contenant la liste des ingrédients
            let ingredientContainer = article.querySelector(".main__content__recipe-card__secondary-information-container__list-keeper__ingredients");

            //Boucle sur chaques tags du photographe
            recipe.ingredients.forEach(ingredient => {

                //Création des items
                let ingredientListItem = document.createElement("li");

                ingredientListItem.classList.add("main__content__recipe-card__secondary-information-container__list-keeper__ingredients__item");

                ingredientContainer.appendChild(ingredientListItem);

                if(ingredient.quantity === undefined)
                {
                    htmlSegment = `<p><strong>${ingredient.name}</strong></p>`
                }
                else if(ingredient.unit === undefined)
                {
                    htmlSegment = `<p><strong>${ingredient.name}</strong> : ${ingredient.quantity}</p>`
                }
                else
                {
                    htmlSegment = `<p><strong>${ingredient.name}</strong> : ${ingredient.quantity} ${ingredient.unit}</p>`
                }

                ingredientListItem.innerHTML = htmlSegment;
            });     
        });
    }
}