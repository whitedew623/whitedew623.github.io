//alert("科拉莉真可爱");
console.log("test");
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function setImgNum(){
    const imgNum = getRandomInt(1,8);
    document.getElementById("titleImg").src="img/img"+imgNum+".png";
    document.getElementById("imgID").innerHTML = "图像编号: "+imgNum;
}
setImgNum();
function changeTitleColor() {
    document.getElementById('mainTitle').style.color = "#ff69b4";
}
function resetTitleColor() {
    document.getElementById('mainTitle').style.color = "black";
}
var clickCount = 0;
const audio = new Audio("audio\\audio.wav");
function playSound(){
    clickCount += 1;
    audio.play();
    document.getElementById("mainTitle").innerHTML = "科拉莉太可爱了!!!("+clickCount+")";
}
const cmd_box = document.querySelector(".cmdBox");
function runCmd(command){
    if (command == "test"){
        alert("test_success");
        return true;
    }else if (command == "clear_click_counts"){
        clickCount = 0;
        document.getElementById("mainTitle").innerHTML = "科拉莉太可爱了!!!";
        return true;
    }else if (command == "refresh_image"){
        setImgNum();
        return true;
    }else if (command == "help" || command == "?"){
        alert("clear_click_counts: 清除点击次数\nrefresh_image: 刷新图像\ntest: 测试命令框用");
        return true;
    }
}
cmd_box.addEventListener("keyup",function(e){
    if (e.key == "Enter"){
        if (!cmd_box.value == ""){
            if(runCmd(cmd_box.value)){
                cmd_box.value="";
            }
        }
    }
});
const cmd_button = document.querySelector(".enterButton");
cmd_button.addEventListener("click",function(e){
    if (!cmd_box.value == ""){
        if(runCmd(cmd_box.value)){
            cmd_box.value="";
        }
    }
});