
var oLi = document.getElementsByTagName('li');
var oLiArr = Array.prototype.slice.call(oLi);

oLiArr.forEach(function (ele, index) {
    ele.onmouseenter = function (e) {
        var className = getClassName(ele, e, 'in');
        ele.className = className;
    }
})
oLiArr.forEach(function (ele, index) {
    ele.onmouseleave = function (e) {
        var className = getClassName(ele, e, 'out');
        ele.className = className;
    }
})

function getClassName(ele, e, state) {
    var d = getDir(ele, e);
    var dir = '';
    switch (d) {
        case 0:
            dir = '-top';
            break;
        case 1:
            dir = '-right';
            break;
        case 2:
            dir = '-bottom';
            break;
        case 3:
            dir = '-left';
    }
    return state + dir;
}

function getDir(ele, e) {
    var w = ele.offsetWidth,
        h = ele.offsetHeight,
        l = ele.offsetLeft,
        t = ele.offsetTop,
        x = e.clientX - l - w / 2,
        y = e.clientY - t - h / 2;
    var d = (Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90) + 3) % 4;
    console.log(d);
    return d;
}