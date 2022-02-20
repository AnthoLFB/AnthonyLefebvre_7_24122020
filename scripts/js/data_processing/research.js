//Cette classe permet de trier les recettes selon l'entrée donnée par l'utilisateur
class Research
{
    constructor(recipes)
    {
        this.recipes = recipes;
    }

    *research(userSearchValue)
    {
        for(let i = 0; i < this.recipes.length; i++)
        {
            if(this.recipes[i].name.toLowerCase().includes(userSearchValue.toLowerCase()))
            {
                yield this.recipes[i];
            }
            else if(this.recipes[i].description.toLowerCase().includes(userSearchValue.toLowerCase()))
            {
                yield this.recipes[i];
            }
            else
            {
                for (let j = 0; j < this.recipes[i].ingredients.length; j++)
                {
                    if(this.recipes[i].ingredients[j].name.toLowerCase().includes(userSearchValue.toLowerCase()))
                    {
                        yield this.recipes[i];
                    }
                }
            }
        }
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