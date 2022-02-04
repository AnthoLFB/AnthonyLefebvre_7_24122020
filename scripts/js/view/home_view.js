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
        this.selectedTags = [];
        new ResearchPlaceholderView;

        this.eventDispatcher = new EventDispatcher();
        this.eventDispatcher.register('tagSelected');
        this.eventDispatcher.addEventListener('tagSelected', this.render.bind(this));
        //this.eventDispatcher.addEventListener('tagSelected', this.updateSelectedTags.bind(this));

        this.researchInput = document.getElementById("completeSearch");
        this.researchInput.addEventListener("keyup", this.launchResearch.bind(this));
    }

    /*updateSelectedTags()
    {   
        this.selectedTags = [];     

        this.recipes.forEach(recipe => {

            recipe.ingredients.forEach(ingredient => {
                if(ingredient.selected == true)
                {
                    this.selectedTags.push(ingredient.name.toLowerCase());
                }
            });

            if(recipe.appliance.selected == true)
            {
                this.selectedTags.push(recipe.appliance.name.toLowerCase());
            }

            recipe.ustensils.forEach(ustensil => {
                if(ustensil.selected == true)
                {
                    this.selectedTags.push(ustensil.name.toLowerCase());
                }
            });
        });
    }*/

    launchResearch()
    {
        let numberOfCharacters = this.researchInput.value.length;
                
        if (numberOfCharacters >= 3)
        {

            this.recipes42 = [];
            console.log(this.recipes42);

            //Si les trois caractères sont pas tapés, on lance une recherche.
            const matchingRecipes = new CompleteResearch(this.researchInput.value, this.app.recipes).research();
 
           for (const recipes of matchingRecipes)
           {
                let test = new Array;
                for (const testee of recipes) 
                {
                   
                    test.push(testee);
                    console.log(test);
                }
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