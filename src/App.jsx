import { AppRouter } from './routes';
import { Header } from './components';
import { Providers } from './context/providers';

const App = () => {
	return (
		<Providers>
			<div className='App'>
				<Header />
				<AppRouter />
			</div>
		</Providers>
	);
};

export default App;
