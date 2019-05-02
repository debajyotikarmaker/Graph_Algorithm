class BST {
    constructor() {
        this.root = null;
    }
    addValue(val) {
        let tmpNode = new Node(val);
        if(this.root == null) {
            this.root = tmpNode;
            this.root.x = width / 2;
            this.root.y = 16;
        } else {
            this.root.addNode(tmpNode);
        }
    }
    traverse() {
        //print('TREE')
        this.root.visit(this.root);
    }
    search(val) {
        var found = this.root.search(val,this.root);
        return found;
    }
    remove(val) {
    const removeNode = function(node, val) {
      if (node == null) {
        return null;
      }
      if (val == node.val) {
        // node has no children 
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child 
        if (node.left == null) {
          return node.right;
        }
        // node has no right child 
        if (node.right == null) {
          return node.left;
        }
        // node has two children 
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.val = tempNode.val;
        node.right = removeNode(node.right, tempNode.val);
        return node;
      } else if (val < node.val) {
        node.left = removeNode(node.left, val);
        return node;
      } else {
        node.right = removeNode(node.right, val);
        return node;
      }
    }
    //print('remove' + val);
    this.root = removeNode(this.root, val);
  }
}