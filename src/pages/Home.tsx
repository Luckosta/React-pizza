import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Categories from '../components/Categories/Categories';
import Skeleton from '../components/PizzaBlock/Skeleton';
import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectSearсh, setCategoryId } from '../redux/slices/filterSlice';
import { requestForPizzas, selectPizzas } from '../redux/slices/pizzasSlice';




function Home(): JSX.Element {


	const { categoryId, sortType } = useSelector(selectFilter);
	const { items, status } = useSelector(selectPizzas);
	const searchValue = useSelector(selectSearсh)
	const dispath = useDispatch();
	const onChangeCategory = (id:number) => {
		dispath(setCategoryId(id))
	};
	const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
	const pizzas = items.map((el:any) => <PizzaBlock key={el.id} {...el} />);

	//const { searchValue } = useContext(SearchContext);

	const request = () => {
		const category = categoryId !== 0 ? `category=${categoryId}` : '';
		const stortBy = sortType.sortProp.replace('-', '');
		const oreder = sortType.sortProp[0] === '-' ? 'desc' : 'asc';
		const search = searchValue ? `&search=${searchValue}` : '';

		dispath(
			// @ts-ignore
			requestForPizzas({
			category,
			stortBy,
			oreder,
			search
		}));

	};


	useEffect(() => {
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
			{
				status === 'error'
					? <div>
						<h2>Что-то пошло не так.....</h2>
						<p>Попробуйте перезагрузить страницу или вернитесь к нам позже</p>
					</div>
					: <div className="content__items">
						{
							status === 'loading'
								? skeletons
								: pizzas
						}
					</div>}
		</div>
	)
}


export default Home;