/* Import des classes utilisées */
import ResearchPlaceholderView from "./research_placeholder_view";
import RecipeView from "./recipe_view";
import IngredientsTagsView from "./ingredients_tags_view";
import DevicesTagsView from "./devices_tags_view";
import UstensilsTagsView from "./ustensils_tags_view";
import CompleteResearch from "../data_processing/complete_research";

class HomeView
{
    constructor(app)
    {
        this.app = app;
        this.recipes = this.app.recipes;
        new ResearchPlaceholderView;

        this.researchInput = document.getElementById("completeSearch");
        this.researchInput.addEventListener("keyup", this.launchResearch.bind(this));
    }

    launchResearch(e)
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
        //Appel la vue et passe un tableau de recettes en paramètre
        new IngredientsTagsView(this.recipes);
        new DevicesTagsView(this.recipes);
        new UstensilsTagsView(this.recipes);
        new RecipeView(this.recipes);
    }
}

export default HomeView;