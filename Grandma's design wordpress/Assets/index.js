const allbtn = document.querySelector(".allbtn");
const cakebtn = document.querySelector(".cakebtn");
const cupcakebtn = document.querySelector(".cupcakebtn");
const sweetsbtn = document.querySelector(".sweetsbtn");
const doughnutbtn = document.querySelector(".doughnutbtn");

const sweets = document.querySelectorAll(".sweets");
const cupcake = document.querySelectorAll(".cupcake");
const cake = document.querySelectorAll(".cake");
const doughnut = document.querySelectorAll(".doughnut");

const item = document.querySelectorAll(".item");

const cartbtn = document.querySelector(".cartbtn");
// const searchfield = document.querySelector('.searchfield')

const itemslistnew = [];
// let itemslist = []
let itemslist = function (rupees) {
	for (var i = 0; i < item.length - 11; i++) {
		const element = itemslistnew.push(i);
		const result = element * rupees;
		cartbtn.textContent = `${element} Items-$${result}`;

		console.log(result);
	}
};

// console.log(sweets);

// document.addEventListener('load',function(){
//     for (const i in (sweets, cupcake, cake, doughnut)) {
// 		sweets[i].classList.remove("hidden");
// 		cupcake[i].classList.remove("hidden");
// 		cake[i].classList.remove("hidden");
// 		doughnut[i].classList.remove("hidden");
// 	}
// })
let remover = function () {
	for (const i in (sweets, cupcake, cake, doughnut)) {
		sweets[i].classList.remove("hidden");
		cupcake[i].classList.remove("hidden");
		cake[i].classList.remove("hidden");
		doughnut[i].classList.remove("hidden");
	}
};
allbtn.addEventListener("click", remover);

sweetsbtn.addEventListener("click", function () {
	for (const i in (sweets, cupcake, cake, doughnut)) {
		sweets[i].classList.add("hidden");
		cupcake[i].classList.add("hidden");
		cake[i].classList.add("hidden");
		doughnut[i].classList.add("hidden");
		// searchfunction()
		// for (const i in sweets)
		sweets[i].classList.remove("hidden");
	}
});

cakebtn.addEventListener("click", function () {
	// adder()

	for (const i in (sweets, cupcake, cake, doughnut)) {
		sweets[i].classList.add("hidden");
		cupcake[i].classList.add("hidden");
		cake[i].classList.add("hidden");
		doughnut[i].classList.add("hidden");
		// searchfunction()
		// for (const i in cake)
		cake[i].classList.remove("hidden");
	}
});

cupcakebtn.addEventListener("click", function () {
	for (const i in (sweets, cupcake, cake, doughnut)) {
		sweets[i].classList.add("hidden");
		cupcake[i].classList.add("hidden");
		cake[i].classList.add("hidden");
		doughnut[i].classList.add("hidden");
		// searchfunction()
		// for (const i in cupcake)
		cupcake[i].classList.remove("hidden");
	}
});

doughnutbtn.addEventListener("click", function () {
	for (const i in (sweets, cupcake, cake, doughnut)) {
		sweets[i].classList.add("hidden");
		cupcake[i].classList.add("hidden");
		cake[i].classList.add("hidden");
		doughnut[i].classList.add("hidden");
		// searchfunction()
		// for (const i in doughnut){
		doughnut[i].classList.remove("hidden");
	}
	// }
});

// let allcards = function(){
//     console.log(sweets);
//     sweets.classList.remove('hidden')
// }


let searchfield = function (value) {
	if (value == "s") {
		for (const i in (sweets, cupcake, cake, doughnut)) {
			sweets[i].classList.add("hidden");
			cupcake[i].classList.add("hidden");
			cake[i].classList.add("hidden");
			doughnut[i].classList.add("hidden");

			sweets[i].classList.remove("hidden");
			console.log(sweets);
		}
	} else if (value == "ca") {
		for (const i in (sweets, cupcake, cake, doughnut)) {
			sweets[i].classList.add("hidden");
			cupcake[i].classList.add("hidden");
			cake[i].classList.add("hidden");
			doughnut[i].classList.add("hidden");

			cake[i].classList.remove("hidden");
			console.log(cake);
		}
	} else if (value == "cu") {
		for (const i in (sweets, cupcake, cake, doughnut)) {
			sweets[i].classList.add("hidden");
			cupcake[i].classList.add("hidden");
			cake[i].classList.add("hidden");
			doughnut[i].classList.add("hidden");
			cupcake[i].classList.remove("hidden");
		}
	} else if (value == "d") {
		for (const i in (sweets, cupcake, cake, doughnut)) {
			sweets[i].classList.add("hidden");
			cupcake[i].classList.add("hidden");
			cake[i].classList.add("hidden");
			doughnut[i].classList.add("hidden");
            
			doughnut[i].classList.remove("hidden");
		}
	}
	// else{
	//    remover()
	// }
};
