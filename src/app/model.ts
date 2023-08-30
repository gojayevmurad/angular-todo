export class Model {
  user: string;
  items: Array<TodoItem>;
  constructor() {
    this.user = 'John';
    this.items = [
      new TodoItem('Sport', false),
      new TodoItem('Read book', false),
      new TodoItem('eat', true),
      new TodoItem('cinema', false),
    ];
  }
}

export class TodoItem {
  description;
  action;

  constructor(description: string, action: boolean) {
    this.description = description;
    this.action = action;
  }
}

const m = new Model();
