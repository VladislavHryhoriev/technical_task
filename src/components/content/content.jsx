import s from '@/components/content/content.module.css';
import Recipes from './recipes';

const Content = () => {
	return (
		<main className={s.content}>
			<div className='container'>
				<div className={s.inner}>
					<Recipes />
				</div>
			</div>
		</main>
	);
};

export default Content;
