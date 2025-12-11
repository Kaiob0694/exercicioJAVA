const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")

const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
const img3 = document.getElementById("img3")
const img4 = document.getElementById("img4")
const img5 = document.getElementById("img5")
const img6 = document.getElementById("img6")

const led1 = document.querySelector("#img1 img")
const led2 = document.querySelector("#img2 img")
const led3 = document.querySelector("#img3 img")
const led4 = document.querySelector("#img4 img")
const led5 = document.querySelector("#img5 img")
const led6 = document.querySelector("#img6 img")

btn1.addEventListener("click", function() {
    btn1.style.backgroundColor = "rgba(231, 234, 4, 0.62)"
    img1.style.backgroundColor = "rgb(37, 37, 37)"
    led1.classList.toggle("led")
})


btn2.addEventListener("click", function() {
    btn2.style.backgroundColor = "rgba(231, 234, 4, 0.62)"
    img2.style.backgroundColor = "rgb(37, 37, 37)"
    led2.classList.toggle("led")
})

btn3.addEventListener("click", function() {
    btn3.style.backgroundColor = "rgba(231, 234, 4, 0.62)"
    img3.style.backgroundColor = "rgb(37, 37, 37)"
    led3.classList.toggle("led");
})

btn4.addEventListener("click", function() {
    btn4.style.backgroundColor = "rgba(231, 234, 4, 0.62)"
    img4.style.backgroundColor = "rgb(37, 37, 37)"
    led4.classList.toggle("led");
})

btn5.addEventListener("click", function() {
    btn5.style.backgroundColor = "rgba(231, 234, 4, 0.62)"
    img5.style.backgroundColor = "rgb(37, 37, 37)"
    led5.classList.toggle("led");
})

btn6.addEventListener("click", function() {
    btn6.style.backgroundColor = "rgba(231, 234, 4, 0.62)"
    img6.style.backgroundColor = "rgb(37, 37, 37)"
    led6.classList.toggle("led");
})