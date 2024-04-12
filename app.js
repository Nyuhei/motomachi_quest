isStart = true;
// html要素の取得
const START_BUTTON_CLICK_EVENT=document.getElementById("startButton");
var bg = document.getElementById("bg").style;
var startButton_visible = document.getElementById("startButton").style;
// css
var startScreenStyle = {
    'background-image': 'url("img/IMG_1130.png")',
}
var startButtonStyle = {
    'visibility':'visible'
}
// ボタンの設定
START_BUTTON_CLICK_EVENT.addEventListener("click",()=>{
    isStart = false;
});


// 背景を適用
function main(){
    for (var prop in startScreenStyle){
        if(isStart == true){
            startScreenStyle = {
                'background-image': 'url("img/IMG_1130.png")'
            }
        }
        else{
            startScreenStyle = {
                'background-image': ''
            }
        }
        bg[prop] = startScreenStyle[prop]
    }
    for(prop in startButtonStyle){
        if(isStart == true){
            startButtonStyle = {
                'visibility':'visible'
            }
        }
        else{
            startButtonStyle = {
                'visibility':'hidden'
            }
        }
        startButton_visible[prop] = startButtonStyle[prop]
    }
}
setInterval(main,0)