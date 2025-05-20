
fetch('courses.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('course-list');
    data.courses.forEach(course => {
      const li = document.createElement('li');
      li.textContent = course;
      list.appendChild(li);
    });
  });
