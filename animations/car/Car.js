(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Car_atlas_", frames: [[511,1791,148,75],[511,1868,148,75],[694,718,19,1168],[715,718,19,1168],[0,0,690,1191],[0,1791,509,103],[0,1193,345,596],[347,1193,345,596],[692,0,321,357],[692,359,321,357]]}
];


// symbols:



(lib.CachedBmp_311 = function() {
	this.initialize(ss["Car_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_310 = function() {
	this.initialize(ss["Car_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_305 = function() {
	this.initialize(img.CachedBmp_305);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2160,2160);


(lib.CachedBmp_303 = function() {
	this.initialize(ss["Car_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_302 = function() {
	this.initialize(ss["Car_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_309 = function() {
	this.initialize(ss["Car_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_297 = function() {
	this.initialize(img.CachedBmp_297);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2163,234);


(lib.CachedBmp_295 = function() {
	this.initialize(ss["Car_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Group = function() {
	this.initialize(ss["Car_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Group_1 = function() {
	this.initialize(ss["Car_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Path_0 = function() {
	this.initialize(ss["Car_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Path_1_0 = function() {
	this.initialize(ss["Car_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_311();
	this.instance.setTransform(44.8,-284.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_310();
	this.instance_1.setTransform(-120,-284.95,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_309();
	this.instance_2.setTransform(-172.45,-297.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.4,-297.7,345,595.5);


(lib.Tween41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_311();
	this.instance.setTransform(44.8,-284.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_310();
	this.instance_1.setTransform(-120,-284.95,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_309();
	this.instance_2.setTransform(-172.45,-297.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.4,-297.7,345,595.5);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path_1_0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,321,357), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path_0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,321,357), null);


(lib.Tween40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path();
	this.instance.setTransform(206.25,0,1,1,0,0,0,160.5,178.5);

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(-206.25,0,1,1,0,0,0,160.5,178.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-366.7,-178.5,733.5,357);


(lib.Tween39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path();
	this.instance.setTransform(206.25,0,1,1,0,0,0,160.5,178.5);

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(-206.25,0,1,1,0,0,0,160.5,178.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-366.7,-178.5,733.5,357);


// stage content:
(lib.Car = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// lights_off
	this.instance = new lib.CachedBmp_295();
	this.instance.setTransform(406.6,154.2,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).wait(3));

	// mask_idn
	this.instance_1 = new lib.CachedBmp_297();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

	// main_car
	this.instance_2 = new lib.CachedBmp_309();
	this.instance_2.setTransform(362.15,430.8,0.5,0.5);

	this.instance_3 = new lib.Tween41("synched",0);
	this.instance_3.setTransform(534.6,728.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween42("synched",0);
	this.instance_4.setTransform(534.6,444.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},21).to({state:[{t:this.instance_4}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({_off:true,y:444.45},21,cjs.Ease.cubicInOut).wait(8));

	// lights
	this.instance_5 = new lib.Tween39("synched",0);
	this.instance_5.setTransform(533.85,294);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween40("synched",0);
	this.instance_6.setTransform(533.85,4.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},6).to({state:[{t:this.instance_6}]},21).to({state:[]},5).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({_off:true,y:4.65},21,cjs.Ease.cubicInOut).wait(8));

	// cars
	this.instance_7 = new lib.Group();
	this.instance_7.setTransform(802.4,135.05);

	this.instance_8 = new lib.Group_1();
	this.instance_8.setTransform(-67.3,135.05);

	this.instance_9 = new lib.CachedBmp_303();
	this.instance_9.setTransform(749.55,115.75,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_302();
	this.instance_10.setTransform(310.45,115.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]},34).wait(1));

	// background
	this.instance_11 = new lib.CachedBmp_305();
	this.instance_11.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(472.7,366.2,674.7,713.8);
// library properties:
lib.properties = {
	id: '9C467AB24BF8423195F44663826E4B49',
	width: 1080,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_305.png", id:"CachedBmp_305"},
		{src:"images/CachedBmp_297.png", id:"CachedBmp_297"},
		{src:"images/Car_atlas_.png", id:"Car_atlas_"}
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
		stage_car.scaleX = pRatio*sRatio;
		stage_car.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage_car.tickOnUpdate = false;
		stage_car.update();
		stage_car.tickOnUpdate = true;
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;