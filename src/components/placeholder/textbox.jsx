import s from '@/components/placeholder/textbox.module.css';

const Textbox = ({ recipe }) => {
	return (
		<div className={s.textbox}>
			<h2 className={s.name}>Beer Name: {recipe.name}</h2>
			<p className={s.text}>
				Tagline: <span className={s.span}>{recipe.tagline}</span>
				<br />
				First brewed: <span className={s.span}>{recipe.first_brewed}</span>
				<br />
				Attenuation level:{' '}
				<span className={s.span}>{recipe.attenuation_level}</span>
				<br />
				Volume:{' '}
				<span className={s.span}>
					{recipe.volume.value} {recipe.volume.unit}
				</span>
			</p>
			<p className={s.text}>Ingredients:</p>
			<ul>
				<li>
					Malt -{' '}
					<span className={s.span}>
						{recipe.ingredients.malt.map((item) => [item.name, ', '])}
					</span>
				</li>
				<li>
					Hops -{' '}
					<span className={s.span}>
						{recipe.ingredients.hops.map((item) => [item.name, ', '])}
					</span>
				</li>
				<p className={s.text}>
					Food pairing:{' '}
					<span className={s.span}>
						{recipe.food_pairing.map((item) => [item, ', '])}
					</span>
				</p>
				<p className={s.text}>
					Brewers tips: <span className={s.span}>{recipe.brewers_tips}</span>
				</p>
			</ul>
		</div>
	);
};

export default Textbox;
