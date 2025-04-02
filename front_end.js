// Import Vue and Chart.js
import { createApp } from 'vue';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const app = createApp({
    data() {
        return {
            activeTab: 'Dashboard',
        };
    },
    methods: {
        switchTab(tab) {
            this.activeTab = tab;
        },
        renderCharts() {
            // Bar Chart
            new Chart(document.getElementById('barChart'), {
                type: 'bar',
                data: {
                    labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
                    datasets: [
                        { label: 'Series 1', data: [20, 30, 40, 50], backgroundColor: 'lightblue' },
                        { label: 'Series 2', data: [10, 20, 30, 40], backgroundColor: 'blue' },
                        { label: 'Series 3', data: [5, 15, 25, 35], backgroundColor: 'darkblue' },
                    ],
                },
            });
            
            // Pie Chart
            new Chart(document.getElementById('pieChart'), {
                type: 'doughnut',
                data: {
                    labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
                    datasets: [{ data: [20, 20, 20, 20, 20], backgroundColor: ['blue', 'lightblue', 'darkblue', 'grey', 'black'] }],
                },
            });
        }
    },
    mounted() {
        this.renderCharts();
    }
}).mount('#app');

