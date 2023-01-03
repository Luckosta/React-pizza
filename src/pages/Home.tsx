import Sort from '../components/Sort/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Categories from '../components/Categories/Categories';
import Skeleton from '../components/PizzaBlock/Skeleton';
import {  useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectFilter, selectSearсh, setCategoryId } from '../redux/slices/filterSlice';
import { requestForPizzas, selectPizzas, Status } from '../redux/slices/pizzasSlice';
import { useAppDispatch } from '../redux/store';




function Home(): JSX.Element {


	const { categoryId, sortType } = useSelector(selectFilter);
	const { items, status } = useSelector(selectPizzas);
	const searchValue = useSelector(selectSearсh)
	const dispath = useAppDispatch();

	const onChangeCategory = (index:number):void => {
		dispath(setCategoryId(index))
	};

	const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
	const pizzas = items.map((el:any) => <PizzaBlock key={el.id} {...el} />);

	

	const request = () => {
		const category = categoryId !== 0 ? `category=${categoryId}` : '';
		const stortBy = sortType.sortProp.replace('-', '');
		const order = sortType.sortProp[0] === '-' ? 'desc' : 'asc';
		const search = searchValue ? `&search=${searchValue}` : '';

		dispath(
			requestForPizzas({
			category,
			stortBy,
			order,
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
				<Categories 
				value={categoryId} 
				onClickCategory={onChangeCategory} />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			{
				status === Status.ERROR
					? <div>
						<h2>Что-то пошло не так.....</h2>
						<p>Попробуйте перезагрузить страницу или вернитесь к нам позже</p>
					</div>
					: <div className="content__items">
						{
							status === Status.LOADING
								? skeletons
								: pizzas
						}
					</div>}
		</div>
	)
}


export default Home;