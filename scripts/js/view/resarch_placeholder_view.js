class ResearchPlaceholderView
{
    constructor()
    {
        //Champ ingrédient
        let searchByIngredientInput = document.getElementById('searchByIngredient');
        searchByIngredientInput.addEventListener("mouseover", () => {this.renamePlaceholder(searchByIngredientInput, "Rechercher un ingrédient")});
        searchByIngredientInput.addEventListener("mouseout", () => {this.renamePlaceholder(searchByIngredientInput, "Ingrédients")});
        
               
        //Champ Appareil
        let searchByDeviceInput = document.getElementById('searchByDevice');
        searchByDeviceInput.addEventListener("mouseover", () => {this.renamePlaceholder(searchByDeviceInput, "Rechercher un appareil")});
        searchByDeviceInput.addEventListener("mouseout", () => {this.renamePlaceholder(searchByDeviceInput, "Appareils")});
        
        //Champ Ustensiles
        let searchByUtensilsInput = document.getElementById('searchByUtensils');
        searchByUtensilsInput.addEventListener("mouseover", () => {this.renamePlaceholder(searchByUtensilsInput, "Rechercher un ustensile")});
        searchByUtensilsInput.addEventListener("mouseout", () => {this.renamePlaceholder(searchByUtensilsInput, "Ustensiles")});
    }
    
    renamePlaceholder(input, message)
    {
        input.setAttribute('placeholder', message);
    };
}

new ResearchPlaceholderView;
