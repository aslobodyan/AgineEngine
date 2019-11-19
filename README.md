# Simple text editor
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


### Detailed instructions
+ Open `https://github.com/aslobodyan/AgineEngine` in any browser and either download the archive or clone it to your computer
+ Unpack the archive in case it was downloaded
+ Open `../AgineEngine/`-folder in terminal (command: `cd /path-to-loaded-folder/AgineEngine/`)
+ Run `npm install` in order to setup all needed modules in the root of `AgineEngine` folder
+ Run `npm start` for running a dev server.
+ Open browser and paste there `http://localhost:3000/`

### Notes
+ Nearly 5 hours were spent on this task
+ Everything was developed on my home laptop with `Mac OS Catalina 10.15.1` + latest version of `Google Chrome` browser. So it was not tested under others OS and browsers.
+ Control panel buttons react only on `double-click`
+ There is a possibility to change the text
+ Buttons apply and cancel their formatting under selected text
+ User have the possibility to work with words only
+ Formatting settings are persisted into an in-memory model
+ Minimal required formatting list is implemented (Bold, Italic and Underline)
+ User has the possibility to replace a word with a synonym
+ Text was taken from `text.service.js`
+ Project Architecture was a bit modified
+ Sorry for typo-mistake in repo name :)
+ Functionality with Synonyms was not implemented, but can be easily added later
+ Issue with loosing the selected word after clicking on Control Panel buttons was not implemented too
