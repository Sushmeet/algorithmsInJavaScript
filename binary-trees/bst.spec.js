"use strict";

var BST = require('./BST.js');

describe("Binary Search Tree",function() {

    var sushTree;

    beforeEach(function () {
        sushTree = new BST();
    });

    it("should use insert method and add root element.",function () {
        sushTree.insert(5);
        expect(sushTree.search(5)).toEqual(true);
    })
});