var thold;
var origin;
var initX;
var initY;
var count;

function start() {
	$("#p5mask").css("display", "block");
	loop();
}

function log2(x) {
	return Math.log(x) / Math.log(2);
}

function hsbVals(l) {
	var h = map(abs(l-count-1), 0, log2(origin), 0, 15);
	var s = map(abs(l-count-1), 0, log2(origin), 100, 70);
	var b = map(abs(l-count-1), 0, log2(origin), 70, 100);
	// var a = map(abs(l-count-1), 0, log2(origin), 70, 100);
	var a = 20;
	return [h,s,b,a];
}

function drawSquareTop(a, b, ll) {
	var x = a + ll/2;
	var y = b - ll;
	var fv = hsbVals(log2(ll));
	fill(fv[0], fv[1], fv[2], fv[3]);
	rect(x, y, ll, ll);
	return [x, y];
}

function drawSquareBottom(a, b, ll) {
	var x = a + ll/2;
	var y = b + ll*2;
	var fv = hsbVals(log2(ll));
	fill(fv[0], fv[1], fv[2], fv[3]);
	rect(x, y, ll, ll);
	return [x, y];
}

function drawSquareRight(a, b, ll) {
	var x = a + ll*2;
	var y = b + ll/2;
	var fv = hsbVals(log2(ll));
	fill(fv[0], fv[1], fv[2], fv[3]);
	rect(x, y, ll, ll);
	return [x, y];
}

function drawSquareLeft(a, b, ll) {
	var x = a - ll;
	var y = b + ll/2;
	var fv = hsbVals(log2(ll));
	fill(fv[0], fv[1], fv[2], fv[3]);
	rect(x, y, ll, ll);
	return [x, y];
}

function drawFourSquares(x, y, l) {
	l = l/2;
	var sTop = drawSquareTop(x,y,l);
	var sBottom = drawSquareBottom(x,y,l);
	var sRight = drawSquareRight(x,y,l);
	var sLeft = drawSquareLeft(x,y,l);
	var coordArray = [sTop, sRight, sBottom, sLeft];
	if (l > thold) {
		for (var i=0; i<coordArray.length; i++) {
			drawFourSquares(coordArray[i][0], coordArray[i][1], l);
		}
	}
}

function setup() {
	count = 0;
	origin = 8;
	initX = windowWidth/2-origin/2;
	initY = origin*32;
	var myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent('p5container');
	colorMode(HSB, 100, 100, 100, 100);
	noStroke();
	noLoop();
}

function draw() {
	origin *= 1.01;
	count = frameCount % log2(origin);
	thold = max(origin/25, 3);//max(origin/50, 1);
	var fv = hsbVals(log2(origin));
	fill(fv[0], fv[1], fv[2], fv[3]);
	rect(initX,initY,origin,origin);
	drawFourSquares(initX,initY,origin,count);
}