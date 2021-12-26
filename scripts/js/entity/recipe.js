//Classe permettant de créer des objet de type recettes
class Recipe
{
    constructor(id, name, serving, ingredients, time, description, appliance, ustensils)
    {
        this.id = id;
        this.name = name;
        this.serving = serving;
        this.ingredients = ingredients; //Tableau d'objets ingredient
        this.time = time;
        this.description = description; 
        this.appliance = appliance;
        this.ustensils = ustensils; //Tableau d'objets ustensils
    }
}