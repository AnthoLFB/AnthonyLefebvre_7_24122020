/* Import des classes utilisées */
import DataRepository from "./data_repository.js";
import Recipe from "../entity/recipe.js";

//Cette classe permet de récupérer toutes les recettes du fichier json donné
class RecipesRepository extends DataRepository 
{
    findAll() 
    {
        //Retourne une promesse avec des objets recette dans un tableau "recipes".
        return this.getData()
            .then((data) => data.recipes.map((recipe) => new Recipe(
                recipe.id,
                recipe.name,
                recipe.servings,
                recipe.ingredients,
                recipe.time,
                recipe.description,
                recipe.appliance,
                recipe.ustensils
            )));
    }
}

export default RecipesRepository;
  