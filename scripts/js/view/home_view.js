/* Import des classes utilisées */
import ResearchPlaceholderView from "./research_placeholder_view";
import RecipeView from "./recipe_view";
import IngredientsListView from "./ingredients_list_view";
import DevicesListView from "./devices_list_view";
import UstensilsListView from "./ustensils_list_view";
import CompleteResearch from "../data_processing/complete_research";
import EventDispatcher from "../event_dispatcher/event_dispatcher";

class HomeView
{
    constructor(app)
    {
        this.app = app;
        this.recipes = this.app.recipes;
        new ResearchPlaceholderView;

        this.eventDispatcher = new EventDispatcher();
        this.eventDispatcher.register('tagSelected');
        this.eventDispatcher.addEventListener('tagSelected', this.render.bind(this));

        this.researchInput = document.getElementById("completeSearch");
        this.researchInput.addEventListener("keyup", this.launchResearch.bind(this));
    }

    launchResearch()
    {
        let numberOfCharacters = this.researchInput.value.length;
                
        if (numberOfCharacters >= 3)
        {
            //Si les trois caractères sont pas tapés, on lance une recherche.
            let filteredRecipes = new CompleteResearch(this.researchInput.value, this.app.recipes).research();
            this.recipes = filteredRecipes
            this.render();
        }
        else
        {
            //Si les trois caractères ne sont pas tapés, on affiche toutes les recettes.
            this.recipes = this.app.recipes;
            this.render();
        }
    }

    render()
    {
        let selectedTags = [];

        this.recipes.forEach(recipe => {

            recipe.ingredients.forEach(ingredient => {
                if(ingredient.selected == true)
                {
                    selectedTags.push(ingredient);
                }
            });

            if(recipe.appliance.selected == true)
            {
                selectedTags.push(recipe.appliance);
            }

            recipe.ustensils.forEach(ustensil => {
                if(ustensil.selected == true)
                {
                    selectedTags.push(ustensil);
                }
            });
        });

        console.log(selectedTags);

        if(selectedTags.length === 0 && this.researchInput.value.length < 3)
        {
            this.recipes = this.app.recipes
        }
        else if(selectedTags.length === 0 && this.researchInput.value.length >= 3)
        {  
            this.recipes = this.recipes;
        }
        else
        {
            this.recipes = this.recipes.filter((recipe) => selectedTags.filter((tag) => recipe.ingredients.includes(tag)).length > 0);
            //console.log(test);
        }
        

        //Appel la vue et passe un tableau de recettes en paramètre
        new IngredientsListView(this.recipes, this.eventDispatcher);
        new DevicesListView(this.recipes, this.eventDispatcher);
        new UstensilsListView(this.recipes, this.eventDispatcher);
        new RecipeView(this.recipes);
    }
}

export default HomeView;