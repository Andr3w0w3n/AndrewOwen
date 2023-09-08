const rectangle = document.getElementById('render-node');

let isDragging = false;
let offsetX, offsetY;

rectangle.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - rectangle.getBoundingClientRect().left;
    offsetY = e.clientY - rectangle.getBoundingClientRect().top;
    rectangle.style.cursor = 'grabbing'; // Change cursor while dragging
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    // Calculate the new position
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    // Get the viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate the maximum allowed positions
    const maxX = viewportWidth - rectangle.clientWidth;
    const maxY = viewportHeight - rectangle.clientHeight;

    // Restrict the position within the viewport boundaries
    const clampedX = Math.min(Math.max(0, x), maxX);
    const clampedY = Math.min(Math.max(0, y), maxY);

    // Update the rectangle's position
    rectangle.style.left = clampedX + 'px';
    rectangle.style.top = clampedY + 'px';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    rectangle.style.cursor = 'grab';
});

