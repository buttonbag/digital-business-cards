import React from 'react';

function Content(props) {
	return (
		<div className="content">
			<article>
				<h2>Description</h2>
				<p>
					{/* height : {props.height}
					mass : {props.mass}
					hair_color : {props.hair_color}
					skin_color : {props.skin_color}
					eye_color : {props.eye_color}
					birth_year : {props.birth_year}
					gender : {props.gender} */}
					{props.description}
				</p>
			</article>
			<article>
				<h2>Interests</h2>
				<p>
					Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
					Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
				</p>
			</article>
		</div>
	);
}

export default Content;
