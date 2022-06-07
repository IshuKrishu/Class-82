var mouseEvent= "empty" ;
var last_position_of_x , last_position_of_y ;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color="red";
var width_of_the_line= 5;
function my_mouse_down(e)
{
 mouseEvent="mouseDown";

}
canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_move(e)
{
 var current_position_of_x = e.clientX-canvas.offsetLeft;
 var current_position_of_y = e.clientY-canvas.offsetTop;
 if(mouseEvent=="mouseDown")
 {
   ctx.beginPath();
   ctx.strokeStyle= color;
   ctx.lineWidth= width_of_the_line;
   console.log("last position of x and y coordinates are: ");
   console.log("x= "+ last_position_of_x + " y= " + last_position_of_y);
   ctx.moveTo(last_position_of_x , last_position_of_y);
   console.log("current position of x and y coordinates are: ");
   console.log("x= "+ current_position_of_x + " y= " + current_position_of_y);
   ctx.lineTo(current_position_of_x , current_position_of_y);
   ctx.stroke();
 }
 last_position_of_x=current_position_of_x;
 last_position_of_y=current_position_of_y;
}
canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_up(e)
{
  mouseEvent="mouseUP";

}
canvas.addEventListener("mouseup" , my_mouse_up);
function my_mouse_leave(e)
{
  mouseEvent="mouseleave";
}
canvas.addEventListener("mouseleave", my_mouse_leave);



