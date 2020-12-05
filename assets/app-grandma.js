// import my scss
import './styles/grandma.scss';

document.getElementById("cart-info").addEventListener(
    "click", ()=> {
        const cart = document.getElementById("cart");
        cart.classList.toggle("show-cart");
        console.log(cart)
    }
)


