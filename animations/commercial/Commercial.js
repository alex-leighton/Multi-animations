(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Commercial_atlas_", frames: [[0,0,835,1382],[837,0,1061,996],[0,1384,1542,418]]}
];


// symbols:



(lib.CachedBmp_293 = function() {
	this.initialize(ss["Commercial_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_291 = function() {
	this.initialize(ss["Commercial_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_289 = function() {
	this.initialize(img.CachedBmp_289);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2160,2160);


(lib.CachedBmp_287 = function() {
	this.initialize(ss["Commercial_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Tween34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_293();
	this.instance.setTransform(-208.7,-345.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.7,-345.5,417.5,691);


(lib.Tween33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_293();
	this.instance.setTransform(-208.7,-345.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.7,-345.5,417.5,691);


(lib.Tween32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_291();
	this.instance.setTransform(-265.1,-248.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.1,-248.8,530.5,498);


(lib.Tween31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_291();
	this.instance.setTransform(-265.1,-248.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.1,-248.8,530.5,498);


(lib.Tween36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween32("synched",0);
	this.instance.setTransform(-82.15,96.65);
	this.instance.alpha = 0.8008;

	this.instance_1 = new lib.Tween34("synched",0);
	this.instance_1.setTransform(138.5,0);
	this.instance_1.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-347.2,-345.5,694.5,691.3);


(lib.Tween35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween32("synched",0);
	this.instance.setTransform(-82.15,96.65);

	this.instance_1 = new lib.Tween34("synched",0);
	this.instance_1.setTransform(138.5,0);
	this.instance_1.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-347.2,-345.5,694.5,691.3);


// stage content:
(lib.Commercial = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask_idn
	this.instance = new lib.CachedBmp_287();
	this.instance.setTransform(140.8,888.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	// front_building
	this.instance_1 = new lib.Tween31("synched",0);
	this.instance_1.setTransform(432.35,1153.55);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween32("synched",0);
	this.instance_2.setTransform(432.35,640);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_2}]},11).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({_off:true,y:640},11,cjs.Ease.cubicOut).wait(15));

	// rear_building
	this.instance_3 = new lib.Tween33("synched",0);
	this.instance_3.setTransform(671.9,1284.25);
	this.instance_3.alpha = 0.6016;
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween34("synched",0);
	this.instance_4.setTransform(653,543.35);
	this.instance_4.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_4}]},14).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({_off:true,x:653,y:543.35},14,cjs.Ease.cubicOut).wait(12));

	// MergedLayer_1
	this.instance_5 = new lib.Tween35("synched",0);
	this.instance_5.setTransform(514.5,543.35);

	this.instance_6 = new lib.Tween36("synched",0);
	this.instance_6.setTransform(514.5,1270.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},7).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,y:1270.8},7,cjs.Ease.cubicIn).wait(28));

	// background
	this.instance_7 = new lib.CachedBmp_289();
	this.instance_7.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(540,540,540,1089.7);
// library properties:
lib.properties = {
	id: '9C467AB24BF8423195F44663826E4B49',
	width: 1080,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_289.png", id:"CachedBmp_289"},
		{src:"images/Commercial_atlas_.png", id:"Commercial_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9C467AB24BF8423195F44663826E4B49'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage_commercial.scaleX = pRatio*sRatio;
		stage_commercial.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage_commercial.tickOnUpdate = false;
		stage_commercial.update();
		stage_commercial.tickOnUpdate = true;
	}
}


})(createjs = createjs||{}, AdobeAn_commercial = AdobeAn_commercial||{});
var createjs, AdobeAn_commercial;