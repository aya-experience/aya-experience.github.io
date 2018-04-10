'use strict';

function animate() {
	const canvas = this.$refs.canvas;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	const ctx = canvas.getContext('2d');
	const w = canvas.width;
	const h = canvas.height;
	const hue = 217;
	const stars = [];
	let count = 0;
	let animationId = null;
	const maxStars = 2000;

	// Cache gradient
	const canvas2 = document.createElement('canvas');
	const ctx2 = canvas2.getContext('2d');
	canvas2.width = 100;
	canvas2.height = 100;
	const half = canvas2.width / 2;
	const gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
	gradient2.addColorStop(0.025, '#fff');
	gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
	gradient2.addColorStop(1, 'transparent');

	ctx2.fillStyle = gradient2;
	ctx2.beginPath();
	ctx2.arc(half, half, half, 0, Math.PI * 2);
	ctx2.fill();

	// End cache

	function random(min, max) {
		if (arguments.length < 2) {
			max = min;
			min = 0;
		}

		if (min > max) {
			const hold = max;
			max = min;
			min = hold;
		}

		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function maxOrbit(x, y) {
		const max = Math.max(x, y);
		const diameter = Math.round(Math.sqrt(max * max + max * max));
		return diameter / 2;
	}

	const Star = function (orientation) {
		this.orbitRadius = orientation * random(maxOrbit(w, h));
		this.radius = random(60, this.orbitRadius) / 30;
		this.orbitX = w / 2;
		this.orbitY = h / 2;
		this.timePassed = random(0, maxStars);
		this.speed = random(this.orbitRadius) / 400000;
		this.alpha = random(2, 10) / 10;

		count++;
		stars[count] = this;
	};

	Star.prototype.draw = function () {
		const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX;
		const y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY;
		const twinkle = random(10);

		if (twinkle === 1 && this.alpha > 0) {
			this.alpha -= 0.05;
		} else if (twinkle === 2 && this.alpha < 1) {
			this.alpha += 0.05;
		}

		ctx.globalAlpha = this.alpha;
		ctx.drawImage(
			canvas2,
			x - this.radius / 2,
			y - this.radius / 2,
			this.radius,
			this.radius
		);
		this.timePassed += this.speed;
	};

	for (let i = 0; i < maxStars; i++) {
		const orientation = i % 2 === 0 ? 1 : -1;
		(() => new Star(orientation))();
	}

	function animation() {
		ctx.globalCompositeOperation = 'source-over';
		ctx.globalAlpha = 0.5;
		ctx.fillRect(0, 0, w, h);

		ctx.globalCompositeOperation = 'lighter';
		for (let i = 1, l = stars.length; i < l; i++) {
			stars[i].draw();
		}

		animationId = window.requestAnimationFrame(animation);
	}

	animationId = window.requestAnimationFrame(animation);
	setTimeout(() => {
		window.cancelAnimationFrame(animationId);
	}, this.animationTime);
}

export default animate;
