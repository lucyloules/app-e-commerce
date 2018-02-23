fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA5726')

    .then(function (response) {
        //Turns the the JSON into a JS object
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });