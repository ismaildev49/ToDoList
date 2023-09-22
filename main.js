let isValid = false;
let choice;
let toDoList = [];
let task;
let list = "********* TODO LIST *********";
let index = 1;
while (isValid == false) {
  while (isValid == false) {
    choice = prompt(`Make a choice :
        -Write "new" to add a todo.
        -Write "list" to see all the todos
        -Write "delete" to remove a specific todo
        -Write "quit" to exit the program`);
    choice = choice.toLowerCase();
    switch (choice) {
      case "new":
        task = prompt(`Write down your todo please.`);
        toDoList.push(task);
        alert(`The todo ${task} has been successfuly added.`);
        break;
      case "list":
        list = "********* TODO LIST *********";
        index = 1;
        for (i of toDoList) {
          list = `${list} 
                    ${index}. ${i}`;
          index++;
        }
        alert(`${list}`);
        break;
      case "delete":
        list = "********* TODO LIST *********";
        index = 1;
        for (i of toDoList) {
          list = `${list} 
                    ${index}. ${i}`;
          index++;
        }
        let isCorrect = false
        while (isCorrect == false) {
        taskToDelete = prompt(`Which task do you want to delete: 
                ${list}`);
        if (toDoList.length == 0) {
          alert("There is no task to delete.");
        } else if (taskToDelete > 0 && taskToDelete < toDoList.length) {
          toDoList.splice(taskToDelete - 1, 1);
          list = "********* TODO LIST *********";
          index = 1;
          for (i of toDoList) {
            list = `${list} 
                            ${index}. ${i}`;
            index++;
          }
          alert(`The task n°${taskToDelete} has been successfully deleted :
                        ${list}`);
          isCorrect=true
        } else if (isNaN(taskToDelete)) {
          alert(`This is not a number. Please write a number`);
        } else {
          alert(
            `The task you're trying to deleate doesn't exist. Please write a number between 1 and ${toDoList.length}`
          );
        }
    }
        break;
      case "quit":
        alert(
          "Thank you for using my todo list program ! See you u next time."
        );
        isValid = true;
        break
      default :
        alert ("The feature you writed doesn't exist. Please Write down 'new' or 'list' or 'delete' or 'quit'.")
    }
  }
}
