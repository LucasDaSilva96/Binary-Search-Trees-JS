import { NODE } from "./Node.js";
class TREE {
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
}
