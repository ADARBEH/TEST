import { useState } from 'react';
import './App.css';
import spatula from './assets/trip.jpg';
import StripeContainer from './components/StripeContainer';

function App() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			
			{showItem ? (
				<StripeContainer />
			) : (
				<>
					<h3>$100.00</h3>
					<img src={spatula} alt='Spatula' className='img_trip'/>
					<button onClick={() => setShowItem(true)}>Pay The Trip</button>
				</>
			)}
		</div>
	);
}

export default App;
