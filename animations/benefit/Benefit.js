(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Benefit_atlas_", frames: [[1109,0,910,375],[0,0,1107,616],[1109,377,892,356],[0,618,1089,598],[1091,735,713,398],[1091,1135,586,244]]}
];


// symbols:



(lib.CachedBmp_267 = function() {
	this.initialize(ss["Benefit_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_266 = function() {
	this.initialize(ss["Benefit_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_265 = function() {
	this.initialize(ss["Benefit_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_264 = function() {
	this.initialize(ss["Benefit_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_259 = function() {
	this.initialize(ss["Benefit_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_258 = function() {
	this.initialize(ss["Benefit_atlas_"]);
	this.gotoAndStop(5);
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


(lib.Tween63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_267();
	this.instance.setTransform(-11,-95.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_266();
	this.instance_1.setTransform(-444.1,-154,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_265();
	this.instance_2.setTransform(-6.35,-90.55,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_264();
	this.instance_3.setTransform(-439.4,-149.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-444.1,-154,888.1,308);


(lib.Tween62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_267();
	this.instance.setTransform(-11,-95.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_266();
	this.instance_1.setTransform(-444.1,-154,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_265();
	this.instance_2.setTransform(-6.35,-90.55,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_264();
	this.instance_3.setTransform(-439.4,-149.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-444.1,-154,888.1,308);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_259();
	this.instance.setTransform(214.2,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_258();
	this.instance_1.setTransform(0,37.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,570.7,199), null);


// stage content:
(lib.Benefit = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// front_hand
	this.instance = new lib.Tween62("synched",0);
	this.instance.setTransform(1369.45,364.65);

	this.instance_1 = new lib.Tween63("synched",0);
	this.instance_1.setTransform(1175.4,364.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_1}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:1175.4},19,cjs.Ease.cubicOut).wait(16));

	// back_hand
	this.instance_2 = new lib.Group();
	this.instance_2.setTransform(452.65,287.55,1,1,0,0,0,285.3,99.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:596.65,alpha:0.1992},15,cjs.Ease.cubicOut).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1127.4,488.1,686.0999999999999,30.600000000000023);
// library properties:
lib.properties = {
	id: '9C467AB24BF8423195F44663826E4B49',
	width: 1920,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Benefit_atlas_.png", id:"Benefit_atlas_"}
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
		stage_benefit.scaleX = pRatio*sRatio;
		stage_benefit.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage_benefit.tickOnUpdate = false;
		stage_benefit.update();
		stage_benefit.tickOnUpdate = true;
	}
}


})(createjs = createjs||{}, AdobeAn_benefit = AdobeAn_benefit||{});
var createjs, AdobeAn_benefit;