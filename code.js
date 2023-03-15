var px = 0;
var py = 0;
var p = [
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
];
blit(p);
function mlr() {
setPixel(px,py,p[py][px]);
var s = get_screen();
if (px < 5) {
px += 1;
} else {
px = 0
}
blit(s);
setPixel(px,py,255);

}
function mud() {
setPixel(px,py,p[py][px]);
var s = get_screen();
if (py < 5) {
py += 1;
} else {
py = 0
}
blit(s);
setPixel(px,py,255);

}
function flash() {
if (getPixel(px,py) > 0){
setPixel(px,py,0);
} else {
setPixel(px,py,255);
}
}
function flip() {
if (p[py][px]) {
p[py][px] = 0;
} else {
p[py][px] = 200;
}
blit(p);
setPixel(px,py,255);
}
try {
addInterval(flash,500);
} catch(err) {
alert(err.message);
}
Event(buttons.b,mlr);
Event(buttons.a,mud);
Event(buttons.ab,flip);