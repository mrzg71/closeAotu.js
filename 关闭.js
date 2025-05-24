var width = device.width;  
var height = device.height; 

main()
function main(){
    killAPP("学习强国")
    home();
    exit();
    
}
function killAPP(name){
    var packageName=app.getPackageName(name)
    app.openAppSetting(packageName)
    sleep(500)
    while(true){
       if(text("结束运行"||"强行停止").exists()){
            click("结束运行"||"强行停止");
            sleep(500);
            while(true){
                if(textContains("确定").exists()){
                    !click("确定");
     
                    sleep(1000);
                    break;
                }
                break;
            }
            break;
        }
    }
}
//lockScreen();锁屏
/*
sleep(2000);
//home();
log("qqqq")
Power();
sleep(2000)
swipe(520,2000,520,1200,201)
sleep(1000)
desc(2).findOne(100).click();
sleep(500);
desc(5).findOne(100).click();
sleep(500);
desc(8).findOne(100).click();
sleep(500);
desc(0).findOne(100).click();
log("解锁");
*/
var aa=
