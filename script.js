// Change text and modify styles
document.getElementById('change-text-btn').addEventListener('click', function () {
  const heading = document.getElementById('main-heading');
  heading.textContent = 'Text Changed via JavaScript!';
  heading.classList.toggle('highlight');

  const description = document.getElementById('description');
  description.style.backgroundColor = '#f0f0f0';
  description.style.padding = '10px';
});

// Add or remove an element
document.getElementById('toggle-element-btn').addEventListener('click', function () {
  const container = document.getElementById('box-container');
  const existingBox = document.getElementById('dynamic-box');

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const newBox = document.createElement('div');
    newBox.id = 'dynamic-box';
    newBox.textContent = 'This box was added!';
    newBox.style.border = '2px solid green';
    newBox.style.padding = '10px';
    newBox.style.marginTop = '10px';
    container.appendChild(newBox);
  }
});
