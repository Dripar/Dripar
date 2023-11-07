<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather Dashboard</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <!-- Favicons -->
    <link href="../assets/img/favicon.ico" rel="icon">
    <link href="../assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@600&family=Raleway&display=swap" rel="stylesheet">
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f9f9f9;
            margin: 0;
        }

        .container {
            max-width: 400px;
            width: 100%;
            background: #FFF;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 24px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }

        .result {
            text-align: center;
            margin-top: 20px;
        }

        .heading .h1 {
            color: #4E6655;
            font-family: 'Jost', sans-serif;
            font-size: 24px;
            font-weight: 600;
        }

        .heading .p {
            color: #4E6655;
            text-align: center;
            font-family: 'Raleway', sans-serif;
            font-size: 18px;
        }

        .result .h1 {
            color: #5B83EA;
            font-family: 'Jost', sans-serif;
            font-size: 32px;
        }

        .result .p {
            color: #5B83EA;
            font-family: 'Raleway', sans-serif;
            font-size: 18px;
        }

        .choose .pa {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
        }

        .choose .pa .text {
            color: #4E6655;
            font-family: 'Raleway', sans-serif;
            font-size: 18px;
            text-transform: uppercase;
        }

        .choose .pa .buttons {
            display: flex;
            gap: 8px;
            margin-top: 16px;
        }

        .choose .pa .buttons .btn {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            padding: 0 16px;
            border-radius: 20px;
            border: 1px solid #4E6655;
            color: #4E6655;
            font-family: 'Raleway', sans-serif;
            font-size: 14px;
            font-weight: 500;
            text-transform: uppercase;
            cursor: pointer;
        }

        .choose .pa .buttons .btn.active {
            background: #4E6655;
            color: #FFF;
            font-weight: 600;
        }

        .choose .pa .input {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 16px;
        }

        .choose .pa .input input {
            width: 100%;
            border: 0;
            border-bottom: 1px solid #4b6653;
            color: #2c4934;
            font-family: 'Raleway', sans-serif;
            font-size: 18px;
            text-transform: uppercase;
            outline: none;
        }

        .choose .pa .cal {
            background: #5B83EA;
            color: #FFF;
            font-family: 'Raleway', sans-serif;
            font-size: 18px;
            font-weight: 600;
            text-align: center;
            border: none;
            cursor: pointer;
            margin-top: 20px;
            padding: 10px 20px;
            border-radius: 2px;
        }

        @media (max-width: 480px) {
            .container {
                padding: 16px;
            }

            .heading .h1 {
                font-size: 20px;
            }

            .heading .p {
                font-size: 16px;
            }

            .result .h1 {
                font-size: 28px;
            }

            .result .p {
                font-size: 16px;
            }

            .choose .pa .text {
                font-size: 16px;
            }

            .choose .pa .buttons .btn {
                height: 36px;
                font-size: 12px;
            }

            .choose .pa .buttons .btn.active {
                font-size: 12px;
            }

            .choose .pa .input input {
                font-size: 16px;
            }

            .choose .pa .cal {
                font-size: 16px;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="heading">
            <div class="h1">Weather Dashboard</div>
            <div class="p">Check current weather with Weather API</div>
        </div>
        <div class="result">
            <div id="weatherData"> </div>
        </div>
        <div class="choose">
            <div class="pa">
                <form id="weatherForm" action="">
                    <div class="input">
                        <input type="hidden" name="opration" id="opration" value="">
                        <input type="text" name="city" id="city" value="<?= (isset($number)) ? $number : '' ?>" placeholder="Enter city name">
                    </div>
                    <button type="submit" class="cal">Show Weather</button>
                </form>
            </div>
        </div>
    </div>

    <script>
        document.getElementById('weatherForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const city = document.getElementById('city').value;
            fetch(`get_weather.php?city=${city}`)
                .then(response => response.json())
                .then(data => {
                    const weatherDataDiv = document.getElementById('weatherData');
                    if (data.error) {
                        weatherDataDiv.innerHTML = `<p>Error: ${data.error.message}</p>`;
                    } else {
                        weatherDataDiv.innerHTML = `
                        <h1 class="h1">${data.main.temp} °C</h1>
                        <p class="p">${data.weather[0].description} | ${data.name}</p>
                        <p class="p">Wind Speed: ${data.wind.speed} m/s</p>
                        <p class="p">Humidity: ${data.main.humidity}%</p>
                        <p class="p">Pressure: ${data.main.pressure} hPa</p>
                        <p class="p">Visibility: ${data.visibility} meters</p>
                    `;
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        });
    </script>

</body>

</html>