document.addEventListener("DOMContentLoaded", function () {
    var saveButton = document.querySelector(".btn-primary");
    saveButton.addEventListener("click", function () {
        var firstName = document.getElementById("lg").value;
        if (firstName === "") {
            alert("First name cannot be empty!");
        } else {
            alert("Form saved successfully!");
        }
    });
});

var kembaliButton = document.getElementById("btn-kembali");
kembaliButton.addEventListener("click", function () {
    window.location.href = "index.html";
});

var resetButton = document.getElementById("btn-reset");
resetButton.addEventListener("click", function () {
    var inputFields = document.querySelectorAll("input[type=text], input[type=email], input[type=password], input[type=date], textarea, input[type=radio], input[type=checkbox], select");
    inputFields.forEach(function (input) {
        input.value = "";
    });
});
