import { NODE } from "./src/Node.js";
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
const valuesArray = [3, 2, 1, 2, 4, 3, 5, 6, 4, 7, 6];
const myTree = new TREE(valuesArray);

prettyPrint(myTree.root);
