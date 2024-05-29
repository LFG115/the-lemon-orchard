
async function initMap() {

    // The location of The Lemon Orchard
    const position = { lat: 40.625872, lng: 14.374194 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    

    // The map, centered at Sorrento, Italy
    map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "Lemon Orchard Restaurant",
    });

    
    // The marker, positioned at The lemon Orchard
    const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "The Lemon Orachard Restaurant",
    });
}