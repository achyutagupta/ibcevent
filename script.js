		
		var list1 = [];
		var list2 = [];
		var list3 = [];
		var list4 = [];
		var list5 = [];
		var list6 = [];

		var n = 1;
		var x = 0;

		function AddRow(){

            document.getElementById('show').style.opacity = "1";


			var AddRown = document.getElementById('show');
			var NewRow = AddRown.insertRow(n);

			list1[x] = document.getElementById("ffname").value;
			list2[x] = document.getElementById("fflname").value;
			list3[x] = document.getElementById("ffemail").value;
			list4[x] = document.getElementById("ffphone").value;
			list5[x] = document.getElementById("ffaddress").value;
			list6[x] = document.getElementById("ffmessage").value;
            
			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
			var cel4 = NewRow.insertCell(3);
			var cel5 = NewRow.insertCell(4);
			var cel6 = NewRow.insertCell(5);

			cel1.innerHTML = list1[x];
			cel2.innerHTML = list2[x];
			cel3.innerHTML = list3[x];
			cel4.innerHTML = list4[x];
			cel5.innerHTML = list5[x];
			cel6.innerHTML = list6[x];

			n++;
			x++;
		}



// gallery




function openModal() {
	document.getElementById("myModal").style.display = "block";
}

function closeModal() {
	document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	captionText.innerHTML = dots[slideIndex - 1].alt;
}

//csv file

onload=fetch("sample.csv").then(res=>{
	return res.text()
}).then(data=>{
	let result=data.split(/\r?\n|\r/).map(e=>{
		return e.split(","); 
	})
	result.forEach(e=>{
		let m = e.map(e=>{
			return `<td> ${e} </td>`;
		}).join("")
		let ce =document.createElement("tr");
		ce.innerHTML = m;
		document.querySelector("table").appendChild(ce);
		console.log(m);
	})
})





