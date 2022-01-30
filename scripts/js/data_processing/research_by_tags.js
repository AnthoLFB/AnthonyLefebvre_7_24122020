class ResearchByTags
{
    constructor(recipes)
    {
        this.recipes = recipes;
        this.filteredRecipes = [];
        this.checkSelectedTags();
    }

    checkSelectedTags()
    { 
        //S'il n'y a pas de recette, retourne un tableau vide sinon recupère les tags
        if(this.recipes.length == 0)
        {
            console.log("aucune recette")
            return this.recipes;
        }
        else
        {
            this.selectedIngredientTags = [];
            this.selectedDeviceTags = [];
            this.selectedUstensilTags = [];

            this.recipes.forEach(recipe => {

                recipe.ingredients.forEach(ingredient => {
                    if(ingredient.selected == true)
                    {
                        this.selectedIngredientTags.push(ingredient.name.toLowerCase());
                    }
                });

                if(recipe.appliance.selected == true)
                {
                    this.selectedDeviceTags.push(recipe.appliance.name.toLowerCase());
                }

                recipe.ustensils.forEach(ustensil => {
                    if(ustensil.selected == true)
                    {
                        this.selectedUstensilTags.push(ustensil.name.toLowerCase());
                    }
                });
            });

            //Si aucun tag n'est selectionné on retourne le tableau de base sinon on effectue un tri
            if(this.selectedIngredientTags.length == 0 && this.selectedDeviceTags.length == 0 && this.selectedUstensilTags.length == 0)
            {
                return this.recipes;
            }
            else
            {
                this.filterByTags();
            }
        }
    }

    filterByTags()
    {
        //Ingrédients
        for(let i = 0; i < this.selectedIngredientTags.length; i++)
        {         
            this.recipes.forEach(recipe => {
                for(let j = 0; j < recipe.ingredients.length; j++)
                {
                    if(recipe.ingredients[j].name.toLowerCase().includes(this.selectedIngredientTags[i]))
                    {
                        this.filteredRecipes.push(recipe);
                    }
                }
            });

            this.recipes = this.filteredRecipes;
            this.filteredRecipes = [];
        }

        //Ustensiles
        for(let i = 0; i < this.selectedUstensilTags.length; i++)
        {         
            this.recipes.forEach(recipe => {
                for(let j = 0; j < recipe.ustensils.length; j++)
                {
                    if(recipe.ustensils[j].name.toLowerCase().includes(this.selectedUstensilTags[i]))
                    {
                        this.filteredRecipes.push(recipe);
                    }
                }
            });

            this.recipes = this.filteredRecipes;
            this.filteredRecipes = [];
        }

        //Appareils
        for(let i = 0; i < this.selectedDeviceTags.length; i++)
        {         
            this.recipes.forEach(recipe => {
               
                if(recipe.appliance.name.toLowerCase().includes(this.selectedDeviceTags[i]))
                {
                    this.filteredRecipes.push(recipe);
                }
            });

            this.recipes = this.filteredRecipes;
            this.filteredRecipes = [];
        }

        return this.recipes;
    }
}

export default ResearchByTags;