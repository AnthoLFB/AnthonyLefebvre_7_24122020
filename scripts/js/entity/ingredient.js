//Classe permettant de créer des objets de type ingredient
class Ingredient
{
    constructor(name, quantity, unit)
    {
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.selected = false;
    }
}

export default Ingredient;