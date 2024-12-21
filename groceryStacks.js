function problemFive() {
    const groceryStack = [];

    for (let i = 0; i < 5; i++) {
        let item = prompt("Enter a grocery item:");
        push(item);
    }


    function peek() {
        if (groceryStack.length === 0) {
            return "Stack is Empty";
        }
        return "Stack is not Empty"
    }

    function push(item) {
        groceryStack.push(item);
        alert("Stack is now:" + groceryStack);
    }

    function pop() {
        if (groceryStack.length === 0) {
            alert("The stack is empty");
            return;
        }
        let removedItem = groceryStack.pop();
        alert("Removed item:" + removedItem);
        alert("Stack is now:" + groceryStack);
    }

    alert(peek());
    pop();
}