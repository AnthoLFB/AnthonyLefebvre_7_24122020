/* Import des classes utilisées */
import RecipesRepository from "./data_processing/recipes_repository";
import Ingredient from "./entity/ingredient";
import Ustensil from "./entity/ustensil";
import HomeView from "./view/home_view";

//Classe permettant d'initialiser la vue et le js necessaire
class App
{
    constructor()
    {
        //Contiendra les recettes
        this.recipes = [];

        //Contiendra la vue à appeler
        this.view = null;
    }

    init()
    {
        /* --- Récupération des recettes --- */
        const recipesRepository = new RecipesRepository("recipes.json");

        recipesRepository.findAll()
        .then((recipes) => {
            
            this.recipes = recipes;

            //Création des objets de type ingredient & ustensil
            this.recipes.forEach(recipe => {
                
                let ingredients = [];
                let ustensils = [];
                
                recipe.ingredients.forEach(ingredient => {
                    ingredients.push(new Ingredient(ingredient.ingredient, ingredient.quantity, ingredient.unit));   
                })

                recipe.ustensils.forEach(ustensil => {
                    ustensils.push(new Ustensil(ustensil));
                })

                recipe.ingredients = ingredients;
                recipe.ustensils = ustensils;
            });
        })
        .then(() => {
            this.view = new HomeView(this);
        })
        .then(() => {
            this.view.render();
        });
    }
}

(new App()).init();