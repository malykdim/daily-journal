const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://images.unsplash.com/photo-1520529277867-dbf8c5e0b340?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum necessitatibus est, ratione sunt, quos quasi neque dolorem corporis deleniti illum assumenda praesentium tempore eum recusandae id magni cum similique tenetur harum! Cupiditate, architecto expedita!'
    },
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum necessitatibus est, ratione sunt, quos quasi neque dolorem corporis deleniti illum assumenda praesentium tempore eum recusandae id magni cum similique tenetur harum! Cupiditate, architecto expedita!'
    },
    {
        name: 'Ruth Morales',
        position: 'Marketing',
        photo: 'https://images.unsplash.com/photo-1520529277867-dbf8c5e0b340?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum necessitatibus est, ratione sunt, quos quasi neque dolorem corporis deleniti illum assumenda praesentium tempore eum recusandae id magni cum similique tenetur harum! Cupiditate, architecto expedita!'
    },
]

let idx = 1

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];
    
    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    func.innerHTML = role
    
    idx++
    
    if (idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)

