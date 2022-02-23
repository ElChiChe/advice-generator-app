const url = "https://api.adviceslip.com/advice";


fetch(url)
.then(res => res.json())
.then(data => console.log(data.slip.advice));