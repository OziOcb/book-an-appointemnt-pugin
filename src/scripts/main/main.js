document.addEventListener("DOMContentLoaded", function() {
	nextBtns.forEach(btn => btn.addEventListener("click", goToNextStep));
	prevBtns.forEach(btn => btn.addEventListener("click", goToPrevStep));
});

// get all NEXT & PREVIOUS buttons
const nextBtns = document.querySelectorAll(".next-step");
const prevBtns = document.querySelectorAll(".prev-step");

// go to the Next Step & remove .disabled form the Next Tab
const goToNextStep = e => {
	const step = parseInt(e.target.dataset.step);
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
