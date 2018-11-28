# cubeInversion
css3

功能实现

· 利用css3的transform-style:preserve3d，以及设置景深perspective，呈现立体的效果。

· 利用transform：translate3d(x, y, z) rotate3d(x, y, z, deg);进行平移和旋转，让留个正方形组成一个正方体。

· 旋转的时候默认按照中心点旋转，设置transform-origin来改变旋转中心点。

· 根据鼠标进入的方向判断是从上下左右哪个方向进入或是出去的，给立方体添加不同的类名，对应不同的旋转。

· 鼠标进入方向的计算公式：(Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90) + 3) % 4。x, y是鼠标进入点，相对于中心点的坐标，0-上面， 1-右面， 2-下面， 3-左边。

