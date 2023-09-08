const viewerNode = document.getElementById('viewer-node');
let isDragging = false;
let offsetX, offsetY;

viewerNode.addEventListener('mousedown', (e) => {
    isDragging = true;

    // Calculate the offsets relative to the mouse position within the viewer node
    offsetX = e.clientX - viewerNode.getBoundingClientRect().left;
    offsetY = e.clientY - viewerNode.getBoundingClientRect().top;

    viewerNode.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    // Calculate the new position of the viewer node
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;

    // Get the dimensions of the viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate the boundaries to keep the viewer node within the viewport
    const maxX = viewportWidth - viewerNode.clientWidth;
    const maxY = viewportHeight - viewerNode.clientHeight;

    // Clamp the new position within the boundaries
    const clampedX = Math.min(Math.max(0, newX), maxX);
    const clampedY = Math.min(Math.max(0, newY), maxY);

    viewerNode.style.left = clampedX + 'px';
    viewerNode.style.top = clampedY + 'px';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    viewerNode.style.cursor = 'grab';
});
