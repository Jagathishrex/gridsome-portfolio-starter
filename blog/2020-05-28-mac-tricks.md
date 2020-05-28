---
title: Impress Your Friends With These Fun and Useful Mac Terminal Commands
path: /mac-tricks
date: 2020-05-28
summary:  Learn how to Display the weather, shut down your computer, and more, all from your terminal.
tags: ['terminal', 'mac', 'life-hacks', 'hacks']
---

![Photo by [Ash Edmonds](https://unsplash.com/@badashproducts?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral).](https://cdn-images-1.medium.com/max/11520/0*BzXB9T9_lxEJdutd)Photo by [Ash Edmonds](https://unsplash.com/@badashproducts?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral).

We always want to know things that most people don’t. If you know something that only a few people do, you feel great about yourself. Here are eight fun commands that most people aren’t aware of.

## 1. Make Your Mac Talk to You

Yes, your Mac can talk to you. Whatever you say, it will repeat it.

```cmd
say “I am Groot”

say “I am great at impressing people”
```

The say command will dictate whatever sentence you enter between the double quotes in the default system voice.

You can also change the voice by going to System Preferences → Accessibility, → Speech → System Voice pop-up menu, and then choosing a voice.

It’s a cool terminal command to prank others with.

## 2. Make Your Mac Restless

If you’re not performing any interaction with your Mac, then it will enter into sleep mode to save energy. But in some cases, like when taking notes or reading a long article, you may forget to interact with your Mac and then have to enter your password to log in again. To prevent your Mac from falling asleep, you can use the caffeinate command:

```cmd
caffeinate
```

We can also set time periods up so the command is only active for a temporary period of time.

To do this, add the -t flag followed by the number of seconds you want the feature to be enabled for:

```cmd
caffeinate   -t 600
```

The command above will make your Mac not enter the sleep state for 10 minutes (600 seconds). It can be stopped before then by pressing ctrl + c*.*

## 3. Download YouTube Videos From Your Terminal

If you want to download YouTube videos, your Mac terminal can do that in a single command. To do this, you need to install youtube-dl:

```cmd
brew install youtube-dl
```

Once youtube-dl is installed, you can download any YouTube video as follows:

```cmd
youtube-dl "video-url"
```

There are many options available. You can refer to [the documentation](https://youtube-dl.org/) for more information.

## 4. Shut Down Your Mac

If you want to shut down your Mac using the terminal, all you need to do is type this command:

```cmd
sudo shutdown -h now
```

Then enter your password. This will shut down your computer.

To restart the computer:

```cmd
sudo shutdown -r now
```

To shut down your Mac after a certain period of time, you can use this:

```cmd
sudo shutdown -h +60
```

The command above will shut down the machine in 60 minutes.

Refer to [this page](https://apple.stackexchange.com/questions/103571/using-the-terminal-command-to-shutdown-restart-and-sleep-my-mac) for even more options to shut down your Mac.

## 5. Make Your Mac Motivate You With a Custom Message

Mac allows you to set a custom login message. You can write a motivational quote, or if you want to convey some message to someone using your computer, then this is a great choice. I added my address and mobile number on the login screen, so even if I lose my Mac, it would be easy for the person who found it to contact me.

```cmd
sudo write /Library/Preferences/com.apple.loginwindow LoginwindowText "Custom Text Here"
```

This will ask for your administrative password. That’s it. For more detailed info, refer to [this page](https://www.lifewire.com/add-login-message-os-x-using-terminal-2260758).

## 6. Make Your Mac Display the Weather Forecast

You don’t need to use a browser to get the weather forecast. You can do it from your terminal with a single-line command:

```cmd
curl http://wttr.in/
```

It will bring you the weather forecast for the upcoming three days, with Morning, Noon, Evening, and Night sections.

![](https://cdn-images-1.medium.com/max/2000/0*gN2zaXnx58wgOCz0.png)

This will be really helpful if you’re a frequent traveler.

To get the weather report for a particular city, you can use:

```cmd
    curl wttr.in/London
```

## 7. Get the History

You can get your terminal command history using:

```cmd
history
```

If you’re searching for a specific word from the command history, then you can use:

```cmd
history | grep cd
```

The command above will list all the commands in the history that include cd.

If you want to clear the command history, then you can use:

```cmd
    history -c
```

## 8. Change Save Location of the ScreenShot

If you want to save your screenshot in a custom location, you can use this command:

```cmd
defaults write com.apple.screencapture location ~/your/location/here
```

After this, enter another command:

```js
killall SystemUIServer
```

That’s it.

Thanks for reading.

Please donate [here](https://www.paypal.me/jagathishSaravanan?locale.x=en_GB), for making more tutorials.
