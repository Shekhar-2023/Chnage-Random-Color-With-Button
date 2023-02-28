const button= document.querySelector("button")
const body= document.querySelector("body")
const color=['red','yellow','green','blue','cyan','maroon','white','black','pink','purple']
body.style.backgroundColor='violet'
button.addEventListener('click', changeColor)
function changeColor(){
    const colorIndex=parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorIndex]
}
