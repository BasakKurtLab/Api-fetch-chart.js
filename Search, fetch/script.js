
const results = document.getElementById("results");

let letzteMitAntwort = false;

function tip(el)
{
    if(letzteMitAntwort == false)
        results.innerHTML = "";

    const s = el.value.toLowerCase();
    if(s.length < 2)
    {
        results.style.display = "";
        return;
    }

    // fetch data from server
    fetch("http://localhost/produktSuchen.php?q=" + s)
    .then(function(antwort)
    {
        return antwort.json();
    })
    .then(function(data)
    {
        results.innerHTML = "";
        if(data.length == 0)
        {
            results.style.display = "";
            letzteMitAntwort = false;
            return
        }

        for(treffer of data)
        {
            const div = document.createElement("div");
            div.innerHTML = treffer;
            results.appendChild(div);
        }

        letzteMitAntwort = true;
        
        results.style.display = "block";
    })
    .catch(function(reason)
    {
        // Fehler bei der Anfrage (Request)
    })


    
}