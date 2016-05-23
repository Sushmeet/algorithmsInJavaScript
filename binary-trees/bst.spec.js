"use strict";

var BST = require('./BST.js');

describe("Binary Search Tree",function() {

    var sushTree;

    beforeEach(function () {
        sushTree = new BST();
    });

    it('should be created,left and right are null,element is null.', function () {
        expect(sushTree.root).toEqual(null);
        spyOn(sushTree, "insert");
        spyOn(sushTree, "search");
        sushTree.insert();
        sushTree.search();
        expect(sushTree.insert).toHaveBeenCalled();
        expect(sushTree.search).toHaveBeenCalled();

    });
    it('should use insert root element.',function () {
        sushTree.insert(5);
        expect(sushTree.search(5)).toBeTruthy();
    })
    it('should use insert multiple elements.',function () {
        sushTree.insert(20);
        sushTree.insert(5);
        sushTree.insert(4);
        sushTree.insert(21);
        sushTree.insert(22);

        expect(sushTree.search(20)).toBeTruthy();
        expect(sushTree.search(5)).toBeTruthy();
        expect(sushTree.search(4)).toBeTruthy();
        expect(sushTree.search(21)).toBeTruthy();
    })
});