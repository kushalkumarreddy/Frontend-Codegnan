  let seconds = 0;
        let interval;

        function displayTime() {
            let hours = Math.floor(seconds / 3600);
            let minutes = Math.floor((seconds % 3600) / 60);
            let secs = seconds % 60;

            document.getElementById("time").innerHTML =
                String(hours).padStart(2, "0") + ":" +
                String(minutes).padStart(2, "0") + ":" +
                String(secs).padStart(2, "0");
        }

        function start() {
            if (interval) return;

            interval = setInterval(function () {
                seconds++;
                displayTime();
            }, 1000);
        }

        function stop() {
            clearInterval(interval);
            interval = null;
        }

        function reset() {
            clearInterval(interval);
            interval = null;
            seconds = 0;
            displayTime();
        }