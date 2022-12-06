import Header from './components/Header/Header';
import Sort from './components/Sort/Sort';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import Categories from './components/Categories/Categories'
import './scss/app.scss';
import { useState, useEffect } from 'react';





function App() {

	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('https://638c6f4dd2fc4a058a57acbe.mockapi.io/items')
			.then(res => res.json())
			.then(array => setItems(array))

	}, []);




	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Categories />
						<Sort />
					</div>
					<h2 className="content__title">Все пиццы</h2>
					<div className="content__items">
						{items.map((el) => (
							<PizzaBlock
								key={el.id}
								{...el}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
