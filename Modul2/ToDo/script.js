window.addEventListener("load", () => {
  const form = document.getElementById("add-task-form");
  const addtask = document.getElementById("add-task-input");
  const todotask_el = document.getElementById("todo-tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskvalue = addtask.value;
    if (!taskvalue) {
      alert("Masukkan Task Terlebih Dahulu");
    } else {
      todotask_el.classList.add("add-task-wrap");
      const list_input_box_el = document.createElement("div");
      list_input_box_el.classList.add("list-input-box");
      const input_filed_element = document.createElement("input");
      input_filed_element.type = "text";
      input_filed_element.classList.add("input-filed");
      input_filed_element.setAttribute("readonly", "readonly");
      input_filed_element.value = taskvalue;
      
      const edit_el = document.createElement("button");
      edit_el.classList.add("btn-sub", "edit-btn");
      const editIcon = document.createElement("i");
      editIcon.classList.add("fas", "fa-edit");
      edit_el.appendChild(editIcon);

      const delete_el = document.createElement("button");
      delete_el.classList.add("btn-sub", "delete-btn");
      const deleteIcon = document.createElement("i");
      deleteIcon.classList.add("fas", "fa-trash-alt");
      delete_el.appendChild(deleteIcon);

      list_input_box_el.appendChild(input_filed_element);
      list_input_box_el.appendChild(edit_el);
      list_input_box_el.appendChild(delete_el);
      todotask_el.appendChild(list_input_box_el);

      addtask.value = "";

      edit_el.addEventListener("click", () => {
        if (edit_el.classList.contains("editing")) {
          edit_el.classList.remove("editing");
          editIcon.classList.remove("fa-save");
          editIcon.classList.add("fa-edit");
          input_filed_element.setAttribute("readonly", "readonly");
          alert("Task Diupdate");
        } else {
          edit_el.classList.add("editing");
          editIcon.classList.remove("fa-edit");
          editIcon.classList.add("fa-save");
          input_filed_element.removeAttribute("readonly");
          input_filed_element.focus();
        }
      });

      delete_el.addEventListener("click", () => {
        todotask_el.removeChild(list_input_box_el);
        alert("Task Dihapus");
      });
    }
  });
});