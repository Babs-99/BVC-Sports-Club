const info = document.getElementById('info');

const urlParams = new URLSearchParams(window.location.search);
const userID = urlParams.get('userID');
const fullName = urlParams.get('fullName');
const address = urlParams.get('address');
const status = urlParams.get('status');

info.innerHTML = `
    <p><b>Student Number:</b> ${userID}</p>
    <p><b>Full Name:</b> ${fullName}</p>
    <p><b>Address:</b> ${address}</p>
    <p><b>Status:</b> ${status}</p>
`;

if(status == "Volunteer"){
    info.innerHTML += 
    `<p><b>Fee:</b> $0</p>`
}
if(status == "Staff"){
    info.innerHTML += 
    `<p><b>Fee:</b> $50</p>`
}
if(status == "Student"){
    info.innerHTML += 
    `<p><b>Fee:</b> $10</p>`
}