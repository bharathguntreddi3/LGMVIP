var registrations = [];

document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var genderElements = document.getElementsByName("gender[]");
    var skillsElements = document.getElementsByName("skills[]");

    // Gather selected gender values
    var gender = [];
    genderElements.forEach(function(element) {
        if (element.checked) {
            gender.push(element.value);
        }
    });

    // Gather selected skills values
    var skills = [];
    skillsElements.forEach(function(element) {
        if (element.checked) {
            skills.push(element.value);
        }
    });

    // Store registration details
    var registration = {
        name: name,
        email: email,
        phone: phone,
        gender: gender,
        skills: skills
    };
    registrations.push(registration);

    // Generate output HTML
    var outputHTML = "<h3>Enrolled Details:</h3>";
    registrations.forEach(function(registration) {
        outputHTML += "<div class='output-row'><strong>Name:</strong> " + registration.name + "</div>";
        outputHTML += "<div class='output-row'><strong>Email:</strong> " + registration.email + "</div>";
        outputHTML += "<div class='output-row'><strong>Phone:</strong> " + registration.phone + "</div>";
        outputHTML += "<div class='output-row'><strong>Gender:</strong> " + registration.gender.join(", ") + "</div>";
        outputHTML += "<div class='output-row'><strong>Skills:</strong> " + registration.skills.join(", ") + "</div>";
        outputHTML += "<hr>";
    });

    // Display output on the page
    document.getElementById("output").innerHTML = outputHTML;
});

function clearForm() {
    document.getElementById("registration-form").reset();
}