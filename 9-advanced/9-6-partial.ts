{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }
  const todo: ToDo = {
    title: 'a',
    description: 'b',
    label: 'c',
    priority: 'high',
  };
  const newTodo = updateTodo(todo, { priority: 'low' });
  console.log(newTodo);
}
