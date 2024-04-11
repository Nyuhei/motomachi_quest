// キャンバスを取得
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
var count = document.getElementById("myCount");

// 定数を定義

//ボール 
const ballRadius = 10;
// パドル
const paddleHeight = 10;
const paddleWidth = 75;

// 変数を定義

//初期位置
let x = canvas.width/2; 
let y = canvas.height-30;

let paddleX = (canvas.height-paddleWidth)/2;
//変位
let dx = 2.0; 
let dy = -2.0;
// 色
let color = "#0095DD";
// キー感知
let rightPressed = false;
let leftPressed = false;

let bounce = 0 ;
function keyDownHandler(e){
    if(e.key === "Right" || e.key === "ArrowRight"){
        rightPressed = true;
    }else if (e.key === "Left" || e.key === "ArrowLeft"){
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      leftPressed = false;
    }
}
// ボールを描画
function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
// パドルを描画
function drawPaddle(){
    ctx.beginPath();
    ctx.rect( paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight );
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
// 描画
function draw() {
    if (rightPressed ) {
        paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
      } else if (leftPressed && paddleX + 7 > 0) {
        paddleX = Math.max(paddleX - 7, 0);
      }
    if(y + dy < ballRadius ){
        dy*=-1;
        color = "#" + Math.random().toString(16).slice(-6);
        bounce += 1
        if(bounce%10 === 0){
            ddx = Math.abs(dx) + 0.5
            dx /= Math.abs(dx)
            dx*= ddx
            ddy = Math.abs(dy) + 0.5
            dy /= Math.abs(dy)
            dy*= ddy
        }
    }else if (y + dy > canvas.height - ballRadius) {
        if( x > paddleX - ballRadius &&  x < paddleX + paddleWidth + ballRadius ){
            dy*=-1;
            color = "#" + Math.random().toString(16).slice(-6);
            bounce += 1
            if(bounce%10 === 0){
                ddx = Math.abs(dx) + 1
                dx /= Math.abs(dx)
                dx*= ddx
                ddy = Math.abs(dy) + 1
                dy /= Math.abs(dy)
                dy*= ddy
            }
        }
        else{
            alert("GAME OVER"+bounce.toString());
            document.location.reload();
            clearInterval(interval); // Needed for Chrome to end game
        }
      }
    if( x + dx + ballRadius > canvas.width || x + dx < ballRadius ){
        dx*=-1;
        color = "#" + Math.random().toString(16).slice(-6);
        bounce += 1
        if(bounce%10 === 0){
            ddx = Math.abs(dx) + 1
            dx /= Math.abs(dx)
            dx*= ddx
            ddy = Math.abs(dy) + 1
            dy /= Math.abs(dy)
            dy*= ddy
        }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle()
    x += dx;
    y += dy;
    
    count.innerHTML = bounce.toString();
}


document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);
const interval = setInterval(draw, 10);