import { memo } from 'react';
import { CategoriesProps } from './Categories.type';



const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories = memo(function Categories({ value, onClickCategory }: CategoriesProps): JSX.Element {


	return (
		<div className="categories">
			<ul>
				{categories.map((el, index) => {
					return <li
						key={index}
						onClick={() => onClickCategory(index)}
						className={value === index ? "active" : ""}
					>
						{el}
					</li>
				})}
			</ul>
		</div>
	);
})


export default Categories;