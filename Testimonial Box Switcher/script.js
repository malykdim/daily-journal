const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Iva Angolff',
        position: 'Content Writer',
        photo: 'https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum necessitatibus est, ratione sunt, quos quasi neque dolorem corporis deleniti illum assumenda praesentium tempore eum recusandae id magni cum similique tenetur harum! Cupiditate, architecto expedita!'
    },
    {
        name: 'Eddie Jacson',
        position: 'Musician',
        photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum necessitatibus est, ratione sunt, quos quasi neque dolorem corporis deleniti illum assumenda praesentium tempore eum recusandae id magni cum similique tenetur harum! Cupiditate, architecto expedita!'
    },
    {
        name: 'Ray McColin',
        position: 'Developer',
        photo: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum necessitatibus est, ratione sunt, quos quasi neque dolorem corporis deleniti illum assumenda praesentium tempore eum recusandae id magni cum similique tenetur harum! Cupiditate, architecto expedita!'
    },
    {
        name: 'Ruth Morales',
        position: 'Designer',
        photo: 'https://images.unsplash.com/photo-1520529277867-dbf8c5e0b340?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum necessitatibus est, ratione sunt, quos quasi neque dolorem corporis deleniti illum assumenda praesentium tempore eum recusandae id magni cum similique tenetur harum! Cupiditate, architecto expedita!'
    },
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum necessitatibus est, ratione sunt, quos quasi neque dolorem corporis deleniti illum assumenda praesentium tempore eum recusandae id magni cum similique tenetur harum! Cupiditate, architecto expedita!'
    },
    {
        name: 'Isack Kotuga',
        position: 'Photographer',
        photo: 'https://images.unsplash.com/photo-1531384698654-7f6e477ca221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=345&q=80',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum necessitatibus est, ratione sunt, quos quasi neque dolorem corporis deleniti illum assumenda praesentium tempore eum recusandae id magni cum similique tenetur harum! Cupiditate, architecto expedita!'
    },
    {
        name: 'Mark Williams',
        position: 'Choreographer',
        photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum necessitatibus est, ratione sunt, quos quasi neque dolorem corporis deleniti illum assumenda praesentium tempore eum recusandae id magni cum similique tenetur harum! Cupiditate, architecto expedita!'
    },
    {
        name: 'Jane Huston',
        position: 'HR',
        photo: 'https://images.unsplash.com/photo-1519362909365-f8591adb630e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum necessitatibus est, ratione sunt, quos quasi neque dolorem corporis deleniti illum assumenda praesentium tempore eum recusandae id magni cum similique tenetur harum! Cupiditate, architecto expedita!'
    },    
    {
        name: 'Jacky Bo',
        position: 'Creative Director',
        photo: 'https://images.unsplash.com/photo-1579105728744-9d6b14a45389?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=330&q=80',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum necessitatibus est, ratione sunt, quos quasi neque dolorem corporis deleniti illum assumenda praesentium tempore eum recusandae id magni cum similique tenetur harum! Cupiditate, architecto expedita!'
    },    
    {
        name: 'Joe Caponne',
        position: 'Executive Director',
        photo: 'https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=395&q=80',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum necessitatibus est, ratione sunt, quos quasi neque dolorem corporis deleniti illum assumenda praesentium tempore eum recusandae id magni cum similique tenetur harum! Cupiditate, architecto expedita!'
    },
]

let idx = 1

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];
    
    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position
    
    idx++
    
    if (idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 2000)

