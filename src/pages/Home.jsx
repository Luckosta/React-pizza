import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Categories from '../components/Categories/Categories';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../App';




function Home() {

	const { searchValue } = useContext(SearchContext);

	const request = async () => {

		const category = categoryId !== 0 ? `category=${categoryId}` : '';
		const stortBy = sortState.sortProp.replace('-', '');
		const oreder = sortState.sortProp[0] === '-' ? 'desc' : 'asc';
		const search = searchValue ? `&search=${searchValue}` : '';
		const loadingError = new Error('Loading Error!');

		const resp = await fetch(`https://638c6f4dd2fc4a058a57acbe.mockapi.io/items?
	${category}
	&sortBy=${stortBy}
	&order=${oreder}
	${search}`
		)
			.then(async res => {
				if (!res.ok) {
					throw loadingError;
				} else {
					setIsLoading(false);
				}
				return await res.json();
			})
			.then(array => setItems(array))

	}


	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [categoryId, setCategoryId] = useState(0);
	const [sortState, setSortState] = useState({
		name: 'популярности',
		sortProp: 'rating'
	});




	useEffect(() => {
		setIsLoading(true);
		request()
		window.scrollTo(0, 0);
	}, [categoryId, sortState, searchValue]);


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