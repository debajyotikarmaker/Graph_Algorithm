let tree;
let usrAddVal;
let usrSearchVal;
let usrDelVal;
let cnv;

function setup() {
    cnv = createCanvas(600, 700);
    cnv.position(windowWidth - 600, 10);
    background(255);
    //clear();
    //createP('Inorder');

    errMsg = select('#errMsg');
    errMsg.html('test error');
    errMsg.html('');

    usrAddVal = select('#usrInput1');
    var addButton = select('#add');
    addButton.style('font-size', '16px');
    addButton.style('background-color', '#00ff00');
    addButton.style('color', '#000000');
    addButton.style('width', '100px');
    addButton.mousePressed(addNode);

    usrSearchVal = select('#usrInput2');
    var addButton = select('#search');
    addButton.style('font-size', '16px');
    addButton.style('background-color', '#6B8FEF');
    addButton.style('color', '#000000');
    addButton.style('width', '100px');
    addButton.mousePressed(searchNode);

    usrDelVal = select('#usrInput3');
    var genButton = select('#gen');
    genButton.style('font-size', '16px');
    genButton.style('background-color', '#F1EC5B');
    genButton.style('color', '#000000');
    genButton.style('width', '100px');
    genButton.mousePressed(generateRandomTree);

    var delButton = select('#del');
    delButton.style('font-size', '16px');
    delButton.style('background-color', '#ff0000');
    delButton.style('color', '#000000');
    delButton.style('width', '100px');
    delButton.mousePressed(delNode);

    tree = new BST();
}

function addNode() {
    var val = usrAddVal.value();
    if (isNaN(val)) {
        errMsg.html(val + ' is not a valid number!!');
    } else if(val == '') {
        errMsg.html('Please enter a valid number.');
    } else {
        errMsg.html(val + ' added successfully.');
        val = parseInt(val);
        tree.addValue(val);
        tree.traverse();
    }
}
function searchNode() {
    cnv.background(255);
    tree.traverse();
    var val = parseInt(usrSearchVal.value());
    var result = tree.search(val);
    if (result == null) {
        errMsg.html(val + ' not found!');
    } else {
        errMsg.html(val + ' found!');
    }
}
function generateRandomTree() {
    cnv.background(255);
    tree = new BST();
    for (let i = 0; i < 10  ; i++) {
        tree.addValue(floor(random(100)));
    }
    tree.traverse();
}
function delNode() {
    var val = usrDelVal.value();
    tree.remove(val);
    cnv.background(255);
    tree.traverse();
    errMsg.html("");
}