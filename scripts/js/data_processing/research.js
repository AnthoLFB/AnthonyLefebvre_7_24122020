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