import './App.css';

export default function App() {
  return (
    <>
      <h1>React App</h1>
      <p>Hello world</p>
    </>
  );
}

const Logo = () => (
	<h1>🌴 FAR AWAY 👜</h1>
);


const Form = () => {
	return (
		<div className='add-form'>
			<h3>What do you need for your 😍 trip</h3>
		</div>
	);
};

const PackingList = () => (
	<div className='list'>LIST</div>
);

const Stats = () => (
	<footer>
		<em>
			👜 You have X items on your list and you have already packed X (X%)
		</em>
	</footer>

);

