let timer;
        let seconds = 0;
        let minutes = 0;
        let hours = 0;
        let isRunning = false;

        function startStopwatch() {
            if (!isRunning) {
                isRunning = true;
                timer = setInterval(updateStopwatch, 1000);
                document.getElementById('startBtn').textContent = 'Pause';
                document.getElementById('stopBtn').disabled = false;
            } else {
                isRunning = false;
                clearInterval(timer);
                document.getElementById('startBtn').textContent = 'Resume';
            }
        }

        function stopStopwatch() {
            isRunning = false;
            clearInterval(timer);
            document.getElementById('startBtn').textContent = 'Resume';
            document.getElementById('stopBtn').disabled = true;
        }

        function resetStopwatch() {
            isRunning = false;
            clearInterval(timer);
            seconds = 0;
            minutes = 0;
            hours = 0;
            document.getElementById('display').textContent = '00:00:00';
            document.getElementById('startBtn').textContent = 'Start';
            document.getElementById('stopBtn').disabled = false;
        }

        function updateStopwatch() {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            document.getElementById('display').textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
        }

        function formatTime(time) {
            return time < 10 ? '0' + time : time;
        }