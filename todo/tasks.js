function saveTodo() {
  let input = $("#txtTodo");
  let text = input.val();

  let syntax = "<div class='todo-item'><h3>" + text +"</h3> <button class='btn-del btn btn-sm btn-danger'>Del</button> </div>";
   
    $("#tasksList").append(syntax);

  input.val("").focus();
}

function init() {
  $("#btnSave").click(saveTodo);

  $("#tasksList").on("click", ".btn-del", function () {
    $(this).parent().remove();
  });

  $("#txtTodo").keypress(function (e) {
    if (e.keyCode === 13) {
      saveTodo();
    }
  });
}

window.onload = init;
      


