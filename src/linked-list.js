const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let newNode = new Node(data, null, null);
        if (this.isEmpty()) {
            this._head = newNode;
            this._tail = newNode;
        } else {
            newNode.prev = this._tail;
            newNode.prev.next = newNode;
            this._tail = newNode;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {
        let searchedNode = this._head;
        for (let i = 0; i < index; i++) {
            searchedNode = searchedNode.next;
        }
        return searchedNode ? searchedNode.data : null;
    }

    insertAt(index, data) {
        if (this.isEmpty) {
            this.append(data);
        }
        let searchedNode = this._head;
        for (let i = 0; i < index; i++) {
            searchedNode = searchedNode.next;
        }
        let insertedNode = new Node(data, null, searchedNode);
        if (!searchedNode.prev) {
            this._head = insertedNode;
        } else {
            searchedNode.prev.next = insertedNode;
        }
        searchedNode.prev = insertedNode;
        this.length++;
        return this;
    }

    isEmpty() {
        return !this.length;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let deletedNode = this._head;
        for (let i = 0; i < index; i++) {
            deletedNode = deletedNode.next;
        }
        if (!deletedNode.next) {
            this._tail = deletedNode.prev;
        } else {
            deletedNode.next.prev = deletedNode.prev;
        }
        if (!deletedNode.prev) {
            this._head = deletedNode.next;
        } else {
            deletedNode.prev.next = deletedNode.next;
        }
        return this;
    }

    reverse() {
        let stack = [];
        for(let i = 0; i < this.length; i++) {
            let searchedNode = this._head;
            for (let j = 0; j < i; j++) {
                searchedNode = searchedNode.next;
            }
            stack.push(searchedNode);
        }
        let temp = this._tail;
        this._tail = this._head;
        this._head = temp;
        stack.forEach(element => {
            let temp = element.prev;
            element.prev = element.next;
            element.next = temp;
        });
        return this;
    }

    indexOf(data) {
        for (let i = 0; i < this.length; i++) {
            let searchedNode = this._head;
            for (let j = 0; j < i; j++) {
                searchedNode = searchedNode.next;
            }
            if (data === searchedNode.data) {
              return i;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;
