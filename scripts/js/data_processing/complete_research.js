//Cette classe permet de trier les recettes selon l'entrée donnée par l'utilisateur
class CompleteResearch
{
    constructor(userSearchValue, recipes)
    {
        this.userSearchValue = userSearchValue;
        this.recipes = recipes;
        this.filteredRecipes = [];
    }

    *research()
    {
       yield this.recipes.filter((recipe) => this.filter(recipe, this.userSearchValue/*, ustensils, appareils, ingredients*/));
    }

    filter(recipe, userInput/*, ustensils, appareils, ingredients*/) 
    {
        if(recipe.name.toLowerCase().includes(userInput.toLowerCase())) 
        {
            return true;
        }
        
    }
}

export default CompleteResearch