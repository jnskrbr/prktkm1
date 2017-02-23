var	ding = $("#ding"),
	button = $("#button"),
	button2 = $("#button2"),
	tl = new TimelineMax(),
	letters = $(".font"),
	status = 0;


function demo() {
tl
	.from(ding, 0.2, {x:-20, autoAlpha: 0, ease:Power0.easeOut,})
	.staggerFrom(letters, 0.2, {x: -20, autoAlpha: 0, ease:Power0.easeOut,}, 0.1);
	button.html("cool.");
}

function demo2() {
tl
	.from(ding, 0.2, {x:-20, autoAlpha: 0, ease:Power0.easeOut,})
	.staggerFrom(letters, 0.2, {cycle: {y:[-110, -170], scale:[0.5, 2]}, autoAlpha: 0, ease:Power0.easeOut,}, 0.1);
	button2.text("cool.");
}

function play() {
	tl.play();
}

function pause() {
	tl.pause();
}