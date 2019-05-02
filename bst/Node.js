class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.x = null;
        this.y = null;
        this.dist = 2;
    }
    addNode(n) {
        if (n.val < this.val) {
            if (this.left == null) {
                this.left = n;
                this.left.x = this.x - (width / pow(2, n.dist));
                this.left.y = this.y + (height / 12);
            } else {
                n.dist++;
                this.left.addNode(n);
            }
        } else if (n.val > this.val) {
            if (this.right == null) {
                this.right = n;
                this.right.x = this.x + (width / pow(2, n.dist));
                this.right.y = this.y + (height / 12);
            } else {
                n.dist++;
                this.right.addNode(n);
            }
        }
    }
    visit(parent) {
        if (this.left != null) {
            this.left.visit(this);
        }
        this.drawEdges(parent);
        this.drawNodes(parent); 
        //print(this.val);
        if (this.right != null) {
            this.right.visit(this);
        }
    }
    search(val,parent) {
        if (this.val == val) {
            this.drawEdges(parent,15,193,50,4);
            this.drawNodes(parent); 
            return this;
        } else if (val < this.val && this.left != null) {
            this.drawEdges(parent,15,193,50,4);
            this.drawNodes(parent); 
            return this.left.search(val,this);
        } else if (val > this.val && this.right != null) {
            this.drawEdges(parent,15,193,50,4);
            this.drawNodes(parent); 
            return this.right.search(val,this);
        }
        return null;
    }


    drawNodes(parent) {
        stroke(0, 0, 255);
        strokeWeight(1);
        fill(255);
        ellipse(this.x, this.y, 30);
        ellipse(parent.x, parent.y, 30);
        stroke(0);
        strokeWeight(0);
        fill(0)
        textAlign(CENTER);
        textSize(12);
        text(this.val, this.x, this.y + 4);
        text(parent.val, parent.x, parent.y + 4);
    }
    drawEdges(parent,r=150, g=150, b=150, s=2) {
        stroke(r,g,b);
        strokeWeight(s);
        line(parent.x, parent.y, this.x, this.y);
    }
}