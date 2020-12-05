import React from "react";
import { render, unmountComponentAtNode } from 'react-dom'

import CategoriesMenu from "../react/containers/categories/categogies-menu-element";
import ProductsList from "../react/containers/categories/products-list.element";

class ProduitsListElement extends HTMLElement {

    constructor() {
        super()
        this.observer = null
    }

    connectedCallback() {

        const category = parseInt(this.dataset.category, 10) || null

        if (this.observer === null) {
            this.observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.target === this) {
                        observer.disconnect()
                        render(<ProductsList categoryId={category}/>, this);
                    }
                })
            })
        }
        this.observer.observe(this)
    }

    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect()
        }
        unmountComponentAtNode(this)
    }
}

customElements.define('produits-list', ProduitsListElement)