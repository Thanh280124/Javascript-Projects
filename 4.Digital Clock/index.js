const hour = document.getElementById('hours');
const min = document.getElementById('mins');
const second = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

function clockDigital(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if(h > 12){
        h = h - 12;
        ampm.innerHTML = 'PM';
    }

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    hour.innerHTML = h;
    min.innerHTML = m;
    second.innerHTML = s;

    setTimeout(() =>{
        clockDigital();
    })

    
}

clockDigital();