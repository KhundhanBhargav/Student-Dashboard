document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('learningHoursChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Learning Hours',
                data: [2, 3, 2.8, 3.5, 4, 4.2, 2],
                borderColor: 'black',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
