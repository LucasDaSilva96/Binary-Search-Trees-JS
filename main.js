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

// Usage example:
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
