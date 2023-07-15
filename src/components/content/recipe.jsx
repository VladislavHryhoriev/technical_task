import s from '@/components/content/recipe.module.css';
import useRecipesStore from '@/store/recipesStore';
import Image from 'next/image';
import Link from 'next/link';
import { v4 } from 'uuid';

const Recipe = ({ item }) => {
	const [selectRecipe, selectedRecipes] = useRecipesStore((state) => [
		state.selectRecipe,
		state.selectedRecipes,
	]);

	const isSelected = selectedRecipes.includes(item.id);
	const recipeClassName = `${s.recipe} ${isSelected ? s.selected : ''}`;

	const handleRightClick = (e) => {
		e.preventDefault();
		selectRecipe(item.id);
	};

	return (
		<>
			<Link
				href={`/recipes/${item.id}`}
				className={recipeClassName}
				key={v4()}
				onContextMenu={handleRightClick}>
				<div className={s.imageBox}>
					<Image
						src={item.image_url || '/null.png'}
						className={s.image}
						fill
						alt='recipe image'
					/>
				</div>
				<h3 className={s.title}>{item.name}</h3>
			</Link>
		</>
	);
};

export default Recipe;
