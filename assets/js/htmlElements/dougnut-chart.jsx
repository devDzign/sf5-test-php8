import React from "react";
import { render, unmountComponentAtNode } from 'react-dom'
import PieChart from "../react/containers/categories/pie-chart-component";
import { randomColor } from "randomcolor";
import DougnutChart from "../react/containers/categories/dougnut-chart-component";

class DougnutChartElement extends HTMLElement {

    constructor() {
        super()
        this.observer = null
    }

    connectedCallback() {

        const chart = this.dataset.chart || []
        const title = this.dataset.title || 'Some title'
        const data = JSON.parse(chart);

        const labels = data.map( c => {
            return c.name;
        });

        const values = data.map( c => {
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
                        render(<DougnutChart data={config} title={title}/>, this);
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

customElements.define('dougnut-chart', DougnutChartElement)