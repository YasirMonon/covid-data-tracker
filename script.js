/*=========================== using function for spinner ===========================*/

const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const output = document.getElementById('welcomeText');
const notFound = document.getElementById('errorText');
const countryInformation = document.getElementById('flagInfo');

const showCountries = () => {
    const searchField = document.getElementById('searchInput');
    const showInput = searchField.value;

    //showing spinner
    toggleSpinner('block');

    console.log(showInput);
    searchField.value = '';

    // loading api
    const url = `https://corona.lmao.ninja/v2/countries/${showInput}`
    console.log(url);

    fetch(url)
        .then((response) => {
            // return response.json();
            if (response.status === 404 || undefined) {

                // alert("Sorry !! Wrong Input ❌ Make Sure Country Names Are Spelled Correctly ");
                errorText.innerHTML = ` <h1><span class="text-red-600">Sorry !! Wrong Input !!</span> 
        <br>❌<br>Make Sure Country Names Are Spelled Correctly or  Please Refresh the Page</h1>`;
                output.textContent = '';
                countryInformation.textContent = '';
            }
            toggleSpinner('none');
            return response.json();
        }).then((data) => {
            document.getElementById("flag").src = data.countryInfo.flag;
            document.getElementById("country").innerHTML = data.country;
            document.getElementById("continent").innerHTML = `<h5>Country of </h5>` + data.continent + `<h5> Continent </h5>` + `<i class="fas fa-globe-americas"></i>`;
            document.getElementById("cases").innerHTML = data.cases;
            // document.getElementById("critical").innerHTML = data.critical;
            document.getElementById("death").innerHTML = data.deaths;
            document.getElementById("recovered").innerHTML = data.recovered;
            document.getElementById("tests").innerHTML = data.tests;
            // document.getElementById("active").innerHTML = data.active;
            output.textContent = '';
            notFound.textContent = '';


            toggleSpinner('none');


        })

}