/**
 * design.js
 * http://www.tilak.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.tilak.com
 */
{
	setTimeout(() => document.body.classList.add('render'), 60);
	const navdesigns = Array.from(document.querySelectorAll('nav.designs > .design'));
	const total = navdesigns.length;
	const current = navdesigns.findIndex(el => el.classList.contains('design--current'));
	const navigate = (linkEl) => {
		document.body.classList.remove('render');
		document.body.addEventListener('transitionend', () => window.location = linkEl.href);
	};
	navdesigns.forEach(link => link.addEventListener('click', (ev) => {
		ev.preventDefault();
		navigate(ev.target);
	}));
	/*
	document.addEventListener('keydown', (ev) => {
		const keyCode = ev.keyCode || ev.which;
		let linkEl;
		if ( keyCode === 37 ) {
			linkEl = current > 0 ? navdesigns[current-1] : navdesigns[total-1];
		}
		else if ( keyCode === 39 ) {
			linkEl = current < total-1 ? navdesigns[current+1] : navdesigns[0];
		}
		else {
			return false;
		}
		navigate(linkEl);
	});
	*/
}
