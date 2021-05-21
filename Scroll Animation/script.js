const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()
// if you don't want to show anything until the scroll if fired, delete the initiation of the function

function checkBoxes() {
    // console.log(window.innerHeight);
    const triggerBottom = window.innerHeight / 5 * 4
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
    // as soon as the top of the next box is less than the trigger bottom point, which is less than the entire hight of the viewport it's gonna come in because it adds that class of show    
}