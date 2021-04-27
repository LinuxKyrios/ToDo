export class Model {
    user;
    items;

    constructor() {
        this.user = "Linux Kyrios";
        this.items = [new TodoItem("Check for new iMac and buy it", false),
                        new TodoItem("Buy new computer for new Linux instance", false),
                        new TodoItem("Start looking for a new car", false),
                        new TodoItem("Buy the delicous Buenos Nachos Pizza", true),
                        new TodoItem("Remove ex number from telephone", false),]
    }
}

export class TodoItem {
    action;
    done;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}
