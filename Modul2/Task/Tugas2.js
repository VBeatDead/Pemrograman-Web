document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const namaInput = document.getElementById("namaInput");
        const emailInput = document.getElementById("emailInput");
        const alamatInput = document.getElementById("alamatInput");

        if (namaInput.value.trim() === "" || emailInput.value.trim() === "" || alamatInput.value.trim() === "") {
            alert("Harap isi semua input!");
            return;
        }

        alert("Data berhasil dikirim!");
        //alert harap isi semua input
    });
});