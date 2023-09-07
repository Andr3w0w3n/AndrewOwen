const rectangle = document.getElementById('draggable-rectangle');

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
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    rectangle.style.left = x + 'px';
    rectangle.style.top = y + 'px';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    rectangle.style.cursor = 'grab';
});