import useRecipesStore from '@/store/recipesStore';

const getRecipes = async () => {
	const fetchRecipes = useRecipesStore.getState().fetchRecipes;
	let currentPage = 1;
	let allRecipes = [];

	while (true) {
		const recipes = await fetchRecipes(currentPage);
		if (recipes.length === 0) break;

		allRecipes = allRecipes.concat(recipes);
		currentPage++;
	}

	return allRecipes;
};

export default getRecipes;
