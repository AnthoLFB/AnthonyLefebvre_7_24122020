//Cette classe permet de trier les recettes selon l'entrée donnée par l'utilisateur
class CompleteResearch
{
    constructor(userSearchValue, recipes)
    {
        this.userSearchValue = userSearchValue;
        this.recipes = recipes
        this.filteredRecipes = [];
    }

    research()
    {
        return this.filteredRecipes = this.recipes.filter(recipe => this.checkingMatch(recipe, this.userSearchValue));
    }

    checkingMatch(recipe, userInput)
    {
        if(recipe.name.toLowerCase().includes(userInput.toLowerCase()))
        {
            return true;
        }
        else  if(recipe.description.toLowerCase().includes(userInput.toLowerCase()))
        {
            return true;
        }
        else
        {
            recipe.ingredients.forEach( ingredient => {
                if(ingredient.name.toLowerCase().includes(userInput.toLowerCase()))
                {
                    return true;
                }
            });
        }
    }
}

export default CompleteResearch