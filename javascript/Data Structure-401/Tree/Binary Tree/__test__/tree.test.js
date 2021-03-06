'use strict';


const { expect, describe, it } = require('@jest/globals');
const { Node, Binary_Tree, Binary_SearchTree } = require('../tree.js');

let tree = null;

describe('Tree', () => {
    beforeAll(() => {
        const one = new Node(1);//Root
        const two = new Node(2);
        const three = new Node(3);
        const four = new Node(4);
        const five = new Node(5);
        const six = new Node(6);
        const seven = new Node(7);
        const eight = new Node(8);
        const nine = new Node(9);

        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

        tree = new Binary_Tree(one);
    });


    it('Can successfully instantiate an empty tree', () => {
        // arrange
        let expected = [null];
        let one = new Node(null);
        one.left = null;
        one.right = null;
        let emptyTree = new Binary_Tree(one);
        // act
        let preOrderResult = emptyTree.preOrder();
        // assert
        expect(preOrderResult).toEqual(expected);
    });

    it('Can successfully instantiate a tree with a single root node', () => {
        // arrange
        let expected = [1,];
        let one = new Node(1);
        one.left = null;
        one.right = null;
        let singleRootTree = new Binary_Tree(one);
        // act
        let preOrderResult = singleRootTree.preOrder();
        // assert
        expect(preOrderResult).toEqual(expected);
    });

    it('Can successfully add a left child and right child to a single root node', () => {
        let expected = [1, 2, 3];
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        one.left = two;
        one.right = three;
        let tree = new Binary_Tree(one);
        // act
        let preOrderResult = tree.preOrder();
        // assert
        expect(preOrderResult).toEqual(expected);
    });

    it('Can successfully return a collection from a preorder traversal', () => {
        // arrange
        let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
        // act
        let preOrderResult = tree.preOrder();
        // assert
        expect(preOrderResult).toEqual(expected);
    });

    it('Can successfully return a collection from an inorder traversal', () => {
        // arrange
        let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        // act
        let inOrderResult = tree.inOrder();
        // assert
        expect(inOrderResult).toEqual(expected);
    });

    it('Can successfully return a collection from a postorder traversal', () => {
        // arrange
        let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        // act
        let postOrderResult = tree.postOrder();
        // assert
        expect(postOrderResult).toEqual(expected);
    });
});