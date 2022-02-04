import TagsListView from "../view/tags_list_view";

//Cette classe permet de trier les recettes selon l'entrée donnée par l'utilisateur
class CompleteResearch
{
    constructor(userSearchValue, recipes, selectedTags)
    {
        this.userSearchValue = userSearchValue;
        this.recipes = recipes;
        this.selectedTags = selectedTags;
    }

    *research()
    {
       yield this.recipes.filter((recipe) => this.filter(recipe, this.userSearchValue, this.selectedTags));
    }

    filter(recipe, userInput, selectedTags)
    {
        if(userInput != "")
        {
            if(recipe.name.toLowerCase().includes(userInput.toLowerCase()) || recipe.description.toLowerCase().includes(userInput.toLowerCase()) || recipe.ingredients.some((ingredient) => ingredient.name.toLowerCase().includes(userInput.toLowerCase()))) 
            {
                return true;
            }

            /*if(selectedTags.length > 0)
            {
                console.log("launch");

                if(recipe.ingredients.some((ingredient) => selectedTags.indexOf(ingredient.name.toLowerCase()) >= 0))
                {
                    console.log("match ingredient");
                    return true;
                }
                else if(recipe.ustensils.some((ustensil) => selectedTags.indexOf(ustensil.name.toLowerCase()) >= 0))
                {
                    console.log("match ustensil");
                    return true;
                }
                /*else if(recipe.appliance.some((device) => selectedTags.indexOf(device.name.toLowerCase()) >= 0))
                {
                    console.log("match appareil");
                    //return true;
                }

            } */           
        }
        /*else
        {
            //que les  tags
            if(recipe.ingredients.some((ingredient) => selectedTags.indexOf(ingredient.name.toLowerCase()) >= 0))
            {
                console.log("match ingredient");
                return true;
            }
            else if(recipe.ustensils.some((ustensil) => selectedTags.indexOf(ustensil.name.toLowerCase()) >= 0))
            {
                console.log("match ustensil");
                return true;
            }
        }  */   
    }
}

export default CompleteResearch