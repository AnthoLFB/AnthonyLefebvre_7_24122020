/* Import des classes utilisées */
import ResearchPlaceholderView from "./research_placeholder_view";
import RecipeView from "./recipe_view";
import TagsListView from "./tags_list_view";
import CompleteResearch from "../data_processing/complete_research";
import EventDispatcher from "../event_dispatcher/event_dispatcher";
import ResearchByTags from "../data_processing/research_by_tags";

class HomeView
{
    constructor(app)
    {
        this.app = app;
        this.recipes = this.app.recipes;
        this.recipeBeforeFilter = [];
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

            this.recipes = [];
            //Si les trois caractères sont pas tapés, on lance une recherche.
            const matchingRecipes = new CompleteResearch(this.researchInput.value, this.app.recipes).research();  

            //console.log(matchingRecipes.next());
            
            
            for (const recipe of matchingRecipes) {
                console.log(recipe);
                //this.recipes.push(recipe);
                //this.recipeBeforeFilter = this.recipes;
                //this.render();
            }

            if(this.recipes.length === 0)
            {
                this.recipes = [];
                this.render();
            }
        }
        else
        {
            //Si les trois caractères ne sont pas tapés, on affiche toutes les recettes.
            this.recipes = this.app.recipes;
            //this.recipeBeforeFilter = this.recipes;
            this.render();
        }
    }

    render()
    {
        /*if(this.recipeBeforeFilter.length == 0)
        {
            this.recipeBeforeFilter = this.app.recipes;
        }

        let recipesFilteredByTags = [];
        recipesFilteredByTags = new ResearchByTags(this.recipeBeforeFilter);
        this.recipes = recipesFilteredByTags.recipes;*/

        

        //Appel la vue et passe un tableau de recettes en paramètre
        new TagsListView(this.recipes, this.eventDispatcher);
        new RecipeView(this.recipes);
    }
}

export default HomeView;