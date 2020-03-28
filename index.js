function updateMap()
{
    fetch("/csvjson.json")
    .then(response => response.json())
    .then(rsp=> {
        console.log(rsp.data)

       rsp.data.forEach(element => {
            name = element.province;
            country = element.country;
            latitude = element.latitude;
            longitude = element.longitude;

            new mapboxgl.Marker({
                draggable: true
                })
                .setLngLat([longitude , latitude])
                .addTo(map);
        });


    })
}
updateMap();