import Header from './components/Header/Header'
import Sort from './components/Sort/Sort'
import Categories from './components/Categories/Categories'
import PizzaBlock from './components/PizzaBlock/PizzaBlock'
import './scss/app.scss';

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
						<PizzaBlock title = 'Мексиканская' price = '500'/>
						<PizzaBlock title = 'Маргарита ' price = '450'/>
						<PizzaBlock title = 'Цезарь' price = '300'/>
						<PizzaBlock title = 'Чизбургер-пицца' price = '500'/>
						<PizzaBlock title = 'Пеперони' price = '325'/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
