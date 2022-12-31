

type CategoriesProps = {
	value: number;
	onClickCategory: (index: number) => void;
}

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

function Categories({ value, onClickCategory }: CategoriesProps): JSX.Element {






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
}


export default Categories;