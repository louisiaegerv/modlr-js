(function () {
	let myModule = {
		name: "",
		setName() {
			let name = prompt("What is your name?");
			this.name = name;
			if (name === "") this.setName();
		}, 
		showGreeting() {
			return `<h1>Hello ${this.name}, this text was generated with modular JavaScript.</h1>`;
		},
		init() {
			myModule.setName();
			app = document.querySelector('.app');
			app.innerHTML = myModule.showGreeting();
		}
	};
	
	myModule.init();
})();