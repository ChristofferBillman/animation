import { useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import AnimatedCard from './components/AnimatedCard';
import anime from 'animejs/lib/anime.es.js';

function App() {

	// Animejs
	useEffect(() => {
		document.getElementById("anime1").addEventListener('click', () =>{
			anime({
				targets: '#anime1',
				scale: 1.1,
				backgroundColor: '#7fff00',
				duration: 800,
				direction: 'alternate'
			})
		});
	}, []);

	return (
		<div className="App">
			<div>
				<h1>Animationer på webben</h1>
				<h3>Laboration 3 - Teknikutvärding</h3>
				<br/>
				<div className="cardContainer">

					<Card cardTitle="CSS - Hovra mig" className="hoverAnimation"/>

					<Card cardTitle="CSS - Rotation" className="rotateAnimation"/>

					<Card cardTitle=" CSS - Rotation, sen färgändring" className="rotateThenColorAnimation"/>

					<Card cardTitle="Animejs - Klicka mig" id="anime1"/>

					<AnimatedCard cardTitle="Framer Motion - Hovra mig"/>
				</div>
			</div>
		</div>
	);
}

export default App;
