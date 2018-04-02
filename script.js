//

const my_button = document.getElementById('my_button')

my_button.onclick = function() {
	event.preventDefault();

	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const form = document.getElementById('email');

	let classNames = name.classList;
	let classNamesEmail = email.classList;
	let classNamesForm = form.classList;

	console.log(classNamesForm);

	if (name.value == "") {
		classNames.add("red");
		console.log(name.classList);
	}
	else {
		classNames.remove("red");
		console.log(name.classList);
	}

	if (email.value == "") {
		classNamesEmail.add("red");
		console.log(email.classList);
	}


}
