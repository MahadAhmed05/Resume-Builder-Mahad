function toggleVisibility(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        if (section.style.display === "none") {
            section.style.display = "block";
        }
        else {
            section.style.display = "none";
        }
    }
}
function toggleForm() {
    var form = document.getElementById("resume-form");
    var display = document.getElementById("resume-display");
    if (form && display) {
        if (form.style.display === "none") {
            form.style.display = "block";
            display.style.display = "none";
        }
        else {
            form.style.display = "none";
            display.style.display = "block";
        }
    }
}
function updateResume() {
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact")
        .value;
    var education = document.getElementById("education")
        .value;
    var skill1 = document.getElementById("skill1").value;
    var skill2 = document.getElementById("skill2").value;
    var skill3 = document.getElementById("skill3").value;
    var experience = document.getElementById("experience")
        .value;
    document.getElementById("display-name").innerText = name;
    document.getElementById("display-contact").innerText = "Contact: ".concat(contact);
    document.getElementById("display-education").innerText =
        education;
    document.getElementById("display-experience").innerText =
        experience;
    document.getElementById("display-skills").innerHTML = "\n      <li>".concat(skill1, "</li>\n      <li>").concat(skill2, "</li>\n      <li>").concat(skill3, "</li>\n    ");
    toggleForm();
}
