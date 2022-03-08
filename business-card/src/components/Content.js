import React from 'react';

function Content(props) {
	return (
		<div className="content">
			<article>
				<h2>Description</h2>
				<ul>
					{props.species && <li>species: {props.species}</li>}
					{props.gender && <li>gender: {props.gender}</li>}
					{props.house && <li>house: {props.house}</li>}
					{props.dateOfBirth && <li>dateOfBirth: {props.dateOfBirth}</li>}
					{props.yearOfBirth && <li>yearOfBirth: {props.yearOfBirth}</li>}
					{props.wizard && <li>wizard: {props.wizard}</li>}
					{props.ancestry && <li>ancestry: {props.ancestry}</li>}
					{props.eyeColour && <li>eyeColour: {props.eyeColour}</li>}
					{props.hairColour && <li>hairColour: {props.hairColour}</li>}
					{props.patronus && <li>patronus: {props.patronus}</li>}
				</ul>
			</article>
		</div>
	);
}

export default Content;
