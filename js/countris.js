const loadCountris = () =>{
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    // console.log(countries);
    const countriesHtml = countries.map(country => getCountriesHtml(country));
    // console.log(countriesHtml[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHtml.join(' ');
}

const getCountriesHtml = country =>{
    return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div>
    `
}

loadCountris();