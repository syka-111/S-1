var v1 = document.createElement('textarea');
v1.id = 'T1';
document.body.appendChild(v1);
var v2 = document.createElement('div');
v2.id = 'D1';
document.body.appendChild(v2);


function f1() {
var v3 = document.querySelectorAll('.rez-stat')[0];
var v4 = document.getElementById('T1');
var v5 = document.getElementById('D1');
var b = v4.value;
v4.innerHTML = v3.innerHTML;
if (v4.value !== b) {
var v6 = document.querySelector('.rez-stat .rez-stat__item').cloneNode(true);
v2.appendChild(v6);
localStorage.setItem('syka111', v2.innerHTML);
}
}setInterval(f1, 4444)

var v8 = localStorage.getItem('syka111');
v2.innerHTML = v8;
