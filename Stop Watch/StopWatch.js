let b1 = document.getElementById("button1");
let b2 = document.getElementById("button2");
let b3 = document.getElementById("button3");
let [hours,min,sec,nsec] = [0,0,0,0];
let display = document.getElementById("displaytime");
function stopwatch()
{
nsec++;
if(nsec==100)
{
    nsec=0;
    sec++;
    if(sec==60)
    {
        sec=0;
        min++;
        if(min==60)
        {
            min=0;
            hours++;
        }
    }
}
let h = hours < 10 ? "0" + hours : hours;
let m = min < 10 ? "0" + min : min;
let s = sec < 10 ? "0" + sec : sec;
let ns = nsec < 10 ? "0" + nsec : nsec;
display.innerHTML = h + ":" + m + ":" + s + ":" + ns;
}
let timer = null;
function start()
{
if(timer !== null)
{
    clearInterval(timer);
}
timer = setInterval(stopwatch,10);
}
function stop()
{
clearInterval(timer);
}
function reset()
{
clearInterval(timer);
[hours,min,sec,nsec] = [0,0,0,0];
display.innerHTML = "00:00:00:00";
}