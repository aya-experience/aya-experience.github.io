function loadImage(url) {
	return new Promise(resolve => {
		const image = new Image();
		image.onload = resolve;
		image.src = url;
	});
}

export default loadImage;
