// Do the validation for a specific Step
const myForm = document.querySelector("#stepped");
const steps = myForm.querySelectorAll(".tab-pane");

function validateStep(step) {
	const inputs = steps[step - 1].querySelectorAll(".form-control");
	const checkboxes = steps[step - 1].querySelectorAll("input[type=checkbox]");
	let valid = true;

	// Check if inputs are empty
	for (let input of inputs) {
		const inputParent = input.parentNode.classList;

		if (input.value === "" && input.hasAttribute("required")) {
			inputParent.add("invalid");
			valid = false;
		} else {
			const regexEmail = /[a-z0-9!#$%&' * +/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
			const regexTel = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

			if ((input.id === "email" && !input.value.match(regexEmail)) || (input.id === "telephone" && !input.value.match(regexTel))) {
				inputParent.add("invalid");
				valid = false;
			} else {
				inputParent.remove("invalid");
			}
		}
	}

	// Check if checkboxes are checked
	for (let checkbox of checkboxes) {
		const checkboxParent = checkbox.parentNode.classList;

		if (!checkbox.checked && checkbox.hasAttribute("required")) {
			checkboxParent.add("invalid");
			valid = false;
		} else {
			checkboxParent.remove("invalid");
		}
	}

	// Return result of all validations
	return valid;
}

// Go to the Next Step, validate, remove 'disabled' class form the NextTab
const goToNextStep = e => {
	const step = parseInt(e.target.dataset.step);

	// First validate all step's inputs
	if (!validateStep(step)) return false;

	// Go to nextTab
	const nextTab = document.querySelector(`#tabStep${step + 1}`);
	nextTab.classList.remove("disabled");
	nextTab.click();
};

// go to the Previous Step
const goToPrevStep = e => {
	const step = parseInt(e.target.dataset.step);
	const prevTab = document.querySelector(`#tabStep${step - 1}`);
	prevTab.click();
};

// Remove 'invalid' class on focus
const rmInvalidClass = () => {
	const inputs = document.querySelectorAll("input");
	inputs.forEach(input => {
		input.addEventListener("focus", () => {
			input.parentNode.classList.remove("invalid");
		});
	});
};

// Get all NEXT & PREVIOUS buttons
const nextBtns = document.querySelectorAll(".next-step");
const prevBtns = document.querySelectorAll(".prev-step");

// Set event listeners
document.addEventListener("DOMContentLoaded", function() {
	nextBtns.forEach(btn => btn.addEventListener("click", goToNextStep));
	prevBtns.forEach(btn => btn.addEventListener("click", goToPrevStep));
	rmInvalidClass();
});
