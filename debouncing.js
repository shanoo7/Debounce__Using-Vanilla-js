let input = document.querySelector('input')
let pp = document.querySelector('p')
input.addEventListener("input", debouncing)

let timer;
// To stop the unwanted call, for better performance optimisation.

function debouncing() {
    clearTimeout(timer)
    timer = setTimeout(() => {
        console.log(input.value)
        pp.innerHTML = `${input.value}`

    }, 400)
}
