var test = require("tape");
var logic = require("./logic");

var todos = [
  {
    done: false,
    text: "do that blah balh"
  }
];

var newTodo = {
  done: true,
  text: "read a book"
};

var newList = [
  {
    done: false,
    text: "do that blah balh"
  },
  {
    done: true,
    text: "read a book"
  }
];

test("Adding items", function(t) {
  var actual = logic.addTodo(todos, newTodo);
  var expected = newList;
  t.deepEqual(actual, expected, "Should return new array with new todo");
  t.end();
});
