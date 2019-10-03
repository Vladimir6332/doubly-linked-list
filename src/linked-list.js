const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._arrNodes = [];
    }

    append(data) {
        let newNode = new Node(data);
        this._arrNodes.push(newNode);
        if (this.length === 0) {            
            this._head = newNode;
            this._tail = newNode;            
            this.length++;
        }
        else {
            this._tail.next = newNode;
            newNode.prev = this._tail;            
            this._tail = newNode;
            this.length++;
        }
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        return this._arrNodes[index].data;
    }

    insertAt(index, data) {
        if (this._arrNodes[index].data) return
        this._arrNodes[index].data = data;
    }

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
