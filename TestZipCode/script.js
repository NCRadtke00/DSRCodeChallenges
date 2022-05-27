console.log("running");
async function getData() {
    let zipCode = document.getElementById('zip').value;
    if (zipCode == "") {
        alert("5 digit USA Zip Code must be filled in.")
        return false;
    }
    let link = 'https://api.zippopotam.us/US/';
    let url = link + zipCode;
    console.log(url);
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        let stateAbbrev = data["places"][0]["state abbreviation"];
        let long = data["places"][0]["longitude"];
        let lati = data["places"][0]["latitude"];
        const imgLoc = "states/" + stateAbbrev + ".svg";
        document.getElementById('city').textContent = data.places[0]["place name"];
        document.getElementById('state').textContent = data.places[0].state;
        document.getElementById('stateAbb').textContent = stateAbbrev;
        document.getElementById('country').textContent = data.country;
        document.getElementById('countryAbb').textContent = data["country abbreviation"];
        document.getElementById('postal').textContent = data['post code'];
        document.getElementById('longitude').textContent = long;
        document.getElementById('latitude').textContent = lati;
        document.getElementById('img').src = imgLoc;
    } catch (error) {
        alert("There is an error with the API call, please contact me. " + error);
        console.log(error);
    }
}