/* Import des classes utilisées */
import ResearchPlaceholderView from "./resarch_placeholder_view";
import RecipeView from "./recipe_view";

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
    }
}

export default HomeView;