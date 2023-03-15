var off = 0;
var onf = 255;
var onh = 127;
var bitmaps = {
	bitluni_logo:[
	[255,0,0,0,255,0],
	[255,0,0,0,0,0],
	[255,255,255,0,0,0],
	[255,0,0,0,255,0],
	[255,0,0,0,255,0],
	[255,255,255,0,0,0],
],
	smiley_face:[
	[255,off,off,off,off,255],
	[off,off,off,off,off,off],
	[255,off,off,off,off,255],
	[255,off,off,off,off,255],
	[255,255,off,off,255,off],
	[off,off,255,255,off,off],
],
	code_failed:[
		[255,off,off,off,off,255],
		[255,off,off,off,off,255],
		[off,255,255,255,255,off],
		[255,off,off,off,off,255],
		[255,off,off,off,off,255],
		[255,off,off,off,off,255],
	
	]
}
var letter = {
}
var intervals = {
};

var runbutton = document.getElementById("run");
var codearea = document.getElementById("codearea");
var buttons = {
	a:document.getElementById("a"),
	b:document.getElementById("b"),
	ab:document.getElementById("both"),
}
alert(buttons.b)
function makedisplay() {
	for (let h=0;h<6;h++) {
		let disprow = document.createElement("div");
		disprow.className = "disprow";
		for (let w=0;w<6;w++) {
			let led = document.createElement("div");
			led.className = "led";
			led.id=w.toString()+"x"+h.toString();
			disprow.appendChild(led);
		}
		display.appendChild(disprow);
	}
}
function map(x,in_min,in_max,out_min,out_max) {
	return ((x-in_min) * (out_max-out_min) / (in_max-in_min) + out_min)
}
function blit(bitmap) {
	for (let h=0;h<6;h++) {
		for (let w=0;w<6;w++) {
			let dmo = document.getElementById(w.toString()+"x"+h.toString())
			console.log(dmo,map(bitmap[h][w],0,255,0,1))
			dmo.style.opacity = map(bitmap[h][w],0,255,0,1);
		}
	}
}
function setPixel(x,y,brig) {
	let dmo = document.getElementById(x.toString()+"x"+y.toString())
	console.log(dmo,map(brig,0,255,0,1))
	dmo.style.opacity = map(brig,0,255,0,1);
}
function fill_screen(brig) {
	for (let h=0;h<6;h++) {
		for (let w=0;w<6;w++) {
			let dmo = document.getElementById(w.toString()+"x"+h.toString())
			console.log(dmo,map(brig,0,255,0,1))
			dmo.style.opacity = map(brig,0,255,0,1);
		}
	}
}
function addInterval(func,timeout) {
	let itv = setInterval(func,timeout);
	intervals[intervals.length+1] = itv;
	return intervals.length;
}
function clearAllInterval() {
	for (let timer in intervals) {
		console.log(timer);
		clearInterval(intervals[timer]);
	}
	intervals = {}
}
function tieEvent(b,func) {
	b.onclick = func;
}
function run(code) {
	try {
		var script = eval(code);
	} catch(err){
		clearAllInterval();
		blit(bitmaps.code_failed);
		alert(err.message)
	}
}
runbutton.onclick = function() {
	
	clearAllInterval();
	fill_screen(255);
	blit(bitmaps.bitluni_logo);
	blit(bitmaps.smiley_face);
	run(codearea.value)
}
try {
	var display = docum ent.getElementById("display");
	makedisplay();
	blit(bitmaps.bitluni_logo);
	let xhr = new XMLHttpRequest();
} catch(err) {
	alert(err.message)
}
