function open () {
    pins.servoWritePin(AnalogPin.P1, 180)
}
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
        open()
    } else if (receivedNumber == 3) {
        close()
    } else if (receivedNumber == 8) {
        軌道上升8()
        basic.pause(100)
    } else if (receivedNumber == 2) {
        軌道下降2()
        basic.pause(100)
    } else if (receivedNumber == 4) {
        向左跑4()
        basic.pause(100)
    } else if (receivedNumber >= 6) {
        向右跑6()
        basic.pause(100)
    } else {
        停()
    }
})
function 軌道下降2 () {
    pins.servoWritePin(AnalogPin.P8, 0)
}
function 向左跑4 () {
    pwm = 255
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    pwm - 155
    )
}
function close () {
    pins.servoWritePin(AnalogPin.P1, 0)
}
function 向右跑6 () {
    pwm = 255
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    pwm - 155
    )
}
function 軌道上升8 () {
    pins.servoWritePin(AnalogPin.P8, 180)
}
function 停 () {
    sensors.DDMmotor(
    AnalogPin.P12,
    0,
    AnalogPin.P2,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
    pins.servoWritePin(AnalogPin.P8, 90)
}
let pwm = 0
radio.setGroup(173)
