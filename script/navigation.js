/* Otevře navigaci v režimu pro telefony/tablety*/
function toggle_responsive() {
	if (window.innerWidth <= 1400) {
		var nav_element = document.getElementById("nav-content");
		if (nav_element.className === "nav-list") {
			nav_element.className += " responsive";
			nav_element.style.display = "block";
		} else {
			nav_element.className = "nav-list";
			nav_element.style.display = "none";
		}
	}
}