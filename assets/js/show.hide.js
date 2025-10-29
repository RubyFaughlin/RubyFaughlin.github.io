/* JavaScript to Show/Hide (Toggle) Image */
	function toggle () {
	let para = document.getElementById("homeImage");
	if (para.style.display === "none") {
		para.style.display = "block";
	} else {
		para.style.display = "none";
	}
		console.log("Now display is:", para.style.display);
	}
