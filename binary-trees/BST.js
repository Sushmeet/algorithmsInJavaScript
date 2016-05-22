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

        while (current) {
            if (element < current.element) {
                if (current.left == null) {
                    current.left = new Node(element);
                    break;
                }
                else current = current.left;
            }

            else if (element > current.element) {
                if (current.right == null) {
                    current.right = new Node(element);
                    break;
                }
                else current = current.right;
            }
        }
    }
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