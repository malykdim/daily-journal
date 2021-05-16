const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile_img');
const aName = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 1500);

function getData() {
    header.innerHTML = '<img src="./justin-kauffman-fpoHihXiMhg-unsplash.jpg" alt="laptop outdoors"/>';
    title.innerHTML = 'Lorem ipsum dolor sit amet';
    excerpt.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, eos.';
    profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/women/14.jpg" alt="profile">';
    aName.innerHTML = 'Esme Ducker';
    date.innerHTML = 'May 16, 2021';
    
    animatedBgs.forEach(bg => bg.classList.remove('animated-bg'));
    animatedBgTexts.forEach(bg => bg.classList.remove('animated-bg-text'));
}