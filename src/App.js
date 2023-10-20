import Form from './Components/Form';
import  Logo  from './Components/Logo';
import  PackingList  from './Components/PackingList';
import Stats from './Components/Stats';
import './index.css';

export default function App() {
	return (
		<div className='app'>
			<Logo />
			<Form />
			<PackingList />
			<Stats />
		</div>
	);
}
