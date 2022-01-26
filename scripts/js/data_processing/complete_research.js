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
        for(let i = 0; i < this.recipes.length; i++)
        {
            if(this.recipes[i].name.toLowerCase().includes(this.userSearchValue.toLowerCase()))
            {
                this.filteredRecipes.push(this.recipes[i]);
            }
            else if(this.recipes[i].description.toLowerCase().includes(this.userSearchValue.toLowerCase()))
            {
                this.filteredRecipes.push(this.recipes[i]);
            }
            else
            {
                for (let j = 0; j < this.recipes[i].ingredients.length; j++)
                {
                    if(this.recipes[i].ingredients[j].name.toLowerCase().includes(this.userSearchValue.toLowerCase()))
                    {
                        this.filteredRecipes.push(this.recipes[i]);
                    }
                }
            }
        }

        return this.filteredRecipes   
    }
}

export default CompleteResearch