import React from "react";
import { render, unmountComponentAtNode } from 'react-dom'
import StatisticDashboard from "../react/containers/categories/statistic-dashboard.element";
import { randomColor } from "randomcolor";

class StatisticDashboardElement extends HTMLElement {

    constructor() {
        super()
        this.observer = null
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    connectedCallback() {
        const data = this.dataset.chart || []
        const chart = JSON.parse(data);

        const labels = chart.map( c => {
            return c.name;
        });

        const values = chart.map( c => {
            return c.nb;
        })

        const colors = randomColor({
            luminosity: 'dark',
            format: 'rgba',
            count: values.length,
            alpha: 0.5
        });

        const config = {
            labels: labels,
            datasets: [
                {
                    label: '# of product',
                    data: values,
                    backgroundColor: colors,
                    borderColor: colors,
                    borderWidth: 2,
                },
            ],
        }

        if (this.observer === null) {
            this.observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.target === this) {
                        observer.disconnect()
                        render(<StatisticDashboard data={config}/>, this);
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

customElements.define('statistic-dashboard', StatisticDashboardElement)