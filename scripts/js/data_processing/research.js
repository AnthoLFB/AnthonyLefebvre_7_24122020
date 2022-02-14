//Cette classe permet de trier les recettes selon l'entrée donnée par l'utilisateur
class Research
{
    constructor(recipes)
    {
        this.recipes = recipes;
    }

    research(userInput)
    {
       return this.recipes.filter((recipe) => recipe.name.toLowerCase().includes(userInput.toLowerCase()) || recipe.description.toLowerCase().includes(userInput.toLowerCase()) || recipe.ingredients.some((ingredient) => ingredient.name.toLowerCase().includes(userInput.toLowerCase())));
    }

    researchByTag(selectedTags)
    {
        if(selectedTags.length == 0)
        {
            return this.recipes;
        }
        else
        {
            let filteredRecipes = [];

            this.recipes.forEach(recipe => {

                let valueToCheck = [];

                //valueToCheck = recipe.ingredients.concat(recipe.ustensils).concat(recipe.appliance);

                recipe.ingredients.forEach(ingredient => {
                    valueToCheck.push(ingredient.name.toLowerCase());
                });

                recipe.ustensils.forEach(ustensil => {
                    valueToCheck.push(ustensil.name.toLowerCase());
                });

                valueToCheck.push(recipe.appliance.name.toLowerCase());        

                const isContained = (tag) => valueToCheck.includes(tag);

                if(selectedTags.every(isContained))
                {
                    filteredRecipes.push(recipe);
                }
            });

            this.recipes = filteredRecipes;

            return this.recipes;
        }
        
    }
}

export default Research