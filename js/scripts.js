var a = prompt(' Enter the value of variable a ');
var h = prompt(' Enter the value of variable h ');
var triangle1Area = getTriangleArea(4, 12);
var triangle2Area = getTriangleArea(6, 16);
var triangle3Area = getTriangleArea(8, 20);

if ((a > 0) && (h > 0)) {
    alert('The value is positive, so we can calculate the area of the triangle ');
}  else {
    alert(' The value is negative, so enter other values ');
}

function getTriangleArea (a, h) {
    return a * h / 2;
}
alert('The area of triangle is ' +  getTriangleArea(a, h));
alert('The area of triangle(a=4 and h=12) is ' + triangle1Area);
alert('The area of triangle(a=6 and h=16) is ' + triangle2Area);
alert('The area of triangle(a=8 and h=20) is ' + triangle3Area);
