const info = document.getElementById('info');
// Parse URL parameters
const urlParams = new URLSearchParams(window.location.search);
const userID = urlParams.get('userID');
const fullName = urlParams.get('fullName');
const address = urlParams.get('address');
const status = urlParams.get('status');

// Display registration info on the page

info.innerHTML = `
    <p><strong>Student Number:</strong> ${userID}</p>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Status:</strong> ${status}</p>
`;

if(status == "Volunteer"){
    info.innerHTML += 
    `<p><strong>Fee:</strong> $0</p>`
}
if(status == "Staff"){
    info.innerHTML += 
    `<p><strong>Fee:</strong> $50</p>`
}
if(status == "Student"){
    info.innerHTML += 
    `<p><strong>Fee:</strong> $10</p>`
}