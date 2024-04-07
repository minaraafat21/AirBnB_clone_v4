$(document).ready(function () {
	const amenities = {};
	$("li input[type=checkbox]").change(function () {
		if (this.checked) {
			amenities[this.dataset.id] = this.dataset.name;
			// console.log(amenities);
			// console.log(Object.values(amenities).sort().join(", "));
			console.log( this.dataset.name, this.dataset.id);
		} else {
			delete amenities[this.dataset.id];
		}
		$(".amenities h4").text(Object.values(amenities).sort().join(", "));
		// console.log(amenities);
	});
});
