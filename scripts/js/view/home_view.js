class HomeView
{
    constructor(app)
    {
        this.app = app;
    }

    render()
    {
        //Appel la vue et passe un tableau de recettes en paramètre
        new RecipeView(this.app.recipes);
    }
}