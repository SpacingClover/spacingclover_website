const background = document.getElementById("background");
const homePage = document.getElementById("home-page");
const gamesPage = document.getElementById("games-page");
const videosPage = document.getElementById("videos-page");
const contactPage = document.getElementById("contact-page");
const gamesinfoPage = document.getElementById("gamesinfo-page");
const circles = [];

const PAGES = {
	"HOME" : 0,
	"GAMES" : 1,
	"VIDEOS" : 2,
	"COMNTACT" : 3,
	"GAMESINFO" : 4
}

function onresize(){
	background.width = window.innerWidth;
	background.height = window.innerHeight;
}

function randIntRange(min, max){
	return ( Math.random() * (max - min) ) - min;
}

class Circle {
	constructor(){
		this.x = 0;
		this.y = 0;
		this.size = 0;
		this.direction = 0;
		this.speed = 0;
		this.defaultValues();
		this.move(200);
	}
	move(steps=1){
		this.x += Math.cos(this.direction) * this.speed * steps;
		this.y += Math.sin(this.direction) * this.speed * steps;
	}
	isOutOfBounds(x1, y1, x2, y2){
		x1 -= this.size/2;
		x2 += this.size/2;
		y1 -= this.size/2;
		y2 += this.size/2;
		return (this.x < x1) || (this.x > x2) || (this.y < y1) || (this.y > y2);
	}
	defaultValues(){
		this.x = (background.width / 2) + randIntRange(0, 100);
		this.y = (background.height / 2) + randIntRange(0, 100);
		this.size = 5;
		this.direction = randIntRange(0.0, Math.PI * 2.0);
		this.speed = randIntRange(0.0, 2.0) + 1.0;
	}
}

function drawCircle(circle, ctx){
	ctx.beginPath();
	ctx.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
	ctx.fillStyle = "#0a0";
	ctx.fill();
}

function updateCircles(){
	
	const ctx = background.getContext("2d");
	ctx.clearRect(0, 0, background.width, background.height);
	
	for(let i=0;i<circles.length;i++){
		
		drawCircle(circles[i], ctx);
		
		circles[i].move();
		if(circles[i].isOutOfBounds(0, 0, background.width, background.height)){
			circles[i].defaultValues();
		}
	}
}

function setDisplay(idx){
	homePage.style.display =      idx === PAGES.HOME ? "block" : "none";
	gamesPage.style.display =     idx === PAGES.GAMES ? "block" : "none";
	videosPage.style.display =    idx === PAGES.VIDEOS ? "block" : "none";
	contactPage.style.display =   idx === PAGES.CONTACT ? "block" : "none";
	gamesinfoPage.style.display = idx === PAGES.GAMESINFO ? "block" : "none";
}

function initialize(){
	
	setDisplay(PAGES.HOME);
	
	onresize();
	for(let i=0;i<300;i++){
		circles.push(new Circle());
	}
	
	setInterval(updateCircles);
	console.log(window.history);
	window.history.pushState({}, "", "/home");
}

initialize();

function copyText(string){
	navigator.clipboard.writeText(string);
}