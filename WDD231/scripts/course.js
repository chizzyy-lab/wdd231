const courses = [
  { code: "WDD130", name: "Web Fundamentals", category: "WDD", credits: 2, completed: true },
  { code: "WDD131", name: "Responsive Design", category: "WDD", credits: 2, completed: false },
  { code: "WDD231", name: "JavaScript Development", category: "WDD", credits: 2, completed: true },
  { code: "CSE110", name: "Intro to Programming", category: "CSE", credits: 3, completed: false },
  { code: "CSE210", name: "Data Structures", category: "CSE", credits: 3, completed: true }
];


const container = document.getElementById("courseContainer");
const creditDisplay = document.getElementById("creditTotal");

function renderCourses(courseList) {
  container.innerHTML = "";
  let totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
  creditDisplay.textContent = `Total Credits: ${totalCredits}`;

  courseList.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    card.classList.add(course.completed ? "completed" : "incomplete");
    card.innerHTML = `
      <h4>${course.code} - ${course.name}</h4>
      <p>Category: ${course.category}</p>
      <p>Credits: ${course.credits}</p>
      <p>Status: ${course.completed ? "Completed ✅" : "In Progress ⏳"}</p>
    `;
    container.appendChild(card);
  });
}

// Initial render
renderCourses(courses);

// Filter buttons
document.getElementById("allBtn").addEventListener("click", () => renderCourses(courses));
document.getElementById("wddBtn").addEventListener("click", () => {
  const filtered = courses.filter(course => course.category === "WDD");
  renderCourses(filtered);
});
document.getElementById("cseBtn").addEventListener("click", () => {
  const filtered = courses.filter(course => course.category === "CSE");
  renderCourses(filtered);
});