<?php

if (isset($_GET['city'])) {
    $city = urlencode($_GET['city']);

    $apiKey = 'a52ef5d0a9fb309994eadb462a979c67';
    $url = "https://api.openweathermap.org/data/2.5/weather?q=$city&appid=$apiKey&units=metric";

    $response = file_get_contents($url);
    $weatherData = json_decode($response, true);

    if (isset($weatherData['cod']) && $weatherData['cod'] === 200) {

        header('Content-Type: application/json');
        echo json_encode($weatherData);
    } else {

        header('Content-Type: application/json');
        echo json_encode(['error' => ['message' => 'City not found']]);
    }
}
