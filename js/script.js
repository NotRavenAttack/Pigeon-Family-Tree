// Add Child functionality
function addChild(parentId) {
    let parent = document.getElementById(parentId);
    let childrenContainer = document.getElementById('children');

    // Limit to 2 children per parent
    if (childrenContainer.children.length < 2) {
        let childBox = document.createElement('div');
        childBox.classList.add('pigeon-box');
        childBox.innerHTML = `
            <h3>Child ${childrenContainer.children.length + 1}</h3>
            <button onclick="editPigeon('child${childrenContainer.children.length + 1}')">Edit</button>
            <button onclick="addSpouse('child${childrenContainer.children.length + 1}')">Add Spouse</button>
            <button onclick="addChild('child${childrenContainer.children.length + 1}')">Add Child</button>
        `;

        childBox.id = `child${childrenContainer.children.length + 1}`;
        childrenContainer.appendChild(childBox);

        // Create a new line from parent to child
        let line = document.createElement('div');
        line.classList.add('pigeon-line');
        document.body.appendChild(line);

        // Animate fade-in for the child
        setTimeout(() => {
            childBox.style.opacity = 1;
        }, 100);

    } else {
        alert("A pigeon can only have up to 2 children.");
    }
}

// Add Spouse functionality
function addSpouse(pigeonId) {
    let pigeon = document.getElementById(pigeonId);
    let spouseBox = document.createElement('div');
    spouseBox.classList.add('pigeon-box');
    spouseBox.innerHTML = `
        <h3>Spouse</h3>
        <button onclick="editPigeon('spouse')">Edit</button>
    `;

    spouseBox.id = 'spouse';
    pigeon.parentElement.insertBefore(spouseBox, pigeon.nextSibling);
}

// Edit Pigeon functionality
function editPigeon(pigeonId) {
    let pigeon = document.getElementById(pigeonId);
    let name = prompt("Edit Name:", pigeon.querySelector('h3').innerText);
    if (name) {
        pigeon.querySelector('h3').innerText = name;
    }
}
