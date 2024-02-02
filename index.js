// Add your code here
function submitData() {
    return (    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Correct syntax with single quotes around 'Content-Type'
            'Accept': 'application/json', // Also make sure 'Accept' is in single quotes
        },
        body: JSON.stringify({
            name: "Steve",
            email: 'steve@steve.com',
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Access the converted object (parsed JSON)
        console.log('Parsed Data:', data);

        // Find the new id from the response data
        const newId = data.id;

        // Append the new id to the DOM
        appendIdToDOM(newId);
    })
    .catch(error => {
        console.error('Error:', error);
    }));
}
