import s from '@/components/header/logo.module.css';
import Image from 'next/image';

const Logo = () => {
	return (
		<div className={s.logo}>
			<Image
				className={s.image}
				src={'/beer-logo.png'}
				width={50}
				height={50}
				alt='recipe image'
			/>
			<h1 className={s.title}>Beer Recipes</h1>
		</div>
	);
};

export default Logo;
