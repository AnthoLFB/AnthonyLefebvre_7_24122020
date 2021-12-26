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
        let container = document.querySelector('.content');

        //Boucle sur les recettes
        this.recipes.forEach(recipe => {

            console.log(recipe);

            //Création de l'article
            let article = document.createElement("article");

            //Ajout de l'article à la section
            container.appendChild(article);

            let htmlSegment =

            `
                <img src="https://via.placeholder.com/350x150?text=Work+In+Progress" alt="placeholder - image de la recette."/>
                <div>
                    <h2>${recipe.name}</h2>
                    <p>${recipe.time} min</p>
                </div>

                <div>
                    <div>
                        <ul class="ingredients">
                
                        </ul>
                    </div>

                    <div>
                        <p>${recipe.description}</p>
                    </div>
                </div>
            `;

            //Ajout d'une partie du contenu
            article.innerHTML = htmlSegment;

            htmlSegment = "";

            //Récupération de l'élément du DOM contenant la liste des ingrédients
            let ingredientContainer = article.querySelector(".ingredients");

            //Boucle sur chaques tags du photographe
            recipe.ingredients.forEach(ingredient => {

                //Création des items
                let ingredientListItem = document.createElement("li");

                ingredientContainer.appendChild(ingredientListItem);

                if(ingredient.quantity === undefined)
                {
                    htmlSegment = `<p>${ingredient.name}</p>`
                }
                else if(ingredient.unit === undefined)
                {
                    htmlSegment = `<p>${ingredient.name} : ${ingredient.quantity}</p>`
                }
                else
                {
                    htmlSegment = `<p>${ingredient.name} : ${ingredient.quantity} ${ingredient.unit}</p>`
                }

                ingredientListItem.innerHTML = htmlSegment;
            });     
        });

        console.log(this.recipes);
    }
}