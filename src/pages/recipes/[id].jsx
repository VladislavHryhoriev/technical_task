import Logo from '@/components/header/logo';
import Description from '@/components/placeholder/description';
import useRecipesStore from '@/store/recipesStore';
import s from '@/styles/id.module.css';
import Link from 'next/link';
import { FaAngleLeft } from 'react-icons/fa6';

const getRecipesList = useRecipesStore.getState().getRecipesList;
const recipesList = await getRecipesList();

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
		revalidate: 60,
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
