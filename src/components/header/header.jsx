import s from '@/components/header/header.module.css';
import Logo from './logo';
import Menu from './menu';

const Header = () => {
	return (
		<header className={s.header}>
			<div className='container'>
				<div className={s.inner}>
					<Logo />
					<Menu />
				</div>
			</div>
		</header>
	);
};

export default Header;
