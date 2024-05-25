// toggle icon navbar


const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

const text = ['Developer', 'Engineer', 'Enthusiast'];
let index = 0;
let isDeleting = false;
let textIndex = 0;
let speed = 150; // Typing speed

function type() {
  const currentText = text[index];
  if (isDeleting) {
    document.getElementById('text').textContent = currentText.substring(0, textIndex - 1);
  } else {
    document.getElementById('text').textContent = currentText.substring(0, textIndex + 1);
  }

  textIndex = textIndex + (isDeleting ? -1 : 1);

  if (!isDeleting && textIndex === currentText.length + 1) {
    isDeleting = true;
    speed = 500;
  } else if (isDeleting && textIndex === 0) {
    isDeleting = false;
    speed = 150;
    index = (index + 1) % text.length;
  }

  setTimeout(type, speed);
}

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(type, 1000);
});


menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
      });
      document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
      sec.classList.add('show-animate');
    } else {
      sec.classList.remove('show-animate');
    }
  });
};

document.querySelector('#Hireme').addEventListener('click', function() {
  window.location.href = "https://www.linkedin.com/in/kshitij-varma-43b595285";
});

document.querySelector('#Talk').addEventListener('click', function() {
  document.querySelector("#contact").scrollIntoView({
    behavior: 'smooth'
  });
});

// Close dropdown menu items when clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  });
});
