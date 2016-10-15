class TodoesListController {
    constructor() {}

    $onChanges(changes){
        const self = this;

        if(changes.todoesItems){
            const todoesItems = changes.todoesItems.currentValue;
            self.todoesItems = {...todoesItems};
        }
    }
}

export default TodoesListController;