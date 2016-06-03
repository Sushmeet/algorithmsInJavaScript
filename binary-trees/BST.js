'use strict';

var Node = require('./Node.js');

// binary-trees is a class.

var BST = function () {
    this.root = null;
    this.insert = insert;
    this.search = search;
};

function insert(element) {
    if (this.root === null) {
        this.root = new Node(element);
    }
    else {
        var current = this.root;
        var parent;

        while (current !== null) {
            if (element < current.element) {
                parent = current;
                current = current.left;
            }
            else if (element > current.element) {
                parent = current;
                current = current.right;
            }
            else {
                return false; // Duplicate node not inserted.
            }
        }
        // create new node and attach it to the parent node.
        if (element < parent.element) {
            parent.left = new Node(element);
        }
        else if (element > parent.element) {
            parent.right = new Node(element);
        }
    }
    return true;
}

function search(element) {

    var current = this.root;

    while (current != null) {
        if (element < current.element) {
            current = current.left;
        }
        else if (element > current.element) {
            current = current.right;
        }
        else {
            return true;
        }
    }
    return false;
}


module.exports = BST;