var svgCircle = document.getElementById("svgCircle");
var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");
var step4 = document.getElementById("step4");
var step5 = document.getElementById("step5");
var main = document.getElementById("main");
var userBox = document.getElementById("userBox");

main.style.backgroundImage = "url('./assets/x_images/original/pexels-photo-1181354.jpeg')";


step1.addEventListener('click', () => {
    svgCircle.style.strokeDashoffset = "1004";
    main.style.backgroundImage = "url('./assets/x_images/original/pexels-photo-546819.jpeg')";
    userBox.style.top = "-500px";
});
step2.addEventListener('click', () => {
    svgCircle.style.strokeDashoffset = "753";
    main.style.backgroundImage = "url('./assets/x_images/original/pexels-photo-1148820.jpeg')";
    userBox.style.top = "-1050px";
});
step3.addEventListener('click', () => {
    svgCircle.style.strokeDashoffset = "502";
    main.style.backgroundImage = "url('./assets/x_images/original/pexels-photo-325229.jpeg')";
    userBox.style.top = "-1600px";
});
step4.addEventListener('click', () => {
    svgCircle.style.strokeDashoffset = "251";
    main.style.backgroundImage = "url('./assets/x_images/original/pexels-photo-1181269.jpeg')";
    userBox.style.top = "-2150px";
});
step5.addEventListener('click', () => {
    svgCircle.style.strokeDashoffset = "0";
    main.style.backgroundImage = "url('./assets/x_images/original/pexels-photo-1181354.jpeg')";
    userBox.style.top = "50px";
});


/*   modelo buscando imagem direto da WEB

main.style.backgroundImage = "url('https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg')";


step1.addEventListener('click', () => {
    svgCircle.style.strokeDashoffset = "1004";
    main.style.backgroundImage = "url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    userBox.style.top = "-500px";
});
step2.addEventListener('click', () => {
    svgCircle.style.strokeDashoffset = "753";
    main.style.backgroundImage = "url('https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    userBox.style.top = "-1050px";
});
step3.addEventListener('click', () => {
    svgCircle.style.strokeDashoffset = "502";
    main.style.backgroundImage = "url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    userBox.style.top = "-1600px";
});
step4.addEventListener('click', () => {
    svgCircle.style.strokeDashoffset = "251";
    main.style.backgroundImage = "url('https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    userBox.style.top = "-2150px";
});
step5.addEventListener('click', () => {
    svgCircle.style.strokeDashoffset = "0";
    main.style.backgroundImage = "url('https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg')";
    userBox.style.top = "50px";
});

*/