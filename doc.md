# Emuluni Documentation
Version 0.3 alpha  
## Warning
Since this project uses WebAudio to make beeping sounds. I have noticed it dosent like to work edge. Only Chrome and Firefox work. (idk why)

## How to write code for the emulator:
<p>The code used in the emulator is javascript, It was the quickest thing I knew how to use.</p>

Essentally, your writing code in js, as you would but we have put alternatives for functions so that the emulator can keep track of them. Some of the functions include

- setTimeout
- setInterval

These had to be replaced because when you stop the code it needs to stop all timeouts, and or schedueled functions. Or it could cause some undesirable things to happen.
# How to read this manual
### function name and args
description `refrence to var`
#### {Variable Name}:{Variale Type}

# Manual
## Display Control
### blit(bitmap)
--
blits a bitmap (a 6x6 array containing values from 0-255) from `list`
#### Arguments:
##### bitmap:list
#### Returns:
None

### fill_screen(brig)
---
fills the screen with a brightness value from `brig`
#### Arguments:
##### brig:int
#### Returns:
None

### get_screen()
---
Get a 6x6 list of the pixel value on the screen
#### Arguments:
None
#### Returns:
6x6 array of values (0-255)

### setPixel(x,y,brig)
---
Set pixel at `x`,`y` to `brig` (0-255)
#### Arguments:
##### x:int
##### y:int
##### brig:int
#### Returns:
None
### getPixel(x,y)
---
Get brightness at pixel `x`,`y`
#### Arguments:
##### x:int
##### y:int
#### Returns:
brightness value as an int
## Audio
SOUNDS!!!

### play(hz)
---
Play tone at `hz` until `stop()` is called
#### Arguments:
##### hz:int
#### Returns:
None

### stop()
---
Stops tone
#### Arguments:
None
#### Returns:
None

### audioMap(map)
---
Plays a sequence of audio, See [Create audio samples](br.pdf)
#### Arguments:
None
#### Returns:
6x6 array of values (0-255)

### audioMap(map)
---
Plays a sequence of audio, See [Create audio samples](br.pdf)
#### Arguments:
None
#### Returns:
6x6 array of values (0-255)

## Task Schedueling

### addInterval(func,timeout)
---
Runs `func` every `timeout` milliseconds
#### Arguments:
##### func:function
##### timeout:int
#### Returns:
id of interval
### addTimer(func,timeout)
---
Runs `func` after `timeout` milliseconds
#### Arguments:
##### func:function
##### timeout:int
#### Returns:
id of timer
### addInterval(func,timeout)
---
Runs `func` every `timeout` milliseconds
#### Arguments:
##### func:function
##### timeout:int
#### Returns:
id of interval