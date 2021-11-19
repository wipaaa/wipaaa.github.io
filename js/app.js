window.onload = function () {
	const navbarNavLinks = document.querySelectorAll('.navbar__nav--link');
	const url = new URL(window.location.href).pathname;

	navbarNavLinks.forEach((navLink) => {
		const isActive = new URL(navLink.href).pathname === url;

		if (!isActive) {
			return;
		}

		document.title = `Dea - ${navLink.textContent}`;
		navLink.classList.add('--active');
	});
};
