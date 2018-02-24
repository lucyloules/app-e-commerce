$(document).ready(function(){
fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA5726')

    .then(function (response) {
        //Turns the the JSON into a JS object
        return response.json();
    })
    .then(function (data) {
        //console.log(data);


    $('#sectionOffers').append('<div class="container-fluid"><div class="row"><div class="col-md-12">'+
    '<h3>Ofertas recomendadas para ti</h3></div></div></div><div class="container-fluid">'+
    '<div class="row"><div class="col-md-2"><a href="#"><img class="imgOffers" src="'+data.results[0].thumbnail+'"></a><p class="priceOffers">$ '+data.results[0].price+
    '</p></div><div class="col-md-2"><a href="#"><img class="imgOffers" src="'+data.results[1].thumbnail+'"></a><p class="priceOffers">$ '+data.results[1].price+'</p></div><div class="col-md-2">'+
    '<a href="#"><img class="imgOffers" src="'+data.results[2].thumbnail+'"></a><p class="priceOffers">$ '+data.results[2].price+'</p></div><div class="col-md-2"><a href="#"><img class="imgOffers"'+
    'src="'+data.results[3].thumbnail+'"></a><p class="priceOffers">$ '+data.results[3].price+'</p></div><div class="col-md-3 col-md-offset-1 imgBorder"><a href="#"><img class="imgOffers imgRight"'+
    'src="'+data.results[4].thumbnail+'"></a><p class="priceOffers offert">Precio $ '+data.results[4].price+'</p><strike><p class="priceOffers originalPrice">Precio original $ '+data.results[4].original_price+'</p></strike></div>'+
    '</div></div>');

    $('#sectionSeen').append('<div class="container-fluid"><div class="row"><div class="col-md-12">'+
    '<h3>Relacionado con los artículos que has visto</h3></div></div></div><div class="container-fluid">'+
    '<div class="row"><div class="col-md-2"><a href="#"><img class="imgOffers" src="'+data.results[5].thumbnail+'"></a><p class="priceOffers">$ '+data.results[5].price+
    '</p></div><div class="col-md-2"><a href="#"><img class="imgOffers" src="'+data.results[6].thumbnail+'"></a><p class="priceOffers">$ '+data.results[6].price+'</p></div><div class="col-md-2">'+
    '<a href="#"><img class="imgOffers" src="'+data.results[7].thumbnail+'"></a><p class="priceOffers">$ '+data.results[7].price+'</p></div><div class="col-md-2"><a href="#"><img class="imgOffers"'+
    'src="'+data.results[8].thumbnail+'"></a><p class="priceOffers">$ '+data.results[8].price+'</p></div><div class="col-md-3 col-md-offset-1 imgBorderTwo"><a href="#"><img class="imgOffers imgRight"'+
    'src="'+data.results[12].thumbnail+'"></a><p class="priceOffers offert">Precio $ '+data.results[12].price+'</p><strike><p class="priceOffers originalPrice">Precio original $ '+data.results[12].original_price+'</p></strike></div>'+
    '</div></div>');

  fetch('https://api.mercadolibre.com/sites/MLA/search?all=new&q=dell')

    .then(function (res) {
        //Turns the the JSON into a JS object
        return res.json();
    })
    .then(function (dat) {
        //console.log(dat);

   $('#sectionTechnology').append('<div class="container-fluid"><div class="row"><div class="col-md-12">'+
    '<h3>Ofertas recomendadas para ti</h3></div></div></div><div class="container-fluid">'+
    '<div class="row"><div class="col-md-2 col-md-offset-1"><a href="#"><img class="imgOffers" src="'+dat.results[0].thumbnail+'"></a><p class="priceOffers">$ '+dat.results[0].price+
    '</p></div><div class="col-md-2"><a href="#"><img class="imgOffers" src="'+dat.results[1].thumbnail+'"></a><p class="priceOffers">$ '+dat.results[1].price+'</p></div><div class="col-md-2">'+
    '<a href="#"><img class="imgOffers" src="'+dat.results[2].thumbnail+'"></a><p class="priceOffers">$ '+dat.results[2].price+'</p></div><div class="col-md-2"><a href="#"><img class="imgOffers"'+
    'src="'+dat.results[3].thumbnail+'"></a><p class="priceOffers">$ '+dat.results[3].price+'</p></div><div class="col-md-2 col-md-offset-right-1"><a href="#"><img class="imgOffers"'+
    'src="'+dat.results[4].thumbnail+'"></a><p class="priceOffers">$ '+dat.results[4].price+'</p></div></div></div>');

   fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA3025')

    .then(function (respt) {
        //Turns the the JSON into a JS object
        return respt.json();
    })
    .then(function (info) {
        console.log(info);

    $('#sectionBooks').append('<div class="container-fluid"><div class="row"><div class="col-md-12">'+
    '<h3>Libros más vendidos</h3></div></div></div><div class="container-fluid">'+
    '<div class="row"><div class="col-md-2 col-md-offset-1"><a href="#"><img class="imgOffers" src="'+info.results[0].thumbnail+'"></a><p class="priceOffers">$ '+info.results[0].price+
    '</p></div><div class="col-md-2"><a href="#"><img class="imgOffers" src="'+info.results[1].thumbnail+'"></a><p class="priceOffers">$ '+info.results[1].price+'</p></div><div class="col-md-2">'+
    '<a href="#"><img class="imgOffers" src="'+info.results[2].thumbnail+'"></a><p class="priceOffers">$ '+info.results[2].price+'</p></div><div class="col-md-2"><a href="#"><img class="imgOffers"'+
    'src="'+info.results[3].thumbnail+'"></a><p class="priceOffers">$ '+info.results[3].price+'</p></div><div class="col-md-2 col-md-offset-right-1"><a href="#"><img class="imgOffers"'+
    'src="'+info.results[4].thumbnail+'"></a><p class="priceOffers">$ '+info.results[4].price+'</p></div></div></div>');
});
});
});
});

