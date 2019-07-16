document.addEventListener("DOMContentLoaded", function() {
	nextBtns.forEach(btn => btn.addEventListener("click", goToNextStep));
	prevBtns.forEach(btn => btn.addEventListener("click", goToPrevStep));
});

// get all NEXT & PREVIOUS buttons
const nextBtns = document.querySelectorAll(".next-step");
const prevBtns = document.querySelectorAll(".prev-step");

// go to the Next Step & remove .disabled form the Next Tab
const goToNextStep = e => {
	// First validate all step's inputs
	const step = parseInt(e.target.dataset.step);
	if (!validateForm(step)) return false;

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

// Do the validation
const myForm = document.querySelector("#stepped");
const steps = myForm.querySelectorAll(".tab-pane");

function validateForm(step) {
	const input = steps[step - 1].querySelectorAll(".form-control");
	let valid = true;

	for (let i = 0; i < input.length; i++) {
		if (input[i].value == "") {
			if (!input[i].classList.contains("invalid")) {
				input[i].classList.add("invalid");
			}
			valid = false;
		}
		if (!input[i].value == "") {
			if (input[i].classList.contains("invalid")) {
				input[i].classList.remove("invalid");
			}
		}
	}
	return valid;
}
