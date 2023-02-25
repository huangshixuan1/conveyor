radio.onReceivedNumber(function (receivedNumber) {
    // 1 x
    // 3 x
    // 7 軌道向左轉
    // 9 軌道向右轉
    // 8 軌道上升
    // 2 軌道下降
    // 4 向左跑
    // 6 向右跑
    if (receivedNumber == 1) {
    	
    } else if (receivedNumber == 3) {
    	
    } else if (receivedNumber == 7) {
        軌道向左轉()
    } else if (receivedNumber == 9) {
        軌道向右轉()
    } else if (receivedNumber == 8) {
        軌道上升()
    } else if (receivedNumber == 2) {
        軌道下降()
    } else if (receivedNumber == 4) {
        向左跑()
    } else if (receivedNumber == 6) {
        向右跑()
    }
})
function 軌道上升 () {
    pwm = 255
    sensors.DDMmotor(
    AnalogPin.P0,
    0,
    AnalogPin.P0,
    0
    )
}
function 軌道下降 () {
    pwm = 255
    sensors.DDMmotor(
    AnalogPin.P0,
    0,
    AnalogPin.P0,
    0
    )
}
function 向左跑 () {
    pwm = 255
    sensors.DDMmotor(
    AnalogPin.P0,
    0,
    AnalogPin.P0,
    0
    )
}
function 軌道向左轉 () {
    pwm = 255
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    pwm - 155
    )
}
function 向右跑 () {
    pwm = 255
    sensors.DDMmotor(
    AnalogPin.P0,
    0,
    AnalogPin.P0,
    0
    )
}
function 軌道向右轉 () {
    pwm = 255
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    pwm - 155
    )
}
let pwm = 0
radio.setGroup(173)
