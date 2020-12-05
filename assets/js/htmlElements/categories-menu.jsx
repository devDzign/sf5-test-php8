import React from "react";
import { render, unmountComponentAtNode } from 'react-dom'

import CategoriesMenu from "../react/containers/categories/categogies-menu-element";

class CategoriesMenuElement extends HTMLElement {

    constructor() {
        super()
        this.observer = null
    }

    connectedCallback() {
        const data = this.dataset.categories || []

        const categories = JSON.parse(data);

        if (this.observer === null) {
            this.observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.target === this) {
                        observer.disconnect()
                        render(<CategoriesMenu categories={categories}/>, this);
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

customElements.define('categories-menu', CategoriesMenuElement)