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
    } catch (error) {

    }
}