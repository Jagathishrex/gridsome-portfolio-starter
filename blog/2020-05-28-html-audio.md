---
title: Everything about the audio tag in HTML and JavaScript
path: /html-audio
date: 2020-05-28
summary: In this article you will learn how to play, pause, stop, rewind, fast forward, audio using JavaScript and HTML
tags: ['Js', 'audio', 'jstips', 'HTML5']
---

![Audio CheatSheet](https://cdn-images-1.medium.com/max/3040/1*Mzw2EvLq9M-9fBFfXIXFnA.png)*Audio CheatSheet*

The audio tag allows you to add audio to your web pages. The audio is introduced in HTML5 .

Adding an Audio tag is super easy
```html
<audio src="/music/meow.mp3"> </audio>
```

You can also show a message if the browser doesn’t support audio tag

```html
<audio src="/music/meow.mp3">

    You're browser is Outdated . Please Update The Browser

</audio>

```
### Controls

The above code alone doesn’t play the music or show anything, we need to add controls attribute to enable play &pause of the audio. By default controls is false , you can add enable controls of the audio tag by adding either `controls` or `controls = "true”` .

```html
<audio src="/music/meow.mp3" controls>

    You're browser is Outdated . Please Update The Browser

</audio>
```

Don’t forget to add controls otherwise, nothing will be displayed.

### Multiple Audio Source

If you’re having multiple source files for the same audio track, then you need to use `source` tag to include multiple audio tracks. If you have `mp3` , `ogg` , `wav` .

```html
<audio controls>

  <source src="meow.ogg" type="audio/ogg" />
  <source src="meow.mp3" type="audio/mpeg" />
  <source src="meow.wav" type="audio/wav" />

  Your browser does not support the audio tag.

</audio>
```

From the above code, Browser try to play the meow.ogg ,

* If the browser can play `meow.ogg` , browser doesn’t load other files.

* If the meow.ogg is not supported then the browser will load the audio from next source

### autoplay

You can set `autoplay` attribute to play audio automatically once the audio is loaded.

```html
<audio autoplay></audio>

<!-- Second Way -->
<audio autoplay="true"></audio>
```
> *Note: mobile browsers don’t allow autoplay*

If you don’t set `autoplay` , then browser don’t download the complete audio, only audio metadata (like duration, name ) will be downloaded, but will not download the audio itself. You can also force download the audio by setting `preload` the attribute as `auto`

```html
<audio preload="auto"></audio>
```

Different preload values

* `none` → that the audio should not be preloaded.

* `metadata` → only audio metadata (e.g. length) is fetched.

* `auto` → the whole audio file can be downloaded, even if the user is not expected to use it.

* *empty string → Alias for auto .*

### muted

If you set `muted` attribute then the audio sound will be muted.

```html
<audio muted></audio>

<!-- Second Way -->
<audio muted="true"></audio>
```

### loop

You can enable the audio to play in a loop( the audio will play continuously from the beginning after it is played completely.), by setting the `loop` attribute.

```html
<audio loop></audio>

<!-- Second Way -->
<audio loop="true"></audio>

```
> Audio is subject to **CORS** and unless you allow it on the server , an audio file can’t be played cross-origin.

### Using audio in JavaScript

Getting the audio element first

```js
let audio = document.getElementById('audio');
```

### Check audio State

Check if the audio is paused by using `paused` attribute. If the audio is playing then the paused is false , otherwise true

```js
let isPaused = audio.paused;

let isPlaying = !isPaused;
```

### Controlling audio

To Pause the audio, you can use `pause` method

```js
audio.pause();
```

To play the paused audio, you can use `play` method

```js
audio.play();
```

### Browser volume

You can change the browser volume using

```js
audio.volume = 1; // 100 %

audio.volume = 0.5; // 50%
```

### Current Time

You can get the current playback time of audio using `currentTime` attribute. The `currentTime` returns a double-precision floating-point value indicating the current playback position, in seconds, of the audio

```js
audio.currentTime;
```

### Rewind

To rewind the track you can use

```js
myAudio.currentTime = 0;
myAudio.play();
```
### Fast Forward

To fast forward 30 sec

```js
myAudio.currentTime = 30;
myAudio.play();
```

### Duration

To get the duration of the audio, you can use `duration` attribute

```js
audio.duration
```

When getting duration,

* If no media is present on the element, or the media is not valid, the returned value is `NaN`.

* If the media has no known end (such as for live streams of unknown duration, web radio, media incoming from WebRTC, and so forth), this value is +Infinity.

### Important Audio Events

`play` → Triggered once the audio started playing

```js
audio.addEventListener('play', function(ev){

    console.log("audio started playing");

});
```

`pause` → Triggered once the audio was paused

```js
audio.addEventListener('pause', function(ev){

    console.log("audio paused. Do you want to change track");

});
```

`ended` →Triggered once the audio playing completed

```js
audio.addEventListener('ended', function(ev){

    console.log("audio Ended");
    // ask user about re-playing the same song & other operations

});
```

`timeupdate` → the user interacted with the playback timeline and went forward/backward

```js
audio.addEventListener('timeupdate', function(ev){

    console.log("Current time", **this.currentTime**);

});
```

`volumechange` → the user changed the volume

```js
audio.addEventListener('volumechange', function(ev){

    let currentVolume = this.volume;

    if(currentVolume > .75) {
        alert("Over Sound may damage your ears");
    }

});
```

`waiting` → Playback has stopped because of a temporary lack of data.

```js
audio.addEventListener('waiting', function(ev) => {
  console.log('Audio is waiting for more data.');
});
```

Read more events [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#Events).

Thanks for reading.

Please donate [here](https://www.paypal.me/jagathishSaravanan?locale.x=en_GB), for making more tutorials.
