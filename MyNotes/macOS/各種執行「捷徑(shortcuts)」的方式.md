
```
tell application "Shortcuts Events" to run the shortcut named "Podcast Note" with input "cough"
```

```
shortcuts run "Podcast Note" -i "test"
```

```
shortcuts run "Podcast Note" <<< "test"
```

```
do shell script "shortcuts run 'Podcast Note' <<< 'test'"
```


參考： https://sixcolors.com/post/2022/01/shortcuts-applescript-terminal-working-around-automation-roadblocks/
