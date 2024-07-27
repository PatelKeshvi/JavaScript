import { createSidebar } from '../components/sidebar.js';

document.body.insertAdjacentHTML('afterbegin', createSidebar());

// Fetch courses from JSON server
const fetchCourses = async() => {
    const response = await fetch('http://localhost:3000/courses');
    const courses = await response.json();
    return courses;
};

// Display courses
const displayCourses = async() => {
    const courses = await fetchCourses();
    const coursesContainer = document.querySelector('.courses');
    courses.forEach(course => {
        const card = document.createElement('div');
        card.classList.add('course-card');
        card.innerHTML = `
      <img src="${course.image}" alt="${course.title}">
      <h3>${course.title}</h3>
      <p>${course.description}</p>
    `;
        coursesContainer.appendChild(card);
    });
};

displayCourses();