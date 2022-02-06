//Cette classe permet de trier les recettes selon l'entrée donnée par l'utilisateur
class Research
{
    constructor(recipes)
    {
        this.recipes = recipes;
    }

    *research(userSearchValue)
    {
       yield this.recipes.filter((recipe) => this.filter(recipe, userSearchValue));
    }

    filter(recipe, userInput)
    {
        if(userInput != "")
        {
            if(recipe.name.toLowerCase().includes(userInput.toLowerCase()) || recipe.description.toLowerCase().includes(userInput.toLowerCase()) || recipe.ingredients.some((ingredient) => ingredient.name.toLowerCase().includes(userInput.toLowerCase()))) 
            {
                return true;
            }
            else
            {
                return false
            }
        }

        return false
    }

    researchByTag(selectedTags)
    {
        if(selectedTags.length == 0)
        {
            return this.recipes;
        }
        else
        {
            selectedTags.forEach(tag =>{

                let filteredRecipes = [];
                this.recipes.forEach(recipe => {
                    if(recipe.ingredients.some((ingredient) => tag.indexOf(ingredient.name.toLowerCase()) >= 0) || recipe.ustensils.some((ustensil) => tag.indexOf(ustensil.name.toLowerCase()) >= 0) || recipe.appliance.name.toLowerCase().includes(tag))
                    {
                        filteredRecipes.push(recipe);
                    }
                });

                this.recipes = filteredRecipes;
                filteredRecipes = [];
            })

            return this.recipes;      
        }
        
    }
}

export default Research