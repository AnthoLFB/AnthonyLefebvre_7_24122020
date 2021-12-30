class ResearchPlaceholderView
{
    constructor()
    {
        //Champ ingrédient
        let searchByIngredientInput = document.getElementById('searchByIngredient');
        searchByIngredientInput.addEventListener("mouseover", this.renamePlaceholder);
        //searchByIngredientInput.addEventListener("mouseover", this.renamePlaceholder(searchByIngredientInput, "mon message"));
        //searchByIngredientInput.addEventListener("mouseout", this.defaultPlaceholder(searchByIngredientInput, "message par default"));
        
        //Champ Appareil
        //let searchByDeviceInput = document.getElementById('searchByDevice');
        
        //Champ Ustensiles
       // let searchByUtensilsInput = document.getElementById('searchByUtensils');
    }
    

    renamePlaceholder()
    {
        console.log("test");
        //input.setAttribute('placeholder',message);
    };

    defaultPlaceholder(input, message) 
    {
        input.setAttribute('placeholder', message);
    };
}

new ResearchPlaceholderView;
