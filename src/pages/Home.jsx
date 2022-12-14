import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Categories from '../components/Categories/Categories';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { useEffect, useState } from 'react';



function Home() {


	

	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [categoryId, setCategoryId] = useState(0);
	const [sortState, setSortState] = useState({
		name: 'популярности',
		sortProp: 'rating'
	});

	const loadingError = new Error('Loading Error!');


	useEffect(() => {
		setIsLoading(true)
		fetch(`https://638c6f4dd2fc4a058a57acbe.mockapi.io/items?
		${categoryId !== 0 ? `category=${categoryId}`: ''}
		&sortBy=${sortState.sortProp.replace('-', '')}
		&order=${sortState.sortProp[0] === '-'? 'desc' : 'asc'}`)
			.then(res => {
				if (!res.ok) {
					throw loadingError;
				} else {
					setIsLoading(false);
				}
				return res.json();
			})
			.then(array => setItems(array))

		window.scrollTo(0, 0);
	}, [categoryId, sortState]);


	return (
		<div className="container">
			<div className="content__top">
				<Categories value={categoryId} onClickCategory={setCategoryId} />
				<Sort activeItem={sortState} choseItem={setSortState} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">

				{
					isLoading
						? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
						: items.map(el => <PizzaBlock
							key={el.id
							}
							{...el}
						/>)
				}

			</div>
		</div>
	)
}


export default Home;