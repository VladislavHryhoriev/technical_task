import s from '@/components/content/recipes.module.css';
import useRecipesStore from '@/store/recipesStore';
import { useEffect } from 'react';
import { v4 } from 'uuid';
import Recipe from './recipe';

const Recipes = () => {
	const recipes = useRecipesStore((state) => state.recipes);
	const currentPage = useRecipesStore((state) => state.currentPage);
	const fetchRecipes = useRecipesStore((state) => state.fetchRecipes);

	useEffect(() => {
		fetchRecipes(currentPage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage]);

	return (
		<div className={s.recipes}>
			{recipes.map((item) => (
				<Recipe key={v4()} item={item} />
			))}
		</div>
	);
};

export default Recipes;
