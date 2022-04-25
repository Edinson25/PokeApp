
var ctx = document.getElementById('myChart').getContext('2d');

var earning = document.getElementById('earning').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Generacion1', 'Generacion2', 'Generacion3','Generacion4','Generacion5','Generacion6'],
        datasets: [{
            label: 'Traffic Source',
            data: [151, 100, 135,107,156,72],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(182, 255, 88, 0.7)',
                'rgba(186, 148, 40, 0.7)',
                'rgba(142, 234, 255, 0.7)',
                
            ],
          
           
        }]
    },
    options: {
       responsive:true,

    }
});

var myChart = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['Water', 'Normal', 'Grass', 'Bug', 'Psychic', 'Fire', 'Rock', 'Electric', 'Ground', 'Dragon', 'Ghost', 'Dark','Poison','Steel','Fighting', 'Ice', 'Fairy', 'Flying'],
        datasets: [{
            label: 'Tipo de especies',
            data: [120, 95, 75, 69, 58, 52, 44, 44, 32, 32,32,31, 29, 25, 25, 22, 17,5],
            backgroundColor: [
                'rgba(0, 245, 255 , 0.7)',
                'rgba(182, 255, 88, 0.7)',
                'rgba(32, 255, 0, 0.7)',
                'rgba(103, 132, 9, 0.7)',
                'rgba(245, 10, 209 , 0.7)',
                'rgba(255, 104, 0, 0.7)',
                'rgba(148, 150, 136, 0.7)',
                'rgba(248, 255, 0 , 0.7)',
                'rgba(186, 148, 40, 0.7)',
                'rgba(11, 41, 135, 0.7)',
                'rgba(171, 74, 230, 0.7)',
                'rgba(0, 0, 0, 0.7)',
                'rgba(217, 0, 255, 0.7)',
                'rgba(186, 186, 186, 0.7)',
                'rgba(255, 0, 0 , 0.7)',
                'rgba(142, 234, 255, 0.7)',
                'rgba(255, 0, 146, 0.7)',
                'rgba(0, 255, 161 , 0.7)',

            ],

            
            
        }]
    },
    options: {
       responsive:true,
    }
});