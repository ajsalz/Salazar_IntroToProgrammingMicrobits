input.onGesture(Gesture.EightG, function () {
    music.play(music.stringPlayable("F G F G - - - - ", 500), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . # #
        . . # . .
        . . . . .
        `)
    basic.pause(2000)
    basic.clearScreen()
    music.stopAllSounds()
})
input.onGesture(Gesture.SixG, function () {
    music.play(music.stringPlayable("E F E F - - - - ", 500), music.PlaybackMode.InBackground)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(2000)
    basic.clearScreen()
    music.stopAllSounds()
})
input.onGesture(Gesture.ThreeG, function () {
    music.play(music.stringPlayable("C D C D - - - - ", 500), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(2000)
    basic.clearScreen()
    music.stopAllSounds()
})
basic.forever(function () {
	
})
