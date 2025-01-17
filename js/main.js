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
}
function handleFileLoad_benefit(evt_benefit, comp_benefit) {
    var images=comp_benefit.getImages();
    if (evt_benefit && (evt_benefit.item.type == "image")) { images[evt_benefit.item.id] = evt_benefit.result; }
}
function handleComplete_benefit(evt_benefit,comp_benefit) {
    //This function is always called, irrespective of the content. You can use the variable "stage_benefit" after it is created in token create_stage_benefit.
    var lib_benefit=comp_benefit.getLibrary();
    var ss=comp_benefit.getSpriteSheet();
    var queue = evt_benefit.target;
    var ssMetadata = lib_benefit.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
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
}
function handleFileLoad_commercial(evt_commercial, comp_commercial) {
    var images=comp_commercial.getImages();
    if (evt_commercial && (evt_commercial.item.type == "image")) { images[evt_commercial.item.id] = evt_commercial.result; }
}
function handleComplete_commercial(evt_commercial,comp_commercial) {
    //This function is always called, irrespective of the content. You can use the variable "stage_commercial" after it is created in token create_stage_commercial.
    var lib_commercial=comp_commercial.getLibrary();
    var ss=comp_commercial.getSpriteSheet();
    var queue = evt_commercial.target;
    var ssMetadata = lib_commercial.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
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
}
function handleFileLoad_flood(evt_flood, comp_flood) {
    var images=comp_flood.getImages();
    if (evt_flood && (evt_flood.item.type == "image")) { images[evt_flood.item.id] = evt_flood.result; }
}
function handleComplete_flood(evt_flood,comp_flood) {
    //This function is always called, irrespective of the content. You can use the variable "stage_flood" after it is created in token create_stage_flood.
    var lib_flood=comp_flood.getLibrary();
    var ss=comp_flood.getSpriteSheet();
    var queue = evt_flood.target;
    var ssMetadata = lib_flood.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
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

var canvas_house, stage_house, exportRoot_house, anim_container_house, dom_overlay_container_house, fnStartAnimation_house;
function init_house() {
    canvas_house = document.getElementById("canvas_house");
    anim_container_house = document.getElementById("animation_container_house");
    dom_overlay_container_house = document.getElementById("dom_overlay_container_house");
    var comp_house=AdobeAn_house.getComposition("9C467AB24BF8423195F44663826E4B49");
    var lib_house=comp_house.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt_house){handleFileLoad_house(evt_house,comp_house)});
    loader.addEventListener("complete", function(evt_house){handleComplete_house(evt_house,comp_house)});
    var lib_house=comp_house.getLibrary();
    loader.loadManifest(lib_house.properties.manifest);
}
function handleFileLoad_house(evt_house, comp_house) {
    var images=comp_house.getImages();
    if (evt_house && (evt_house.item.type == "image")) { images[evt_house.item.id] = evt_house.result; }
}
function handleComplete_house(evt_house,comp_house) {
    //This function is always called, irrespective of the content. You can use the variable "stage_house" after it is created in token create_stage_house.
    var lib_house=comp_house.getLibrary();
    var ss=comp_house.getSpriteSheet();
    var queue = evt_house.target;
    var ssMetadata = lib_house.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot_house = new lib_house.House();
    stage_house = new lib_house.Stage(canvas_house);
    //Registers the "tick" event listener.
    stage_house.addChild(exportRoot_house);
    fnStartAnimation_house = function() {
        createjs.Ticker.framerate = lib_house.properties.fps;
        createjs.Ticker.addEventListener("tick", stage_house);
    }
    //Code to support hidpi screens and responsive scaling.
    AdobeAn_house.makeResponsive(true,'both',true,1,[canvas_house,anim_container_house,dom_overlay_container_house]);
    AdobeAn_house.compositionLoaded(lib_house.properties.id);
}

