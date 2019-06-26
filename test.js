var test = require("tape");
var logic = require("./logic");

test("Adding items", function(t) {
  var todos = [
    {
      id: 1,
      done: false,
      text: "do that blah balh"
    }
  ];

  var newTodo = {
    id: 2,
    done: true,
    text: "read a book"
  };

  var expected = [
    {
      id: 1,
      done: false,
      text: "do that blah balh"
    },
    {
      id: 2,
      done: true,
      text: "read a book"
    }
  ];
  var actual = logic.addTodo(todos, newTodo);
  t.deepEqual(actual, expected, "Should return new array with new todo");
  t.end();
});

test("Deleting items", function(t) {
  var actual = [
    {
      id: 1,
      done: false,
      text: "do that blah balh"
    },
    {
      id: 2,
      done: true,
      text: "read a book"
    }
  ];

  var expected = [
    {
      id: 1,
      done: false,
      text: "do that blah balh"
    }
  ];

  var idToDelete = actual[0].id;
  actual = logic.deleteTodo(actual, 2);
  t.deepEqual(actual, expected, "Should return array with deleted to do");
  t.end();
});

test("Mark ToDo", function(t) {
  var actual = [
    {
      id: 1,
      done: false,
      text: "do that blah balh"
    },
    {
      id: 2,
      done: true,
      text: "read a book"
    }
  ];

  var expected = [
    {
      id: 1,
      done: true,
      text: "do that blah balh"
    },
    {
      id: 2,
      done: true,
      text: "read a book"
    }
  ];
  var idToMark = 1;
  actual = logic.markTodo(actual, idToMark);

  t.deepEqual(actual, expected, "Should return a marked toDo");
  t.end();
});
