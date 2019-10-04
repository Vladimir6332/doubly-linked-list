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
        return this;
    }

    head() {
         return (this._head) ? this._head.data : null;
    }

    tail() {
        return (this._tail) ? this._tail.data : null;
    }

    at(index) {
        return this._arrNodes[index].data;
    }

    insertAt(index, data) {

        if (this._arrNodes[index] && this._arrNodes[index].data) {
            let prev = null;
            if (this._arrNodes[index - 1]) {
                let prev = this._arrNodes[index - 1];                
            }
            
            let next = this._arrNodes[index];            
            let newNode = new Node (data, prev, next);
            if (this._arrNodes[index - 1]) {
                this._arrNodes[index - 1].next = newNode;                
            }
            this._arrNodes[index].prev = newNode;
            this._arrNodes.splice(index, 0, newNode);
            this.length++;
        }
        else  if (this._arrNodes[index]) this._arrNodes[index].data = data;
        else {
            while (!this._arrNodes[index]) {
                this.append(null);
            }
            this._arrNodes[index].data = data;
        }
        return this;        
    }

    isEmpty() {
        if (this.length === 0) return true;
        return false;
    }

    clear() {
        this._tail = null;
        this._head = null;
        this._arrNodes = [];
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let prevNode = this._arrNodes[index - 1];
        let nextNode = this._arrNodes[index + 1];
        if (prevNode) prevNode.next = this._arrNodes[index].next;
        if (nextNode) nextNode.prev = this._arrNodes[index].prev;
        this.length--;
        this._arrNodes.splice(index, 1);
        return this;        
    }

    reverse() {
        let tempTail = this._tail;
        this._tail = this._head;
        this._head = tempTail;
        this._arrNodes = this._arrNodes.reduce((acc, cur) => {
            let temp = cur.prev;
            cur.prev = cur.next;
            cur.next = temp;
            acc.unshift(cur);
            return acc
        }, []);
        return this;
    }

    indexOf(data) {
         return this._arrNodes.map((cur) => cur.data).indexOf(data);
    }
}

module.exports = LinkedList;
