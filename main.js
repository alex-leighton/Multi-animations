var canvas_benefit, stage_benefit, exportRoot_benefit, anim_container_benefit, dom_overlay_container_benefit, fnStartAnimation_benefit;
function init_benefit() {
    canvas_benefit = document.getElementById("canvas_benefit");
    anim_container_benefit = document.getElementById("animation_container_benefit");
    dom_overlay_container_benefit = document.getElementById("dom_overlay_container_benefit");
    var comp_benefit=AdobeAn_benefit.getComposition("9C467AB24BF8423195F44663826E4B49");
    var lib_benefit=comp_benefit.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt_benefit){handleFileLoad_benefit(evt_benefit,comp_benefit)});
    loader.addEventListener("complete", function(evt_benefit){handleComplete_benefit(evt_benefit,comp_benefit)});
    var lib_benefit=comp_benefit.getLibrary();
    loader.loadManifest(lib_benefit.properties.manifest);
    console.log('here')
    console.log(lib_benefit);
}
function handleFileLoad_benefit(evt_benefit, comp_benefit) {
    var images=comp_benefit.getImages();
    if (evt_benefit && (evt_benefit.item.type == "image")) { images[evt_benefit.item.id] = evt_benefit.result; }
}
function handleComplete_benefit(evt_benefit,comp_benefit) {
    //This function is always called, irrespective of the content. You can use the variable "stage_benefit" after it is created in token create_stage_benefit.
    console.log('get comp_benefit library');
    console.log(comp_benefit.getLibrary());
    var lib_benefit=comp_benefit.getLibrary();
    var ss=comp_benefit.getSpriteSheet();
    var queue = evt_benefit.target;
    var ssMetadata = lib_benefit.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    console.log(lib_benefit);
    exportRoot_benefit = new lib_benefit.Benefit();
    stage_benefit = new lib_benefit.Stage(canvas_benefit);
    //Registers the "tick" event listener.
    stage_benefit.addChild(exportRoot_benefit);
    fnStartAnimation_benefit = function() {
        createjs.Ticker.framerate = lib_benefit.properties.fps;
        createjs.Ticker.addEventListener("tick", stage_benefit);
    }
    //Code to support hidpi screens and responsive scaling.
    AdobeAn_benefit.makeResponsive(true,'both',true,1,[canvas_benefit,anim_container_benefit,dom_overlay_container_benefit]);
    AdobeAn_benefit.compositionLoaded(lib_benefit.properties.id);
}

var canvas_car, stage_car, exportRoot_car, anim_container_car, dom_overlay_container_car, fnStartAnimation_car;
function init_car() {
    canvas_car = document.getElementById("canvas_car");
    anim_container_car = document.getElementById("animation_container_car");
    dom_overlay_container_car = document.getElementById("dom_overlay_container_car");
    var comp=AdobeAn.getComposition("9C467AB24BF8423195F44663826E4B49");
    var lib_car=comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt_car){handleFileLoad_car(evt_car,comp)});
    loader.addEventListener("complete", function(evt_car){handleComplete_car(evt_car,comp)});
    var lib_car=comp.getLibrary();
    loader.loadManifest(lib_car.properties.manifest);
}
function handleFileLoad_car(evt_car, comp) {
    var images=comp.getImages();
    if (evt_car && (evt_car.item.type == "image")) { images[evt_car.item.id] = evt_car.result; }
}
function handleComplete_car(evt_car,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage_car" after it is created in token create_stage_car.
    var lib_car=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    var queue = evt_car.target;
    var ssMetadata = lib_car.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    console.log('libbe_car');
    console.log(lib_car);
    exportRoot_car = new lib_car.Car();
    stage_car = new lib_car.Stage(canvas_car);
    //Registers the "tick" event listener.
    stage_car.addChild(exportRoot_car);
    fnStartAnimation_car = function() {
        createjs.Ticker.framerate = lib_car.properties.fps;
        createjs.Ticker.addEventListener("tick", stage_car);
    }
    //Code to support hidpi screens and responsive scaling.
    AdobeAn.makeResponsive(true,'both',true,1,[canvas_car,anim_container_car,dom_overlay_container_car]);
    AdobeAn.compositionLoaded(lib_car.properties.id);
}

