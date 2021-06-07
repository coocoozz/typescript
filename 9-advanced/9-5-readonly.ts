{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    // todo.title = 'dd'; -> read only 타입으로 transform 되었으므로 불변성이 유지된다
  }

  // Readonly, Pick 등 기존 타입을 transform 할수 있는 사전에 정의된 타입들이 존재한다
}
