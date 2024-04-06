$(document).ready(function() {
    $('#radioButton').click(function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get the selected radio button value
        var status = $('input[name="status"]:checked').val();
        var userID = $('input[name="userID"]').val();
        var fullName = $('input[name="fullName"]').val();
        var address =$('input[name="address"]').val();

        console.log(status, userID, fullName, address);


        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'http://localhost:3000/register',
            // url: 'https://registrationwebsitebackend-2.onrender.com',
            
            data: { 
                userID: userID,
                fullName: fullName,
                address: address,
                status: status },
            success: function(response) {
                console.log('Data saved successfully:', response);
                window.location.href = '/page/index.html?userID=' + encodeURIComponent(response.userID) +
                '&fullName=' + encodeURIComponent(response.fullName) +
                '&address=' + encodeURIComponent(response.address) +
                '&status=' + encodeURIComponent(response.status);
            },
            error: function(error) {
                console.log('Error saving data:', error);
            }
        });
    });
});
