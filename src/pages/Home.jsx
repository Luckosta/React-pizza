import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Categories from '../components/Categories/Categories';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import axios from 'axios';
import { selectFilter } from '../redux/selectFilter';




function Home() {


	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { categoryId, sortType } = useSelector(selectFilter);
	const dispathCategoryId = useDispatch();

	const onChangeCategory = (id) => {
		dispathCategoryId(setCategoryId(id))
	};


	const { searchValue } = useContext(SearchContext);

	const request = async () => {

		const category = categoryId !== 0 ? `category=${categoryId}` : '';
		const stortBy = sortType.sortProp.replace('-', '');
		const oreder = sortType.sortProp[0] === '-' ? 'desc' : 'asc';
		const search = searchValue ? `&search=${searchValue}` : '';

		const resp = await axios.get(`https://638c6f4dd2fc4a058a57acbe.mockapi.io/items?
		${category}
		&sortBy=${stortBy}
		&order=${oreder}
		${search}`)
			.then(res => {
				setItems(res.data);
				setIsLoading(false);
			})
			.catch(err => console.error(err));


	}


	useEffect(() => {
		setIsLoading(true);
		request();
		window.scrollTo(0, 0);
	}, [categoryId, sortType, searchValue]);


	return (
		<div className="container">
			<div className="content__top">
				<Categories value={categoryId} onClickCategory={onChangeCategory} />
				<Sort />
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