import Logo from '@/components/header/logo';
import Description from '@/components/placeholder/description';
import useRecipesStore from '@/store/recipesStore';
import s from '@/styles/id.module.css';
import Link from 'next/link';
import { FaAngleLeft } from 'react-icons/fa6';

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

const recipesList = await getRecipes();

export async function getStaticPaths() {
	const paths = recipesList.map((recipe) => ({
		params: { id: recipe.id.toString() },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const recipe = recipesList.find(
		(recipe) => recipe.id.toString() === params.id
	);

	return {
		props: {
			recipe,
		},
	};
}

const Details = ({ recipe }) => {
	return (
		<>
			<header className={s.header}>
				<div className='container'>
					<div className={s.inner}>
						<Logo />
						<Link href={'/'} className={s.back}>
							<FaAngleLeft />
							Back
						</Link>
					</div>
				</div>
			</header>
			<Description recipe={recipe} />
		</>
	);
};

export default Details;
