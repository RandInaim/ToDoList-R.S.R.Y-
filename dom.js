//var test = require("./test");

// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");

  var submit = document.getElementById("submitButton");

  submit.addEventListener("click", function(event) {
    event.preventDefault();
    var text = document.getElementById("inputText");

    var myObject = {
      id: todoFunctions.generateId(),
      description: text.value,
      status: false
    };
    var newState = todoFunctions.addTodo(state, myObject); //the new array
    update(newState);
    createTodoNode(myObject);
  });

  var state = []; // this is our initial todoList

  var sortButton = document.getElementById("sort");
  sortButton.addEventListener("click", function() {
    var sortFunction = (a, b) => (a.done > b.done ? 1 : -1);
    var sorted = todoFunctions.sortTodos(state, sortFunction);
    update(sorted);
  });

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement("li");

    //add the checkbox
    var checkbox = document.createElement("input");
    checkbox.id = "cBox";
    checkbox.type = "checkbox";
    todoNode.appendChild(checkbox);

    // text of item list
    var textElement = document.createElement("p");
    textElement.id = "textBox";
    textElement.innerText = todo.description;
    textElement.contentEditable = "false";
    todoNode.appendChild(textElement);

    // edit button
    var editButtonNode = document.createElement("button");
    editButtonNode.id = "editBox";
    var editIcon = document.createElement("i");
    editIcon.innerHTML = '<i style={font-size:24px} class="far">&#xf044;</i>';
    editIcon.style.alignContent = "center";
    editButtonNode.appendChild(editIcon);
    todoNode.appendChild(editButtonNode);
    var count = 1;
    editButtonNode.addEventListener("click", function(event) {
      if (count % 2 != 0) {
        textElement.contentEditable = true;
      } else {
        textElement.contentEditable = false;
      }
      count++;
    });

    // add span holding descriptiondeleteTodo
    // this adds the delete button
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.id = "deleteBox";
    var deleteIcon = document.createElement("i");
    deleteIcon.innerHTML = '<i class="glyphicon glyphicon-remove" ></i>';
    deleteButtonNode.appendChild(deleteIcon);

    deleteButtonNode.style.background = "red";
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?

      var description = "?"; // event.target ....

      // hint: todoFunctions.addTodo
      var newState = []; // ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement("ul");

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
