<?php

    $q = $_GET["q"];

    $produkte = array
    (
        "Tasche",
        "Bosch Kühlschrank",
        "gebrauchter Kühlschrank",
        "AEG Kühlschrank",
        "Mini-Kühlschrank",
        "Arbeitshose",
        "Tisch",
        "Kühltasche",
        "Kühlbox",
        "Jacke",
        "Kühltruhe",
        "Hemd",
        "Kopftuch",
    );

    $ergebnis = array();

    for($i = 0; $i < count($produkte); $i++)
    {
        if(str_contains(strtolower($produkte[$i]), $q))
        {
            array_push($ergebnis, $produkte[$i]);
        }
    }

    echo(json_encode($ergebnis));
?>