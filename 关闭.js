main()
function main(){
    if (!device.isScreenOn()) {
        log("设备黑准备亮屏")
        device.wakeUp()
        sleep(500);
    }else{
        log("已经是亮屏状态")
        sleep(500);
    }
    unlock()
    launchApp("Autox.js v6")
    sleep(1000)
    killAPP("Autox.js v6")
    home()
    exit();
    
}
function unLock() {
    if (textContains("月").exists()) {
        sleep(500)
        if (textContains("闹钟").exists()) {
            sleep(500)
            swipe(520, 2000, 520, 1200, 300);
            log("滑动关闭闹钟")
        }
        sleep(2000);        
        swipe(520, device.height, 520, 1200,300);
    } else {
        log("没锁")
        sleep(1500)
    }
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
