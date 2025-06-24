document.querySelector('body').addEventListener('mousemove', eyeBall);


function eyeBall() {
const eyes = document.querySelectorAll('.eye');
eyes.forEach(eye => {
    const rect = eye.getBoundingClientRect();
    const eyeX = rect.left + eye.clientWidth / 2;
    const eyeY = rect.top + eye.clientHeight / 2;

    let radian = Math.atan2(event.clientX - eyeX, event.clientY - eyeY);
    let rotate = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = `rotate(${rotate}deg)`;
  });
}