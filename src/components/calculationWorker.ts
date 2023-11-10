self.addEventListener('message', event => {
	console.log(event.data);
	let count = 0;
	for (let i = 0; i < 100e8; i++) {
		count += i;
	}
	postMessage(count);
});
