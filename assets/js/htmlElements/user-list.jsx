import React from "react";
import { render, unmountComponentAtNode } from 'react-dom'

import UserList from "../react/containers/users-list-element";

class UserListElement extends HTMLElement {

    constructor() {
        super()
        this.observer = null
    }

    connectedCallback() {
        const user = parseInt(this.dataset.user, 10) || null

        if (this.observer === null) {
            this.observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.target === this) {
                        observer.disconnect()
                        render(<UserList userId={user}/>, this);
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

customElements.define('users-list', UserListElement)