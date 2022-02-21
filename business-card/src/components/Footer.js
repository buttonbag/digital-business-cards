import tw from '../images/Twitter-Icon.png';
import fb from '../images/Facebook-Icon.png';
import ig from '../images/Instagram-Icon.png';
import gh from '../images/GitHub-Icon.png';
import React from 'react';

function Footer() {
	return (
		<footer className="footer">
			<ul>
				<li>
					<a href="">
						<img src={tw} alt="" />
					</a>
				</li>
				<li>
					<a href="">
						<img src={fb} alt="" />
					</a>
				</li>
				<li>
					<a href="">
						<img src={ig} alt="" />
					</a>
				</li>
				<li>
					<a href="">
						<img src={gh} alt="" />
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
