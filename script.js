const url = "https://api.adviceslip.com/advice";

const text_span = document.querySelector(".id-span");
const advice_text = document.querySelector(".advice-text");
const dice_icon = document.querySelector(".dice-icon");

const requestAdvice = () => {
fetch(url)
	.then(res => res.json())
	.then(data => {
		let advice_id = data.slip.id;
		let advice = data.slip.advice;
	
		text_span.textContent = advice_id;
		advice_text.textContent = `"${advice}"` 
	})
}

dice_icon.addEventListener("click", requestAdvice);