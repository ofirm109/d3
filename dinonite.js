(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"dinonite_atlas_", frames: [[0,0,4000,2292],[0,4588,1103,1669],[1105,4588,1103,1669],[2210,4588,1103,1669],[0,2294,4000,2292]]}
];


// symbols:



(lib.אדמהבלבד01 = function() {
	this.spriteSheet = ss["dinonite_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ביצהדור = function() {
	this.spriteSheet = ss["dinonite_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ביצהשלאופיר = function() {
	this.spriteSheet = ss["dinonite_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ביצהשלעידן = function() {
	this.spriteSheet = ss["dinonite_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.רקע201 = function() {
	this.spriteSheet = ss["dinonite_atlas_"];
	this.gotoAndStop(4);
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


(lib.התחלמשחק = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1EKIAAjgIjDkzIB+AAIB8DSIB7jSIB8AAIjEE0IAADfg");
	this.shape.setTransform(81.4,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACWEKIguh5IjUAAIgsB5IhyAAIDPoTIBxAAIDVITgAhLA4ICQAAIhIjFg");
	this.shape_1.setTransform(29.6,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai7EIIAAoPIBsAAIAAG1IELAAIAABag");
	this.shape_2.setTransform(-18.1,5.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjLEKIAAoTICsAAQBiAAAdAIQAvAMAeAoQAfAoAAA/QAAAygSAhQgSAggbAUQgcATgcAGQgmAHhIAAIhHAAIAADJgAhggYIA8AAQA+AAAVgIQAWgJANgSQAMgRgBgYQAAgdgRgTQgRgTgagFQgTgDg5AAIg1AAg");
	this.shape_3.setTransform(-66.4,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AvQH0QheAAhDhDQhDhDAAheIAAogQAAheBDhCQBDhDBeAAIehAAQBeAABDBDQBDBCAABeIAAIgQAABehDBDQhDBDheAAg");
	this.shape_4.setTransform(3.5,6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AvQH0QheAAhDhDQhDhDAAheIAAogQAAheBDhCQBDhDBeAAIehAAQBeAABDBDQBDBCAABeIAAIgQAABehDBDQhDBDheAAg");
	this.shape_5.setTransform(3.5,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.9,-43.9,241,100);


(lib.ביצהעידן = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ביצהשלעידן();
	this.instance.parent = this;
	this.instance.setTransform(-357,-534,0.569,0.57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,0,0.659)").ss(103.9,1,1).p("EApfAgdQAAHRi+G4QjQHel0ErQsLJvxOAAQxMAAsLpvQsLpwAAtxQAAh+AjlGQApl6BFnAQC4y1EWwLQFu1QHLsNQIzu/KbgRQKYgSIxObQHJLxFqU0QEVP3C3SlQBDG5ApF2QAjFDAAB+g");
	this.shape.setTransform(-40.5,-64.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-357,-534,628,951.5);


(lib.ביצהדור_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ביצהדור();
	this.instance.parent = this;
	this.instance.setTransform(-321,-476,0.57,0.57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,0,0.659)").ss(103.9,1,1).p("EAs3AjGQAAH4jNHcQjgIFmTFDQtLKiynAAQymAAtLqiQtKqjAAu5QAAiIAmlgQAsmaBKnkQDI0XEsxhQGM2+HxtOQJhwMLRgTQLOgTJfPmQHuMvGIWhQErRJDGUGQBJHdAsGVQAlFeAACHg");
	this.shape.setTransform(-7.9,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-321,-476,628.9,951.5);


(lib.ביצהאופיר = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ביצהשלאופיר();
	this.instance.parent = this;
	this.instance.setTransform(-308,-470,0.569,0.57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,0,0.659)").ss(103.9,1,1).p("EAtjAjoQAAH/jRHkQjjIMmaFIQtXKty5AAQy4AAtXqtQtYqsAAvIQAAiKAnlmQAtmgBLnrQDK0rEyxxQGR3VH5taQJqwdLcgTQLZgTJoP1QH2M7GOW3QEvRaDJUZQBKHlAsGbQAnFjAACJg");
	this.shape.setTransform(16.7,-10.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-308,-470,628,951.5);


(lib.בועה1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC33").s().p("ARJE/MgloAAAQhRAAAAhkIAApEQAAhkBRgBMAmtAAAQBRABAABkIAAHyICSFFg");
	this.shape.setTransform(8.4,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009966").s().p("ARJE/MgloAAAQhRAAAAhkIAApEQAAhkBRAAMAmtAAAQBRAAAABkIAAHxICSFGg");
	this.shape_1.setTransform(8.4,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009966").s().p("ARJE/MgloAAAQhRAAAAhkIAApEQAAhkBRgBMAmtAAAQBRABAABkIAAHyICSFFg");
	this.shape_2.setTransform(8.4,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.9,-41.9,278.6,92.5);


(lib.myStart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguDoIAAmBIiKAAIAAhOIFxAAIAABOIiKAAIAAGBg");
	this.shape.setTransform(88.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABhDoIhEhlQgjg2gOgOQgNgOgPgFQgOgGghABIgTAAIAADBIheAAIAAnPIDFAAQBKAAAiAMQAiAMAUAgQAUAgABAqQAAA0ggAjQgeAgg+AKQAfARAUAWQAUAUAiA3IA4BagAhygjIBGAAQBCAAARgFQARgGAJgOQAKgOAAgVQgBgXgLgPQgOgPgWgDQgLgCg5AAIhJAAg");
	this.shape_1.setTransform(47.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACDDoIgohpIi5AAIgnBpIhjAAIC1nPIBiAAIC6HPgAhBAxIB9AAIg/isg");
	this.shape_2.setTransform(-1.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguDoIAAmBIiKAAIAAhOIFxAAIAABOIiKAAIAAGBg");
	this.shape_3.setTransform(-44.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiDDIQgwgpgJhOIBcgIQAHAtAaAWQAZAVAqAAQAtABAXgUQAXgTAAgaQAAgQgJgMQgKgMgZgIQgQgGg5gOQhMgTgfgaQgqgnAAg3QAAgjAUgfQAUgfAmgQQAmgQA1AAQBXAAAtAmQAsAmACBAIheAFQgGglgUgPQgUgPgngBQgoABgXAQQgPALgBASQABAQAOAMQARAPBEAQQBEAQAiASQAgARASAdQATAeAAAsQAAAogWAjQgWAjgpARQgoAQg9AAQhXAAgvgog");
	this.shape_4.setTransform(-86.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AvQH0QheAAhDhDQhDhCAAheIAAohQAAheBDhDQBDhCBeAAIehAAQBeAABDBCQBDBDAABeIAAIhQAABehDBCQhDBDheAAg");
	this.shape_5.setTransform(0.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AvQH0QheAAhDhDQhDhCAAheIAAohQAAheBDhDQBDhCBeAAIehAAQBeAABDBCQBDBDAABeIAAIhQAABehDBCQhDBDheAAg");
	this.shape_6.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,-50,241,100);


(lib.butNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguDpIAAmCIiKAAIAAhPIFxAAIAABPIiKAAIAAGCg");
	this.shape.setTransform(67.3,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABnDpIhniiIhnCiIhwAAICfjyIiQjfIBtAAIBdCWIBbiWIBtAAIiRDiICfDvg");
	this.shape_1.setTransform(25.7,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiwDpIAAnRIFYAAIAABPIj6AAIAABoIDoAAIAABMIjoAAIAAB/IEDAAIAABPg");
	this.shape_2.setTransform(-16.8,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABbDpIi7kvIAAEvIhYAAIAAnRIBcAAIC9E2IAAk2IBXAAIAAHRg");
	this.shape_3.setTransform(-62.9,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AvQH0QheAAhDhDQhDhCAAheIAAohQAAheBDhDQBDhCBeAAIehAAQBeAABDBCQBDBDAABeIAAIhQAABehDBCQhDBDheAAg");
	this.shape_4.setTransform(0.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AvQH0QheAAhDhDQhDhCAAheIAAohQAAheBDhDQBDhCBeAAIehAAQBeAABDBCQBDBDAABeIAAIhQAABehDBCQhDBDheAAg");
	this.shape_5.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.9,-50,241,100);


(lib.תבחראתהביצהשלך = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// <Layer>
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiJFGQgdgdAAgkQAAgYANgaQAMgaAUgSQAogpBNgkQANgHAIAAQADAAADACQACADAAADQAAADgGALQgPAagMApQgLAoAAAeQAAAjAKAAQAHAAAHgMQAIgNAHgQQArhvANheIADgpIgOAKIgEAEIgJAGQhYBFgzAdQgyAcglAAQgqAAgageQgZgfAAgyQAAg/AkhDQAkhEA6g4QA6g4BGgiQBFgjBBAAQBAAAAiAWQAiAWAAAtQAAAlgeA2QAWABAJAMQAKAMAAAYQAAAogRBIQgQBGgXA9QgeBMg0A5QgpAqg9AfQg6AfgrAAQglAAgbgdgAAfj1QgaAbgXAmQgXAmgNAmQgMAmAAAeQAAAeAOAAQAPAAA5gwQAagXA6gqIABACIAAgCIgBAAIgBAAIgIABIgYABQgbAAAAgKQAAgFAHgHQAUgWAOgkQAOgkABgdIABgNIABgEIAAgCQAAgIgKAAQgTAAgqAsg");
	this.shape.setTransform(300.3,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiJFGQgdgdAAgkQAAgYANgaQAMgaATgSQAogpBOgkQANgHAIAAQADAAACACQADADAAADQAAADgGALQgQAagLApQgLAoAAAeQAAAjALAAQAFAAAIgMQAJgNAGgQQArhvANheIADgpIgOAKIgEAEIgJAGQhYBFgzAdQgyAcgmAAQgpAAgageQgZgfAAgyQAAg/AkhDQAjhEA7g4QA6g4BGgiQBFgjBBAAQBBAAAhAWQAiAWgBAtQAAAlgdA2QAVABAKAMQAKAMAAAYQAAAogQBIQgRBGgYA9QgdBMg1A5QgoAqg9AfQg6AfgrAAQgkAAgcgdgAAej1QgZAbgWAmQgYAmgMAmQgOAmAAAeQAAAeAPAAQAPAAA5gwQAagXA6gqIABACIAAgCIgBAAIgBAAIgIABIgYABQgbAAAAgKQAAgFAHgHQAUgWANgkQAOgkACgdIABgNIABgEIAAgCQAAgIgKAAQgUAAgqAsg");
	this.shape_1.setTransform(242.5,22);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AipDVQgnglAAg9QAAgvAVg6QAUg6Aig0QApg8A7goQBIgwBCAAQAxAAAbAfQAcAeAAA1QAAAqgWAtQgWAtgrApQgjAjghATQgiAUgYAAQgLAAgMgGQAGAfAhAAQAnAAA9gtQAkgaAMAAQAQAAANAIQANAIAAAJQAAAJgOAPQgcAbgjAaQgjAaghARQghARggAKQghAKgaAAQhAAAgmgkgAAMhlQgTAsgMArQgNArAAAfQAAALAEAUQAYgQALgQQAbgiAPgqQAMgcAGgjQAHgjAAgeQAAgcgMAAQgQAAgiBIg");
	this.shape_2.setTransform(191.9,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AipDVQgnglAAg9QAAgvAVg6QAUg6Aig0QApg8A7goQBIgwBCAAQAxAAAbAfQAcAeAAA1QAAAqgWAtQgWAtgrApQgjAjghATQgiAUgYAAQgLAAgMgGQAGAfAhAAQAnAAA9gtQAkgaAMAAQAQAAANAIQANAIAAAJQAAAJgOAPQgcAbgjAaQgjAaghARQghARggAKQghAKgaAAQhAAAgmgkgAAMhlQgTAsgMArQgNArAAAfQAAALAEAUQAYgQALgQQAbgiAPgqQAMgcAGgjQAHgjAAgeQAAgcgMAAQgQAAgiBIg");
	this.shape_3.setTransform(119.2,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjiDkQgVgZAAgnQAAgYAGgjQAGgiAJgoQAKgnANgqQANgqAPgmQAYg/AigkQAXgXAhAAQA1AAAABGQAAAygVBfIACACIAegkQAvg0AbgZQAbgaAXgLQAVgLAXAAQAkAAAPATQAPAUAAAwQAAAUgEAnQgGAzAAAtQAAA0AFAgQADATAIAUQAFASAAAHQAAAIgGAFQgQANgbALQgaAKgSAAQgdAAgYgUQgYgUgNgkQgNgjAAgtQAAgdAGgpIgCgCIgjAnIgZAbQg5BCgoA1IgdAkQgTATgYAAQggAAgVgZg");
	this.shape_4.setTransform(69.8,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiIDvQg1gSgfgfQgpgpAAhLQAAg8Adg6QAdg8AzgwQAygxA8gbQA7gdA+AAQBMAAAAASQAAAVgiACQgqACgkAVQgkAVgaAlQgdAkgPAuQgQAtAAAyQAAA4AaAjQAbAhApAAQAnAAAdgoQAdgoAAg1QAAgrgSgmQgSgmgjgaQgPgMAAgFQAAgHAVgPQAYgQAdgLQAdgLAUAAQAXAAAVANQAVALAQAXQAQAWAIAdQAIAdAAAhQAAA1gUA2QgVA0ghAhQgrAqg9AbQg9Aag2AAQg1AAg0gTg");
	this.shape_5.setTransform(14.4,9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AipDVQgnglAAg9QAAgvAVg6QAUg6Aig0QApg8A7goQBIgwBCAAQAxAAAbAfQAcAeAAA1QAAAqgWAtQgWAtgrApQgjAjghATQgiAUgYAAQgLAAgMgGQAGAfAhAAQAnAAA9gtQAkgaAMAAQAQAAANAIQANAIAAAJQAAAJgOAPQgcAbgjAaQgjAaghARQghARggAKQghAKgaAAQhAAAgmgkgAAMhlQgTAsgMArQgNArAAAfQAAALAEAUQAYgQALgQQAbgiAPgqQAMgcAGgjQAHgjAAgeQAAgcgMAAQgQAAgiBIg");
	this.shape_6.setTransform(-64.1,10);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AizERQghgXAAgnQAAgcAWgcQAVgdAggSQAggSAfAAQAXAAAAALQAAAFgHALQgUAkAAAfQAAAVAQATQAfgBAZgcQAXgcAAghQAAgXgOgNQgPgQg4gPQhRgXgZgeQgXgWAAghQAAg8Arg6QArg8BCglQBCgmBEAAQAhAAAcAPQAdAQARAaQARAZAAAdQAAAegTAfQgSAggcAVQgcAUgZAAQgOAAgLgGQgKgHAAgGQAAgIAEgOQALgsAAggQAAghgUgdQgZASgHAKQgUAWgKAeQgMAcAAAbQAAATAJAKQAIAMATAHQATAIAnAJQBBAQAbAOQAGADANALQATAWAAAhQAAAkgWAjQgWAlguAnQgxApgxASQgwASg7AAQg5AAgggWg");
	this.shape_7.setTransform(-110.3,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiIDvQg1gSgfgfQgpgpAAhLQAAg8Adg6QAdg8AzgwQAygxA8gbQA7gdA+AAQBMAAAAASQAAAVgiACQgqACgkAVQgkAVgaAlQgdAkgPAuQgQAtAAAyQAAA4AaAjQAbAhApAAQAnAAAdgoQAdgoAAg1QAAgrgSgmQgSgmgjgaQgPgMAAgFQAAgHAVgPQAYgQAdgLQAdgLAUAAQAXAAAVANQAVALAQAXQAQAWAIAdQAIAdAAAhQAAA1gUA2QgVA0ghAhQgrAqg9AbQg9Aag2AAQg1AAg0gTg");
	this.shape_8.setTransform(-162.4,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiIDvQg1gSgfgfQgpgpAAhLQAAg8Adg6QAdg8AzgwQAygxA8gbQA7gdA+AAQBMAAAAASQAAAVgiACQgqACgkAVQgkAVgaAlQgdAkgPAuQgQAtAAAyQAAA4AaAjQAbAhApAAQAnAAAdgoQAdgoAAg1QAAgrgSgmQgSgmgjgaQgPgMAAgFQAAgHAVgPQAYgQAdgLQAdgLAUAAQAXAAAVANQAVALAQAXQAQAWAIAdQAIAdAAAhQAAA1gUA2QgVA0ghAhQgrAqg9AbQg9Aag2AAQg1AAg0gTg");
	this.shape_9.setTransform(-219.4,9.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABDE9QgYgkAAg6QABgXAEgiIgDgCIhgBlQhbBZgxAAQgXAAgOgeQgPgegBgxQAAhnBBigQAag+Acg5QAdg6AagpQATgeAVgVQAUgXAVgOQAVgPAWgHQAWgHAWAAQA4AAAiAhQAjAjAAA0QgBAmgUApQgVApgnAmQgXAXgfATQgfASgQAAQgGAAgDgDQgFgEAAgGQAAgIAOgZQAPgdAPgoQAOgpAJgkQAIglgBgZIAAgJQAAgTgEAAQgHAAgOAVQgPAUgLAZQgcBBgWBHQgUBIgMBGIgIA8IACACQAyg1AZgVQAagXAogbQAygjAhAAQAVAAALAPQAMAPAAAaQAAAPgHAdQgKA8AAArQAAASADAVQACARAPAyQALAlAAAEQAAAIgQAKQg2AkgvAAQgkAAgYglg");
	this.shape_10.setTransform(-273.9,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiNDWQgpgmAAg7QAAg6AahAQAahAAtg6QAtg6A4gnQApgcAnAAIACAAQAnACAXAVQAXAVAAAjQAAAfgRAfQgSAfgbAUQgbAUgbAAQgQAAgBgLQABgEAGgOQAUgiAAgsQAAgWgGAAQgGAAgOATQgNASgJAZQgRAogJAsQgKAsAAAfQAAAjAKAUQAKAUASAAQASAAAdgTQAdgSAbgbQAKgOAJAAQAMAAAAAOQAAA/gxAzQgiAigrAVQgsAVgjAAQg9AAgogng");
	this.shape_11.setTransform(-320.4,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.תבחראתהביצהשלך, new cjs.Rectangle(-343.4,-59.5,674.7,119), null);


(lib.myName = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiaDCQgkghABg4QAAgrASg1QASg1AggvQAlg3A2glQBBgsA+AAQArAAAaAdQAZAbgBAxQAAAmgTApQgUApgnAmQggAfgeASQggASgVAAQgKAAgMgFQAFAcAfAAQAjAAA4gqQAigYAKAAQAOAAANAIQAMAHAAAJQAAAIgOANQgYAZghAZQggAXgeAQQgeAPgdAJQgeAKgYgBQg6ABgjgigAALhcQgRAogLAnQgMAnAAAdQAAAKADASQAWgPALgOQAZgfANgmQAKgaAHggQAGgfAAgcQAAgagLAAQgPAAgfBCg");
	this.shape.setTransform(277.7,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADQDnQgQgQgHgQQgJgQgDgWQgEgXAAgkQAAgYAGhLIgCgCIgIAMIiACDQgaAZgOAJQgPAJgTAAQgcAAgTgVQgUgWAAgfQAAgTAHgWQAFgXARgtQADgJAEgGIAEgMIgCgCQgtAvgsA1QgkAsgVAVQgWAWgSAKQgRALgOAAQgeAAgRgYQgTgYABgpQgBg0AuhzQAohnAWgjQAggxAqAAQAZAAAQAMQASAMgBATQAAAjgaBIQgKAbgMAiIACACIA4hCQBDhSAggeQAsgoAkAAQAQAAAPALQAOALAJASQAJASgBATQAAAVgdBTIgJAbIgHARIADACIAMgMIALgLIAMgLIBAhAQAigmATgOQATgOASAAQAdAAAQAVQAPATgBAnQAAAYgHA0QgHA5gCAhIgDAuIABAZQABAPAEASIAHAmIAHAoQgDARgVAMQgVAMgYAAQgnAAghgjg");
	this.shape_1.setTransform(219.6,11.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjZDFQgigjAAg2QAAghARguQARgsAegsQAwhHBLgyQBMgzBIAAQA7AAAoAZQAmAYgBAmQAAAcgSAeQAZABAGAFQAHAFAAAUIgCATQgDAuAAAoIABAgIABAZIADAWQADAWAJAWQgcAbgaANQgZANgbAAQhJAAABh5IAAgUIABAAIAAgCIgBACIgBgCQgsAzgjAhQgkAggfARQgfAQgaAAQg0AAgjgjgAAPiWQgrAvgZAyQgZAyAAAmQAAAZAKARQALARAQAAQANAAAkgdQAmgdAugvIAMgLIgBgBIgJACQgiAKgPAAQgSAAgBgKQAAgDAIgOQAbgogBgjQABgUgIgRQgGgQgJAAQgHAAgQAQgABLBVIgBAAIABgCIAAACg");
	this.shape_2.setTransform(156.6,7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjPDQQgSgWAAgkQAAgWAFgfQAFggAJglQAJgjAMgnQAMgmAOgjQAVg6AfggQAVgVAeAAQAxAAAABAQAAAugUBWIADADIAbgiQAqgvAZgXQAagXATgLQAVgKAUAAQAhAAAOARQANATAAArQAAATgDAjQgGAvAAApQAAAvAFAdQADASAHASQAEARAAAGQAAAIgFADQgPAOgYAJQgYAJgQAAQgbAAgVgSQgXgSgLghQgMggAAgpQgBgbAGglIgCgCIggAkIgWAYQg1A8glAxIgaAgQgRASgVAAQgeAAgUgXg");
	this.shape_3.setTransform(105.7,8.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhwEYQgfgiAAg3QAAgXAIgmQAIgmAShAIAGgYIADgNQgSgBgIgHQgIgIAAgRQAAgdAXgaQAWgaAfgIIACgFQAfhXAWgkQAKgQATgNQAkgYAgAAQATAAAKAJQAJAIAAAQQAAALgOAhQgYA3gLAxQAIABAHABQAcAFAJAFQAJAFAAAPQAAAZgNAVQgMAUgVAKQgPAIgjACQgGARgIAgIgIBOQgDASAAAQQAABKBHAAIADAAIACAAQAIAAAAADQAAAHgQATQgQARgTANQgVAPgYAIQgXAJgVAAQgxgBgeggg");
	this.shape_4.setTransform(39.3,-2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiaDCQgkghABg4QAAgrASg1QASg1AggvQAlg3A2glQBBgsA+AAQArAAAaAdQAZAbgBAxQAAAmgTApQgUApgnAmQggAfgeASQggASgVAAQgKAAgMgFQAFAcAfAAQAjAAA4gqQAigYAKAAQAOAAANAIQAMAHAAAJQAAAIgOANQgYAZghAZQggAXgeAQQgeAPgdAJQgeAKgYgBQg6ABgjgigAALhcQgRAogMAnQgLAnAAAdQAAAKADASQAWgPALgOQAZgfANgmQAKgaAHggQAGgfAAgcQAAgagLAAQgPAAgfBCg");
	this.shape_5.setTransform(2.3,7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjnEhQgPgaAAgvQAAg0ALhIQAMhJAUhKQAThLAZg9QAQgmATgcQATgcARgNQANgHAOAAQAWAAAMAMQALALAAAXQAAASgDAWIgGAyIACACIAPgbQATgkASgZQASgYANgMQAOgLASgHQAQgFASAAQAkgBAcAWQAbAUAPAoQAPAnAAA0QAABJgiBEQggBDg2ApQg2Aqg5AAQggAAgXgOQgWgOgSgjIgEAIIgDALQgeBigSAuQgSAugNALQgLAJgNABQgbAAgPgbgAAuieQgTAZgTAgQgnBBgUAvQgFAMgCAJQANAnAkgBQAZABAXgXQAWgYANgmQANgoAAgrQAAgkgFgZQgFgZgHAAQgFAAgTAZg");
	this.shape_6.setTransform(-44.7,15.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah7DPQgNgUAAguQAAglAIg1QAIg1AMgrIAEgMIACgMQASg/AOgfQAPgfAUgSQATgPAWAAQAhAAAHAoQAHgFAGgIQANgQAIgFQAHgGAKAAQAoAAAABQQAAArgJApQgJApgOAZQgPAZgOAAQgPAAAAg5QAAgfgEgRQgDgSgIgKQgOAagEBdIgFBEIgCAKIgCAXQgCAXgDAOQgDAPgHAKQgFAJgMALQgiAfgiAAQgdAAgNgVg");
	this.shape_7.setTransform(-112.5,7.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AibDCQgjghAAg4QABgrASg1QATg1AfgvQAlg3A2glQBBgsA9AAQAsAAAaAdQAYAbAAAxQAAAmgTApQgUApgnAmQggAfgeASQggASgVAAQgLAAgLgFQAGAcAeAAQAkAAA4gqQAggYAMAAQAOAAAMAIQAMAHAAAJQAAAIgOANQgZAZggAZQggAXgeAQQgeAPgdAJQgeAKgYgBQg6ABgkgigAALhcQgRAogMAnQgLAnAAAdQAAAKADASQAWgPAKgOQAagfANgmQALgaAFggQAHgfAAgcQAAgagLAAQgPAAgfBCg");
	this.shape_8.setTransform(-148.2,7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhwEYQgfgiAAg3QAAgXAIgmQAIgmAShAIAGgYIADgNQgSgBgIgHQgIgIAAgRQAAgdAXgaQAWgaAfgIIACgFQAfhXAWgkQAKgQATgNQAkgYAgAAQATAAAKAJQAJAIAAAQQAAALgOAhQgYA3gLAxQAIABAHABQAcAFAJAFQAJAFAAAPQAAAZgNAVQgMAUgVAKQgPAIgjACQgGARgIAgIgIBOQgDASAAAQQAABKBHAAIADAAIACAAQAIAAAAADQAAAHgQATQgQARgTANQgVAPgYAIQgXAJgVAAQgxgBgeggg");
	this.shape_9.setTransform(-185.3,-2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjODQQgTgWAAgkQAAgWAFgfQAFggAJglQAIgjAMgnQAMgmAOgjQAWg6AfggQAVgVAeAAQAxAAAABAQAAAugTBWIABADIAbgiQArgvAagXQAYgXAVgLQATgKAVAAQAhAAAOARQANATAAArQAAATgDAjQgGAvAAApQAAAvAEAdQAEASAHASQAEARAAAGQAAAIgGADQgOAOgYAJQgYAJgQAAQgbAAgWgSQgVgSgMghQgNggAAgpQABgbAFglIgBgCIghAkIgXAYQg0A8gkAxIgaAgQgSASgWAAQgeAAgSgXg");
	this.shape_10.setTransform(-226.4,8.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiaDCQgkghAAg4QABgrASg1QASg1AggvQAlg3A2glQBBgsA+AAQArAAAaAdQAYAbAAAxQAAAmgTApQgUApgnAmQggAfgeASQggASgVAAQgLAAgLgFQAGAcAeAAQAjAAA5gqQAhgYAKAAQAOAAANAIQAMAHAAAJQAAAIgOANQgYAZghAZQggAXgeAQQgeAPgdAJQgeAKgYgBQg6ABgjgigAALhcQgRAogMAnQgLAnAAAdQAAAKADASQAWgPALgOQAZgfANgmQAKgaAGggQAHgfAAgcQAAgagLAAQgPAAgfBCg");
	this.shape_11.setTransform(-271.2,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.myName, new cjs.Rectangle(-294.4,-56.6,594.1,109), null);


(lib.כותרותפתיחה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AibI5Qg0gRghgZQgggbAAgZQAAgRASgVQATgWAggVQAzgjARAAQARAAAfAmQAnAtArAcQAWg2AXhQQAVhQAEgrQhCA/g5AeQg6Adg7gBQhHAAgyghQgygigag+QgbhAAAhVQAAhpA4hyQA4hxBehhQBfhhBug5QBvg6BqAAQCoAAAACUQAAA6geA2QggA3g0AgQg0Ahg5AAQgYAAABgRQgBgFAJgRQASgkAJgqQALg6AAggQAAg4gNAAQggAAg4AtQg5AsglA2QggAtgbBAQgcBAgPBBQgQBBgBA1QAAA0AXAhQAWAhAjAAQA9AABLiaQAZgqAIgMQAJgMAPgKQApgaA/gTQBAgWAjABQApAAAAAoIgFAeQgvDDhECjQhDCjhABFQgdAgg6AUQg6AVg7AAQgxAAgzgRg");
	this.shape.setTransform(323.7,124.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AoPGxQAAgUAeg0QAjg5AshnQAHgVANgeIAviAIBAigQAghXAag0QATgjAAgQQAAgTgfgWQgVgOAAgMQAAgNApgPQAkgPAugKQAugMAcAAQA4AAAcAeQAhAiAyCzQATBIAZBDQAZBEAPAcQAFAMAUAeQAWhFAehyQAsi0Alg/QALgTAPgQQAbgaAggNQAggOAhAAQASAAAIALQAIAKgBAaQAAAUgCAJQgHAigRA4QgRA3geBXQgeBXgtB6IgKAZIgJAaQhSDjgqBDQgKAOgLAMQgVAWgUAAQg0gBg7huQhtjEg8jPQgNgngHgiIgDAAIhRD+QgBAHgEAKIgHAUIgGAQIgGAPQgXBDgOAiQgOAigOAXQgMAUgYAYQghAfgqASQgqATgoAAQgjAAAAgcg");
	this.shape_1.setTransform(225.7,111.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AibI5Qg0gRghgZQgggbAAgZQAAgRASgVQATgWAggVQAzgjARAAQARAAAfAmQAnAtArAcQAWg2AXhQQAVhQAEgrQhCA/g5AeQg6Adg7gBQhHAAgyghQgygigag+QgbhAAAhVQAAhpA4hyQA4hxBehhQBfhhBug5QBvg6BqAAQCoAAAACUQAAA6geA2QggA3g0AgQg0Ahg5AAQgYAAABgRQgBgFAJgRQASgkAJgqQALg6AAggQAAg4gNAAQggAAg4AtQg5AsglA2QggAtgbBAQgcBAgPBBQgQBBgBA1QAAA0AXAhQAWAhAjAAQA9AABLiaQAZgqAIgMQAJgMAPgKQApgaA/gTQBAgWAjABQApAAAAAoIgFAeQgvDDhECjQhDCjhABFQgdAgg6AUQg6AVg7AAQgxAAgzgRg");
	this.shape_2.setTransform(128,124.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah7BMQgXgUAAgfQAAgUAMgdQALgfAMgLQAegdBiAAQBGAAAeANQAeANAAAeQAAAkgTAZQgRAYguARQhYAhgrAAQgjAAgWgUg");
	this.shape_3.setTransform(67.6,127.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AnXHIQgQgIAAgSQAAgWBKhkQAagjANgUQhHgNAAgkQAAgeA5g6QAagcAYgIQAXgIA5AAIBFh9QAOgbAYgpIA1heIBQiMIgphKQAQgMANgFQAzgRBJAAQBJAAApAqQAiAlAXBCQAWBCASB7QAKA+AIAgIAfBvQAIAZAUA1IASAsIAVAzQAWA0AtBWQg5AognARQgmASghAAQgnAAgagQQgbgPgVgiQgagtgZhPIgGgSIgJgZQhOAhgtAAQgXAAgTgCQgPgBiAgDIgGAOQglBOggApQggApgqARQgqAQg/AAQgkAAgPgIgAhSBQIC0AAIg5kDIgCAAg");
	this.shape_4.setTransform(0.7,111.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AnLG+QgegWAAgiQAAgZAShAQARhAAVg5Qg0gKAAgjQAAgZAQggQARgfAZgYQAZgYAXgHQAKgdAchdQBAjIAnhEQAQgXAMgNQAjggA2AAQAhAAAbALQAZAMAOAVQANAUAAAcQAAAmhfEaIgEAOIgGARIgDAEID2gEIAMgrQAVhEAXhDQAWhDARgoQAQgoARggQARgeAPgQQAjgmA9AAQBpAAAABaQAABVhcDiIgQAoIAFAAIAFAAQAkgBAVANQAWANAAAVQAAAPgSAcQgSAbgVAVQgUAVgOAJQgOAIgpAHIgDAMQgFAJgJAbIgdBOQgPAngKAWQgJAWgJAOQgMAQgPAMQggAZgqAQQgpAPgcAAQgfAAgSgPQgSgQAAgbQAAgxAyiYIAQgxIjtgDIgNAsIgLAnQgkB/gYAoQgEAIgNAPQgsAog+AAQgyAAgegWg");
	this.shape_5.setTransform(-97.9,112.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AlvG/QgOgNAAgZQAAgcAOg1QANg1AriIIAMgmIANgpIB6lqIAJgYQgWAAgPAEQgQADgVAJQgZAJgJAAQgMAAgHgJQgHgIAAgOQAAgZAVgcQAVgcAfgMQAogQA/gJQA/gKA+AAQBGAAA4AKQA4AKArAWQAsAXAhAgQAhAhASArQARAsAAAxQAAAsgRA3QgSA3ggA0QgfA0gmAjQgrArhDAdQhDAdg3AAQgWAAgSgIQgSgIAAgNQAAgSAOgQQAPgRAkgZQAggSAcgaQAiglAQgpQAPgpAAg6QAAg3gSgmQgTgmgqgeIhbEoIgRA0QgLAggSBLQghCBgcAyQgNAWgUAWQggAbgxAWQgyAVgjAAQgYAAgNgOg");
	this.shape_6.setTransform(-190.4,111.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai2HLIgWgHQgngQAAgzQABglAVhhQAVhiAoiSQBblDAuhMQAPgaAVgOQAXgPAngIQAlgIAxAAQAtAAASAMQAUALAAAdQAAAbgYBMQgZBLgvBzIgXA2QgrBmgmBnQgRAxglB8QA3gFBegTQA9gMAMAAQAXAAABATQAAAWgaAoQgaAoghAcQgVAVgsAIQgsAIhbAAQhXAAgugFg");
	this.shape_7.setTransform(-257.8,112.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AnXHIQgQgIAAgSQAAgWBKhkQAagjANgUQhHgNAAgkQAAgeA5g6QAagcAYgIQAXgIA5AAIBFh9QAOgbAYgpIA1heIBQiMIgphKQAQgMANgFQAzgRBJAAQBJAAApAqQAiAlAXBCQAWBCASB7QAKA+AIAgIAfBvIAcBOIASAsIAVAzQAWA0AtBWQg5AognARQgmASghAAQgnAAgagQQgbgPgVgiQgagtgZhPIgGgSIgJgZQhOAhgtAAQgXAAgTgCQgPgBiAgDIgGAOQglBOggApQggApgqARQgqAQg/AAQgkAAgPgIgAhSBQIC0AAIg5kDIgCAAg");
	this.shape_8.setTransform(-333.8,111.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AlbG0QhPhMAAh+QAAhfAqh3QAph4BGhqQBTh7B5hRQCUhjCIAAQBkAAA4A/QA4A+AABuQAABUgsBdQguBchXBUQhHBHhEApQhGAogygBQgXAAgYgLQALA/BFAAQBPAAB/hdQBJg1AZAAQAgAAAbARQAbARAAARQAAAUgeAeQg4A3hIA2QhJA0hDAlQhDAihDAVQhDAUg0AAQiEAAhOhKgAAYjQQgnBagZBZQgbBXAABAQAAAXAJAoQAwggAYghQA3hEAfhYQAZg5ANhIQANhHAAg+QAAg6gYABQghgBhGCUg");
	this.shape_9.setTransform(405.7,-49.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Aj8JyQhGhLAAh7QAAg0AThVQAShVAniPIANg0IAIghQgqgBgRgRQgSgRAAgmQAAhCAzg7QAzg6BEgPIAFgMQBFjEAyhQQAXglAsgeQBQg0BHABQArgBAWAUQAVASABAkQgBAYgfBLQg1B7gaBtQASACAQAEQA/AKAUALQAUANAAAfQAAA4gcAvQgdAvguAXQgjAPhOAFQgNApgRBHQgIA/gMBvQgGApAAAkQAACmChAAIAGAAIADAAQATAAAAAGQAAARgjAoQglAngqAfQguAgg3ASQg2AUgtgBQhuAAhEhKg");
	this.shape_10.setTransform(322.7,-70.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhMLZQgwgDgmgoQgngqgRgxQgQgxAAhOQAAitBBjZQBAjZBShjQAggpA6ABQA9AAAkA3QAmA4AABaQAACFgnCyQgmC0hFDBQgbBOgnAbQgbARglAAgAAxlFQhigEAAhzQAAg6AdhLQAchOAlgkQASgUAUgIQATgJAfAAQA0AAAaAbQAYAZAAA7QAABLgaBDQgaBDgrApQgrAqgtAAg");
	this.shape_11.setTransform(258.8,-69.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AnQHTQgqgyAAhQQAAgyAMhHQAMhHAThSQAThRAchVQAahXAfhNQAxiCBFhIQAvgwBEABQBtgBAACPQAABngrDDIAEAEIA+hKQBghqA4g0QA4g0AtgYQAsgXAuAAQBLAAAeAoQAfAoAABiQAAApgJBRQgMBpAABdQAABpAKBBQAIAoAOAoQALAmAAANQAAASgNAIQggAdg2AVQg1AVglAAQg8AAgwgpQgygpgahJQgbhIAAhbQAAg9AMhTIgEgEIhIBPIg0A4Qh1CGhSBtQggAqgaAgQgnAmgxABQhEAAgqgzg");
	this.shape_12.setTransform(176.8,-46);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AkYHpQhtglg+g+QhVhUAAibQAAh6A8h5QA8h5BnhjQBmhkB7g5QB6g5B/AAQCcAAAAAkQAAAqhGAEQhVAFhKArQhJArg4BLQg6BKggBeQggBdAABnQAABzA2BGQA2BFBUAAQBQAAA8hSQA8hSAAhtQAAhYglhOQgmhPhHg1QgfgYABgLQgBgPAsgeQAwghA8gWQA8gWApAAQAvAAArAaQAqAYAgAuQAhAtASA8QAQA7ABBDQAABugqBtQgqBthEBDQhZBVh8A3Qh9A1hvAAQhtAAhrgmg");
	this.shape_13.setTransform(63.4,-50.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AkaKbQg6g7AAhJQAAgyAZg0QAZg2AogmQBShTCfhKQAcgPAQAAQAGAAAFAFQAGAGAAAGQAAAHgNAVQgfA2gYBUQgYBTAAA9QAABHAWAAQAMAAARgZQAQgaAOghQBZjjAajBQADgcADg4IgcAVIgKAHIgSAOQi0COhnA6QhoA5hNAAQhVAAg0g+Qg0g+AAhoQAAiABJiJQBJiLB4h0QB3hzCPhFQCOhHCFAAQCEAABFAtQBEAuAABaQAABMg8BvQAsADATAYQAUAXAAAzQAABSghCTQgiCRgwB8Qg7CchtB0QhTBXh7A/Qh6A+hYAAQhKAAg5g7gAA/n3Qg1A5gvBNQgvBOgaBOQgaBNAAA+QAAA9AeAAQAdAAB2hiQA1guB3hWIACACIAAgEIgCACIgCgCQgGACgLAAQgTACgfAAQg2AAAAgTQAAgLAOgPQAogtAdhJQAdhKADg8QAAgOACgMIACgHIAAgGQAAgOgUAAQgpAAhVBYg");
	this.shape_14.setTransform(-55,-24.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AnnG5QhNhOABh6QgBhKAmhmQAmhlBDhiQBuifCmhwQCshyCfAAQCHAABXA4QBXA3AABTQgBA+grBGQA5AAAPAMQAOAMAAAsIgFArQgGBnAABbIABBGIAEA5QADAfADATQAJAxASAwQg+A/g6AdQg6Acg8AAQiiAAABkPQgBgcACgSIAAABIAAgEIAAADIgDgDQhjBzhPBJQhSBJhFAkQhFAlg6AAQh1AAhNhPgAAhlTQhgBrg5BvQg6BvAABXQAAA5AYAmQAYAmAjAAQAeAABUhBQBThBBnhrIAdgWIgFgFIgTAHQhMAUghAAQgpAAgBgUQAAgIARgfQA7haAAhOQAAgugPgkQgRgmgTAAQgQAAgjAjgACmC+IAAgBIAAgDIAAAEg");
	this.shape_15.setTransform(-172.2,-47.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AkUHQQgfguAAhmQAAhSATh4QASh4AahgIAJgbQAAgGAGgUQAniPAghEQAhhFAugqQApghAzAAQBKAAAQBaQAPgMANgRQAfglARgMQAQgMAWAAQBbAAAACzQAABhgVBcQgVBbggA4QggA7ggAAQgjgBAAiCQAAhFgHgnQgIgogRgWQggA7gJDRQgHB5gEAgIgEAVQAAASgEAhQgEA0gIAhQgHAggPAXQgNAUgaAZQhMBGhOAAQg/AAgdgvg");
	this.shape_16.setTransform(-266.8,-48.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AoHLFQh3gWgmgiQgYgTAAglQAAgJAEgVID6tLQAbhhAcgoQATgYAdgPIAAgFIgPAAQgfABhgAiQhqAlgoAAQgVAAgIgHQgHgIgBgRQAAgqAYgyQAYgyAmgoQAlgoAogRQBcgkCcgUQCcgTC4AAQDEgBCLA/QCLA9BJB6QBHB6AACtQAACthFCvQhECvhyB3QkKEam7AAQiPAAh1gYgAjFFAIgIAnQgUBTgYAtQgRAigkAuQAeACAmAAQBbAAA+gMQA8gMA0geQA1gdAtgvQBYhZAvh1QAuh2AAiIQAAh/gmhnQgmhmhDg7QhDg8hXgGg");
	this.shape_17.setTransform(-374.2,-71.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.כותרותפתיחה, new cjs.Rectangle(-451,-189.2,903.1,378.4), null);


(lib.טעות = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ASvGEMgpIAAAQhZAAAAh5IAArDQAAh6BZABMAqTAAAQBZgBgBB6IAAJeIChGNg");
	this.shape.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.טעות, new cjs.Rectangle(-151.8,-56.2,304.6,112.5), null);


(lib.MyQ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.txtQ = new cjs.Text("", "bold 15px 'Arial'");
	this.txtQ.name = "txtQ";
	this.txtQ.textAlign = "center";
	this.txtQ.lineHeight = 19;
	this.txtQ.lineWidth = 703;
	this.txtQ.parent = this;
	this.txtQ.setTransform(-1.5,-9.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF66").s().p("Eg3YAEiIAApDMBuxAAAIAAJDg");
	this.shape.setTransform(-0.5,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.txtQ}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MyQ, new cjs.Rectangle(-354.9,-30.9,709,58), null);


(lib.ביצהבפתיחה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("Ak1gaII0iYIA4DNIo1CYg");
	this.shape.setTransform(30.7,-39.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AkygPII4iXIAtC8IooCRg");
	this.shape_1.setTransform(30,-40.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AkugEII6iWIAjCqIocCLg");
	this.shape_2.setTransform(29.4,-41.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AkqAGII9iTIAYCXIoPCFg");
	this.shape_3.setTransform(28.7,-42.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AknARIJAiSIAOCFIoCB+g");
	this.shape_4.setTransform(28.1,-43.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AkjAcIJDiRIAEB0In2B3g");
	this.shape_5.setTransform(27.4,-44.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AkiAnIJFiQIgGBjInqBwg");
	this.shape_6.setTransform(27.1,-46);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AkkAxIJJiOIgRBRIneBpg");
	this.shape_7.setTransform(27,-47.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AklA9IJMiNIgcA/InRBig");
	this.shape_8.setTransform(26.8,-48.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AEohGIgnAtInDBdIhlACg");
	this.shape_9.setTransform(26.7,-49.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("ADkg1IgwAbImXBPg");
	this.shape_10.setTransform(33.4,-50.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("Ai7AUIHmhYIpVCJg");
	this.shape_11.setTransform(26.4,-49.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("Ai3ABIGehJIBFAJIpXCIg");
	this.shape_12.setTransform(26.3,-49.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("Ai0gOIGShCIBQAbIpbCHg");
	this.shape_13.setTransform(26.1,-50.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("Ai0gOIGRhDIBRAcIpbCHg");
	this.shape_14.setTransform(26.1,-50.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AizgPIGQhCIBRAcIpbCHg");
	this.shape_15.setTransform(26.1,-50.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AizgQIGQhCIBRAeIpbCHg");
	this.shape_16.setTransform(26.1,-50.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AizgRIGPhBIBSAeIpbCHg");
	this.shape_17.setTransform(26.1,-50.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AizgRIGPhCIBSAgIpbCHg");
	this.shape_18.setTransform(26.1,-50.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AizgSIGOhBIBTAgIpbCHg");
	this.shape_19.setTransform(26.1,-50.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AizgTIGNhBIBUAiIpbCHg");
	this.shape_20.setTransform(26.1,-50.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AiygUIGMhAIBUAiIpbCHg");
	this.shape_21.setTransform(26.1,-51);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AiygVIGMg/IBUAiIpbCHg");
	this.shape_22.setTransform(26,-51);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AiygVIGMhAIBUAkIpbCHg");
	this.shape_23.setTransform(26,-51.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AiygVIGLhAIBVAlIpbCGg");
	this.shape_24.setTransform(26,-51.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AixgWIGKg/IBWAlIpcCGg");
	this.shape_25.setTransform(26,-51.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AixgXIGJg/IBXAnIpcCGg");
	this.shape_26.setTransform(26,-51.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AixgYIGJg+IBXAnIpcCGg");
	this.shape_27.setTransform(26,-51.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AixgYIGIg+IBYAnIpcCGg");
	this.shape_28.setTransform(26,-51.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AixgZIGIg+IBYApIpdCGg");
	this.shape_29.setTransform(26,-51.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AixgaIGIg9IBYApIpdCGg");
	this.shape_30.setTransform(26,-51.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AixgbIGHg8IBZApIpdCGg");
	this.shape_31.setTransform(26,-51.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AiwgbIGGg9IBZArIpdCGg");
	this.shape_32.setTransform(26,-51.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AiwgcIGGg8IBZArIpdCGg");
	this.shape_33.setTransform(26,-51.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AiwgdIGFg8IBaAtIpdCGg");
	this.shape_34.setTransform(26,-51.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AirgWIGNhCIBQAmIiOAYIkdA9Ii4A2g");
	this.shape_35.setTransform(26.5,-50.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AingQIBfgNIE3g7IAZAIIAtAYIiRARIklA8IizBEg");
	this.shape_36.setTransform(27,-49.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AiigJIBhgNIE9hCIAaAHIAiATIiUAKIksA8IivBRg");
	this.shape_37.setTransform(27.5,-47.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AiegDIAPgCIEzg9IAFAAIjjAzIhVAKIirBdgAEKhXIAaAEIAXAPIiSACg");
	this.shape_38.setTransform(28.1,-46.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AiWgRIE7g+IBHACIkfBFIhmALIikBVgADshNIArgKIAaAEIANAJgADshNg");
	this.shape_39.setTransform(28.6,-45.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AiegcIFCg9IByAIIlDBRIhoAMIirBOgAEWhRIANgDIAcACIACAEgAEWhRg");
	this.shape_40.setTransform(29.1,-44.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AipgjIFJg9ICpATIgcAAIlXBbIhqALIizBIg");
	this.shape_41.setTransform(30.1,-44);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("Ai3gpIFSg9ICjAaIATAFIgdABIlcBhIhuAMIi6BAg");
	this.shape_42.setTransform(31.2,-43.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AjDgwIFZg9IClAhIAfAKIgeADIljBoIhwALIjBA5g");
	this.shape_43.setTransform(32.2,-42.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AjQg2IFgg9ICpAoIApAPIgfAEIlpBvIhyAKIjJAzg");
	this.shape_44.setTransform(33.3,-42.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("Ajcg9IFng8ICsAvIAzAUIgfAFIlvB2Ih0AKIjRArg");
	this.shape_45.setTransform(34.3,-41.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AjphDIFvg9ICuA2IA+AZIgfAHIl1B8Ih3AKIjYAlg");
	this.shape_46.setTransform(35.4,-41.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("Aj2hKIF3g8ICxA9IBJAeImcCKIh5AKIjgAeg");
	this.shape_47.setTransform(36.5,-40.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AkChQIF9g9IEJBmImkCUIliAgg");
	this.shape_48.setTransform(37.6,-40.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AkPhXIGFg8IEWByImqCcIltAZg");
	this.shape_49.setTransform(38.6,-39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).wait(1));

	// Layer 3
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FFFFFF","rgba(251,253,251,0.988)","rgba(242,249,244,0.957)","rgba(229,243,233,0.902)","rgba(212,235,218,0.827)","rgba(189,225,199,0.725)","rgba(160,213,177,0.604)","rgba(125,200,153,0.459)","rgba(77,187,127,0.29)","rgba(0,174,100,0.106)","rgba(0,168,90,0)"],[0,0.247,0.38,0.49,0.584,0.667,0.749,0.82,0.89,0.953,0.988],0,0,0,0,0,3.5).s().p("AgYAZQgJgKgBgPQABgNAJgLQALgKANAAQAOAAALAKQAKALgBANQABAPgKAKQgLAJgOABQgNgBgLgJg");
	this.shape_50.setTransform(23.4,-40.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#373535","#292929","#2A2C2B","#2B362F","#284633","#1F5D3D","#147849","#029553","#00A85A","rgba(0,168,90,0)"],[0,0.212,0.325,0.42,0.502,0.573,0.639,0.702,0.725,0.988],0,0,0,0,0,10).s().p("AhGBHQgdgeAAgpQAAgoAdgeQAegdAoAAQAqAAAcAdQAdAeAAAoQAAApgdAeQgcAdgqAAQgpAAgdgdg");
	this.shape_51.setTransform(31,-38.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["#EE3338","#EE3738","#EF4338","#F05439","#F2693B","#F5823F","#F89D46","#FBB24C"],[0,0.169,0.322,0.475,0.624,0.769,0.91,1],0,0,0,0,0,25.3).s().p("AiOBZQhJgOg3gkQArgxBCgiQBEgjBRgMQBQgLBLAOQBJAOA3AkQgrAxhCAiQhFAjhQAMQgjAFgiAAQgsAAgqgIg");
	this.shape_52.setTransform(32.3,-38.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AA0AzIghgpIg7hNIiYAoIhRASQgXAGg6ALIBOgcIBPgaICog0IBmCGIAaAlIC+guQAYgGAqgIIkIBWg");
	this.shape_53.setTransform(-51.3,-28.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AhZAGIgng/Iggg2QgjAwgeAlQAWgpAlg/IAGgKIBeCEIBKByIAugUIA5gYIA5gXQAkgOAWgIIihBbIhBAhg");
	this.shape_54.setTransform(100.8,-40.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgiC8IimAtIkNh4IEhl6IFyAdIEYDDIjTEzg");
	this.shape_55.setTransform(31.2,-38.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},14).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},36).wait(1));

	// Layer 2
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFF215").s().p("AijA3Ij+qzIK/DcIExjvQgCGsjsFiQjlFal5CrIlRAMg");
	this.shape_56.setTransform(84.8,140.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFF215").s().p("AmMIZIlhDwQA8l/CDmpQCNnOC2lvIBdCQIN8AbIo1K0ID7NZg");
	this.shape_57.setTransform(-63.9,-46.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F89734").s().p("EgItAgKQkBhtjHjHQjGjGhtkCQhxkKAAkkQAAiuAnj3QA9l/CCmqQCOnNC2lvQDBmFDQjYQDqjyDqAAQEWAAEZFXQD0EqDXIDQC/HKB4H4QBzHgAAEzIAAAIQgCGsjsFkQjmFal6CqIAAAAQkXB+k1AAQkjAAkKhwg");
	this.shape_58.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},14).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},36).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.8,-217,286.8,434.1);


(lib.EggIdan1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ביצהשלעידן();
	this.instance.parent = this;
	this.instance.setTransform(-150,-229,0.273,0.273);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.EggIdan1, new cjs.Rectangle(-150,-229,301.6,456.3), null);


(lib.EggDor1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ביצהדור();
	this.instance.parent = this;
	this.instance.setTransform(-154,-240,0.288,0.288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.EggDor1, new cjs.Rectangle(-154,-240,317.4,480.3), null);


(lib.EggOfir1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ביצהשלאופיר();
	this.instance.parent = this;
	this.instance.setTransform(-157,-237,0.288,0.288);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.EggOfir1, new cjs.Rectangle(-157,-237,317.5,480.4), null);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.אדמהבלבד01();
	this.instance.parent = this;
	this.instance.setTransform(-510,28,0.251,0.198);

	this.instance_1 = new lib.רקע201();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-542.3,-573.6,0.271,0.271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-542.3,-573.6,1084.7,1054.6);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0066").s().p("AuCAAIJrprIAACIIAADYISaAAIAAIYIyaAAIAAFfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.9,-61.9,179.9,123.9);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape.setTransform(30,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApAuIgFgGIgCgIIgBgMIABgTIAAgBIgCADIgZAaIgHAGQgDACgEAAQgFAAgEgEQgEgEAAgGIABgJIAFgNIABgCIABgDIAAAAIgSATIgLANIgIAGQgEACgCAAQgGAAgEgEQgDgFAAgIQAAgLAJgWQAIgUAEgHQAGgKAJAAQAFAAADADQADACAAAEQAAAHgFAOIgEAMIAAABIALgOQANgQAGgGQAJgIAHAAQADAAADADQADACABADQACAEAAAEQAAAEgGAQIgCAGIgBADIABAAIACgCIACgCIADgCIAMgNIALgKQAEgDADAAQAGAAADAEQADAEAAAIIgCAPIgBARIgBAJIAAAFIABAGIACAIIABAIQgBADgEACQgEADgFAAQgHAAgHgHg");
	this.shape_1.setTransform(18.5,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqAnQgHgHAAgLQAAgGADgJQAEgIAGgJQAJgOAPgKQAOgKAOAAQAMAAAIAFQAIAFAAAIQAAAFgEAGQAFAAABABQABABAAAEIAAADIgBARIABAGIAAAFIAAAFIADAIQgGAGgFADQgFACgFAAQgPAAAAgYIABgEIAAAAIAAAAIgBAAIgOAQQgIAGgGAEQgGADgFAAQgKAAgHgHgAADgdQgIAKgFAKQgFAJAAAHQAAAFACAEQACADADAAQADgBAHgFIAQgOIADgDIgBAAIgCABIgJACQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAIACgEQAFgIAAgHQAAgEgCgDQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQgBAAgDADg");
	this.shape_2.setTransform(6,10.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoAqQgEgFAAgHIABgLIADgNIAEgOIAFgPQAEgLAHgHQAEgDAGAAQAJAAAAAMQAAAJgDARIAAAAIAEgGIAOgOIAJgHQAEgBAEgBQAGABADADQADAEAAAIIgBALIgBARIABAPIACAGIABAFIgBACIgIAFIgIACQgFgBgFgDQgEgEgCgGQgDgHAAgHIACgNIgBgBIgGAHIgEAGIgSAVIgFAHQgDADgEAAQgGgBgEgDg");
	this.shape_3.setTransform(-4.1,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVA3QgHgGAAgLIACgMIAFgUIABgFIABgCQgEAAgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAFgGQAEgFAGgBIABgBQAGgRAEgHQABgEAEgCQAHgFAHAAQADAAACACQACABAAAEIgDAIIgHAVIADAAIAIACQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAAFgDAEQgDAEgEACQgDACgHAAIgCAJIgCAQIgBAGQAAAPAPAAIAAAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgDAEIgHAGIgJAEIgIACQgJAAgGgHg");
	this.shape_4.setTransform(-17.2,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape_5.setTransform(-24.5,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtA5QgDgFAAgKQAAgJACgPIAHgcIAIgbIAHgNIAHgIQADgCADABQAEAAACABQADADAAAFIgBAIIgBAJIAAABIADgGIAHgMIAGgHIAGgDIAHgBQAHAAAGADQAFAEADAIQADAJAAAJQAAAPgHANQgGANgLAIQgKAJgMAAQgFAAgFgDQgEgDgEgHIgBACIAAACIgKAcQgDAJgDACQgCACgDABQgFAAgDgGgAAJgfIgHAMQgHANgEAIIgCAEQADAIAHAAQAEAAAFgEQAEgGADgGQACgIAAgJIgBgMQgBgEgBAAIgFAEg");
	this.shape_6.setTransform(-33.9,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYApQgCgEAAgJIABgSIAEgSIABgCIABgDIAGgSQADgGAEgEQAEgDADAAQAHAAABAIIADgDIAEgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAIAAAAAQQAAAIgCAIQgCAJgCAEQgDAFgDAAQgDAAAAgLIgBgJIgCgGQgDAFgBASIAAANIgBACIAAAFIgBAHIgCAFIgDAEQgGAGgHAAQgGAAgDgEg");
	this.shape_7.setTransform(36.9,-6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqApQgDgEAAgGQAAgLADgPQAEgOAFgOQAGgRAJgDQAEgCAEAAQAGAAADAFQADADAAAGIgCAJIgDAKIgBADQgIAQAAAEQAAAAAAAAQAAABAAAAQAAAAABAAQAAABAAAAIAEgCIAHgHIAHgIIADgEIAEgDQAJgJAGgEQAGgEAEgBQAHABAAANIgBAJIgBAWIABADIAAAEIAAAJIABAGQAAACgFADQgFACgGAAQgHAAgEgDQgEgBgCgGQgDgEAAgHIABgCIAAgGIgCABIgGAFIgRAOQgHAFgFACQgFACgDAAQgFAAgDgEg");
	this.shape_8.setTransform(28.7,-6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYArQgJgDgGgGQgIgHAAgOQAAgKAGgKQAFgLAKgJQAIgJALgFQAKgFALAAQAOAAAAAEQAAADgGABQgIAAgGAEQgGAEgFAGQgFAHgDAIQgDAIABAJQgBAKAGAGQAEAGAHAAQAGAAAGgHQAFgHABgKQgBgHgDgHQgDgHgHgFIgDgDIAFgEIAJgEQAGgCADAAQAEAAAEACQADACADAEQADAEACAFIACALQgBAJgDAKQgEAKgGAFQgIAIgLAFQgLAFgJAAQgKAAgJgEg");
	this.shape_9.setTransform(18.6,-7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsA5IABgHIAEgHQACgDAEgDQAFgEAKgEIgJgPIgGgNQgIgRAAgPQAAgLADgHQACgHAHgCQAFgCAFAAQAGAAACAEQACAGACAQQABATAEAQIACAIIAEgNIAHgRIAFgNIABgEQACgKAFgEIAHgGQAEgCAEAAQAGAAAAAGIgCAHIgEANIgHAPIgIARQgIAPgIAMQgGAIgFAGIgNAMQgHAFgGACQgGADgFAAQgEAAAAgEg");
	this.shape_10.setTransform(8.7,-5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYApQgCgEAAgJIABgSIAEgSIABgCIABgDIAGgSQADgGAEgEQAEgDADAAQAHAAABAIIADgDIAEgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAIAAAAAQQAAAIgCAIQgCAJgCAEQgDAFgDAAQgDAAAAgLIgBgJIgCgGQgDAFgBASIAAANIgBACIAAAFIgBAHIgCAFIgDAEQgGAGgHAAQgGAAgDgEg");
	this.shape_11.setTransform(-4.3,-6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape_12.setTransform(-11.3,-6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVA3QgHgGAAgLIACgMIAFgUIABgFIABgCQgEAAgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAFgGQAEgFAGgBIABgBQAGgRAEgHQABgEAEgCQAHgFAHAAQADAAACACQACABAAAEIgDAIIgHAVIADAAIAIACQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAFgDAEQgDAEgEACQgDACgHAAIgCAJIgCAQIgBAGQAAAPAPAAIAAAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgDAEIgHAGIgJAEIgIACQgJAAgGgHg");
	this.shape_13.setTransform(-18.7,-8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoAqQgEgFAAgHIABgLIADgNIAEgOIAFgOQAEgMAHgGQAEgFAGAAQAJAAAAANQAAAJgDARIAAAAIAEgGIAOgOIAJgHQAEgCAEAAQAGABADADQADADAAAJIgBALIgBAQIABAQIACAHIABAEIgBACIgIAFIgIABQgFAAgFgDQgEgEgCgGQgDgHAAgHIACgNIgBgBIgGAHIgEAGIgSAVIgFAHQgDACgEAAQgGAAgEgDg");
	this.shape_14.setTransform(-26.8,-6.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape_15.setTransform(-35.7,-6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-19.5,80.6,39);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0066").s().p("AuCAAIJrprIAACIIAADYISaAAIAAIYIyaAAIAAFfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.9,-61.9,179.9,123.9);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0066").s().p("AuCAAIJrprIAACIIAADYISaAAIAAIYIyaAAIAAFfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.9,-61.9,179.9,123.9);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape.setTransform(30,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApAuIgFgGIgCgIIgBgMIABgTIAAgBIgCADIgZAaIgHAGQgDACgEAAQgFAAgEgEQgEgEAAgGIABgJIAFgNIABgCIABgDIAAAAIgSATIgLANIgIAGQgEACgCAAQgGAAgEgEQgDgFAAgIQAAgLAJgWQAIgUAEgHQAGgKAJAAQAFAAADADQADACAAAEQAAAHgFAOIgEAMIAAABIALgOQANgQAGgGQAJgIAHAAQADAAADADQADACABADQACAEAAAEQAAAEgGAQIgCAGIgBADIABAAIACgCIACgCIADgCIAMgNIALgKQAEgDADAAQAGAAADAEQADAEAAAIIgCAPIgBARIgBAJIAAAFIABAGIACAIIABAIQgBADgEACQgEADgFAAQgHAAgHgHg");
	this.shape_1.setTransform(18.5,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqAnQgHgHAAgLQAAgGADgJQAEgIAGgJQAJgOAPgKQAOgKAOAAQAMAAAIAFQAIAFAAAIQAAAFgEAGQAFAAABABQABABAAAEIAAADIgBARIABAGIAAAFIAAAFIADAIQgGAGgFADQgFACgFAAQgPAAAAgYIABgEIAAAAIAAAAIgBAAIgOAQQgIAGgGAEQgGADgFAAQgKAAgHgHgAADgdQgIAKgFAKQgFAJAAAHQAAAFACAEQACADADAAQADgBAHgFIAQgOIADgDIgBAAIgCABIgJACQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAIACgEQAFgIAAgHQAAgEgCgDQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQgBAAgDADg");
	this.shape_2.setTransform(6,10.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoAqQgEgFAAgHIABgLIADgNIAEgOIAFgPQAEgLAHgHQAEgDAGAAQAJAAAAAMQAAAJgDARIAAAAIAEgGIAOgOIAJgHQAEgBAEgBQAGABADADQADAEAAAIIgBALIgBARIABAPIACAGIABAFIgBACIgIAFIgIACQgFgBgFgDQgEgEgCgGQgDgHAAgHIACgNIgBgBIgGAHIgEAGIgSAVIgFAHQgDADgEAAQgGgBgEgDg");
	this.shape_3.setTransform(-4.1,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVA3QgHgGAAgLIACgMIAFgUIABgFIABgCQgEAAgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAFgGQAEgFAGgBIABgBQAGgRAEgHQABgEAEgCQAHgFAHAAQADAAACACQACABAAAEIgDAIIgHAVIADAAIAIACQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAAFgDAEQgDAEgEACQgDACgHAAIgCAJIgCAQIgBAGQAAAPAPAAIAAAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgDAEIgHAGIgJAEIgIACQgJAAgGgHg");
	this.shape_4.setTransform(-17.2,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape_5.setTransform(-24.5,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtA5QgDgFAAgKQAAgJACgPIAHgcIAIgbIAHgNIAHgIQADgCADABQAEAAACABQADADAAAFIgBAIIgBAJIAAABIADgGIAHgMIAGgHIAGgDIAHgBQAHAAAGADQAFAEADAIQADAJAAAJQAAAPgHANQgGANgLAIQgKAJgMAAQgFAAgFgDQgEgDgEgHIgBACIAAACIgKAcQgDAJgDACQgCACgDABQgFAAgDgGgAAJgfIgHAMQgHANgEAIIgCAEQADAIAHAAQAEAAAFgEQAEgGADgGQACgIAAgJIgBgMQgBgEgBAAIgFAEg");
	this.shape_6.setTransform(-33.9,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYApQgCgEAAgJIABgSIAEgSIABgCIABgDIAGgSQADgGAEgEQAEgDADAAQAHAAABAIIADgDIAEgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAIAAAAAQQAAAIgCAIQgCAJgCAEQgDAFgDAAQgDAAAAgLIgBgJIgCgGQgDAFgBASIAAANIgBACIAAAFIgBAHIgCAFIgDAEQgGAGgHAAQgGAAgDgEg");
	this.shape_7.setTransform(36.9,-6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqApQgDgEAAgGQAAgLADgPQAEgOAFgOQAGgRAJgDQAEgCAEAAQAGAAADAFQADADAAAGIgCAJIgDAKIgBADQgIAQAAAEQAAAAAAAAQAAABAAAAQAAAAABAAQAAABAAAAIAEgCIAHgHIAHgIIADgEIAEgDQAJgJAGgEQAGgEAEgBQAHABAAANIgBAJIgBAWIABADIAAAEIAAAJIABAGQAAACgFADQgFACgGAAQgHAAgEgDQgEgBgCgGQgDgEAAgHIABgCIAAgGIgCABIgGAFIgRAOQgHAFgFACQgFACgDAAQgFAAgDgEg");
	this.shape_8.setTransform(28.7,-6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYArQgJgDgGgGQgIgHAAgOQAAgKAGgKQAFgLAKgJQAIgJALgFQAKgFALAAQAOAAAAAEQAAADgGABQgIAAgGAEQgGAEgFAGQgFAHgDAIQgDAIABAJQgBAKAGAGQAEAGAHAAQAGAAAGgHQAFgHABgKQgBgHgDgHQgDgHgHgFIgDgDIAFgEIAJgEQAGgCADAAQAEAAAEACQADACADAEQADAEACAFIACALQgBAJgDAKQgEAKgGAFQgIAIgLAFQgLAFgJAAQgKAAgJgEg");
	this.shape_9.setTransform(18.6,-7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsA5IABgHIAEgHQACgDAEgDQAFgEAKgEIgJgPIgGgNQgIgRAAgPQAAgLADgHQACgHAHgCQAFgCAFAAQAGAAACAEQACAGACAQQABATAEAQIACAIIAEgNIAHgRIAFgNIABgEQACgKAFgEIAHgGQAEgCAEAAQAGAAAAAGIgCAHIgEANIgHAPIgIARQgIAPgIAMQgGAIgFAGIgNAMQgHAFgGACQgGADgFAAQgEAAAAgEg");
	this.shape_10.setTransform(8.7,-5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYApQgCgEAAgJIABgSIAEgSIABgCIABgDIAGgSQADgGAEgEQAEgDADAAQAHAAABAIIADgDIAEgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAIAAAAAQQAAAIgCAIQgCAJgCAEQgDAFgDAAQgDAAAAgLIgBgJIgCgGQgDAFgBASIAAANIgBACIAAAFIgBAHIgCAFIgDAEQgGAGgHAAQgGAAgDgEg");
	this.shape_11.setTransform(-4.3,-6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape_12.setTransform(-11.3,-6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVA3QgHgGAAgLIACgMIAFgUIABgFIABgCQgEAAgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAFgGQAEgFAGgBIABgBQAGgRAEgHQABgEAEgCQAHgFAHAAQADAAACACQACABAAAEIgDAIIgHAVIADAAIAIACQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAFgDAEQgDAEgEACQgDACgHAAIgCAJIgCAQIgBAGQAAAPAPAAIAAAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgDAEIgHAGIgJAEIgIACQgJAAgGgHg");
	this.shape_13.setTransform(-18.7,-8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoAqQgEgFAAgHIABgLIADgNIAEgOIAFgOQAEgMAHgGQAEgFAGAAQAJAAAAANQAAAJgDARIAAAAIAEgGIAOgOIAJgHQAEgCAEAAQAGABADADQADADAAAJIgBALIgBAQIABAQIACAHIABAEIgBACIgIAFIgIABQgFAAgFgDQgEgEgCgGQgDgHAAgHIACgNIgBgBIgGAHIgEAGIgSAVIgFAHQgDACgEAAQgGAAgEgDg");
	this.shape_14.setTransform(-26.8,-6.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape_15.setTransform(-35.7,-6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-19.5,80.6,39);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape.setTransform(30,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApAuIgFgGIgCgIIgBgMIABgTIAAgBIgCADIgZAaIgHAGQgDACgEAAQgFAAgEgEQgEgEAAgGIABgJIAFgNIABgCIABgDIAAAAIgSATIgLANIgIAGQgEACgCAAQgGAAgEgEQgDgFAAgIQAAgLAJgWQAIgUAEgHQAGgKAJAAQAFAAADADQADACAAAEQAAAHgFAOIgEAMIAAABIALgOQANgQAGgGQAJgIAHAAQADAAADADQADACABADQACAEAAAEQAAAEgGAQIgCAGIgBADIABAAIACgCIACgCIADgCIAMgNIALgKQAEgDADAAQAGAAADAEQADAEAAAIIgCAPIgBARIgBAJIAAAFIABAGIACAIIABAIQgBADgEACQgEADgFAAQgHAAgHgHg");
	this.shape_1.setTransform(18.5,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqAnQgHgHAAgLQAAgGADgJQAEgIAGgJQAJgOAPgKQAOgKAOAAQAMAAAIAFQAIAFAAAIQAAAFgEAGQAFAAABABQABABAAAEIAAADIgBARIABAGIAAAFIAAAFIADAIQgGAGgFADQgFACgFAAQgPAAAAgYIABgEIAAAAIAAAAIgBAAIgOAQQgIAGgGAEQgGADgFAAQgKAAgHgHgAADgdQgIAKgFAKQgFAJAAAHQAAAFACAEQACADADAAQADgBAHgFIAQgOIADgDIgBAAIgCABIgJACQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAIACgEQAFgIAAgHQAAgEgCgDQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQgBAAgDADg");
	this.shape_2.setTransform(6,10.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoAqQgEgFAAgHIABgLIADgNIAEgOIAFgPQAEgLAHgHQAEgDAGAAQAJAAAAAMQAAAJgDARIAAAAIAEgGIAOgOIAJgHQAEgBAEgBQAGABADADQADAEAAAIIgBALIgBARIABAPIACAGIABAFIgBACIgIAFIgIACQgFgBgFgDQgEgEgCgGQgDgHAAgHIACgNIgBgBIgGAHIgEAGIgSAVIgFAHQgDADgEAAQgGgBgEgDg");
	this.shape_3.setTransform(-4.1,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVA3QgHgGAAgLIACgMIAFgUIABgFIABgCQgEAAgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAFgGQAEgFAGgBIABgBQAGgRAEgHQABgEAEgCQAHgFAHAAQADAAACACQACABAAAEIgDAIIgHAVIADAAIAIACQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAAFgDAEQgDAEgEACQgDACgHAAIgCAJIgCAQIgBAGQAAAPAPAAIAAAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgDAEIgHAGIgJAEIgIACQgJAAgGgHg");
	this.shape_4.setTransform(-17.2,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape_5.setTransform(-24.5,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtA5QgDgFAAgKQAAgJACgPIAHgcIAIgbIAHgNIAHgIQADgCADABQAEAAACABQADADAAAFIgBAIIgBAJIAAABIADgGIAHgMIAGgHIAGgDIAHgBQAHAAAGADQAFAEADAIQADAJAAAJQAAAPgHANQgGANgLAIQgKAJgMAAQgFAAgFgDQgEgDgEgHIgBACIAAACIgKAcQgDAJgDACQgCACgDABQgFAAgDgGgAAJgfIgHAMQgHANgEAIIgCAEQADAIAHAAQAEAAAFgEQAEgGADgGQACgIAAgJIgBgMQgBgEgBAAIgFAEg");
	this.shape_6.setTransform(-33.9,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYApQgCgEAAgJIABgSIAEgSIABgCIABgDIAGgSQADgGAEgEQAEgDADAAQAHAAABAIIADgDIAEgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAIAAAAAQQAAAIgCAIQgCAJgCAEQgDAFgDAAQgDAAAAgLIgBgJIgCgGQgDAFgBASIAAANIgBACIAAAFIgBAHIgCAFIgDAEQgGAGgHAAQgGAAgDgEg");
	this.shape_7.setTransform(36.9,-6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqApQgDgEAAgGQAAgLADgPQAEgOAFgOQAGgRAJgDQAEgCAEAAQAGAAADAFQADADAAAGIgCAJIgDAKIgBADQgIAQAAAEQAAAAAAAAQAAABAAAAQAAAAABAAQAAABAAAAIAEgCIAHgHIAHgIIADgEIAEgDQAJgJAGgEQAGgEAEgBQAHABAAANIgBAJIgBAWIABADIAAAEIAAAJIABAGQAAACgFADQgFACgGAAQgHAAgEgDQgEgBgCgGQgDgEAAgHIABgCIAAgGIgCABIgGAFIgRAOQgHAFgFACQgFACgDAAQgFAAgDgEg");
	this.shape_8.setTransform(28.7,-6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYArQgJgDgGgGQgIgHAAgOQAAgKAGgKQAFgLAKgJQAIgJALgFQAKgFALAAQAOAAAAAEQAAADgGABQgIAAgGAEQgGAEgFAGQgFAHgDAIQgDAIABAJQgBAKAGAGQAEAGAHAAQAGAAAGgHQAFgHABgKQgBgHgDgHQgDgHgHgFIgDgDIAFgEIAJgEQAGgCADAAQAEAAAEACQADACADAEQADAEACAFIACALQgBAJgDAKQgEAKgGAFQgIAIgLAFQgLAFgJAAQgKAAgJgEg");
	this.shape_9.setTransform(18.6,-7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsA5IABgHIAEgHQACgDAEgDQAFgEAKgEIgJgPIgGgNQgIgRAAgPQAAgLADgHQACgHAHgCQAFgCAFAAQAGAAACAEQACAGACAQQABATAEAQIACAIIAEgNIAHgRIAFgNIABgEQACgKAFgEIAHgGQAEgCAEAAQAGAAAAAGIgCAHIgEANIgHAPIgIARQgIAPgIAMQgGAIgFAGIgNAMQgHAFgGACQgGADgFAAQgEAAAAgEg");
	this.shape_10.setTransform(8.7,-5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYApQgCgEAAgJIABgSIAEgSIABgCIABgDIAGgSQADgGAEgEQAEgDADAAQAHAAABAIIADgDIAEgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAIAAAAAQQAAAIgCAIQgCAJgCAEQgDAFgDAAQgDAAAAgLIgBgJIgCgGQgDAFgBASIAAANIgBACIAAAFIgBAHIgCAFIgDAEQgGAGgHAAQgGAAgDgEg");
	this.shape_11.setTransform(-4.3,-6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape_12.setTransform(-11.3,-6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVA3QgHgGAAgLIACgMIAFgUIABgFIABgCQgEAAgBgCQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgGAFgGQAEgFAGgBIABgBQAGgRAEgHQABgEAEgCQAHgFAHAAQADAAACACQACABAAAEIgDAIIgHAVIADAAIAIACQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAFgDAEQgDAEgEACQgDACgHAAIgCAJIgCAQIgBAGQAAAPAPAAIAAAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAABgDAEIgHAGIgJAEIgIACQgJAAgGgHg");
	this.shape_13.setTransform(-18.7,-8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoAqQgEgFAAgHIABgLIADgNIAEgOIAFgOQAEgMAHgGQAEgFAGAAQAJAAAAANQAAAJgDARIAAAAIAEgGIAOgOIAJgHQAEgCAEAAQAGABADADQADADAAAJIgBALIgBAQIABAQIACAHIABAEIgBACIgIAFIgIABQgFAAgFgDQgEgEgCgGQgDgHAAgHIACgNIgBgBIgGAHIgEAGIgSAVIgFAHQgDACgEAAQgGAAgEgDg");
	this.shape_14.setTransform(-26.8,-6.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgeAmQgHgGAAgLQAAgJAEgKQADgKAHgJQAHgLALgHQAMgJAMAAQAJAAAFAFQAFAGAAAKQAAAHgEAIQgEAIgIAHQgGAGgGAEQgGADgEAAIgEgBQABAGAFAAQAHAAALgIQAHgFACAAIAFABQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQgBAAAAABIgMAKIgMAHIgLAFQgGACgEAAQgMAAgHgHgAACgRQgDAHgCAIQgCAHAAAGIABAFIAFgFQAFgGADgHIADgMIABgLQAAgGgCAAQgDAAgGAOg");
	this.shape_15.setTransform(-35.7,-6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-19.5,80.6,39);


(lib.רקע = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_38 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(38).call(this.frame_38).wait(2));

	// Layer 1
	this.instance = new lib.אדמהבלבד01();
	this.instance.parent = this;
	this.instance.setTransform(0,622,0.268,0.229);

	this.instance_1 = new lib.רקע201();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.271,0.271);

	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(542.3,573.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},37).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({y:305.9},37).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1084.7,1147.2);


(lib.QutionPage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.A4txt = new cjs.Text("", "bold 15px 'Arial'");
	this.A4txt.name = "A4txt";
	this.A4txt.textAlign = "center";
	this.A4txt.lineHeight = 19;
	this.A4txt.lineWidth = 251;
	this.A4txt.parent = this;
	this.A4txt.setTransform(-166.4,28);

	this.A2txt = new cjs.Text("", "bold 15px 'Arial'");
	this.A2txt.name = "A2txt";
	this.A2txt.textAlign = "center";
	this.A2txt.lineHeight = 19;
	this.A2txt.lineWidth = 255;
	this.A2txt.parent = this;
	this.A2txt.setTransform(170.2,28);

	this.A3txt = new cjs.Text("", "bold 15px 'Arial'");
	this.A3txt.name = "A3txt";
	this.A3txt.textAlign = "center";
	this.A3txt.lineHeight = 19;
	this.A3txt.lineWidth = 251;
	this.A3txt.parent = this;
	this.A3txt.setTransform(-166.4,-96.9);

	this.A1txt = new cjs.Text("", "bold 15px 'Arial'");
	this.A1txt.name = "A1txt";
	this.A1txt.textAlign = "center";
	this.A1txt.lineHeight = 19;
	this.A1txt.lineWidth = 255;
	this.A1txt.parent = this;
	this.A1txt.setTransform(170.2,-96.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.A1txt},{t:this.A3txt},{t:this.A2txt},{t:this.A4txt}]}).wait(1));

	// Layer 3
	this.A4erorr = new lib.טעות();
	this.A4erorr.parent = this;
	this.A4erorr.setTransform(-170.3,60.9,0.996,1,0,0,180,0.4,-0.1);
	this.A4erorr.visible = false;

	this.A3erorr = new lib.טעות();
	this.A3erorr.parent = this;
	this.A3erorr.setTransform(-170.3,-63,0.996,1,0,0,180,0.4,-0.1);
	this.A3erorr.visible = false;

	this.A2erorr = new lib.טעות();
	this.A2erorr.parent = this;
	this.A2erorr.setTransform(180,61,1,1,0,0,0,0.5,0);
	this.A2erorr.visible = false;

	this.A1erorr = new lib.טעות();
	this.A1erorr.parent = this;
	this.A1erorr.setTransform(180,-62.9,1,1,0,0,0,0.5,0);
	this.A1erorr.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.A1erorr},{t:this.A2erorr},{t:this.A3erorr},{t:this.A4erorr}]}).wait(1));

	// Layer 1
	this.A4 = new lib.בועה1();
	this.A4.parent = this;
	this.A4.setTransform(-165.5,57,0.967,1,0,0,180);
	new cjs.ButtonHelper(this.A4, 0, 1, 2, false, new lib.בועה1(), 3);

	this.A3 = new lib.בועה1();
	this.A3.parent = this;
	this.A3.setTransform(-165.5,-66.2,0.967,1,0,0,180);
	new cjs.ButtonHelper(this.A3, 0, 1, 2, false, new lib.בועה1(), 3);

	this.A2 = new lib.בועה1();
	this.A2.parent = this;
	this.A2.setTransform(171.7,57);
	new cjs.ButtonHelper(this.A2, 0, 1, 2, false, new lib.בועה1(), 3);

	this.A1 = new lib.בועה1();
	this.A1.parent = this;
	this.A1.setTransform(171.7,-66.2);
	new cjs.ButtonHelper(this.A1, 0, 1, 2, false, new lib.בועה1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.A1},{t:this.A2},{t:this.A3},{t:this.A4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.QutionPage, new cjs.Rectangle(-322,-119.2,654.4,236.5), null);


(lib.opening = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.כותרותפתיחה();
	this.instance.parent = this;
	this.instance.setTransform(-181,-161.7,0.467,0.467,0,0,0,0.6,0);

	this.instance_1 = new lib.ביצהבפתיחה();
	this.instance_1.parent = this;
	this.instance_1.setTransform(248.6,33,1,1,0,0,0,0.5,0);

	this.playBut = new lib.התחלמשחק();
	this.playBut.parent = this;
	this.playBut.setTransform(-180.6,75.2);
	new cjs.ButtonHelper(this.playBut, 0, 1, 2, false, new lib.התחלמשחק(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.playBut},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.opening, new cjs.Rectangle(-391.9,-250,784,500.1), null);


(lib.selectEgg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.dor = new lib.ביצהדור_1();
	this.dor.parent = this;
	this.dor.setTransform(-259.8,58.2,0.225,0.231);
	new cjs.ButtonHelper(this.dor, 0, 1, 2, false, new lib.ביצהדור_1(), 3);

	this.ofir = new lib.ביצהאופיר();
	this.ofir.parent = this;
	this.ofir.setTransform(-16.2,72.5,0.223,0.228,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.ofir, 0, 1, 2, false, new lib.ביצהאופיר(), 3);

	this.idan = new lib.ביצהעידן();
	this.idan.parent = this;
	this.idan.setTransform(273.4,84.2,0.253,0.253);
	new cjs.ButtonHelper(this.idan, 0, 1, 2, false, new lib.ביצהעידן(), 3);

	this.instance = new lib.תבחראתהביצהשלך();
	this.instance.parent = this;
	this.instance.setTransform(6.6,-126.9,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.idan},{t:this.ofir},{t:this.dor}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.selectEgg, new cjs.Rectangle(-338,-186.4,681.3,378), null);


(lib.congluison = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.NextBut = new lib.butNext();
	this.NextBut.parent = this;
	this.NextBut.setTransform(393.8,57,0.58,0.58);
	new cjs.ButtonHelper(this.NextBut, 0, 1, 2, false, new lib.butNext(), 3);

	this.txt = new cjs.Text("", "bold 27px 'Arial'");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 32;
	this.txt.lineWidth = 588;
	this.txt.parent = this;
	this.txt.setTransform(4,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt},{t:this.NextBut}]}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC33").s().p("EAsAAGuMhglAAAQjQAAAAiHIAAsNQAAiIDQAAMBjTAAAQDQAAAACIIAAKeIF4G3g");
	this.shape.setTransform(22.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.congluison, new cjs.Rectangle(-334.8,-62.2,798.8,148.3), null);


(lib.erorrMyName = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21.3,-4.1);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.3,-4.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(21.3,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},27).to({state:[{t:this.instance_2}]},32).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:43.3},27).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},27).to({_off:true,x:21.3},32).wait(1));

	// Layer 1
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5.1,-3.5);

	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(16.8,-3.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-5.1,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},27).to({state:[{t:this.instance_5}]},32).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,x:16.8},27).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:false},27).to({_off:true,x:-5.1},32).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.1,-65.5,179.9,123.9);


// stage content:
(lib.dinonite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var qution=[];
		var anser=[];
		//השאלות
		qution[0]="My pet feels cold. What should I do?";
		qution[1]="My pet is dirty. What does it need?";
		qution[2]="My pet is lonely. What do I do?";
		qution[3]="My pet is thirsty! What should I do?";
		qution[4]="My pet is sick. Quickly, do something!";
		qution[5]="My pet feels hungry. What do I do?";
		qution[6]="My pet is bored being home all day. What should I do?";
		qution[7]="My pet is tired. What to do?";
		qution[8]="My pet is misbehaving. What to do?";
		//תשובות
		anser[0]=["I wrap it in a blanket(שמיכה) to warm it","I give it ice cream","I scream at it","I give it a ball to play with",1];
		anser[1]=["Lots of love","A shower","Taking care","A Ball",2];
		anser[2]=["I play on the computer by myself","I turn on the TV","I give it food","I hug it",4];
		anser[3]=["I give it an apple to eat","I talk to it","I give it water to drink","I take it out for a walk",3];
		anser[4]=["I give it hot soup so it will feel better","I take it for a walk","I turn on the radio","I throw (לזרוק) a ball at it",1];
		anser[5]=["I Feed it","I give it water","I hand it flowers","I take it out for a walk",1];
		anser[6]=["I take it for a bath","I let it play on the computer","I turn on the TV so it can watch","I take it out for a walk",4];
		anser[7]=["I give it a ball to play with","Play on my guitar","Turn on the radio","I give it a pillow to sleep on",4];
		anser[8]=["I train it to behave (להתנהג) better","I give it a treat","I punish it!","I don’t do anything",1];
		var home = this;
		var myEgg;
		var myNamePet;
		var ErorrName = false;
		var myQution = 0;
		var psilot = 0;
		//-----------------------דף פתיחה------------
		myinit();
		function myinit() {
			var opening = new lib.opening();
			opening.x = 500;
			opening.y = 250;
			opening.name = "op";
			stage.addChild(opening);
			opening.playBut.addEventListener("click", myPlay);
		}
		//-------------------מסך הבחירה--------
		function myPlay() {
			//מחיקת מסך הפתיחה
			var opening = stage.getChildByName("op");
			opening.playBut.removeEventListener("click", myPlay);
			stage.removeChild(opening);
			//הספת הביצים
			var selectEgg = new lib.selectEgg();
			selectEgg.x = 500;
			selectEgg.y = 250;
			selectEgg.name = "selectEgg";
			stage.addChild(selectEgg);
			selectEgg.ofir.addEventListener("click", eggOfir);
			selectEgg.idan.addEventListener("click", eggIdan);
			selectEgg.dor.addEventListener("click", eggDor);
		
		}
		//-----------------בחירת הביצה-------------
		function eggIdan() {
			myEgg = 0;
			var selectEgg = stage.getChildByName("selectEgg");
			stage.removeChild(selectEgg);
			MyName();
			var egg = new lib.EggIdan1();
			egg.x = 200;
			egg.y = 300;
			egg.name = "egg";
			stage.addChild(egg);
		}
		function eggOfir() {
			myEgg = 1;
			var selectEgg = stage.getChildByName("selectEgg");
			stage.removeChild(selectEgg);
			MyName();
			var egg = new lib.EggOfir1();
			egg.x = 200;
			egg.y = 300;
			egg.name = "egg";
			stage.addChild(egg);
		}
		function eggDor() {
			myEgg = 2;
			var selectEgg = stage.getChildByName("selectEgg");
			stage.removeChild(selectEgg);
			MyName();
			var egg = new lib.EggDor1();
			egg.x = 200;
			egg.y = 300;
			egg.name = "egg";
			stage.addChild(egg);
		}
		//------------------בחירת שם לביצה----------------
		function MyName() {
			var myName = new lib.myName();
			myName.x = 600;
			myName.y = 100;
			myName.name = "myName";
			stage.addChild(myName);
			//כפתור התחל משחק
			home.butStart.visible = true;
			home.butStart.addEventListener("click", ErorrName1);
		
			//אינפוט טקסט
			var txt = document.createElement("INPUT");
			txt.setAttribute("type", "text");
			txt.setAttribute("id", "code");
			txt.setAttribute("size", "5");
			txt.style.left = "50%";
			txt.style.top = "50%";
			txt.style.textAlign = "center";
			txt.style.position = "absolute";
			txt.style.height = "80px";
			txt.style.weight = "60px";
			txt.style.fontSize = "40pt";
			document.getElementById("animation_container").appendChild(txt);
		
		}
		//-----------------------אם לא הוקלד שם לדמות
		function ErorrName1() {
			myNamePet = document.getElementById('code').value;
			//alert(myNamePet);
			if (myNamePet == "" || myNamePet == " ") {
				if (ErorrName == false) {
					var myNameErorr = new lib.erorrMyName();
					myNameErorr.x = 830;
					myNameErorr.y = 330;
					myNameErorr.name = "myNameErorr";
					stage.addChild(myNameErorr);
					ErorrName = true;
				}
			} else {
				MyStartGame();
			}
		}
		//----------------------התחלת המשחק------------
		function MyStartGame() {
			if (ErorrName == true) {
				var myNameErorr = stage.getChildByName("myNameErorr");
				stage.removeChild(myNameErorr);
			}
			var myNameIn = document.getElementById('code');
			document.getElementById("animation_container").removeChild(myNameIn);
			var myName = stage.getChildByName("myName");
			stage.removeChild(myName);
			var egg = stage.getChildByName("egg");
			stage.removeChild(egg);
			home.butStart.visible = false;
			gotoThePlay();
		
		}
		function gotoThePlay() {
			home.bacrund.gotoAndPlay(1);
			var Go = setInterval(function () {
				quitsionGo();
				clearInterval(Go);
			}, 1600);
		}
		//---------------------פתיחת השאלה בהתחלה-------------
		function quitsionGo() {
			var MyQ = new lib.MyQ();
			MyQ.x = 480;
			MyQ.y = 290;
			MyQ.name = "MyQ";
			stage.addChild(MyQ);
			var qp = new lib.QutionPage();
			qp.x = 480;
			qp.y = 450;
			qp.name = "QutionPage";
			stage.addChild(qp);
			qp.A1.addEventListener("click", A1click);
			qp.A2.addEventListener("click", A2click);
			qp.A3.addEventListener("click", A3click);
			qp.A4.addEventListener("click", A4click);
			tohen();
		}
		//------------------החדרת התוכן--------------------
		function tohen() {
			var MyQ = stage.getChildByName("MyQ");
			MyQ.txtQ.text = qution[myQution].toString();
			var qp = stage.getChildByName("QutionPage");
			qp.A1txt.text = anser[myQution][0].toString();
			qp.A2txt.text = anser[myQution][1].toString();
			qp.A3txt.text = anser[myQution][2].toString();
			qp.A4txt.text = anser[myQution][3].toString();
		}
		//----------------בדיקת התשובה--------------------
		function A1click() {
			if (anser[myQution][4] == 1) {
				level();
			} else {
				var qp = stage.getChildByName("QutionPage");
				qp.A1erorr.visible = true;
				psilot++;
			}
		}
		function A2click() {
			if (anser[myQution][4] == 2) {
				level();
			} else {
				var qp = stage.getChildByName("QutionPage");
				qp.A2erorr.visible = true;
				psilot++;
			}
		}
		function A3click() {
			if (anser[myQution][4] == 3) {
				level();
			} else {
				var qp = stage.getChildByName("QutionPage");
				qp.A3erorr.visible = true;
				psilot++;
			}
		}
		function A4click() {
			if (anser[myQution][4] == 4) {
				level();
			} else {
				var qp = stage.getChildByName("QutionPage");
				qp.A4erorr.visible = true;
				psilot++;
			}
		
		}
		//-------------------משוב חיובי--------------------
		function level() {
			var qp = stage.getChildByName("QutionPage");
			stage.removeChild(qp);
			var congluison = new lib.congluison();
			congluison.x = 480;
			congluison.y = 450;
			congluison.name = "congluison";
			stage.addChild(congluison);
			congluison.txt.text = anser[myQution][(anser[myQution][4]) - 1];
			congluison.NextBut.addEventListener("click", Next);
		}
		function Next() {
			var congluison = stage.getChildByName("congluison");
			stage.removeChild(congluison);
			var MyQ = stage.getChildByName("MyQ");
			stage.removeChild(MyQ);
			myQution++;
			if(myQution<qution.length){
				quitsionGo();
			}else{
				myRusalt();
			}
		}
		//-------------------סוף המשחק-------------------
		function myRusalt(){
			alert(psilot);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// המסך
	this.butStart = new lib.myStart();
	this.butStart.parent = this;
	this.butStart.setTransform(610.4,423.7);
	this.butStart.visible = false;
	new cjs.ButtonHelper(this.butStart, 0, 1, 2, false, new lib.myStart(), 3);

	this.timeline.addTween(cjs.Tween.get(this.butStart).wait(1));

	// רקע
	this.bacrund = new lib.רקע();
	this.bacrund.parent = this;
	this.bacrund.setTransform(494.3,525.6,1,1,0,0,0,542.3,573.6);

	this.timeline.addTween(cjs.Tween.get(this.bacrund).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(432,227,1084.7,1147.2);
// library properties:
lib.properties = {
	width: 960,
	height: 550,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dinonite_atlas_.png?1545513131436", id:"dinonite_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;