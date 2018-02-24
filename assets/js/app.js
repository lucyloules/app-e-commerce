function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
    // document.getElementById("flipkart-navbar").style.width = "50%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
}



fetch('https://api.mercadolibre.com/sites/MLC/search?condition=all&q=all', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(function (respt) {
        //Turns the the JSON into a JS object
        return respt.json();
    })
    .then(function (product) {
        console.log(product);
        let listCateg = product;

        let butt = document.querySelector('.butt');
        let inputSearch = document.querySelector('.inputSearch');

        butt.addEventListener('click', function () {

            let valueFlip = (inputSearch.value);
            for (let i = 0; i < listCateg.results.length; i++) {
                let valuesResults = (listCateg.results[i].title);
                let regex = new RegExp(valueFlip, 'i', 'g');
                if (regex.test(valuesResults) === true) {
                    console.log(valuesResults);
                }
            }
            inputSearch.value = '';



        })


        let listCategories;

        fetch('https://api.mercadolibre.com/sites/MLC/categories', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then(function (respt) {
                //Turns the the JSON into a JS object
                return respt.json();
            })
            .then(function (info) {
                listCategories = info;
                console.log(info);

                let categoriesSelect = document.querySelector('.categoriesSelect');

                for (let i = 0; i < info.length; i++) {
                    let textOption = info[i].name;
                    let pOption = document.createTextNode(textOption);
                    let option = document.createElement('option');
                    option.value = info[i].id;
                    option.appendChild(pOption);
                    categoriesSelect.appendChild(option);
                }
            })
    })

let categoriesSelect = document.querySelector('.categoriesSelect');

categoriesSelect.addEventListener('change', function () {
    let idCategoria = categoriesSelect.value;

    fetch('https://api.mercadolibre.com/sites/MLC/search?category='+idCategoria, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(function (respt) {
            //Turns the the JSON into a JS object
            return respt.json();
        })
        .then(function (info) {
            console.log(info);
            
            for (let k = 0; k < info.results.length; k++) {
                console.log(info.results[k].title);
            }
        })
})