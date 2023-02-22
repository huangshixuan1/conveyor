KSB045.onBtnChanged(KSB045.btnName.C, KSB045.pushType.down, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(50)
    basic.clearScreen()
})
KSB045.onBtnChanged(KSB045.btnName.D, KSB045.pushType.down, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        . . . . #
        . . . # .
        . . # . .
        `)
    basic.pause(50)
    basic.clearScreen()
})
KSB045.onBtnChanged(KSB045.btnName.F, KSB045.pushType.down, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        . # . . .
        . . # . .
        `)
    basic.pause(50)
    basic.clearScreen()
})
KSB045.onBtnChanged(KSB045.btnName.E, KSB045.pushType.down, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(50)
    basic.clearScreen()
})
radio.setGroup(173)
