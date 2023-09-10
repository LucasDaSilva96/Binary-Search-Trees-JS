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

  // delete function which accepts a value to delete in the tree
  delete(value) {
    if (!value || !this.root) {
      return false; // Tree is empty, nothing to delete
    }

    // Helper function to find the node to delete
    const findNodeToDelete = (node, parent) => {
      if (!node) {
        return { node: null, parent }; // Value not found, return null
      }

      if (value < node.data) {
        return findNodeToDelete(node.left, node);
      } else if (value > node.data) {
        return findNodeToDelete(node.right, node);
      }

      // Remove the "else if" condition for equality
      return { node, parent };
    };

    const { node: nodeToDelete, parent: parentOfNodeToDelete } =
      findNodeToDelete(this.root, null);
    if (!nodeToDelete) {
      return false; // Value not found in the tree
    }

    // Case 1: Node to delete has no children
    if (!nodeToDelete.left && !nodeToDelete.right) {
      if (!parentOfNodeToDelete) {
        // The root node is being deleted
        this.root = null;
      } else if (parentOfNodeToDelete.left === nodeToDelete) {
        parentOfNodeToDelete.left = null;
      } else {
        parentOfNodeToDelete.right = null;
      }
      // Case 2: Node to delete has one child
    } else if (!nodeToDelete.left || !nodeToDelete.right) {
      console.log("Node to delete:", nodeToDelete);
      console.log("Parent of node to delete:", parentOfNodeToDelete);
      const childNode = nodeToDelete.left || nodeToDelete.right;
      if (!parentOfNodeToDelete) {
        // The root node is being deleted
        this.root = childNode;
      } else if (parentOfNodeToDelete.left === nodeToDelete) {
        parentOfNodeToDelete.left = childNode;
      } else {
        parentOfNodeToDelete.right = childNode;
      }
      // Case 3: Node to delete has two children
    } else {
      const successor = this.#findMin(nodeToDelete.right);
      const successorValue = successor.data;
      this.delete(successorValue); // Recursively delete the successor node
      nodeToDelete.data = successorValue;
    }

    return true; // Node with the value has been deleted
  }
  #findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
}
