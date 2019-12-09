# Multi-animations
This mini-experiment was to get 7 HTML5 animations created and exported from Animate CC to work on a single page without iFrames, due to iFrame's lacking performance.

This was done by
* Copying the variable declarations and 3x functions from each index.html file into a scratch file.
* Renaming most variables with _{{ animation_name }}
* Copy the Images from each animation folder into an images/ folder.
* Changing the adobeAn, and stage variable declartions to match main.js.
* Add necessary markup, making IDs unique.
* Using gulp to concatenate and minify the animation JS files into a single file.
* Using gulp to concatenate and minify the main.js and jQuery files into a single file.

Installation:
* `` npm install ``
* `` gulp ``
* open index.html


Use the following to run each animation:

`` fnStartAnimation_benefit();`` 

`` fnStartAnimation_car(); ``

`` fnStartAnimation_commercial(); ``

`` fnStartAnimation_flood(); ``

`` fnStartAnimation_house(); ``

`` fnStartAnimation_jobs(); ``

`` fnStartAnimation_money(); ``
