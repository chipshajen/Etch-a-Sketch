let boxesHigh = 16
let boxesWide = 16

document.documentElement.style.setProperty('--grid-size', boxesWide)

const container = document.querySelector(".container");





createGrid(boxesWide, boxesHigh)
setupColoringListeners()



const button = document.querySelector(".button")
button.addEventListener("click", () => {
    boxesWide = boxesHigh = +prompt("How many boxes wide and high?")

    container.replaceChildren();

    document.documentElement.style.setProperty('--grid-size', boxesWide)

    createGrid(boxesWide, boxesHigh)
    setupColoringListeners()
})

function createGrid(boxesWide, boxesHigh){
    

    for(let i = 0; i < (boxesHigh * boxesWide); i++){

        const pElement = document.createElement('div')

        pElement.setAttribute("class", "box")

        container.appendChild(pElement)
    }
} 

function setupColoringListeners(){
    const boxes = document.querySelectorAll(".box")

    boxes.forEach(box => {
        box.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "black";
    
    })
    })
    
    boxes.forEach(box => {
        box.addEventListener("mouseleave", (event) => {
            event.target.style.backgroundColor = "";
    })
    })
}
