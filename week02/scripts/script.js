
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Event listener for the Add Chapter button
button.addEventListener('click', function () {

    // Check if the input is not empty
    if (input.value.trim() !== '') {

        // Create a new list item
        const li = document.createElement('li');

        // Add the input value to the list item
        li.textContent = input.value;

        // Create a delete button
        const deleteButton = document.createElement('button');

        // Add the X symbol to the delete button
        deleteButton.textContent = '❌';

        // Add an accessible label
        deleteButton.setAttribute('aria-label', 'Remove chapter');

        // Add the delete button inside the list item
        li.append(deleteButton);

        // Add an event listener to the delete button
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Add the list item to the unordered list
        list.append(li);

        // Clear the input field
        input.value = '';

        // Put the cursor back in the input field
        input.focus();

    } else {
        // If the input is empty, focus the input field
        input.focus();
    }

});