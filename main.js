var images = ["Family Pic.jpg",
			  "Nana.png",
			  "Viviana.png",
			  "Praseeda.png",
			  "Amma.jpg"];

var names = ["The potnuru's", "Father", "Sister", "!!ME!!", "Mother"];
var i = 0;

function update() {
	i++;
	var numbers_of_family_member_in_array = 5
	if (i > numbers_of_family_member_in_array) {
		i = 0;
	}
	var updatedImage = images[i];
	var updatedName = names[i];
	document.getElementById("Family.Pic").src = updatedImage;
	document.getElementById("The Potnuru's").innerHTML = updatedName;
}