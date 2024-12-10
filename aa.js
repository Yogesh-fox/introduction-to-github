<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Timer</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <style>
        .box {
            background: rgba(7, 57, 83, 0.428);
            color: white;
            font-size: 24px;
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="box">0</div>
    <br>
    <button id="startbtn">Start</button>
    <button id="stopbtn">Stop</button>
    <button id="restartbtn">Restart</button>

    <script>
        $(document).ready(function () {
            let x = 0;  // Counter ko 'x' se define kiya
            let y;      // Timer ko 'y' se define kiya

            // Start button
            $('#startbtn').click(function () {
                if (!y) {  // Agar timer chal nahi raha hai
                    y = setInterval(function () {
                        x++;  // Counter ko increment karo
                        $('.box').text(x);  // Box mein counter dikhaye
                    }, 1000);
                }
            });

            // Stop button
            $('#stopbtn').click(function () {
                clearInterval(y);  // Timer ko rok do
                y = null;  // Timer ko null set karo
            });

            // Restart button
            $('#restartbtn').click(function () {
                clearInterval(y);  // Timer ko rok do
                y = null;  // Timer ko null set karo
                x = 0;  // Counter ko reset karo
                $('.box').text(x);  // Box mein 0 dikhaye
            });
        });
    </script>
</body>
</html>
