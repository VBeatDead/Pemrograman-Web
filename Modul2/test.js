// Event listener yang menunggu hingga seluruh halaman dimuat.
window.addEventListener("load", () => {
  // Mendapatkan referensi ke elemen formulir untuk menambah tugas.
  const form = document.getElementById("add-task-form");

  // Mendapatkan referensi ke input untuk menambah tugas.
  const addtask = document.getElementById("add-task-input");

  // Mendapatkan referensi ke elemen yang akan menampilkan daftar tugas.
  const todotask_el = document.getElementById("todo-tasks");

  // Menambahkan event listener ke formulir untuk menangani penambahan tugas saat formulir disubmit.
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Mencegah perilaku default formulir (mengirimkan ke server).

    // Mendapatkan nilai dari input tugas.
    const taskvalue = addtask.value;

    // Memeriksa apakah input tugas tidak kosong.
    if (!taskvalue) {
      alert("Masukkan Task Terlebih Dahulu");
    } else {
      // Membuat elemen div untuk tugas dan mengatur kelasnya.
      todotask_el.classList.add("add-task-wrap");

      // Membuat elemen div untuk mengelompokkan input tugas, tombol edit, dan tombol hapus.
      const list_input_box_el = document.createElement("div");
      list_input_box_el.classList.add("list-input-box");

      // Membuat elemen input untuk menampilkan tugas dan mengatur atributnya.
      const input_filed_element = document.createElement("input");
      input_filed_element.type = "text";
      input_filed_element.classList.add("input-filed");
      input_filed_element.setAttribute("readonly", "readonly");
      input_filed_element.value = taskvalue;

      // Membuat tombol edit.
      const edit_el = document.createElement("button");
      edit_el.classList.add("btn-sub", "edit-btn");

      // Membuat ikon edit.
      const editIcon = document.createElement("i");
      editIcon.classList.add("fas", "fa-edit");
      edit_el.appendChild(editIcon);

      // Membuat tombol hapus.
      const delete_el = document.createElement("button");
      delete_el.classList.add("btn-sub", "delete-btn");

      // Membuat ikon hapus.
      const deleteIcon = document.createElement("i");
      deleteIcon.classList.add("fas", "fa-trash-alt");
      delete_el.appendChild(deleteIcon);

      // Menyusun elemen-elemen dalam hierarki yang sesuai.
      list_input_box_el.appendChild(input_filed_element);
      list_input_box_el.appendChild(edit_el);
      list_input_box_el.appendChild(delete_el);
      todotask_el.appendChild(list_input_box_el);

      // Mengosongkan input tugas setelah tugas ditambahkan.
      addtask.value = "";

      // Event listener untuk tombol edit tugas.
      edit_el.addEventListener("click", () => {
        if (edit_el.classList.contains("editing")) {
          // Mode editing: mengganti kembali ke mode tampilan normal.
          edit_el.classList.remove("editing");
          editIcon.classList.remove("fa-save");
          editIcon.classList.add("fa-edit");
          input_filed_element.setAttribute("readonly", "readonly");
          alert("Task Diupdate");
        } else {
          // Mode tampilan normal: beralih ke mode editing.
          edit_el.classList.add("editing");
          editIcon.classList.remove("fa-edit");
          editIcon.classList.add("fa-save");
          input_filed_element.removeAttribute("readonly");
          input_filed_element.focus();
        }
      });

      // Event listener untuk tombol hapus tugas.
      delete_el.addEventListener("click", () => {
        todotask_el.removeChild(list_input_box_el);
        alert("Task Dihapus");
      });
    }
  });
});