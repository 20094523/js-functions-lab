fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todos => {
     const notCompleted = todos.reduce((acc, todo) => {
        todo.completed
        ? acc
        : acc.push({userID: todo.UserID, title: todo.title});
        return acc;
     },[]);
     console.log(notCompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });