function positionNodes() {
    const nodesContainer = document.getElementById('nodes-container');
    const nodes = Array.from(nodesContainer.querySelectorAll('.node'));

    const numNodes = nodes.length; // Number of nodes
    const containerWidth = nodesContainer.clientWidth; // Width of the nodes container
    const nodeWidth = 150; // Fixed width of each node
    const spacing = (containerWidth - numNodes * nodeWidth) / (numNodes - 1);

    // Padding for the "About" and "Resume" nodes
    const padding = 20; // Adjust this value as needed

    // Set the position of each node
    nodes.forEach((node, index) => {
        let newPosition;

        if (index === 0) {
            // First node ("About") with padding on the left
            newPosition = padding;
        } else if (index === numNodes - 1) {
            // Last node ("Resume") with padding on the right
            newPosition = containerWidth - nodeWidth - padding;
        } else {
            // All other nodes evenly spaced
            newPosition = index * (nodeWidth + spacing);
        }

        node.style.left = newPosition + 'px';
    });
}

// Initial positioning of nodes
positionNodes();

// Update node positions when the window is resized
window.addEventListener('resize', positionNodes);


/*letter dragging*/
