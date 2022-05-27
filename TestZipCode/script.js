console.log("running");
async function getData() {
    let zipCode = document.getElementById('zip').value;
    if (zipCode == "") {
        alert("5 digit Zip Code must be filled in.")
        return false;
    }
    let link = 'https://api.zippopotam.us/US/';
    let url = link + zipCode;
    console.log(url);
}