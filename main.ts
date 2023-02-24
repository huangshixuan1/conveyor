function 向右轉 () {
    pwm = 0
}
radio.onReceivedNumber(function (receivedNumber) {
    // 1 x
    // 3 x
    // 7 向左轉
    // 9 向右轉
    // 8 上升
    // 2 下降
    // 4 向左跑
    // 6 向右跑
    if (receivedNumber == 1) {
    	
    } else if (receivedNumber == 3) {
    	
    } else if (receivedNumber == 7) {
        向左轉()
    } else if (receivedNumber == 9) {
        向右轉()
    } else if (receivedNumber == 8) {
        上升()
    } else if (receivedNumber == 2) {
        下降()
    } else if (receivedNumber == 4) {
        向左跑()
    } else if (receivedNumber == 6) {
        向右跑()
    }
})
function 向左轉 () {
    pwm = 0
}
function 向左跑 () {
    pwm = 0
}
function 上升 () {
    pwm = 0
}
function 向右跑 () {
    pwm = 0
}
function 下降 () {
    pwm = 0
}
let pwm = 0
radio.setGroup(173)
