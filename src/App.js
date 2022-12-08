import Header from './components/Header/Header';
import './scss/app.scss';
import Home from './pages/Home';
import NotFound from './pages/NotFound';



function App() {





	return (
		<div className="wrapper">
			<Header />
			<div className="content">
			<NotFound />
				
			</div>
		</div>
	);
}

export default App;
