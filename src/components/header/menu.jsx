import s from '@/components/header/menu.module.css';
import useRecipesStore from '@/store/recipesStore';
import { FaAngleLeft, FaAngleRight, FaTrash } from 'react-icons/fa6';

const Menu = () => {
	const [selectedRecipes, removeSelectedRecipes, setPage, currentPage] =
		useRecipesStore((state) => [
			state.selectedRecipes,
			state.removeSelectedRecipes,
			state.setPage,
			state.currentPage,
		]);

	return (
		<nav className={s.menu}>
			<h2>Selected Recipes: {selectedRecipes.length}</h2>
			<h2>Current Page: {currentPage}</h2>
			<button
				onClick={removeSelectedRecipes}
				disabled={!selectedRecipes.length}
				className={`${s.togglePage} ${s.delete}`}>
				<FaTrash />
			</button>
			<button
				className={s.togglePage}
				onClick={() => setPage('prev')}
				disabled={currentPage > 1 ? false : true}>
				<FaAngleLeft />
			</button>
			<button
				className={s.togglePage}
				onClick={() => setPage('next')}
				disabled={currentPage < 15 ? false : true}>
				<FaAngleRight />
			</button>
		</nav>
	);
};

export default Menu;
