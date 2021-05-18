
function makeChart(cybercrime) {
  var cybercrimeLabels = cybercrime.map(function(d) {
    return d.Offence;
  });
  var cantonLabels = cybercrime.map(function(d) {
    return d.Canton;
  });
 // var yearsData = cybercrime.map(function(d) {return d.2009})

  var chart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
      datasets: [{ 
          label: "Soustraction de données (art. 143 CP)",
          data: [34,58,28,38,23,57,46,52,32,42],
          // data: occurenceData
          
          borderColor: "#029b5b",
          backgroundColor: "#029b5b",
          fill: false
          
        }, { 
          label: "Accès indu à un système informatique (art. 143bis CP)",
          data: [13,24,27,14,22,30,25,40,34,37],
          borderColor: "#00356c",
          backgroundColor: "#00356c",
          fill: false
        }, { 
          label: "Détérioration de données (art. 144bis CP)",
          data: [10,13,18,24,22,17,14,39,27,28],
          borderColor: "#7600a6",
          backgroundColor: "#7600a6",
          fill: false
        }, { 
          label: "Utilisation frauduleuse d'un ordinateur (art. 147 CP)",
          data: [287,260,249,242,209,284,287,345,455,479],
          borderColor: "#f65801",
          backgroundColor: "#f65801",
          fill: false
        }, { 
          label: "Soustraction de données personnelles (art. 179novies CP)",
          data: [2,7,2,2,4,6,9,7,4,7],
          borderColor: "#c30008",
          backgroundColor: "#c30008",
          fill: false
        }
      ]
    },
    options: {
        animations: {
          tension: {
            duration: 4000,
            easing: 'linear',
            from: 0.8,
            to: 0,
            loop: false
        
            }
        },
        plugins:{
            legend:{
                labels:{
                    font:{
                        size:24,
                        family: "helvetica",
                    }
                }
            }
        },
        responsive: true,
        scales:{
            x: {
                display: true,
                title:{
                    display: true,
                    text: "années",
                    color:"grey",
                    font:{
                        family:"helvetica",
                        size: 20,
                    }
                    }
                },
            y:{
                display: true,
                title:{
                    display:true,
                    text:"nombre de d'infractions",
                    color:"grey",
                    font:{
                        family:"helvetica",
                        size: 20,
                    }
                }
            }
        },
        
    
    }
    
    
  });
}


  
// request data using d3
d3
  .csv("data.csv")
  .then(makechart);