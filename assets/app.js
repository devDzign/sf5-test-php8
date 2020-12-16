const $ = require('jquery');
require('bootstrap');
require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');

// import my scss
import './styles/app.scss';

// element html with react
import './js/htmlElements/user-list'
import './js/htmlElements/categories-menu'
import './js/htmlElements/produits-list'
import './js/htmlElements/statistic-dashboard'
import './js/htmlElements/pie-chart'
import './js/htmlElements/dougnut-chart'

// srr
import './ssr-all'

const element = document.getElementById("cart-info");


if (element) {
    element.addEventListener("click", function () {
        const cart = document.getElementById("cart");
        cart.classList.toggle("show-cart");
        console.log(cart);
    });
}


