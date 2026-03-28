
document.addEventListener('DOMContentLoaded', () => {
	const perfilLinks = document.querySelectorAll('.profiles');

	perfilLinks.forEach(link => {
		link.addEventListener('click', () => {

			const nomeEl = link.querySelector('figcaption');
			const imgEl = link.querySelector('img');

			const nome = nomeEl ? nomeEl.textContent.trim() : '';
			let imgSrc = imgEl ? imgEl.getAttribute('src') : '';

			// Ajuste de caminho
			if (imgSrc && !imgSrc.startsWith('http') && !imgSrc.startsWith('/') && !imgSrc.startsWith('..')) {
				imgSrc = '../' + imgSrc;
			}

			try {
				localStorage.setItem('perfilAtivoNome', nome);
				localStorage.setItem('perfilAtivoImagem', imgSrc);
			} catch (e) {
				console.warn('Erro ao salvar no localStorage', e);
			}
		});
	});
});