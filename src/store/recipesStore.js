import { create } from 'zustand';

const useRecipesStore = create((set) => ({
	recipes: [],
	selectedRecipes: [],
	currentPage: 1,
	totalRemovedRecipes: 0,

	setPage: (page) => {
		const fetchRecipes = useRecipesStore.getState().fetchRecipes;
		const currentPage = useRecipesStore.getState().currentPage;

		if (page === 'prev') {
			new Promise(() => {
				set((state) => ({ currentPage: state.currentPage - 1 }));
			}).finally(() => fetchRecipes(currentPage));
		}

		if (page === 'next') {
			new Promise(() => {
				set((state) => ({ currentPage: state.currentPage + 1 }));
			}).finally(() => fetchRecipes(currentPage));
		}
	},

	removeSelectedRecipes: async () => {
		const selectedLength = useRecipesStore.getState().selectedRecipes.length;
		const currentPage = useRecipesStore.getState().currentPage;
		const totalRemovedRecipes = useRecipesStore.getState().totalRemovedRecipes;

		set((state) => ({
			totalRemovedRecipes:
				state.totalRemovedRecipes + state.selectedRecipes.length,
		}));

		try {
			const response = await fetch(
				`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${
					15 + selectedLength + totalRemovedRecipes
				}`
			);

			const data = await response
				.json()
				.then((data) => data.slice(-selectedLength));

			set((state) => {
				const updatedRecipes = state.recipes.filter(
					(recipe) => !state.selectedRecipes.includes(recipe.id)
				);

				return { recipes: [...updatedRecipes, ...data], selectedRecipes: [] };
			});
		} catch (error) {
			console.log('removeSelectedRecipes Error');
		}
	},

	selectRecipe: (item) => {
		set((state) => {
			if (state.selectedRecipes.includes(item)) {
				const updatedRecipes = state.selectedRecipes.filter(
					(recipe) => recipe !== item
				);

				return { selectedRecipes: updatedRecipes };
			} else {
				return { selectedRecipes: [...state.selectedRecipes, item] };
			}
		});
	},

	fetchRecipes: async (page) => {
		try {
			const response = await fetch(
				`https://api.punkapi.com/v2/beers?page=${page}&per_page=15`
			);
			const data = await response.json();

			set({ recipes: data });

			// return data for dynamic paths
			return data;
		} catch (error) {
			console.log('fetchRecipes Error');
		}
	},
}));

export default useRecipesStore;
