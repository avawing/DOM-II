// Your code goes here
/** [x] `mouseover` and 'mouseout'
* [x] `keydown` and 'keyup' and 'keypress'
* [x] `wheel`
* [ ] `drag / drop`
* [ ] `load`
* [ ] `focus`
* [x] `resize`
* [x] `scroll`
* [ ] `select`
* [x] `dblclick` and click*/

let navi = document.querySelector('.main-navigation');

navi.onmouseover = function(){
    navi.style.backgroundColor = 'pink';
};

navi.onwheel = function(){
    navi.style.backgroundColor = 'red';
}

navi.onclick = function(){
    navi.style.backgroundColor = 'purple';
}

document.onkeydown = function(){
    navi.style.backgroundColor = 'blue';
    document.querySelector('.footer').style.backgroundColor = 'purple';
}

document.onkeyup = function(){
    navi.style.backgroundColor = 'purple';
    document.querySelector('.footer').style.backgroundColor = 'blue';

}

document.onscroll = function(){
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'orange';
}

document.querySelector('.intro').onmouseout = function(){
    document.querySelector('.intro').style.backgroundColor = 'yellow';
    document.querySelector('.intro').style.color = 'blue';
}

document.getElementById('btnone').ondblclick = function(){
    document.getElementById('btnone').style.backgroundColor = 'orange';
}
document.getElementById('btntwo').ondblclick = function(){
    document.getElementById('btntwo').style.backgroundColor = 'black';
}
document.getElementById('btnthree').ondblclick = function(){
    document.getElementById('btnthree').style.backgroundColor = 'maroon';
}

document.body.onresize = function(){
    document.body.style.backgroundColor = 'brown';
}

document.body.onkeypress = function(){
    document.body.style.backgroundColor = 'pink';
    document.body.style.color = 'black'
}