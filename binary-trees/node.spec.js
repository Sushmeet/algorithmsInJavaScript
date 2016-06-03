var Node = require('./Node.js');

describe('Node', function () {
    "use strict";

    var node;

    beforeEach(function () {
        node = new Node(5);
    });

    it('should create a node with default element', function () {
        expect(node.element).toEqual(5);
    });

    it('should enter value < that root on the left child of tree.', function () {
        node.left = new Node(4);
        expect(node.left).toBeTruthy();
    });

    it('should enter value > than root on the right child of tree.', function () {
        node.right = new Node(6);
        expect(node.right).toBeTruthy();
    })
});