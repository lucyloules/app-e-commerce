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
                    // console.log(listCateg.results[i].title);
                    // console.log(listCateg.results[i].price);
                    // console.log(listCateg.results[i].available_quantity);
                    // console.log(listCateg.results[i].thumbnail);

                    let resultsSearchInput = document.querySelector('.resultsSearchInput');
                    let divResultsInput = document.createElement('div');
                    divResultsInput.className = 'divResultsInput';
                    let divImages = document.createElement('div');
                    divImages.className = 'divImages';
                    let image = document.createElement('img');
                    image.className = 'image';
                    image.setAttribute('src', listCateg.results[i].thumbnail);
                    divImages.appendChild(image);

                    let titleProduc = document.createTextNode(listCateg.results[i].title);
                    let pTitle = document.createElement('p');
                    pTitle.appendChild(titleProduc);
                    divTitle = document.createElement('div');
                    divTitle.appendChild(pTitle);
                    divTitle.className = 'divTitle';


                    let priceProduc = document.createTextNode(listCateg.results[i].price);
                    let pPrice = document.createElement('p');
                    pPrice.appendChild(priceProduc);
                    divPrice = document.createElement('div');
                    divPrice.appendChild(pPrice);

                    let pAvailable = document.createElement('p');
                    let availableProduc = document.createTextNode(listCateg.results[i].available_quantity);
                    pAvailable.appendChild(availableProduc);
                    divAvailable = document.createElement('div');
                    divAvailable.appendChild(pAvailable);

                    let divButton = document.createElement('div');
                    let buttonCart = document.createElement('button');
                    buttonCart.className = 'buttonCart';
                    buttonCart.appendChild(document.createTextNode('Add to Cart'));
                    divButton.appendChild(buttonCart);
                    let itemNumber = document.querySelector('.item-number');
                
                let WishList = document.querySelector('.WishList');

                buttonCart.addEventListener('click', function () {

                   


                    let numerActual = itemNumber.textContent;
                    let actual = parseInt(numerActual) + 1;
                    itemNumber.innerHTML = '';
                    itemNumber.appendChild(document.createTextNode(actual));
                })

                let cart = document.querySelector('.cart');
                cart.addEventListener('click', function(){

                })
                    

                    let heart = document.createElement('img');
                    heart.setAttribute('src', 'assets/images/nolike.png');
                    let divHeart = document.createElement('div');
                    divHeart.appendChild(heart);
                    divResultsInput.appendChild(divImages);
                    divResultsInput.appendChild(divTitle);
                    divResultsInput.appendChild(divPrice);
                    divResultsInput.appendChild(divAvailable);
                    divResultsInput.appendChild(divButton);
                    divResultsInput.appendChild(divHeart);


                    resultsSearchInput.appendChild(divResultsInput);

                    divHeart.addEventListener('click', function(){
                        heart.setAttribute('src', 'assets/images/like.png');
                        let element = event.target.parentNode.parentNode.firstChild.nextSibling.firstChild.textContent;
                        let itemNumber = document.querySelector('.item-number');
                        let divWish = document.createElement('div');
                        let textDivWish = document.createElement('p');
    
                        let text = document.createTextNode(element);
                        textDivWish.appendChild(text);
                        divWish.appendChild(textDivWish);
                        WishList.appendChild(divWish);
                    })


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

    fetch('https://api.mercadolibre.com/sites/MLC/search?category=' + idCategoria, {
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
                // console.log(info.results[k].price);
                // console.log(info.results[k].title);
                // console.log(info.results[k].available_quantity);
                // console.log(info.results[k].thumbnail);

                let resultsList = document.querySelector('.resultsList');
                let divResultsInput = document.createElement('div');
                divResultsInput.className = 'divResultsInput';
                let divImages = document.createElement('div');
                divImages.className = 'divImages';
                let image = document.createElement('img');
                image.className = 'image';
                image.setAttribute('src', info.results[k].thumbnail);
                divImages.appendChild(image);

                let titleProduc = document.createTextNode(info.results[k].title);
                let pTitle = document.createElement('p');
                pTitle.appendChild(titleProduc);
                divTitle = document.createElement('div');
                divTitle.appendChild(pTitle);
                divTitle.className = 'divTitle';


                let priceProduc = document.createTextNode(info.results[k].price);
                let pPrice = document.createElement('p');
                pPrice.appendChild(priceProduc);
                divPrice = document.createElement('div');
                divPrice.appendChild(pPrice);

                let pAvailable = document.createElement('p');
                let availableProduc = document.createTextNode(info.results[k].available_quantity);
                pAvailable.appendChild(availableProduc);
                divAvailable = document.createElement('div');
                divAvailable.appendChild(pAvailable);

                let divButton = document.createElement('div');
                let buttonCart = document.createElement('button');
                buttonCart.className = 'buttonCart';
                buttonCart.appendChild(document.createTextNode('Add to Cart'));
                divButton.appendChild(buttonCart);

                let itemNumber = document.querySelector('.item-number');
                let WishList = document.querySelector('.WishList');

                buttonCart.addEventListener('click', function () {

                    let element = event.target.parentNode.parentNode.firstChild.nextSibling.firstChild.textContent;
                    let itemNumber = document.querySelector('.item-number');
                    let divWish = document.createElement('div');
                    let textDivWish = document.createElement('p');

                    let text = document.createTextNode(element);
                    textDivWish.appendChild(text);
                    divWish.appendChild(textDivWish);
                    WishList.appendChild(divWish);


                    let numerActual = itemNumber.textContent;
                    let actual = parseInt(numerActual) + 1;
                    itemNumber.innerHTML = '';
                    itemNumber.appendChild(document.createTextNode(actual));
                })

                divResultsInput.appendChild(divImages);
                divResultsInput.appendChild(divTitle);
                divResultsInput.appendChild(divPrice);
                divResultsInput.appendChild(divAvailable);
                divResultsInput.appendChild(divButton);

                resultsList.appendChild(divResultsInput);


            }
        })
})