var canvas_commercial, stage_commercial, exportRoot_commercial, anim_container_commercial, dom_overlay_container_commercial, fnStartAnimation_commercial;
function init_commercial() {
    canvas_commercial = document.getElementById("canvas_commercial");
    anim_container_commercial = document.getElementById("animation_container_commercial");
    dom_overlay_container_commercial = document.getElementById("dom_overlay_container_commercial");
    var comp_commercial=AdobeAn_commercial.getComposition("9C467AB24BF8423195F44663826E4B49");
    var lib_commercial=comp_commercial.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt_commercial){handleFileLoad_commercial(evt_commercial,comp_commercial)});
    loader.addEventListener("complete", function(evt_commercial){handleComplete_commercial(evt_commercial,comp_commercial)});
    var lib_commercial=comp_commercial.getLibrary();
    loader.loadManifest(lib_commercial.properties.manifest);
    console.log('here')
    console.log(lib_commercial);
}
function handleFileLoad_commercial(evt_commercial, comp_commercial) {
    var images=comp_commercial.getImages();
    if (evt_commercial && (evt_commercial.item.type == "image")) { images[evt_commercial.item.id] = evt_commercial.result; }
}
function handleComplete_commercial(evt_commercial,comp_commercial) {
    //This function is always called, irrespective of the content. You can use the variable "stage_commercial" after it is created in token create_stage_commercial.
    console.log('get comp_commercial library');
    console.log(comp_commercial.getLibrary());
    var lib_commercial=comp_commercial.getLibrary();
    var ss=comp_commercial.getSpriteSheet();
    var queue = evt_commercial.target;
    var ssMetadata = lib_commercial.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    console.log(lib_commercial);
    exportRoot_commercial = new lib_commercial.Commercial();
    stage_commercial = new lib_commercial.Stage(canvas_commercial);
    //Registers the "tick" event listener.
    stage_commercial.addChild(exportRoot_commercial);
    fnStartAnimation_commercial = function() {
        createjs.Ticker.framerate = lib_commercial.properties.fps;
        createjs.Ticker.addEventListener("tick", stage_commercial);
    }
    //Code to support hidpi screens and responsive scaling.
    AdobeAn_commercial.makeResponsive(true,'both',true,1,[canvas_commercial,anim_container_commercial,dom_overlay_container_commercial]);
    AdobeAn_commercial.compositionLoaded(lib_commercial.properties.id);
}


var canvas_flood, stage_flood, exportRoot_flood, anim_container_flood, dom_overlay_container_flood, fnStartAnimation_flood;
function init_flood() {
    canvas_flood = document.getElementById("canvas_flood");
    anim_container_flood = document.getElementById("animation_container_flood");
    dom_overlay_container_flood = document.getElementById("dom_overlay_container_flood");
    var comp_flood=AdobeAn_flood.getComposition("9C467AB24BF8423195F44663826E4B49");
    var lib_flood=comp_flood.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt_flood){handleFileLoad_flood(evt_flood,comp_flood)});
    loader.addEventListener("complete", function(evt_flood){handleComplete_flood(evt_flood,comp_flood)});
    var lib_flood=comp_flood.getLibrary();
    loader.loadManifest(lib_flood.properties.manifest);
    console.log('here')
    console.log(lib_flood);
}
function handleFileLoad_flood(evt_flood, comp_flood) {
    var images=comp_flood.getImages();
    if (evt_flood && (evt_flood.item.type == "image")) { images[evt_flood.item.id] = evt_flood.result; }
}
function handleComplete_flood(evt_flood,comp_flood) {
    //This function is always called, irrespective of the content. You can use the variable "stage_flood" after it is created in token create_stage_flood.
    console.log('get comp_flood library');
    console.log(comp_flood.getLibrary());
    var lib_flood=comp_flood.getLibrary();
    var ss=comp_flood.getSpriteSheet();
    var queue = evt_flood.target;
    var ssMetadata = lib_flood.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    console.log(lib_flood);
    exportRoot_flood = new lib_flood.Flood();
    stage_flood = new lib_flood.Stage(canvas_flood);
    //Registers the "tick" event listener.
    stage_flood.addChild(exportRoot_flood);
    fnStartAnimation_flood = function() {
        createjs.Ticker.framerate = lib_flood.properties.fps;
        createjs.Ticker.addEventListener("tick", stage_flood);
    }
    //Code to support hidpi screens and responsive scaling.
    AdobeAn_flood.makeResponsive(true,'both',true,1,[canvas_flood,anim_container_flood,dom_overlay_container_flood]);
    AdobeAn_flood.compositionLoaded(lib_flood.properties.id);
}

$(document).ready(function () {
    init_benefit();
    init_car();
    init_commercial();
    init_flood();
})