console.log("running");
async function getData() {
    //get user input
    let zipCode = document.getElementById('zip').value;
    console.log(zipCode);
    //validate zip code was entered before moving on
    if (zipCode == "") {
        alert("5 digit USA Zip Code must be filled in.")
        return false;
    }
    //add user input to given link. could use ${} but in this care im setting as a link due to weird issue.
    let link = 'https://api.zippopotam.us/US/';
    let url = link + zipCode;
    console.log(url);
    try {
        //fetch response and store as data
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        //get data to return to dom, setting stateAbbrev so i can call the img from states folder
        //also setting long and lat to display on google maps
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
        //adding error alert with error message
        alert("There is an error with the API call, please contact me. " + error);
        console.log(error);
    }
}