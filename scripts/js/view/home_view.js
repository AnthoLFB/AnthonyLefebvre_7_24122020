/* Import des classes utilisées */
import ResearchPlaceholderView from "./research_placeholder_view";
import RecipeView from "./recipe_view";
import IngredientsTagsView from "./ingredients_tags_view";
import DevicesTagsView from "./devices_tags_view";
import UstensilsTagsView from "./ustensils_tags_view";

class HomeView
{
    constructor(app)
    {
        this.app = app;
        new ResearchPlaceholderView;
    }

    render()
    {
        //Appel la vue et passe un tableau de recettes en paramètre
        new RecipeView(this.app.recipes);
        new IngredientsTagsView(this.app.recipes);
        new DevicesTagsView(this.app.recipes);
        new UstensilsTagsView(this.app.recipes);
    }
}

export default HomeView;