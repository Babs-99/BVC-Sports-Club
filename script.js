$(document).ready(function() {
    $('#radioForm').click(function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get the selected radio button value
        var status = $('input[name="status"]:checked').val();
        var userID = $('input[name="userID"]').val();
        var fullName = $('input[name="fullName"]').val();
        var address =$('input[name="address"]').val();


        // $.ajax({
        //     url: '/api/data',
        //     method: 'GET',
        //     dataType: 'json',
        //     success: function(response) {
        //       var userData = $('#userData');
        //       userData.append('<p>Name: ' + response.name + '</p>');
        //       userData.append('<p>Age: ' + response.age + '</p>');
        //       userData.append('<p>City: ' + response.city + '</p>');
        //     },
        //     error: function(xhr, status, error) {
        //       console.log('Error:', error);
        //     }
        //   });

        // Send the selected value to the server
        $.ajax({
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            url: 'http://localhost:3000/register',
            // url: 'https://registrationwebsitebackend-2.onrender.com',
            
            data: { 
                studentNumber: userID,
                fullName: fullName,
                address: address,
                status: status },
            success: function(response) {
                console.log('Data saved successfully:', response);
            },
            error: function(error) {
                console.log('Error saving data:', error);
            }
        });
    });
});
