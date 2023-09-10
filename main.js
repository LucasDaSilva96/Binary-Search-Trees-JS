import { TREE } from "./src/Tree.js";
import { NODE } from "./src/Node.js";
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

// Create a binary search tree from an array of random numbers < 100
function createRandomBinaryNodeNr() {
  const tree = new TREE();
  const arrayOfRandomNr = [];

  for (let i = 0; i < 10; i++) {
    arrayOfRandomNr[i] = getRadomNr();
  }
  arrayOfRandomNr.sort((a, b) => {
    return a - b;
  });
  const uniqueArrayOfRadomNr = [...new Set(arrayOfRandomNr)];

  for (let i = 0; i < uniqueArrayOfRadomNr.length; i++) {
    tree.insert(uniqueArrayOfRadomNr[i]);
  }

  tree.reBalance();
  return tree;
}

// Get random numbers < 100
function getRadomNr() {
  return Math.floor(Math.random() * 100);
}

// Usage example TREE CLASS:
const myTree = createRandomBinaryNodeNr();

prettyPrint(myTree.root);

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
// Find and print the depth of a specific node, return - 1 if node not found
const nodeWithValue2 = myTree.find(32);
console.log("Depth of node with value 2:", myTree.depth(nodeWithValue2));
// Should print true
console.log("Is the tree balanced?", myTree.isBalanced());
