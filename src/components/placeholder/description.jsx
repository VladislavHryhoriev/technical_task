import Image from 'next/image';
import s from '@/components/placeholder/description.module.css';
import Textbox from './textbox';

const Description = ({ recipe }) => {
	return (
		<section>
			<div className='container'>
				<div className={s.inner}>
					<div className={s.imageBox}>
						<Image
							src={recipe.image_url}
							className={s.image}
							fill
							alt='recipe image'
						/>
					</div>
					<Textbox recipe={recipe} />
				</div>
			</div>
		</section>
	);
};

export default Description;
