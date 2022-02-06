class ResearchPlaceholderView
{
    constructor()
    {
        //Champ ingrédient
        let searchByIngredientInput = document.getElementById('searchByIngredient');
        searchByIngredientInput.addEventListener("mouseover", () => {this.renamePlaceholder(searchByIngredientInput, "Rechercher un ingrédient")});
        searchByIngredientInput.addEventListener("mouseout", () => {this.renamePlaceholder(searchByIngredientInput, "Ingrédients")});
        searchByIngredientInput.addEventListener("keyup", () => {this.researchElement( "ingredientsList", searchByIngredientInput)});
        
               
        //Champ Appareil
        let searchByDeviceInput = document.getElementById('searchByDevice');
        searchByDeviceInput.addEventListener("mouseover", () => {this.renamePlaceholder(searchByDeviceInput, "Rechercher un appareil")});
        searchByDeviceInput.addEventListener("mouseout", () => {this.renamePlaceholder(searchByDeviceInput, "Appareils")});
        searchByDeviceInput.addEventListener("keyup", () => {this.researchElement( "devicesList", searchByDeviceInput)});
        
        //Champ Ustensiles
        let searchByUtensilsInput = document.getElementById('searchByUtensils');
        searchByUtensilsInput.addEventListener("mouseover", () => {this.renamePlaceholder(searchByUtensilsInput, "Rechercher un ustensile")});
        searchByUtensilsInput.addEventListener("mouseout", () => {this.renamePlaceholder(searchByUtensilsInput, "Ustensiles")});
        searchByUtensilsInput.addEventListener("keyup", () => {this.researchElement( "ustensilsList", searchByUtensilsInput)});
    }
    
    renamePlaceholder(input, message)
    {
        input.setAttribute('placeholder', message);
    };

    researchElement(listName, userResearch)
    {
        let numberOfCharacters = userResearch.value.length;

        let list = document.getElementById(listName);
        let elt = list.getElementsByTagName("li");
                
        if (numberOfCharacters >= 1)
        {
            for (const tagName of elt)
            {
                if(!tagName.textContent.toLocaleLowerCase().includes(userResearch.value.toLocaleLowerCase()))
                {
                    tagName.style.display = 'none';
                }
                else
                {
                    tagName.style.display = 'block';
                }
            }
        }
        else if(numberOfCharacters == 0)
        {
            for (const tagName of elt)
            {
                tagName.style.display = 'block';
            }
        }
    }
}

export default ResearchPlaceholderView;
