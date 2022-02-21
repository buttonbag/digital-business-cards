import React from 'react';

function Header() {
	return (
		<header className="header">
			<img src="#" alt="#" />
			<div className="info">
				<h1 className="info--name">Louie Camacho</h1>
				<span className="info--role">Lead Frontend Developer</span>
				<small className="info--site">louiecamacho.com</small>
			</div>
			<div className="contact">
				<div className="btn--email">
					<i>X</i> Email
				</div>
				<div className="btn--linkedin">
					<i>X</i> LinkedIn
				</div>
			</div>
		</header>
	);
}

export default Header;
