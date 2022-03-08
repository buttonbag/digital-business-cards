import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
	const [hero, setHero] = useState({
		name: 'Harry Potter',
		species: 'human',
		gender: 'male',
		house: 'Gryffindor',
		dateOfBirth: '31-07-1980',
		yearOfBirth: 1980,
		wizard: true,
		ancestry: 'half-blood',
		eyeColour: 'green',
		hairColour: 'black',
		patronus: 'stag',
		image: 'http://hp-api.herokuapp.com/images/harry.jpg',
		hogwartsStaff: true,
		hogwartsStudent: true,
	});

	const [allHeroes, setAllHeroes] = useState([]);

	useEffect(function () {
		console.log('effect ran');
		fetch('http://hp-api.herokuapp.com/api/characters')
			.then((res) => res.json())
			.then((data) => setAllHeroes(data));
	}, []);

	function newHero() {
		const randNum = Math.floor(Math.random() * allHeroes.length);
		const {
			name,
			species,
			gender,
			house,
			dateOfBirth,
			yearOfBirth,
			wizard,
			ancestry,
			eyeColour,
			hairColour,
			patronus,
			image,
			hogwartsStaff,
			hogwartsStudent,
		} = allHeroes[randNum];
		setHero((prevHero) => ({
			...prevHero,
			name: name,
			species: species,
			gender: gender,
			house: house,
			dateOfBirth: dateOfBirth,
			yearOfBirth: yearOfBirth,
			wizard: wizard,
			ancestry: ancestry,
			eyeColour: eyeColour,
			hairColour: hairColour,
			patronus: patronus,
			image: image
				? image
				: 'https://www.peacocktv.com/dam/growth/assets/seo/HarryPotter/OoP/hp-oop-og-min.png',
			hogwartsStaff: hogwartsStaff,
			hogwartsStudent: hogwartsStudent,
		}));
	}
	console.log(allHeroes);
	// useEffect(function () {
	// 	console.log('effect ran');
	// 	fetch(
	// 		'https://gateway.marvel.com:443/v1/public/events/238/characters?limit=100&apikey=2510a609a0195f2f69057f425a7f9609'
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => setAllHeroes(data.data.results));

	// 	window.addEventListener('onLoad', newHero);

	// 	return window.removeEventListener('onLoad', newHero);
	// }, []);

	// useEffect(function () {
	// 	fetch('https://swapi.dev/api/people/')
	// 		.then((res) => res.json())
	// 		.then((data) => setAllHeroes(data.results));
	// }, []);

	return (
		<main>
			<Header
				name={hero.name}
				image={hero.image}
				wizard={hero.wizard ? '✨' : ''}
				house={hero.house}
				hogwartsStaff={hero.hogwartsStaff ? '🎓' : ''}
				hogwartsStudent={hero.hogwartsStudent ? '👨‍🎓' : ''}
			/>
			<Content
				species={hero.species}
				gender={hero.gender}
				dateOfBirth={hero.dateOfBirth}
				yearOfBirth={hero.yearOfBirth}
				ancestry={hero.ancestry}
				eyeColour={hero.eyeColour}
				hairColour={hero.hairColour}
				patronus={hero.patronus}
			/>
			<button onClick={newHero}>Random Hero</button>
			<Footer wizard={hero.wizard ? '✨' : ''} house={hero.house} />
		</main>
	);
}

export default App;
