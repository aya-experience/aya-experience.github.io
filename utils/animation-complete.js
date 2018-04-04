function whichAnimationEvent() {
	const element = document.createElement('fakeelement');
	const animations = {
		animation: 'animationend',
		OAnimation: 'oAnimationEnd',
		MozAnimation: 'animationend',
		WebkitAnimation: 'webkitAnimationEnd'
	};

	for (const t in animations) {
		if (element.style[t] !== undefined) {
			return animations[t];
		}
	}
}

function animationComplete(element) {
	const animationEvent = whichAnimationEvent();
	if (!animationEvent) {
		return Promise.reject(new Error('No animation event found'));
	}
	return new Promise(resolve => {
		element.addEventListener(animationEvent, resolve);
	});
}

export default animationComplete;
