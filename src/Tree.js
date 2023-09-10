import { NODE } from "./Node.js";
export class TREE {
  constructor(values) {
    this.root = this.buildTree(values);
  }

  // buildTree function
  buildTree(values) {
    if (!values || values.length === 0) {
      return null;
    }

    // Sort and remove duplicates from the values array
    const sortedUniqueValues = [...new Set(values)].sort((a, b) => a - b);

    const ROOT = new NODE(sortedUniqueValues[0]);
    const queue = [ROOT];
    let index = 1;

    while (index < sortedUniqueValues.length) {
      const currentNode = queue.shift();

      // Create left child if the value is not null
      if (
        sortedUniqueValues[index] !== null &&
        sortedUniqueValues[index] !== undefined
      ) {
        currentNode.left = new NODE(sortedUniqueValues[index]);
        queue.push(currentNode.left);
      }
      index++;

      // Create right child if the value is not null
      if (
        index < sortedUniqueValues.length &&
        sortedUniqueValues[index] !== null &&
        sortedUniqueValues[index] !== undefined
      ) {
        currentNode.right = new NODE(sortedUniqueValues[index]);
        queue.push(currentNode.right);
      }
      index++;
    }
    return ROOT; // Return the level-0 root node
  }

  // insert function which accepts a value to insert in the tree
  insert(value) {
    // If the tree is empty, create a new root node
    if (!this.root) {
      this.root = new NODE(value);
      return;
    }

    this.#insertRecursively(this.root, value);
  }
  // This function is in charge of the insert-process
  #insertRecursively(node, value) {
    if (value < node.data) {
      // Insert into the left subtree
      if (node.left === null) {
        // If there's no left child, create a new node
        node.left = new NODE(value);
      } else {
        // Recursively insert into the left subtree
        this.#insertRecursively(node.left, value);
      }
    } else if (value > node.data) {
      // Insert into the right subtree
      if (node.right === null) {
        // If there's no right child, create a new node
        node.right = new NODE(value);
      } else {
        this.#insertRecursively(node.right, value);
      }
    }
    // If the value is equal to the current node's data, ignore duplicates (do nothing).
  }
}
