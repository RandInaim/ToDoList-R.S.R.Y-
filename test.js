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

test("Sorting todo list", function(t) {
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
    },
    {
      id: 3,
      done: false,
      text: "Write a book"
    },
    {
      id: 4,
      done: true,
      text: "Go to gym"
    },
    {
      id: 5,
      done: false,
      text: "Watch a movie"
    }
  ];

  var expected = [
    {
      id: 1,
      done: false,
      text: "do that blah balh"
    },
    {
      id: 3,
      done: false,
      text: "Write a book"
    },
    {
      id: 5,
      done: false,
      text: "Watch a movie"
    },
    {
      id: 2,
      done: true,
      text: "read a book"
    },
    {
      id: 4,
      done: true,
      text: "Go to gym"
    }
  ];
  var sortFunction = (a, b) => (a.done > b.done ? 1 : -1);
  actual = logic.sortTodos(actual, sortFunction);
  t.deepEqual(actual, expected, "Should return a sorted array");
  t.end();
});
