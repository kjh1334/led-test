let run = 0
input.onButtonPressed(Button.A, function () {
    if (run) {
        run = 0
    } else {
        run = 1
    }
})
basic.forever(function () {
    if (run) {
        led.toggle(0, 0)
        basic.pause(100)
        led.toggle(1, 0)
        basic.pause(100)
        led.toggle(2, 0)
        basic.pause(100)
        led.toggle(3, 0)
        basic.pause(100)
        led.toggle(4, 0)
        basic.pause(100)
    }
})
