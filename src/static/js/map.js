
function initMap() {
	const zoomMap = $('.zoom').val();
	const mapLat = $('.mapLat').val();
	const mapLng = $('.mapLng').val();
	const myLatLng = { lat: Number(mapLat), lng: Number(mapLng)};
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: Number(zoomMap),
		center: myLatLng,
		disableDefaultUI: true,
	});
	new google.maps.Marker({
		position: myLatLng,
		map,
	});
}