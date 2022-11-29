import Header from './components/Header/Header';
import Sort from './components/Sort/Sort';
import PizzaBlock from './components/PizzaBlock/PizzaBlock';
import Categories from './components/Categories/Categories'
import './scss/app.scss';
import pizzas from './assets/pizzas.json';



function App() {
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
						{pizzas.map((el) => (
							<PizzaBlock 
							key={el.id} 
							price={el.price} 
							title={el.title} 
							image ={el.imageUrl} 
							sizes ={el.sizes}
							types = {el.types}
							/>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
