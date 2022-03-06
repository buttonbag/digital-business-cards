import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
	const [char, setChar] = useState({
		name: 'marvel',
		description: '',
		image: '',
	});

	const [allChars, setAllChars] = useState([]);
	useEffect(function () {
		console.log('effect ran');
		fetch(
			'https://gateway.marvel.com:443/v1/public/events/238/characters?limit=100&apikey=2510a609a0195f2f69057f425a7f9609'
		)
			.then((res) => res.json())
			.then((data) => setAllChars(data.data.results));
	}, []);
	// useEffect(function () {
	// 	fetch('https://swapi.dev/api/people/')
	// 		.then((res) => res.json())
	// 		.then((data) => setAllChars(data.results));
	// }, []);

	function newChar() {
		const randNum = Math.floor(Math.random() * allChars.length);
		const { name, description, thumbnail } = allChars[randNum];
		setChar((prevChar) => ({
			...prevChar,
			name: name,
			description: description,
			image: thumbnail.path,
		}));
		console.log(allChars);
	}

	return (
		<main>
			<Header name={char.name} image={char.image} />
			<Content description={char.description} />
			<button onClick={newChar}>New Character</button>
			<Footer />
		</main>
	);
}

export default App;
