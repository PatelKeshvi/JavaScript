const API_URL = 'http://localhost:3000'; // Adjust as necessary

// Fetch all courses
export async function fetchCourses() {
    const response = await fetch(`${API_URL}/courses`);
    return response.json();
}

// Fetch a single course by ID
export async function fetchCourse(courseId) {
    const response = await fetch(`${API_URL}/courses/${courseId}`);
    return response.json();
}

// Create a new course
export async function createCourse(course) {
    const response = await fetch(`${API_URL}/courses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(course),
    });
    return response.json();
}

// Update an existing course
export async function updateCourse(courseId, course) {
    const response = await fetch(`${API_URL}/courses/${courseId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(course),
    });
    return response.json();
}

// Delete a course
export async function deleteCourse(courseId) {
    const response = await fetch(`${API_URL}/courses/${courseId}`, {
        method: 'DELETE',
    });
    return response.json();
}