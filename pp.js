var block1=document.getElementById("block1");
var block2=document.getElementById("block2");
var ball=document.getElementById("ball");
var start=document.getElementById("start")
var width=block2.offsetWidth;
var height=block2.offsetHeight;
var left=block2.offsetLeft;
var widthb=ball.offsetWidth;

block2.style.left=left-(width/2)+"px";
block1.style.left=left-(width/2)+"px";
ball.style.left=left-(widthb/2)+"px";

var left_block=left-(width/2);
var left_ball=left-(widthb/2);

//for wasd
window.addEventListener("keypress",function(event){
    // console.log(event.keyCode);
    left = block2.offsetLeft;
    // W is pressed 
    if(event.keyCode==97){
        if (left > 5) {
            block2.style.left = left - 15+"px";
            block1.style.left = left - 15+"px";
        }
    }

    if(event.keyCode==100){
        if(left<(window.innerWidth-width-5)){
            block2.style.left=left+15+"px";
            block1.style.left=left+15+"px";
        }
    }

});


//for arrows key
window.addEventListener("keydown",function(event){
    // console.log(event.keyCode);
    left = parseInt(block2.style.left);
    // left arrow is pressed 
    if(event.keyCode == 37){
        if (left > 5) {
            block2.style.left = left - 20+"px";
            block1.style.left = left - 20+"px";
        }
    }
    if(event.keyCode == 39){
        if(left<(window.innerWidth-width-5)){
            block2.style.left=left+20+"px";
            block1.style.left=left+20+"px";
        }
    }
});

//ball movement
var ball_move;
var temp=false;
var pos="nan";    //ball where it coline
var ver="nan";    //movement of ball in vertical 
var hor="nan";    //movement of ball in horizontal 

function move(){
    var ball_left=ball.offsetLeft;
    var left=block1.offsetLeft;
    var ball_top=ball.offsetTop;
    if(temp==false){
        ball.style.top=ball_top-1+"px"
        ball.style.left=ball_left+1+"px"
        hor="right";
        ver="up";
    }

    if(pos=="right"){
        ball.style.left=ball_left-1+"px"
        if(ver=="up"){
            ball.style.top=ball_top-1+"px";
        }
        if(ver=="down"){
            ball.style.top=ball_top+1+"px";
        }
    }
    if(pos=="left"){
        ball.style.left=ball_left+1+"px"
        if(ver=="up"){
            ball.style.top=ball_top-1+"px";
        }   
        if(ver=="down"){
            ball.style.top=ball_top+1+"px";
        }
        
    }
    if(pos=="up"){
        ball.style.top=ball_top+1+"px";
        if(hor=="right"){
            ball.style.left=ball_left+1+"px";
        }
        if(hor=="left"){
            ball.style.left=ball_left-1+"px";
        }
    }
    if(pos=="down"){
        ball.style.top=ball_top-1+"px"
        if(hor=="right"){
            ball.style.left=ball_left+1+"px";
        }
        if(hor=="left"){
            ball.style.left=ball_left-1+"px";
        }
    }
    if(ball_left>(window.innerWidth-widthb-5)&&hor=="right"){
        temp=true;
        pos="right";
        hor="left";
    }
    if(ball_left<5&&hor=="left"){
        temp=true;
        pos="left";
        hor="right";
    }
    if(ball_top<=height-1&&ver=="up"&&ball_left>left-widthb&&ball_left<(left+width)){
        temp=true;
        pos="up";
        ver="down";
    }
    if(ball_top>=(window.innerHeight-height-widthb)+1&&ver=="down"&&ball_left>left-widthb&&ball_left<(left+width)){
        temp=true;
        pos="down";
        ver="up";
    }
                                                    //game over
    if((ball_top>=(window.innerHeight-height-widthb)+1&&ver=="down"||ball_top<=height-1&&ver=="up")&&(ball_left<left-widthb||ball_left>(left+width))){
        start.style.visibility="visible";
        clearInterval(ball_move);
        if(ver=="up"){
            ver="down";
        }
        if(ver=="down"){
            ver="up";
        }
    }
}

start.addEventListener("click",function(){
    start.style.visibility="hidden";
    ball.style.left=left_ball;
    ball.style.top=window.innerHeight-42;
        temp=false;
    pos="nan";
    ball_move=setInterval(move,0.4);
})
