# Binary Trees

> A binary tree is chosen over other primary data structures because
 1. You can search a binary tree very quickly compared to linked list.
 2. You can also quickly insert and delete data from a binary tree as 
 opposed to an array.
 3. eg A company's org chart is a tree.
 4. Root node is a level 0.
 5. Children are at level 1.
>
 
## Binary Search Trees
> A Binary Search Tree (BST) is a Binary Tree in which
1. Data with lesser values are stored on the left nodes.
2. Data with larger values is stored on the right node.
>

### Implementation of BST
```bash
var BST = require('./BST.js');
var binarySearchTree = new BST();
// Insert an element
binarySearchTree.insert(5);
// Search an element
binarySearchTree.search(5);
```

### Traversing a BST
> There are 3 methods to traverse the BST to display data in different
orders.
1. Inorder Traversal
Visits all the nodes of BST in ascending order of node key values.
2. Preorder Traversal
Visit root node first followed by nodes in subtrees under left child 
of root nodes, followed by the nodes in subtrees under right child of
of root node.
3. PostOrderTraversal visits all of the child nodes of left subtree up
to the root node, and then visits all of the child nodes of the right
subtree up to the root node.
>

