function open () {
    pins.servoWritePin(AnalogPin.P1, 80)
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
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (receivedNumber == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # .
            . . . . .
            . . . . .
            `)
        close()
    } else if (receivedNumber == 8) {
        軌道下降2()
        basic.pause(100)
    } else if (receivedNumber == 2) {
        軌道上升8()
        basic.pause(100)
    } else if (receivedNumber == 4) {
        向左跑4()
        basic.pause(100)
    } else if (receivedNumber == 6) {
        向右跑6()
        basic.pause(100)
    } else if (receivedNumber == 7) {
        turn_left()
    } else if (receivedNumber == 9) {
        turn_right()
    } else {
        停()
    }
})
function turn_right () {
    pins.servoWritePin(AnalogPin.P12, 180)
    pins.servoWritePin(AnalogPin.P2, 180)
}
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
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
    pins.servoWritePin(AnalogPin.P8, 90)
    pins.servoWritePin(AnalogPin.P12, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
function turn_left () {
    pins.servoWritePin(AnalogPin.P12, 0)
    pins.servoWritePin(AnalogPin.P2, 0)
}
let pwm = 0
radio.setGroup(173)
