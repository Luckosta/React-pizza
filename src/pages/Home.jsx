import Sort from '../components/Sort/Sort'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Categories from '../components/Categories/Categories';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { useEffect, useState } from 'react';



function Home(){

	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const loadingError = new Error('Loading Error!');


	useEffect(() => {
		fetch('https://638c6f4dd2fc4a058a57acbe.mockapi.io/items')
			.then(res => {
				if (!res.ok) {
					throw loadingError;
				} else {
					setIsLoading(false);
				}
				return res.json();
			})
			.then(array => setItems(array))

	}, []);


	return (
		<>
			<div className="container">
				<div className="content__top">
					<Categories />
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
		</>
	)
}


export default Home;