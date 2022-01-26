class ResearchByTags
{
    constructor(recipes)
    {
        this.recipes = recipes;
        this.test();
    }

    test()
    {
        this.recipes.forEach(recipe => {
            console.log(recipe);
        });
    }
}

export default ResearchByTags;