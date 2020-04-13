(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"tgdraw_atlas_", frames: [[0,0,2048,2048]]},
		{name:"tgdraw_atlas_2", frames: [[572,1476,252,57],[288,1320,282,280],[0,1320,286,286],[572,1320,280,76],[572,1398,280,76],[854,1398,106,57],[0,0,1318,1318],[826,1476,80,76],[854,1320,80,76],[936,1320,37,57],[572,1535,37,57],[611,1535,37,57],[1320,1026,512,512],[1320,0,683,1024]]}
];


// symbols:



(lib.CachedBmp_9 = function() {
	this.initialize(ss["tgdraw_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["tgdraw_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["tgdraw_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["tgdraw_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["tgdraw_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["tgdraw_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["tgdraw_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(img.CachedBmp_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2048,2200);


(lib.CachedBmp_2 = function() {
	this.initialize(ss["tgdraw_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["tgdraw_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["tgdraw_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["tgdraw_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["tgdraw_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["tgdraw_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3558,338);


(lib.Bitmap2 = function() {
	this.initialize(ss["tgdraw_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["tgdraw_atlas_2"]);
	this.gotoAndStop(13);
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


(lib.wedgeeighth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-141.45,-141.15,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(-140.45,-140.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.4,-141.1,143,143);


(lib.saveicon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(0,0,0.0484,0.0484);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.saveicon, new cjs.Rectangle(0,0,24.8,24.8), null);


(lib.container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.container, new cjs.Rectangle(0,0,1024,1024), null);


(lib.colorpickerelem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(12.7,8.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.colorpickerelem, new cjs.Rectangle(12.7,8.8,659,659), null);


(lib.colorpickerbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.colorpickerbg, new cjs.Rectangle(0,0,1024,1100), null);


(lib.clearbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(10.9,5.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_12();
	this.instance_1.setTransform(10.9,2.7,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_13();
	this.instance_2.setTransform(10.9,5.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(2));

	// Layer_1
	this.instance_3 = new lib.CachedBmp_14();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_15();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,38);


(lib.gridm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wedgeeighth();
	this.instance.setTransform(981.5,938.45,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_1 = new lib.wedgeeighth();
	this.instance_1.setTransform(1024.2,981.2,0.6062,0.6057,0,180,0,0.6,-69.8);

	this.instance_2 = new lib.wedgeeighth();
	this.instance_2.setTransform(896,938.45,0.6061,0.6056,0,90,-90,0.4,-69.7);

	this.instance_3 = new lib.wedgeeighth();
	this.instance_3.setTransform(853.3,981.2,0.6062,0.6057,180,0,0,0.4,-69.8);

	this.instance_4 = new lib.wedgeeighth();
	this.instance_4.setTransform(981.5,938.7,0.6061,0.6056,0,-90,90,0.7,-69.5);

	this.instance_5 = new lib.wedgeeighth();
	this.instance_5.setTransform(1024.2,896,0.6062,0.6057,0,0,0,0.6,-69.5);

	this.instance_6 = new lib.wedgeeighth();
	this.instance_6.setTransform(896,938.7,0.6061,0.6056,90,0,0,0.7,-69.7);

	this.instance_7 = new lib.wedgeeighth();
	this.instance_7.setTransform(853.3,896,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_8 = new lib.wedgeeighth();
	this.instance_8.setTransform(810.8,938.45,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_9 = new lib.wedgeeighth();
	this.instance_9.setTransform(853.5,981.2,0.6062,0.6057,0,180,0,0.6,-69.8);

	this.instance_10 = new lib.wedgeeighth();
	this.instance_10.setTransform(725.3,938.45,0.6061,0.6056,0,90,-90,0.4,-69.7);

	this.instance_11 = new lib.wedgeeighth();
	this.instance_11.setTransform(682.6,981.2,0.6062,0.6057,180,0,0,0.4,-69.8);

	this.instance_12 = new lib.wedgeeighth();
	this.instance_12.setTransform(810.8,938.7,0.6061,0.6056,0,-90,90,0.7,-69.5);

	this.instance_13 = new lib.wedgeeighth();
	this.instance_13.setTransform(853.5,896,0.6062,0.6057,0,0,0,0.6,-69.5);

	this.instance_14 = new lib.wedgeeighth();
	this.instance_14.setTransform(725.3,938.7,0.6061,0.6056,90,0,0,0.7,-69.7);

	this.instance_15 = new lib.wedgeeighth();
	this.instance_15.setTransform(682.6,896,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_16 = new lib.wedgeeighth();
	this.instance_16.setTransform(640.15,938.45,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_17 = new lib.wedgeeighth();
	this.instance_17.setTransform(682.9,981.2,0.6062,0.6057,0,180,0,0.7,-69.8);

	this.instance_18 = new lib.wedgeeighth();
	this.instance_18.setTransform(554.7,938.45,0.6061,0.6056,0,90,-90,0.4,-69.7);

	this.instance_19 = new lib.wedgeeighth();
	this.instance_19.setTransform(512,981.2,0.6062,0.6057,180,0,0,0.4,-69.8);

	this.instance_20 = new lib.wedgeeighth();
	this.instance_20.setTransform(640.15,938.7,0.6061,0.6056,0,-90,90,0.7,-69.5);

	this.instance_21 = new lib.wedgeeighth();
	this.instance_21.setTransform(682.9,896,0.6062,0.6057,0,0,0,0.7,-69.5);

	this.instance_22 = new lib.wedgeeighth();
	this.instance_22.setTransform(554.7,938.7,0.6061,0.6056,90,0,0,0.7,-69.7);

	this.instance_23 = new lib.wedgeeighth();
	this.instance_23.setTransform(512,896,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_24 = new lib.wedgeeighth();
	this.instance_24.setTransform(469.5,938.45,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_25 = new lib.wedgeeighth();
	this.instance_25.setTransform(512.25,981.2,0.6062,0.6057,0,180,0,0.7,-69.8);

	this.instance_26 = new lib.wedgeeighth();
	this.instance_26.setTransform(384.05,938.45,0.6061,0.6056,0,90,-90,0.4,-69.8);

	this.instance_27 = new lib.wedgeeighth();
	this.instance_27.setTransform(341.3,981.2,0.6062,0.6057,180,0,0,0.4,-69.8);

	this.instance_28 = new lib.wedgeeighth();
	this.instance_28.setTransform(469.5,938.7,0.6061,0.6056,0,-90,90,0.7,-69.5);

	this.instance_29 = new lib.wedgeeighth();
	this.instance_29.setTransform(512.25,896,0.6062,0.6057,0,0,0,0.7,-69.5);

	this.instance_30 = new lib.wedgeeighth();
	this.instance_30.setTransform(384.05,938.7,0.6061,0.6056,90,0,0,0.7,-69.8);

	this.instance_31 = new lib.wedgeeighth();
	this.instance_31.setTransform(341.3,896,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_32 = new lib.wedgeeighth();
	this.instance_32.setTransform(298.85,938.45,0.6061,0.6056,-90,0,0,0.4,-69.4);

	this.instance_33 = new lib.wedgeeighth();
	this.instance_33.setTransform(341.55,981.2,0.6062,0.6057,0,180,0,0.7,-69.8);

	this.instance_34 = new lib.wedgeeighth();
	this.instance_34.setTransform(213.35,938.45,0.6061,0.6056,0,90,-90,0.4,-69.8);

	this.instance_35 = new lib.wedgeeighth();
	this.instance_35.setTransform(170.75,981.2,0.6062,0.6057,180,0,0,0.2,-69.8);

	this.instance_36 = new lib.wedgeeighth();
	this.instance_36.setTransform(298.85,938.7,0.6061,0.6056,0,-90,90,0.7,-69.4);

	this.instance_37 = new lib.wedgeeighth();
	this.instance_37.setTransform(341.55,896,0.6062,0.6057,0,0,0,0.7,-69.5);

	this.instance_38 = new lib.wedgeeighth();
	this.instance_38.setTransform(213.35,938.7,0.6061,0.6056,90,0,0,0.7,-69.8);

	this.instance_39 = new lib.wedgeeighth();
	this.instance_39.setTransform(170.75,896,0.6062,0.6057,0,0,180,0.2,-69.5);

	this.instance_40 = new lib.wedgeeighth();
	this.instance_40.setTransform(128.2,938.45,0.6061,0.6056,-90,0,0,0.4,-69.4);

	this.instance_41 = new lib.wedgeeighth();
	this.instance_41.setTransform(171,981.2,0.6062,0.6057,0,180,0,0.8,-69.8);

	this.instance_42 = new lib.wedgeeighth();
	this.instance_42.setTransform(42.8,938.45,0.6061,0.6056,0,90,-90,0.4,-69.9);

	this.instance_43 = new lib.wedgeeighth();
	this.instance_43.setTransform(0.1,981.2,0.6062,0.6057,180,0,0,0.2,-69.8);

	this.instance_44 = new lib.wedgeeighth();
	this.instance_44.setTransform(128.2,938.7,0.6061,0.6056,0,-90,90,0.7,-69.4);

	this.instance_45 = new lib.wedgeeighth();
	this.instance_45.setTransform(171,896,0.6062,0.6057,0,0,0,0.8,-69.5);

	this.instance_46 = new lib.wedgeeighth();
	this.instance_46.setTransform(42.8,938.7,0.6061,0.6056,90,0,0,0.7,-69.9);

	this.instance_47 = new lib.wedgeeighth();
	this.instance_47.setTransform(0.1,896,0.6062,0.6057,0,0,180,0.2,-69.5);

	this.instance_48 = new lib.wedgeeighth();
	this.instance_48.setTransform(981.5,767.85,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_49 = new lib.wedgeeighth();
	this.instance_49.setTransform(1024.2,810.6,0.6062,0.6057,0,180,0,0.6,-69.8);

	this.instance_50 = new lib.wedgeeighth();
	this.instance_50.setTransform(896,767.85,0.6061,0.6056,0,90,-90,0.4,-69.7);

	this.instance_51 = new lib.wedgeeighth();
	this.instance_51.setTransform(853.3,810.6,0.6062,0.6057,180,0,0,0.4,-69.8);

	this.instance_52 = new lib.wedgeeighth();
	this.instance_52.setTransform(981.5,768.05,0.6061,0.6056,0,-90,90,0.6,-69.5);

	this.instance_53 = new lib.wedgeeighth();
	this.instance_53.setTransform(1024.2,725.35,0.6062,0.6057,0,0,0,0.6,-69.6);

	this.instance_54 = new lib.wedgeeighth();
	this.instance_54.setTransform(896,768.05,0.6061,0.6056,90,0,0,0.6,-69.7);

	this.instance_55 = new lib.wedgeeighth();
	this.instance_55.setTransform(853.3,725.35,0.6062,0.6057,0,0,180,0.4,-69.6);

	this.instance_56 = new lib.wedgeeighth();
	this.instance_56.setTransform(810.8,767.85,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_57 = new lib.wedgeeighth();
	this.instance_57.setTransform(853.5,810.6,0.6062,0.6057,0,180,0,0.6,-69.8);

	this.instance_58 = new lib.wedgeeighth();
	this.instance_58.setTransform(725.3,767.85,0.6061,0.6056,0,90,-90,0.4,-69.7);

	this.instance_59 = new lib.wedgeeighth();
	this.instance_59.setTransform(682.6,810.6,0.6062,0.6057,180,0,0,0.4,-69.8);

	this.instance_60 = new lib.wedgeeighth();
	this.instance_60.setTransform(810.8,768.05,0.6061,0.6056,0,-90,90,0.6,-69.5);

	this.instance_61 = new lib.wedgeeighth();
	this.instance_61.setTransform(853.5,725.35,0.6062,0.6057,0,0,0,0.6,-69.6);

	this.instance_62 = new lib.wedgeeighth();
	this.instance_62.setTransform(725.3,768.05,0.6061,0.6056,90,0,0,0.6,-69.7);

	this.instance_63 = new lib.wedgeeighth();
	this.instance_63.setTransform(682.6,725.35,0.6062,0.6057,0,0,180,0.4,-69.6);

	this.instance_64 = new lib.wedgeeighth();
	this.instance_64.setTransform(640.15,767.85,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_65 = new lib.wedgeeighth();
	this.instance_65.setTransform(682.9,810.6,0.6062,0.6057,0,180,0,0.7,-69.8);

	this.instance_66 = new lib.wedgeeighth();
	this.instance_66.setTransform(554.7,767.85,0.6061,0.6056,0,90,-90,0.4,-69.7);

	this.instance_67 = new lib.wedgeeighth();
	this.instance_67.setTransform(512,810.6,0.6062,0.6057,180,0,0,0.4,-69.8);

	this.instance_68 = new lib.wedgeeighth();
	this.instance_68.setTransform(640.15,768.05,0.6061,0.6056,0,-90,90,0.6,-69.5);

	this.instance_69 = new lib.wedgeeighth();
	this.instance_69.setTransform(682.9,725.35,0.6062,0.6057,0,0,0,0.7,-69.6);

	this.instance_70 = new lib.wedgeeighth();
	this.instance_70.setTransform(554.7,768.05,0.6061,0.6056,90,0,0,0.6,-69.7);

	this.instance_71 = new lib.wedgeeighth();
	this.instance_71.setTransform(512,725.35,0.6062,0.6057,0,0,180,0.4,-69.6);

	this.instance_72 = new lib.wedgeeighth();
	this.instance_72.setTransform(469.5,767.85,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_73 = new lib.wedgeeighth();
	this.instance_73.setTransform(512.25,810.6,0.6062,0.6057,0,180,0,0.7,-69.8);

	this.instance_74 = new lib.wedgeeighth();
	this.instance_74.setTransform(384.05,767.85,0.6061,0.6056,0,90,-90,0.4,-69.8);

	this.instance_75 = new lib.wedgeeighth();
	this.instance_75.setTransform(341.3,810.6,0.6062,0.6057,180,0,0,0.4,-69.8);

	this.instance_76 = new lib.wedgeeighth();
	this.instance_76.setTransform(469.5,768.05,0.6061,0.6056,0,-90,90,0.6,-69.5);

	this.instance_77 = new lib.wedgeeighth();
	this.instance_77.setTransform(512.25,725.35,0.6062,0.6057,0,0,0,0.7,-69.6);

	this.instance_78 = new lib.wedgeeighth();
	this.instance_78.setTransform(384.05,768.05,0.6061,0.6056,90,0,0,0.6,-69.8);

	this.instance_79 = new lib.wedgeeighth();
	this.instance_79.setTransform(341.3,725.35,0.6062,0.6057,0,0,180,0.4,-69.6);

	this.instance_80 = new lib.wedgeeighth();
	this.instance_80.setTransform(298.85,767.85,0.6061,0.6056,-90,0,0,0.4,-69.4);

	this.instance_81 = new lib.wedgeeighth();
	this.instance_81.setTransform(341.55,810.6,0.6062,0.6057,0,180,0,0.7,-69.8);

	this.instance_82 = new lib.wedgeeighth();
	this.instance_82.setTransform(213.35,767.85,0.6061,0.6056,0,90,-90,0.4,-69.8);

	this.instance_83 = new lib.wedgeeighth();
	this.instance_83.setTransform(170.75,810.6,0.6062,0.6057,180,0,0,0.2,-69.8);

	this.instance_84 = new lib.wedgeeighth();
	this.instance_84.setTransform(298.85,768.05,0.6061,0.6056,0,-90,90,0.6,-69.4);

	this.instance_85 = new lib.wedgeeighth();
	this.instance_85.setTransform(341.55,725.35,0.6062,0.6057,0,0,0,0.7,-69.6);

	this.instance_86 = new lib.wedgeeighth();
	this.instance_86.setTransform(213.35,768.05,0.6061,0.6056,90,0,0,0.6,-69.8);

	this.instance_87 = new lib.wedgeeighth();
	this.instance_87.setTransform(170.75,725.35,0.6062,0.6057,0,0,180,0.2,-69.6);

	this.instance_88 = new lib.wedgeeighth();
	this.instance_88.setTransform(128.2,767.85,0.6061,0.6056,-90,0,0,0.4,-69.4);

	this.instance_89 = new lib.wedgeeighth();
	this.instance_89.setTransform(171,810.6,0.6062,0.6057,0,180,0,0.8,-69.8);

	this.instance_90 = new lib.wedgeeighth();
	this.instance_90.setTransform(42.8,767.85,0.6061,0.6056,0,90,-90,0.4,-69.9);

	this.instance_91 = new lib.wedgeeighth();
	this.instance_91.setTransform(0.1,810.6,0.6062,0.6057,180,0,0,0.2,-69.8);

	this.instance_92 = new lib.wedgeeighth();
	this.instance_92.setTransform(128.2,768.05,0.6061,0.6056,0,-90,90,0.6,-69.4);

	this.instance_93 = new lib.wedgeeighth();
	this.instance_93.setTransform(171,725.35,0.6062,0.6057,0,0,0,0.8,-69.6);

	this.instance_94 = new lib.wedgeeighth();
	this.instance_94.setTransform(42.8,768.05,0.6061,0.6056,90,0,0,0.6,-69.9);

	this.instance_95 = new lib.wedgeeighth();
	this.instance_95.setTransform(0.1,725.35,0.6062,0.6057,0,0,180,0.2,-69.6);

	this.instance_96 = new lib.wedgeeighth();
	this.instance_96.setTransform(981.5,597.2,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_97 = new lib.wedgeeighth();
	this.instance_97.setTransform(1024.2,639.95,0.6062,0.6057,0,180,0,0.6,-69.8);

	this.instance_98 = new lib.wedgeeighth();
	this.instance_98.setTransform(896,597.2,0.6061,0.6056,0,90,-90,0.4,-69.7);

	this.instance_99 = new lib.wedgeeighth();
	this.instance_99.setTransform(853.3,639.95,0.6062,0.6057,180,0,0,0.4,-69.8);

	this.instance_100 = new lib.wedgeeighth();
	this.instance_100.setTransform(981.5,597.4,0.6061,0.6056,0,-90,90,0.6,-69.5);

	this.instance_101 = new lib.wedgeeighth();
	this.instance_101.setTransform(1024.2,554.75,0.6062,0.6057,0,0,0,0.6,-69.5);

	this.instance_102 = new lib.wedgeeighth();
	this.instance_102.setTransform(896,597.4,0.6061,0.6056,90,0,0,0.6,-69.7);

	this.instance_103 = new lib.wedgeeighth();
	this.instance_103.setTransform(853.3,554.75,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_104 = new lib.wedgeeighth();
	this.instance_104.setTransform(810.8,597.2,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_105 = new lib.wedgeeighth();
	this.instance_105.setTransform(853.5,639.95,0.6062,0.6057,0,180,0,0.6,-69.8);

	this.instance_106 = new lib.wedgeeighth();
	this.instance_106.setTransform(725.3,597.2,0.6061,0.6056,0,90,-90,0.4,-69.7);

	this.instance_107 = new lib.wedgeeighth();
	this.instance_107.setTransform(682.6,639.95,0.6062,0.6057,180,0,0,0.4,-69.8);

	this.instance_108 = new lib.wedgeeighth();
	this.instance_108.setTransform(810.8,597.4,0.6061,0.6056,0,-90,90,0.6,-69.5);

	this.instance_109 = new lib.wedgeeighth();
	this.instance_109.setTransform(853.5,554.75,0.6062,0.6057,0,0,0,0.6,-69.5);

	this.instance_110 = new lib.wedgeeighth();
	this.instance_110.setTransform(725.3,597.4,0.6061,0.6056,90,0,0,0.6,-69.7);

	this.instance_111 = new lib.wedgeeighth();
	this.instance_111.setTransform(682.6,554.75,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_112 = new lib.wedgeeighth();
	this.instance_112.setTransform(640.15,597.2,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_113 = new lib.wedgeeighth();
	this.instance_113.setTransform(682.9,639.95,0.6062,0.6057,0,180,0,0.7,-69.8);

	this.instance_114 = new lib.wedgeeighth();
	this.instance_114.setTransform(554.7,597.2,0.6061,0.6056,0,90,-90,0.4,-69.7);

	this.instance_115 = new lib.wedgeeighth();
	this.instance_115.setTransform(512,639.95,0.6062,0.6057,180,0,0,0.4,-69.8);

	this.instance_116 = new lib.wedgeeighth();
	this.instance_116.setTransform(640.15,597.4,0.6061,0.6056,0,-90,90,0.6,-69.5);

	this.instance_117 = new lib.wedgeeighth();
	this.instance_117.setTransform(682.9,554.75,0.6062,0.6057,0,0,0,0.7,-69.5);

	this.instance_118 = new lib.wedgeeighth();
	this.instance_118.setTransform(554.7,597.4,0.6061,0.6056,90,0,0,0.6,-69.7);

	this.instance_119 = new lib.wedgeeighth();
	this.instance_119.setTransform(512,554.75,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_120 = new lib.wedgeeighth();
	this.instance_120.setTransform(469.5,597.2,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_121 = new lib.wedgeeighth();
	this.instance_121.setTransform(512.25,639.95,0.6062,0.6057,0,180,0,0.7,-69.8);

	this.instance_122 = new lib.wedgeeighth();
	this.instance_122.setTransform(384.05,597.2,0.6061,0.6056,0,90,-90,0.4,-69.8);

	this.instance_123 = new lib.wedgeeighth();
	this.instance_123.setTransform(341.3,639.95,0.6062,0.6057,180,0,0,0.4,-69.8);

	this.instance_124 = new lib.wedgeeighth();
	this.instance_124.setTransform(469.5,597.4,0.6061,0.6056,0,-90,90,0.6,-69.5);

	this.instance_125 = new lib.wedgeeighth();
	this.instance_125.setTransform(512.25,554.75,0.6062,0.6057,0,0,0,0.7,-69.5);

	this.instance_126 = new lib.wedgeeighth();
	this.instance_126.setTransform(384.05,597.4,0.6061,0.6056,90,0,0,0.6,-69.8);

	this.instance_127 = new lib.wedgeeighth();
	this.instance_127.setTransform(341.3,554.75,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_128 = new lib.wedgeeighth();
	this.instance_128.setTransform(298.85,597.2,0.6061,0.6056,-90,0,0,0.4,-69.4);

	this.instance_129 = new lib.wedgeeighth();
	this.instance_129.setTransform(341.55,639.95,0.6062,0.6057,0,180,0,0.7,-69.8);

	this.instance_130 = new lib.wedgeeighth();
	this.instance_130.setTransform(213.35,597.2,0.6061,0.6056,0,90,-90,0.4,-69.8);

	this.instance_131 = new lib.wedgeeighth();
	this.instance_131.setTransform(170.75,639.95,0.6062,0.6057,180,0,0,0.2,-69.8);

	this.instance_132 = new lib.wedgeeighth();
	this.instance_132.setTransform(298.85,597.4,0.6061,0.6056,0,-90,90,0.6,-69.4);

	this.instance_133 = new lib.wedgeeighth();
	this.instance_133.setTransform(341.55,554.75,0.6062,0.6057,0,0,0,0.7,-69.5);

	this.instance_134 = new lib.wedgeeighth();
	this.instance_134.setTransform(213.35,597.4,0.6061,0.6056,90,0,0,0.6,-69.8);

	this.instance_135 = new lib.wedgeeighth();
	this.instance_135.setTransform(170.75,554.75,0.6062,0.6057,0,0,180,0.2,-69.5);

	this.instance_136 = new lib.wedgeeighth();
	this.instance_136.setTransform(128.2,597.2,0.6061,0.6056,-90,0,0,0.4,-69.4);

	this.instance_137 = new lib.wedgeeighth();
	this.instance_137.setTransform(171,639.95,0.6062,0.6057,0,180,0,0.8,-69.8);

	this.instance_138 = new lib.wedgeeighth();
	this.instance_138.setTransform(42.8,597.2,0.6061,0.6056,0,90,-90,0.4,-69.9);

	this.instance_139 = new lib.wedgeeighth();
	this.instance_139.setTransform(0.1,639.95,0.6062,0.6057,180,0,0,0.2,-69.8);

	this.instance_140 = new lib.wedgeeighth();
	this.instance_140.setTransform(128.2,597.4,0.6061,0.6056,0,-90,90,0.6,-69.4);

	this.instance_141 = new lib.wedgeeighth();
	this.instance_141.setTransform(171,554.75,0.6062,0.6057,0,0,0,0.8,-69.5);

	this.instance_142 = new lib.wedgeeighth();
	this.instance_142.setTransform(42.8,597.4,0.6061,0.6056,90,0,0,0.6,-69.9);

	this.instance_143 = new lib.wedgeeighth();
	this.instance_143.setTransform(0.1,554.75,0.6062,0.6057,0,0,180,0.2,-69.5);

	this.instance_144 = new lib.wedgeeighth();
	this.instance_144.setTransform(981.5,426.7,0.6061,0.6056,-90,0,0,0.2,-69.5);

	this.instance_145 = new lib.wedgeeighth();
	this.instance_145.setTransform(1024.2,469.35,0.6062,0.6057,0,180,0,0.6,-69.9);

	this.instance_146 = new lib.wedgeeighth();
	this.instance_146.setTransform(896,426.7,0.6061,0.6056,0,90,-90,0.2,-69.7);

	this.instance_147 = new lib.wedgeeighth();
	this.instance_147.setTransform(853.3,469.35,0.6062,0.6057,180,0,0,0.4,-69.9);

	this.instance_148 = new lib.wedgeeighth();
	this.instance_148.setTransform(981.5,426.9,0.6061,0.6056,0,-90,90,0.8,-69.5);

	this.instance_149 = new lib.wedgeeighth();
	this.instance_149.setTransform(1024.2,384.1,0.6062,0.6057,0,0,0,0.6,-69.5);

	this.instance_150 = new lib.wedgeeighth();
	this.instance_150.setTransform(896,426.9,0.6061,0.6056,90,0,0,0.8,-69.7);

	this.instance_151 = new lib.wedgeeighth();
	this.instance_151.setTransform(853.3,384.1,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_152 = new lib.wedgeeighth();
	this.instance_152.setTransform(810.8,426.7,0.6061,0.6056,-90,0,0,0.2,-69.5);

	this.instance_153 = new lib.wedgeeighth();
	this.instance_153.setTransform(853.5,469.35,0.6062,0.6057,0,180,0,0.6,-69.9);

	this.instance_154 = new lib.wedgeeighth();
	this.instance_154.setTransform(725.3,426.7,0.6061,0.6056,0,90,-90,0.2,-69.7);

	this.instance_155 = new lib.wedgeeighth();
	this.instance_155.setTransform(682.6,469.35,0.6062,0.6057,180,0,0,0.4,-69.9);

	this.instance_156 = new lib.wedgeeighth();
	this.instance_156.setTransform(810.8,426.9,0.6061,0.6056,0,-90,90,0.8,-69.5);

	this.instance_157 = new lib.wedgeeighth();
	this.instance_157.setTransform(853.5,384.1,0.6062,0.6057,0,0,0,0.6,-69.5);

	this.instance_158 = new lib.wedgeeighth();
	this.instance_158.setTransform(725.3,426.9,0.6061,0.6056,90,0,0,0.8,-69.7);

	this.instance_159 = new lib.wedgeeighth();
	this.instance_159.setTransform(682.6,384.1,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_160 = new lib.wedgeeighth();
	this.instance_160.setTransform(640.15,426.7,0.6061,0.6056,-90,0,0,0.2,-69.5);

	this.instance_161 = new lib.wedgeeighth();
	this.instance_161.setTransform(682.9,469.35,0.6062,0.6057,0,180,0,0.7,-69.9);

	this.instance_162 = new lib.wedgeeighth();
	this.instance_162.setTransform(554.7,426.7,0.6061,0.6056,0,90,-90,0.2,-69.7);

	this.instance_163 = new lib.wedgeeighth();
	this.instance_163.setTransform(512,469.35,0.6062,0.6057,180,0,0,0.4,-69.9);

	this.instance_164 = new lib.wedgeeighth();
	this.instance_164.setTransform(640.15,426.9,0.6061,0.6056,0,-90,90,0.8,-69.5);

	this.instance_165 = new lib.wedgeeighth();
	this.instance_165.setTransform(682.9,384.1,0.6062,0.6057,0,0,0,0.7,-69.5);

	this.instance_166 = new lib.wedgeeighth();
	this.instance_166.setTransform(554.7,426.9,0.6061,0.6056,90,0,0,0.8,-69.7);

	this.instance_167 = new lib.wedgeeighth();
	this.instance_167.setTransform(512,384.1,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_168 = new lib.wedgeeighth();
	this.instance_168.setTransform(469.5,426.7,0.6061,0.6056,-90,0,0,0.2,-69.5);

	this.instance_169 = new lib.wedgeeighth();
	this.instance_169.setTransform(512.25,469.35,0.6062,0.6057,0,180,0,0.7,-69.9);

	this.instance_170 = new lib.wedgeeighth();
	this.instance_170.setTransform(384.05,426.7,0.6061,0.6056,0,90,-90,0.2,-69.8);

	this.instance_171 = new lib.wedgeeighth();
	this.instance_171.setTransform(341.3,469.35,0.6062,0.6057,180,0,0,0.4,-69.9);

	this.instance_172 = new lib.wedgeeighth();
	this.instance_172.setTransform(469.5,426.9,0.6061,0.6056,0,-90,90,0.8,-69.5);

	this.instance_173 = new lib.wedgeeighth();
	this.instance_173.setTransform(512.25,384.1,0.6062,0.6057,0,0,0,0.7,-69.5);

	this.instance_174 = new lib.wedgeeighth();
	this.instance_174.setTransform(384.05,426.9,0.6061,0.6056,90,0,0,0.8,-69.8);

	this.instance_175 = new lib.wedgeeighth();
	this.instance_175.setTransform(341.3,384.1,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_176 = new lib.wedgeeighth();
	this.instance_176.setTransform(298.85,426.7,0.6061,0.6056,-90,0,0,0.2,-69.4);

	this.instance_177 = new lib.wedgeeighth();
	this.instance_177.setTransform(341.55,469.35,0.6062,0.6057,0,180,0,0.7,-69.9);

	this.instance_178 = new lib.wedgeeighth();
	this.instance_178.setTransform(213.35,426.7,0.6061,0.6056,0,90,-90,0.2,-69.8);

	this.instance_179 = new lib.wedgeeighth();
	this.instance_179.setTransform(170.75,469.35,0.6062,0.6057,180,0,0,0.2,-69.9);

	this.instance_180 = new lib.wedgeeighth();
	this.instance_180.setTransform(298.85,426.9,0.6061,0.6056,0,-90,90,0.8,-69.4);

	this.instance_181 = new lib.wedgeeighth();
	this.instance_181.setTransform(341.55,384.1,0.6062,0.6057,0,0,0,0.7,-69.5);

	this.instance_182 = new lib.wedgeeighth();
	this.instance_182.setTransform(213.35,426.9,0.6061,0.6056,90,0,0,0.8,-69.8);

	this.instance_183 = new lib.wedgeeighth();
	this.instance_183.setTransform(170.75,384.1,0.6062,0.6057,0,0,180,0.2,-69.5);

	this.instance_184 = new lib.wedgeeighth();
	this.instance_184.setTransform(128.2,426.7,0.6061,0.6056,-90,0,0,0.2,-69.4);

	this.instance_185 = new lib.wedgeeighth();
	this.instance_185.setTransform(171,469.35,0.6062,0.6057,0,180,0,0.8,-69.9);

	this.instance_186 = new lib.wedgeeighth();
	this.instance_186.setTransform(42.8,426.7,0.6061,0.6056,0,90,-90,0.2,-69.9);

	this.instance_187 = new lib.wedgeeighth();
	this.instance_187.setTransform(0.1,469.35,0.6062,0.6057,180,0,0,0.2,-69.9);

	this.instance_188 = new lib.wedgeeighth();
	this.instance_188.setTransform(128.2,426.9,0.6061,0.6056,0,-90,90,0.8,-69.4);

	this.instance_189 = new lib.wedgeeighth();
	this.instance_189.setTransform(171,384.1,0.6062,0.6057,0,0,0,0.8,-69.5);

	this.instance_190 = new lib.wedgeeighth();
	this.instance_190.setTransform(42.8,426.9,0.6061,0.6056,90,0,0,0.8,-69.9);

	this.instance_191 = new lib.wedgeeighth();
	this.instance_191.setTransform(0.1,384.1,0.6062,0.6057,0,0,180,0.2,-69.5);

	this.instance_192 = new lib.wedgeeighth();
	this.instance_192.setTransform(981.5,255.95,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_193 = new lib.wedgeeighth();
	this.instance_193.setTransform(1024.2,298.75,0.6062,0.6057,0,180,0,0.6,-69.9);

	this.instance_194 = new lib.wedgeeighth();
	this.instance_194.setTransform(896,255.95,0.6061,0.6056,0,90,-90,0.4,-69.7);

	this.instance_195 = new lib.wedgeeighth();
	this.instance_195.setTransform(853.3,298.75,0.6062,0.6057,180,0,0,0.4,-69.9);

	this.instance_196 = new lib.wedgeeighth();
	this.instance_196.setTransform(981.5,256.2,0.6061,0.6056,0,-90,90,0.7,-69.5);

	this.instance_197 = new lib.wedgeeighth();
	this.instance_197.setTransform(1024.2,213.5,0.6062,0.6057,0,0,0,0.6,-69.5);

	this.instance_198 = new lib.wedgeeighth();
	this.instance_198.setTransform(896,256.2,0.6061,0.6056,90,0,0,0.7,-69.7);

	this.instance_199 = new lib.wedgeeighth();
	this.instance_199.setTransform(853.3,213.5,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_200 = new lib.wedgeeighth();
	this.instance_200.setTransform(810.8,255.95,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_201 = new lib.wedgeeighth();
	this.instance_201.setTransform(853.5,298.75,0.6062,0.6057,0,180,0,0.6,-69.9);

	this.instance_202 = new lib.wedgeeighth();
	this.instance_202.setTransform(725.3,255.95,0.6061,0.6056,0,90,-90,0.4,-69.7);

	this.instance_203 = new lib.wedgeeighth();
	this.instance_203.setTransform(682.6,298.75,0.6062,0.6057,180,0,0,0.4,-69.9);

	this.instance_204 = new lib.wedgeeighth();
	this.instance_204.setTransform(810.8,256.2,0.6061,0.6056,0,-90,90,0.7,-69.5);

	this.instance_205 = new lib.wedgeeighth();
	this.instance_205.setTransform(853.5,213.5,0.6062,0.6057,0,0,0,0.6,-69.5);

	this.instance_206 = new lib.wedgeeighth();
	this.instance_206.setTransform(725.3,256.2,0.6061,0.6056,90,0,0,0.7,-69.7);

	this.instance_207 = new lib.wedgeeighth();
	this.instance_207.setTransform(682.6,213.5,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_208 = new lib.wedgeeighth();
	this.instance_208.setTransform(640.15,255.95,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_209 = new lib.wedgeeighth();
	this.instance_209.setTransform(682.9,298.75,0.6062,0.6057,0,180,0,0.7,-69.9);

	this.instance_210 = new lib.wedgeeighth();
	this.instance_210.setTransform(554.7,255.95,0.6061,0.6056,0,90,-90,0.4,-69.7);

	this.instance_211 = new lib.wedgeeighth();
	this.instance_211.setTransform(512,298.75,0.6062,0.6057,180,0,0,0.4,-69.9);

	this.instance_212 = new lib.wedgeeighth();
	this.instance_212.setTransform(640.15,256.2,0.6061,0.6056,0,-90,90,0.7,-69.5);

	this.instance_213 = new lib.wedgeeighth();
	this.instance_213.setTransform(682.9,213.5,0.6062,0.6057,0,0,0,0.7,-69.5);

	this.instance_214 = new lib.wedgeeighth();
	this.instance_214.setTransform(554.7,256.2,0.6061,0.6056,90,0,0,0.7,-69.7);

	this.instance_215 = new lib.wedgeeighth();
	this.instance_215.setTransform(512,213.5,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_216 = new lib.wedgeeighth();
	this.instance_216.setTransform(469.5,255.95,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_217 = new lib.wedgeeighth();
	this.instance_217.setTransform(512.25,298.75,0.6062,0.6057,0,180,0,0.7,-69.9);

	this.instance_218 = new lib.wedgeeighth();
	this.instance_218.setTransform(384.05,255.95,0.6061,0.6056,0,90,-90,0.4,-69.8);

	this.instance_219 = new lib.wedgeeighth();
	this.instance_219.setTransform(341.3,298.75,0.6062,0.6057,180,0,0,0.4,-69.9);

	this.instance_220 = new lib.wedgeeighth();
	this.instance_220.setTransform(469.5,256.2,0.6061,0.6056,0,-90,90,0.7,-69.5);

	this.instance_221 = new lib.wedgeeighth();
	this.instance_221.setTransform(512.25,213.5,0.6062,0.6057,0,0,0,0.7,-69.5);

	this.instance_222 = new lib.wedgeeighth();
	this.instance_222.setTransform(384.05,256.2,0.6061,0.6056,90,0,0,0.7,-69.8);

	this.instance_223 = new lib.wedgeeighth();
	this.instance_223.setTransform(341.3,213.5,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_224 = new lib.wedgeeighth();
	this.instance_224.setTransform(298.85,255.95,0.6061,0.6056,-90,0,0,0.4,-69.4);

	this.instance_225 = new lib.wedgeeighth();
	this.instance_225.setTransform(341.55,298.75,0.6062,0.6057,0,180,0,0.7,-69.9);

	this.instance_226 = new lib.wedgeeighth();
	this.instance_226.setTransform(213.35,255.95,0.6061,0.6056,0,90,-90,0.4,-69.8);

	this.instance_227 = new lib.wedgeeighth();
	this.instance_227.setTransform(170.75,298.75,0.6062,0.6057,180,0,0,0.2,-69.9);

	this.instance_228 = new lib.wedgeeighth();
	this.instance_228.setTransform(298.85,256.2,0.6061,0.6056,0,-90,90,0.7,-69.4);

	this.instance_229 = new lib.wedgeeighth();
	this.instance_229.setTransform(341.55,213.5,0.6062,0.6057,0,0,0,0.7,-69.5);

	this.instance_230 = new lib.wedgeeighth();
	this.instance_230.setTransform(213.35,256.2,0.6061,0.6056,90,0,0,0.7,-69.8);

	this.instance_231 = new lib.wedgeeighth();
	this.instance_231.setTransform(170.75,213.5,0.6062,0.6057,0,0,180,0.2,-69.5);

	this.instance_232 = new lib.wedgeeighth();
	this.instance_232.setTransform(128.2,255.95,0.6061,0.6056,-90,0,0,0.4,-69.4);

	this.instance_233 = new lib.wedgeeighth();
	this.instance_233.setTransform(171,298.75,0.6062,0.6057,0,180,0,0.8,-69.9);

	this.instance_234 = new lib.wedgeeighth();
	this.instance_234.setTransform(42.8,255.95,0.6061,0.6056,0,90,-90,0.4,-69.9);

	this.instance_235 = new lib.wedgeeighth();
	this.instance_235.setTransform(0.1,298.75,0.6062,0.6057,180,0,0,0.2,-69.9);

	this.instance_236 = new lib.wedgeeighth();
	this.instance_236.setTransform(128.2,256.2,0.6061,0.6056,0,-90,90,0.7,-69.4);

	this.instance_237 = new lib.wedgeeighth();
	this.instance_237.setTransform(171,213.5,0.6062,0.6057,0,0,0,0.8,-69.5);

	this.instance_238 = new lib.wedgeeighth();
	this.instance_238.setTransform(42.8,256.2,0.6061,0.6056,90,0,0,0.7,-69.9);

	this.instance_239 = new lib.wedgeeighth();
	this.instance_239.setTransform(0.1,213.5,0.6062,0.6057,0,0,180,0.2,-69.5);

	this.instance_240 = new lib.wedgeeighth();
	this.instance_240.setTransform(981.5,85.3,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_241 = new lib.wedgeeighth();
	this.instance_241.setTransform(1024.2,128.1,0.6062,0.6057,0,180,0,0.6,-69.9);

	this.instance_242 = new lib.wedgeeighth();
	this.instance_242.setTransform(896,85.3,0.6061,0.6056,0,90,-90,0.4,-69.7);

	this.instance_243 = new lib.wedgeeighth();
	this.instance_243.setTransform(853.3,128.1,0.6062,0.6057,180,0,0,0.4,-69.9);

	this.instance_244 = new lib.wedgeeighth();
	this.instance_244.setTransform(981.5,85.55,0.6061,0.6056,0,-90,90,0.7,-69.5);

	this.instance_245 = new lib.wedgeeighth();
	this.instance_245.setTransform(1024.2,42.85,0.6062,0.6057,0,0,0,0.6,-69.5);

	this.instance_246 = new lib.wedgeeighth();
	this.instance_246.setTransform(896,85.55,0.6061,0.6056,90,0,0,0.7,-69.7);

	this.instance_247 = new lib.wedgeeighth();
	this.instance_247.setTransform(853.3,42.85,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_248 = new lib.wedgeeighth();
	this.instance_248.setTransform(810.8,85.3,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_249 = new lib.wedgeeighth();
	this.instance_249.setTransform(853.5,128.1,0.6062,0.6057,0,180,0,0.6,-69.9);

	this.instance_250 = new lib.wedgeeighth();
	this.instance_250.setTransform(725.3,85.3,0.6061,0.6056,0,90,-90,0.4,-69.7);

	this.instance_251 = new lib.wedgeeighth();
	this.instance_251.setTransform(682.6,128.1,0.6062,0.6057,180,0,0,0.4,-69.9);

	this.instance_252 = new lib.wedgeeighth();
	this.instance_252.setTransform(810.8,85.55,0.6061,0.6056,0,-90,90,0.7,-69.5);

	this.instance_253 = new lib.wedgeeighth();
	this.instance_253.setTransform(853.5,42.85,0.6062,0.6057,0,0,0,0.6,-69.5);

	this.instance_254 = new lib.wedgeeighth();
	this.instance_254.setTransform(725.3,85.55,0.6061,0.6056,90,0,0,0.7,-69.7);

	this.instance_255 = new lib.wedgeeighth();
	this.instance_255.setTransform(682.6,42.85,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_256 = new lib.wedgeeighth();
	this.instance_256.setTransform(640.15,85.3,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_257 = new lib.wedgeeighth();
	this.instance_257.setTransform(682.9,128.1,0.6062,0.6057,0,180,0,0.7,-69.9);

	this.instance_258 = new lib.wedgeeighth();
	this.instance_258.setTransform(554.7,85.3,0.6061,0.6056,0,90,-90,0.4,-69.7);

	this.instance_259 = new lib.wedgeeighth();
	this.instance_259.setTransform(512,128.1,0.6062,0.6057,180,0,0,0.4,-69.9);

	this.instance_260 = new lib.wedgeeighth();
	this.instance_260.setTransform(640.15,85.55,0.6061,0.6056,0,-90,90,0.7,-69.5);

	this.instance_261 = new lib.wedgeeighth();
	this.instance_261.setTransform(682.9,42.85,0.6062,0.6057,0,0,0,0.7,-69.5);

	this.instance_262 = new lib.wedgeeighth();
	this.instance_262.setTransform(554.7,85.55,0.6061,0.6056,90,0,0,0.7,-69.7);

	this.instance_263 = new lib.wedgeeighth();
	this.instance_263.setTransform(512,42.85,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_264 = new lib.wedgeeighth();
	this.instance_264.setTransform(469.5,85.3,0.6061,0.6056,-90,0,0,0.4,-69.5);

	this.instance_265 = new lib.wedgeeighth();
	this.instance_265.setTransform(512.25,128.1,0.6062,0.6057,0,180,0,0.7,-69.9);

	this.instance_266 = new lib.wedgeeighth();
	this.instance_266.setTransform(384.05,85.3,0.6061,0.6056,0,90,-90,0.4,-69.8);

	this.instance_267 = new lib.wedgeeighth();
	this.instance_267.setTransform(341.3,128.1,0.6062,0.6057,180,0,0,0.4,-69.9);

	this.instance_268 = new lib.wedgeeighth();
	this.instance_268.setTransform(469.5,85.55,0.6061,0.6056,0,-90,90,0.7,-69.5);

	this.instance_269 = new lib.wedgeeighth();
	this.instance_269.setTransform(512.25,42.85,0.6062,0.6057,0,0,0,0.7,-69.5);

	this.instance_270 = new lib.wedgeeighth();
	this.instance_270.setTransform(384.05,85.55,0.6061,0.6056,90,0,0,0.7,-69.8);

	this.instance_271 = new lib.wedgeeighth();
	this.instance_271.setTransform(341.3,42.85,0.6062,0.6057,0,0,180,0.4,-69.5);

	this.instance_272 = new lib.wedgeeighth();
	this.instance_272.setTransform(298.85,85.3,0.6061,0.6056,-90,0,0,0.4,-69.4);

	this.instance_273 = new lib.wedgeeighth();
	this.instance_273.setTransform(341.55,128.1,0.6062,0.6057,0,180,0,0.7,-69.9);

	this.instance_274 = new lib.wedgeeighth();
	this.instance_274.setTransform(213.35,85.3,0.6061,0.6056,0,90,-90,0.4,-69.8);

	this.instance_275 = new lib.wedgeeighth();
	this.instance_275.setTransform(170.75,128.1,0.6062,0.6057,180,0,0,0.2,-69.9);

	this.instance_276 = new lib.wedgeeighth();
	this.instance_276.setTransform(298.85,85.55,0.6061,0.6056,0,-90,90,0.7,-69.4);

	this.instance_277 = new lib.wedgeeighth();
	this.instance_277.setTransform(341.55,42.85,0.6062,0.6057,0,0,0,0.7,-69.5);

	this.instance_278 = new lib.wedgeeighth();
	this.instance_278.setTransform(213.35,85.55,0.6061,0.6056,90,0,0,0.7,-69.8);

	this.instance_279 = new lib.wedgeeighth();
	this.instance_279.setTransform(170.75,42.85,0.6062,0.6057,0,0,180,0.2,-69.5);

	this.instance_280 = new lib.wedgeeighth();
	this.instance_280.setTransform(128.2,85.3,0.6061,0.6056,-90,0,0,0.4,-69.4);

	this.instance_281 = new lib.wedgeeighth();
	this.instance_281.setTransform(171,128.1,0.6062,0.6057,0,180,0,0.8,-69.9);

	this.instance_282 = new lib.wedgeeighth();
	this.instance_282.setTransform(42.8,85.3,0.6061,0.6056,0,90,-90,0.4,-69.9);

	this.instance_283 = new lib.wedgeeighth();
	this.instance_283.setTransform(0.1,128.1,0.6062,0.6057,180,0,0,0.2,-69.9);

	this.instance_284 = new lib.wedgeeighth();
	this.instance_284.setTransform(128.2,85.55,0.6061,0.6056,0,-90,90,0.7,-69.4);

	this.instance_285 = new lib.wedgeeighth();
	this.instance_285.setTransform(171,42.85,0.6062,0.6057,0,0,0,0.8,-69.5);

	this.instance_286 = new lib.wedgeeighth();
	this.instance_286.setTransform(42.8,85.55,0.6061,0.6057,90,0,0,0.7,-69.9);

	this.instance_287 = new lib.wedgeeighth();
	this.instance_287.setTransform(0.1,42.85,0.6062,0.6057,0,0,180,0.2,-69.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_287},{t:this.instance_286},{t:this.instance_285},{t:this.instance_284},{t:this.instance_283},{t:this.instance_282},{t:this.instance_281},{t:this.instance_280},{t:this.instance_279},{t:this.instance_278},{t:this.instance_277},{t:this.instance_276},{t:this.instance_275},{t:this.instance_274},{t:this.instance_273},{t:this.instance_272},{t:this.instance_271},{t:this.instance_270},{t:this.instance_269},{t:this.instance_268},{t:this.instance_267},{t:this.instance_266},{t:this.instance_265},{t:this.instance_264},{t:this.instance_263},{t:this.instance_262},{t:this.instance_261},{t:this.instance_260},{t:this.instance_259},{t:this.instance_258},{t:this.instance_257},{t:this.instance_256},{t:this.instance_255},{t:this.instance_254},{t:this.instance_253},{t:this.instance_252},{t:this.instance_251},{t:this.instance_250},{t:this.instance_249},{t:this.instance_248},{t:this.instance_247},{t:this.instance_246},{t:this.instance_245},{t:this.instance_244},{t:this.instance_243},{t:this.instance_242},{t:this.instance_241},{t:this.instance_240},{t:this.instance_239},{t:this.instance_238},{t:this.instance_237},{t:this.instance_236},{t:this.instance_235},{t:this.instance_234},{t:this.instance_233},{t:this.instance_232},{t:this.instance_231},{t:this.instance_230},{t:this.instance_229},{t:this.instance_228},{t:this.instance_227},{t:this.instance_226},{t:this.instance_225},{t:this.instance_224},{t:this.instance_223},{t:this.instance_222},{t:this.instance_221},{t:this.instance_220},{t:this.instance_219},{t:this.instance_218},{t:this.instance_217},{t:this.instance_216},{t:this.instance_215},{t:this.instance_214},{t:this.instance_213},{t:this.instance_212},{t:this.instance_211},{t:this.instance_210},{t:this.instance_209},{t:this.instance_208},{t:this.instance_207},{t:this.instance_206},{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gridm, new cjs.Rectangle(-0.7,-0.6,1025.5,1025.1), null);


(lib.downloadbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(58.55,6.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_2
	this.instance_1 = new lib.saveicon();
	this.instance_1.setTransform(21.4,19.4,1,1,0,0,0,12.4,12.4);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-2,-2,29,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:16.9},0).wait(1).to({y:21.9},0).wait(2));

	// Layer_1
	this.instance_2 = new lib.CachedBmp_5();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_6();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,38);


(lib.cpickersmall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.colorwheel = new lib.colorpickerelem();
	this.colorwheel.name = "colorwheel";
	this.colorwheel.setTransform(119.05,120.1,0.2327,0.2327,0,0,0,341.6,342.4);

	this.timeline.addTween(cjs.Tween.get(this.colorwheel).wait(1));

	// Layer_2
	this.bg = new lib.colorpickerbg();
	this.bg.name = "bg";
	this.bg.setTransform(119.15,128,0.2327,0.2327,0,0,0,512,550);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cpickersmall, new cjs.Rectangle(0,0,238.3,256), null);


(lib.cpicker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.colorwheel = new lib.colorpickerelem();
	this.colorwheel.name = "colorwheel";
	this.colorwheel.setTransform(511.5,516.05,1,1,0,0,0,341.5,342.4);

	this.timeline.addTween(cjs.Tween.get(this.colorwheel).wait(1));

	// Layer_2
	this.bg = new lib.colorpickerbg();
	this.bg.name = "bg";
	this.bg.setTransform(512,550,1,1,0,0,0,512,550);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cpicker, new cjs.Rectangle(0,0,1024,1100), null);


(lib.utils = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.btnclear = new lib.clearbutton();
	this.btnclear.name = "btnclear";
	this.btnclear.setTransform(562.15,-4);
	new cjs.ButtonHelper(this.btnclear, 0, 1, 2, false, new lib.clearbutton(), 3);

	this.btncolor1 = new lib.wedgeeighth();
	this.btncolor1.name = "btncolor1";
	this.btncolor1.setTransform(496.85,15,0.2699,0.6459,90,0,0,-70,-69.8);

	this.btncolor0 = new lib.wedgeeighth();
	this.btncolor0.name = "btncolor0";
	this.btncolor0.setTransform(477.4,15,0.2699,0.6459,-90,0,0,-70,-69.8);

	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(0,0.4,0.5,0.5);

	this.btnsave = new lib.downloadbutton();
	this.btnsave.name = "btnsave";
	this.btnsave.setTransform(850.25,-4);
	new cjs.ButtonHelper(this.btnsave, 0, 1, 2, false, new lib.downloadbutton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnsave},{t:this.instance},{t:this.btncolor0},{t:this.btncolor1},{t:this.btnclear}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.utils, new cjs.Rectangle(0,-4.3,990.3,38.599999999999994), null);


// stage content:
(lib.TGramDraw_html = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		Main.prototype.grid;
		
		Main.prototype.utils;
		Main.prototype.tempobj;
		Main.prototype.ctx;
		function Main() {
			// constructor code
			//this.ctx = document.getElementById("cpcanvas").getContext('2d');
			this.i = 0;
			this.grid = new lib.gridm();
			
			this.utils = exportRoot.utils;	
			//this.savecanvas = document.createElement('canvas');
			//this.savecanvas.width=1024;
			//this.savecanvas.height=1024;
			this.color0="#004EB5";
			this.color1="#FFFFFF";
			this.color3-"#333333";
			this.tintamount = .95;
			this.tintspeed = .1;
			exportRoot.container.addChild(this.grid);
			//exportRoot.container.cache(0,0,1024,1024);
			createjs.Ticker.addEventListener("tick", this.update.bind(this));
			
			this.utils.btncolor0.cref=0;
			this.utils.btncolor0.mouseChildren = false;
			this.utils.btncolor1.cref=1;
			this.utils.btncolor1.mouseChildren = false;
			
			this.utils.btnclear.mouseChildren = false;
				
			this.utils.btncolor0.cache(0,0,91,35);
			this.utils.btncolor0.uncache();
			this.utils.btncolor1.cache(0,0,91,35);
			this.utils.btncolor1.uncache();
			
			this.utils.btncolor0.addEventListener("click",this.opencpicker.bind(this));
			this.utils.btncolor1.addEventListener("click",this.opencpicker.bind(this));
			this.utils.btnclear.addEventListener("click",this.cleardraw.bind(this));
			
			
			gsap.to(this.utils.btncolor0,{duration:.1, easel:{tint:this.color0, tintAmount:this.tintamount}});
			gsap.to(this.utils.btncolor1,{duration:.1, easel:{tint:this.color1, tintAmount:this.tintamount}});
			
			
			//alert(exportRoot.numChildren);
			for(i=0; i<this.grid.numChildren;i++){
				this.tempobj = this.grid.getChildAt(i);
				this.tempobj.cache(-145,-145,145,145);
				this.tempobj.uncache();
				this.tempobj.mouseChildren = false;
				this.tempobj.boxframe = 0;
				this.tempobj.addEventListener("mousedown", this.domouse.bind(this));
				//tempobj.addEventListener("rollout", this.domouse.bind(this));
				this.tempobj.addEventListener("pressup", this.domouse.bind(this));
				gsap.to(this.tempobj,{duration: .2, delay:(i*.005), easel:{tint:this.color0, tintAmount:this.tintamount}});
				
				//tempobj.addEventListener("mouseover", this.domouse.bind(this));
				//alert("initmouse" + i);
				//tempobj.myname = "box"+i;
				//Boxes.push(tempobj);
				
			};
			
			exportRoot.utils.btnsave.addEventListener("click", this.dosave.bind(this));
			//exportRoot.utils.visible = false;
			//this.initmouse();
		};
		
		Main.prototype.dosave = function(e){
			//alert("btnsave");
			//this.grid.cache();
			exportRoot.container.cache(0,0,1024,1024);
			this.download(stage.canvas,"tgdrawing.png");
			exportRoot.container.uncache();
			//var image = stage.canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
			//var image = this.grid.getCacheDataURL()//.replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
			//window.location.download="tgdraw.png";
			//window.location.href=image;
		};
		
		
		
		
		
		
		
		Main.prototype.update = function(e){
		  if(this.ismousedown){
			 // alert(stage.scaleX);
			  this.boxobj = this.grid.getObjectUnderPoint((stage.mouseX+this.grid.x)/stage.scaleX,(stage.mouseY+this.grid.y)/stage.scaleY,1);
			  if(this.boxobj.boxframe != this.boxframe){
				  this.boxobj.boxframe = this.boxframe;
					TweenLite.to(this.boxobj,this.tintspeed,{easel:{tint:this["color"+this.boxobj.boxframe], tintAmount:this.tintamount}});
				  //this.boxobj.gotoAndStop(this.boxframe);
				};
		  };
		};
		
		stage.enableMouseOver(60);
		
		
		Main.prototype.ismousedown = false;
		Main.prototype.boxobj;
		Main.prototype.boxframe = 0;
		
		Main.prototype.domouse= function(e){
			this.boxobj = e.target;
			//alert(e.type);
			switch(e.type){
				case "mousedown":
					if(!this.ismousedown){
						//exportRoot.container.uncache();
						
						if(this.boxobj.boxframe==0)this.boxframe=1;
						else this.boxframe=0;
						this.boxobj.boxframe = this.boxframe;
						TweenLite.to(this.boxobj,this.tintspeed,{easel:{tint:this["color"+this.boxobj.boxframe], tintAmount:this.tintamount}});
						//this.boxobj.gotoAndStop(this.boxframe);
						this.ismousedown = true;
						//this.boxobj.updateCache();
					};
					return;
				
				case "mouseover":
					if(this.ismousedown && this.boxobj.boxframe != this.boxframe){
						this.boxobj.boxframe = this.boxframe;
						TweenLite.to(this.boxobj,this.tintspeed,{easel:{tint:this["color"+this.boxobj.boxframe], tintAmount:this.tintamount}});
						//this.boxobj.gotoAndStop(this.boxframe);
						//this.boxobj.updateCache();
					};
					return;
				
				case "pressup":
					this.ismousedown = false;
					//exportRoot.container.cache(0,0,1024,1024);
					return;
					
			};
			
		};
		
		Main.prototype.download = function(canvas, filename) {
		
		    /// create an "off-screen" anchor tag
			//exportRoot.utils.visible = false;
			
		    var lnk = document.createElement('a'),
		        e;
		
		    /// the key here is to set the download attribute of the a tag
		    lnk.download = filename;
		
		    /// convert canvas content to data-uri for link. When download
		    /// attribute is set the content pointed to by link will be
		    /// pushed as "download" in HTML5 capable browsers
			
			
			
			lnk.href = exportRoot.container.bitmapCache.getCacheDataURL();
			
		   // lnk.href = canvas.toDataURL();
			//exportRoot.utils.visible = true;
		    /// create a "fake" click-event to trigger the download
		    if (document.createEvent) {
		
		        e = document.createEvent("MouseEvents");
		        e.initMouseEvent("click", true, true, window,
		                         0, 0, 0, 0, 0, false, false, false,
		                         false, 0, null);
		
		        lnk.dispatchEvent(e);
		
		    } else if (lnk.fireEvent) {
		
		        lnk.fireEvent("onclick");
		    }
		}
		
		Main.prototype.cpick;
		
		
		
		Main.prototype.opencpicker = function(e){
			this.colorpickint = e.target.cref;
			
			this.cpick = new lib.cpicker();
			this.cpick.colorwheel.mouseChildren = false;
			this.cpick.addEventListener("click", this.checkcpicker.bind(this));
			exportRoot.addChild(this.cpick);
			
			
			//this.cpick.colorwheel.alpha=.1;
		};
		
		Main.prototype.colorpickint=0;
		
		Main.prototype.checkcpicker = function(e){
		
			var cpobj = this.cpick.getObjectUnderPoint((stage.mouseX+this.cpick.x)/stage.scaleX,(stage.mouseY+this.cpick.y)/stage.scaleY,1);
			
			//if(cpobj == this.cpick.colorwheel){
			//	stage.canvas.getContext('2d').drawImage(stage.canvas,stage.mouseX, stage.mouseY,100,100);
				//alert(stage.mouseX/stage.canvas.width*238);
				var img_data = getpixel(stage.mouseX/stage.canvas.width*cpcanvas.width, stage.mouseY/stage.canvas.height*cpcanvas.height,4,4);//document.getElementById("cpcanvas").getContext('2d').getImageData(0, 0, 100, 100).data;
				var R = img_data[0];
				var G = img_data[1];
				var B = img_data[2];  //var rgb = R + ',' + G + ',' + B;
			  // convert RGB to HEX
				var hex = this.rgbToHex(R,G,B);
				//alert(R);
				this["color"+this.colorpickint] = hex;//"#333333";//
		
			//};
			
			this.refreshgrid();
			
			cpobj=null;
			//ctx.clearRect(0,0,this.cpick.width, this.cpick.height);
			//ctx = null;
			exportRoot.removeChild(this.cpick);
			this.cpick.removeAllEventListeners();
			this.cpick = null;
			
			
		};
		
		Main.prototype.cleardraw = function(e){
			this.refreshgrid(true);
		}
		
		Main.prototype.refreshgrid = function(clear=false){
			var j=0;
			var tobj;
			for(i=0; i<this.grid.numChildren;i++){
				tobj = this.grid.getChildAt(i);
				
				if(clear){
					if(tobj.boxframe!=0){
						j++
						tobj.boxframe = 0;
					};
					gsap.to(tobj,{duration: .2, delay:(j*.005), easel:{tint:this.color0, tintAmount:this.tintamount}});
				}else{
					gsap.to(tobj,{duration: .2, delay:(i*.005), easel:{tint:this["color"+tobj.boxframe], tintAmount:this.tintamount}});
				};
				
				//tempobj.addEventListener("mouseover", this.domouse.bind(this));
				//alert("initmouse" + i);
				//tempobj.myname = "box"+i;
				//Boxes.push(tempobj);
				
			};
			
			gsap.to(this.utils.btncolor0,{duration:.1,easel:{tint:this.color0, tintAmount:this.tintamount}});
			gsap.to(this.utils.btncolor1,{duration:.1,easel:{tint:this.color1, tintAmount:this.tintamount}});
		}
		
		
		Main.prototype.rgbToHex = function(R,G,B) {return "#"+this.toHex(R)+this.toHex(G)+this.toHex(B)}
		Main.prototype.toHex = function(n) {
		  n = parseInt(n,10);
		  if (isNaN(n)) return "00";
		  n = Math.max(0,Math.min(n,255));
		  return "0123456789ABCDEF".charAt((n-n%16)/16)  + "0123456789ABCDEF".charAt(n%16);
		}
		
		var main = new Main();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.utils = new lib.utils();
	this.utils.name = "utils";
	this.utils.setTransform(514.4,1063.85,1,1,0,0,0,495.2,19);

	this.container = new lib.container();
	this.container.name = "container";
	this.container.setTransform(70,70,1,1,0,0,0,70,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.container},{t:this.utils}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,550,512,529.2);
// library properties:
lib.properties = {
	id: 'A9CEEA8687894A798FD7CAFE26FEEBEB',
	width: 1024,
	height: 1100,
	fps: 60,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_10.png?1586649080176", id:"CachedBmp_10"},
		{src:"images/Bitmap1.png?1586649080176", id:"Bitmap1"},
		{src:"images/tgdraw_atlas_.png?1586649080095", id:"tgdraw_atlas_"},
		{src:"images/tgdraw_atlas_2.png?1586649080095", id:"tgdraw_atlas_2"}
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
an.compositions['A9CEEA8687894A798FD7CAFE26FEEBEB'] = {
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
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;