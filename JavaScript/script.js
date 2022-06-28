//NEW (06/2022)

window.onload = () => localStorage.removeItem("rate")

document.querySelectorAll("input[type='button']").forEach(btn => {
    btn.onclick = (e) => {
        localStorage.setItem("rate", e.target.value)
        e.target.classList.add('checked')
        btn.onblur = (e) => {
            e.target.classList.remove('checked')
        }
    }
})

document.querySelector("form").onsubmit = (e) => {
    e.preventDefault()
    localStorage.getItem("rate") === null ? alert("Erro") : window.location.href = 'thanks.html'
}


//OLD VERSION (03/2022)

// const input = document.querySelectorAll("input[type = radio]");
// const submit = document.querySelector("input[type = submit]");
// const span = document.querySelector(".number");
// const numbers = document.querySelectorAll(".four");



// submit.addEventListener("click", function(e){
//     e.preventDefault()
//     const main1 = document.querySelector(".main-1");
//     const main2 = document.querySelector(".main-2");
//     main1.classList.toggle("displaynone");
//     main2.classList.remove("displaynone");
//     i;
// })

// let i = input.forEach(e => {
//     e.addEventListener("click", function(){
//         span.innerHTML = e.value;
//     })
// })

// numbers.forEach(e => {
//     e.addEventListener("click", function(){
//         e.style.backgroundColor = "orange"
//     })
// })