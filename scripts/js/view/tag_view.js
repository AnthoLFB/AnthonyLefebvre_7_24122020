class TagView
{
    constructor(object, eventDispatcher)
    {
        this.object = object;

        this.eventDispatcher = eventDispatcher;

        this.createTag();
    }

    createTag()
    {
        //console.log(this.ingredient);

        // Création du lien
        this.element = document.createElement("a");

        // Ajout d'une classe
        this.element.classList.add("main__nav__dropdown__list__item__link");

        //Accessibilité
        this.element.setAttribute("aria-label", "Permet d'afficher les recettes contenant l'ingrédient suivant : " + this.object.name + ".");

        // Création du nom du lien
        let htmlLinkName = document.createTextNode(this.object.name[0].toUpperCase() + this.object.name.slice(1));

        // Ajout du texte
        this.element.appendChild(htmlLinkName);

        // Cible du lien (redirection)
        this.element.href = "#";

        //Création de l'event
        this.registerEvent();
    }

    registerEvent()
    {
        this.element.addEventListener("click", this.selectedTag.bind(this));
    }

    selectedTag()
    {
        if(this.object.selected == true)
        {
            alert("Vous avez déjà selectionné ce tag.");
        }
        else
        {
            this.object.selected = true;
            this.render();
            this.eventDispatcher.dispatch('tagSelected', [])
        }
    }

    unselectedTag()
    {
        this.object.selected = false;
        this.render();
        this.eventDispatcher.dispatch('tagSelected', [])
    }

    render()
    {
        if(this.object.selected)
        {
            this.addToSelectedTagsList();
        } 
        else
        {
            this.removeToSelectedTagsList();
        }
    }

    addToSelectedTagsList()
    {
        let objectType = this.object.constructor.name;

        //Selection du conteneur
        let container = document.getElementById("selectedTags");

        //Création du li contenant le tag selectionné
        this.listItem = document.createElement("li");

        //Ajout d'une classe
        this.listItem.classList.add("main__selected-tags__list__item");

        //Selon le type de l'objet la couleur du tag sera différente

        switch (objectType) 
        {
            case 'Device':
                this.listItem.classList.add("main__selected-tags__list__item--green");
                break;
            case 'Ustensil':
                this.listItem.classList.add("main__selected-tags__list__item--red");
                // expected output: "Mangoes and papayas are $2.79 a pound."
                break;
            default:
                this.listItem.classList.add("main__selected-tags__list__item--blue");
        }

        //Ajout de l'item à la liste
        container.appendChild(this.listItem);

        //Création du texte
        let tagTitle = document.createElement("p");

        //Ajout du contenu
        tagTitle.innerHTML = this.object.name[0].toUpperCase() + this.object.name.slice(1);

        //Ajout du texte à la liste
        this.listItem.appendChild(tagTitle);

        //création de la croix
        let cross = document.createElement("span");

        cross.classList.add("main__selected-tags__list__item__cross", "far", "fa-times-circle");

        cross.addEventListener("click", this.unselectedTag.bind(this));

        this.listItem.appendChild(cross);
    }

    removeToSelectedTagsList()
    {
        //Selection du conteneur
        let container = document.getElementById("selectedTags");

        //Suppression du li
        container.removeChild(this.listItem);
    }
}

export default TagView;