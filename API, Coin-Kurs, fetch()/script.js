

let labels =
[
];

let grafikData =
{
    labels: labels,
    datasets:
    [
        {
            label: 'Bitcoin-Kurs',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [],
        },
    ]
};

const config =
{
    type: 'line',
    data: grafikData,
    options: {}
};







const app = new Vue({
    el: "#app",
    data:
    {
        buttons: [],
        ergebnis: ""
    },
    created()
    {
        fetch("https://coinranking1.p.rapidapi.com/coins",
        {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                "x-rapidapi-key": "f464c0068amsh83cba0ecdfd1549p1171b8jsn78f7366baa2b"
            }
        })
        .then(response => response.json())
        .then(json => antwortGekommen(json))
    },
    methods:
    {
        btnClick(index)
        {
            let id = this.buttons[index].id;

            fetch("https://coinranking1.p.rapidapi.com/coin/" + id + "/history/1y",
            {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                    "x-rapidapi-key": "f464c0068amsh83cba0ecdfd1549p1171b8jsn78f7366baa2b"
                }
            })
            .then(antwort => antwort.json())
            .then(function(json)
            {
                grafikData.datasets[0].label = app.buttons[index].name + "-Kurs";

                for(let i = 0; i < json.data.history.length; i += 30)
                {
                    const datum = new Date(json.data.history[i].timestamp)
                    labels.push(datum.getDate() + "." + (datum.getMonth()+1) + "." + datum.getFullYear());
                    grafikData.datasets[0].data.push(json.data.history[i].price);
                }

                new Chart(
                    document.getElementById("myChart"),
                    config
                )
            })
        }
    }
})


function antwortGekommen(objekt)
{
    let liste = objekt.data.coins;

    for(let i = 0; i < 10; i++)
    {
        app.buttons.push({
            name: liste[i].name,
            id: liste[i].id
        })
    }
}

















