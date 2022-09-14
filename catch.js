const randomNumber = () => Math.round(Math.random() * 255);
const randomColor = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
const randomX = () => Number(Math.round(Math.random()* 1000))
// console.log(randomX);
const randomY = () => Number(Math.round(Math.random()* 800))


// console.log(randomColor());
document.querySelector('button').addEventListener("click", (e)=>{
    e.stopPropagation();
    document.querySelector('button').style.backgroundColor = randomColor();
    document.querySelector('.gamearea').style.backgroundColor = randomColor();
    document.querySelector('.catch-box').style.left = randomX() + 'px'
    document.querySelector('.catch-box').style.top = randomY() + 'px'
    document.querySelector('h1').style.display= 'none'
});

document.querySelector('.gamearea').addEventListener("click", ()=>{
    window.alert('Thanks for the game')
    location.reload()

});


