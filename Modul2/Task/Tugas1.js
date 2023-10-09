function hitungPenjumlahan() {
    const bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    const bilangan2 = parseFloat(document.getElementById("bilangan2").value);

    if (isNaN(bilangan1) || isNaN(bilangan2)) {
        alert("Masukkan angka yang valid untuk kedua bilangan.");
    } else {
        const hasil = bilangan1 + bilangan2;
        alert("Hasil penjumlahan: " + hasil);
    }
}