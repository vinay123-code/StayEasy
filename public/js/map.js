const mapDiv = document.getElementById("map");

// get listing from data attribute
const listing = JSON.parse(mapDiv.dataset.listing);
console.log(listing);

// validation
if (
  !listing ||
  !listing.geometry ||
  !listing.geometry.coordinates ||
  listing.geometry.coordinates.length < 2
) {
  mapDiv.innerHTML = "Location not available";
} else {
  const [lng, lat] = listing.geometry.coordinates;

  const map = L.map('map').setView([lat, lng], 8);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(listing.location)
    .openPopup();
}