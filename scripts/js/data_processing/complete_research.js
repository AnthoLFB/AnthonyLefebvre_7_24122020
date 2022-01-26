//Cette classe permet de trier les recettes selon l'entrée donnée par l'utilisateur
class CompleteResearch
{
    constructor(userSearchValue, recipes)
    {
        this.userSearchValue = userSearchValue;
        this.recipes = recipes
    }

    research()
    {
        console.log("Filtrer les recettes en fonction de la recherche de l'utilisateur : " + this.userSearchValue);
    }
}

export default CompleteResearch