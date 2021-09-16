
$(function()
{
  
    const labels =
    [

    ];

    const data =
    {
        labels: labels,
        datasets: [{
            label: 'Berlin Hava Durumu',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [],
        }]
    };

    let grafik;/* = new Chart(document.getElementById("grafik"),
    {
        type: 'line',
        data: data,
        options: {}
    })*/






    $("#btn").click(function()
    {
        // fetching

        $.ajax({
            url: "https://api.open-meteo.com/v1/forecast?latitude=" +
                    $("#en").val() +
                    "&longitude=" +
                    $("#boy").val() + 
                    "&hourly=temperature_2m",

            dataType: "json",
            success: function(cevap)
            {


                for(let i = 0; i < 24; i += 3)
                {
                    labels.push(cevap.hourly.time[i].substr(-5));
                    data.datasets[0].data.push(cevap.hourly.temperature_2m[i]);
                }

                grafik = new Chart(document.getElementById("grafik"),
                {
                    type: 'line',
                    data: data,
                    options: {}
                })


            }
        });
    });








})