import { TREE } from "./src/Tree.js";
// visualize binary search tree function
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// Usage example TREE CLASS:
const myTree = new TREE();
myTree.insert(4);
myTree.insert(2);
myTree.insert(6);
myTree.insert(1);
myTree.insert(3);
myTree.insert(5);
myTree.insert(7);

prettyPrint(myTree.root);
console.log("******************");
myTree.delete(3);
prettyPrint(myTree.root);
console.log(myTree.find(6));

// Using levelOrder to print values
console.log("LevelOrder:", myTree.levelOrder());

// In-order traversal
console.log("In-order:", myTree.inOrder());

// Pre-order traversal
console.log("Pre-order:", myTree.preOrder());

// Post-order traversal
console.log("Post-order:", myTree.postOrder());

// Find and print the height of the root node
console.log("Height of root:", myTree.height(myTree.root));
// Find and print the height of a specific node
console.log("Height of node with value 2:", myTree.height(myTree.find(2).data));