var canvas_jobs, stage_jobs, exportRoot_jobs, anim_container_jobs, dom_overlay_container_jobs, fnStartAnimation_jobs;
function init_jobs() {
    canvas_jobs = document.getElementById("canvas_jobs");
    anim_container_jobs = document.getElementById("animation_container_jobs");
    dom_overlay_container_jobs = document.getElementById("dom_overlay_container_jobs");
    var comp_jobs=AdobeAn_jobs.getComposition("9C467AB24BF8423195F44663826E4B49");
    var lib_jobs=comp_jobs.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt_jobs){handleFileLoad_jobs(evt_jobs,comp_jobs)});
    loader.addEventListener("complete", function(evt_jobs){handleComplete_jobs(evt_jobs,comp_jobs)});
    var lib_jobs=comp_jobs.getLibrary();
    loader.loadManifest(lib_jobs.properties.manifest);
}
function handleFileLoad_jobs(evt_jobs, comp_jobs) {
    var images=comp_jobs.getImages();
    if (evt_jobs && (evt_jobs.item.type == "image")) { images[evt_jobs.item.id] = evt_jobs.result; }
}
function handleComplete_jobs(evt_jobs,comp_jobs) {
    //This function is always called, irrespective of the content. You can use the variable "stage_jobs" after it is created in token create_stage_jobs.
    var lib_jobs=comp_jobs.getLibrary();
    var ss=comp_jobs.getSpriteSheet();
    var queue = evt_jobs.target;
    var ssMetadata = lib_jobs.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot_jobs = new lib_jobs.Jobs();
    stage_jobs = new lib_jobs.Stage(canvas_jobs);
    //Registers the "tick" event listener.
    stage_jobs.addChild(exportRoot_jobs);
    fnStartAnimation_jobs = function() {
        createjs.Ticker.framerate = lib_jobs.properties.fps;
        createjs.Ticker.addEventListener("tick", stage_jobs);
    }
    //Code to support hidpi screens and responsive scaling.
    AdobeAn_jobs.makeResponsive(true,'both',true,1,[canvas_jobs,anim_container_jobs,dom_overlay_container_jobs]);
    AdobeAn_jobs.compositionLoaded(lib_jobs.properties.id);
}

var canvas_money, stage_money, exportRoot_money, anim_container_money, dom_overlay_container_money, fnStartAnimation_money;
function init_money() {
    canvas_money = document.getElementById("canvas_money");
    anim_container_money = document.getElementById("animation_container_money");
    dom_overlay_container_money = document.getElementById("dom_overlay_container_money");
    var comp_money=AdobeAn_money.getComposition("9C467AB24BF8423195F44663826E4B49");
    var lib_money=comp_money.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt_money){handleFileLoad_money(evt_money,comp_money)});
    loader.addEventListener("complete", function(evt_money){handleComplete_money(evt_money,comp_money)});
    var lib_money=comp_money.getLibrary();
    loader.loadManifest(lib_money.properties.manifest);
}
function handleFileLoad_money(evt_money, comp_money) {
    var images=comp_money.getImages();
    if (evt_money && (evt_money.item.type == "image")) { images[evt_money.item.id] = evt_money.result; }
}
function handleComplete_money(evt_money,comp_money) {
    //This function is always called, irrespective of the content. You can use the variable "stage_money" after it is created in token create_stage_money.
    var lib_money=comp_money.getLibrary();
    var ss=comp_money.getSpriteSheet();
    var queue = evt_money.target;
    var ssMetadata = lib_money.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot_money = new lib_money.Money();
    stage_money = new lib_money.Stage(canvas_money);
    //Registers the "tick" event listener.
    stage_money.addChild(exportRoot_money);
    fnStartAnimation_money = function() {
        createjs.Ticker.framerate = lib_money.properties.fps;
        createjs.Ticker.addEventListener("tick", stage_money);
    }
    //Code to support hidpi screens and responsive scaling.
    AdobeAn_money.makeResponsive(true,'both',true,1,[canvas_money,anim_container_money,dom_overlay_container_money]);
    AdobeAn_money.compositionLoaded(lib_money.properties.id);
}

$(document).ready(function () {
    init_benefit();
    init_car();
    init_commercial();
    init_flood();
    init_house();
    init_jobs();
    init_money();
})