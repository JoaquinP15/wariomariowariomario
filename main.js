noseX = 0;
noseY = 0;

function preload() {
	mario_jump = loadSound("jump.wav");
	mario_kick = loadSound("kick.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");

	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");

	posenet = ml5.poseNet(video,modelLoaded);
	posenet.on("pose",gotResults);
}

function modelLoaded(){
	console.log("posenet is intialized");
}

function gotResults(results){
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw(){
	game();
}