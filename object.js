var arrowList = {};
var totalArrow = 0;

var enemyList = {};
var totalEnemy = 0;

var treeList = {};
var totalTree = 0;



//	PLAYER 
var footA = new Audio("src/foot.wav");
var playerHitA = new Audio("src/playerdie.wav");
var playerDieA = new Audio("src/playerhit.wav");
var arrowShootA = new Audio("src/arrowShoot.wav");
var endgSound = new Audio("src/endgame.wav");

//	ENEMY 
var enemyHitA = new Audio("src/enemyHit.wav");
var enemyFireA = new Audio("src/enemyfire.wav");
var enemyAppearA = new Audio("src/enemyappear.wav");
var enemyHideA = new Audio("src/enemyhide.wav");




var tree = function(left, top){
	this.left = left;
	this.top = top;
	this.object = document.createElement('img');
	this.object.className = "tree blocking";
	this.object.setAttribute('src', 'images/tree.png');
	document.getElementById("gameUI").appendChild(this.object);
	if (left != null && top != null){
	this.object.style.left = this.left + "px";
	this.object.style.top = this.top + "px";
	}
}


var arrow = function(left, top, degree, id, direction){
	this.left = left;
	this.top = top;
	this.degree = degree;
	if (direction == "left")
		degree += 180;
	this.id = id;
	this.speed = 3;
	this.direction = direction;
	this.hitTree = false;
	this.display = true;
	this.object = document.createElement('div');
	this.object.className = "arrow";
	if (id == 1)
		this.object.classList.add("player");
	else
		this.object.classList.add("enemy");
	document.getElementById("gameUI").appendChild(this.object);
	this.object.style.transform = 'rotate('+degree+'deg)'; 
	this.object.style.left = this.left+"px";
	this.object.style.top = this.top+"px";
	this.timeLive = 0;
	
}

var enemy = function(left, top, id, degree, speed, enebleSkill, spamAmout, timeDeplay, enebleHide, timeHiding){
	this.left = left;
	this.top = top;
	this.degree = degree;
	this.hp = 2;
	this.speed = speed;
	this.spamAmout = spamAmout;

	this.treeDirection = null;
	this.display = true;
	this.dead = false;
	this.readytoFight = false;
	this.pxcw = [];
	if(id == 1){
		this.pxcw[0] = "px";
		this.pxcw[1] = "px";
	}
	else{
		this.pxcw[0] = "vw";
		this.pxcw[1] = "vh";
	}
	
	this.move = {
	currentMove : "left",
	cout : 0,
	totalLeft : 200,
	totalTop : 50
	}
	this.moveTree = null;
	
	this.object = document.createElement('div');
	this.object.className =	"enemy grey stand left appear";
	this.ChildrEnemy = document.createElement('div');
	this.ChildrEnemy1 = document.createElement('div');
	this.ChildrEnemy2 = document.createElement('div');
	this.ChildrEnemy.className ="head";
	this.ChildrEnemy1.className ="body";
	this.ChildrEnemy2.className ="weapon bow";
	this.object.appendChild(this.ChildrEnemy);
	this.object.appendChild(this.ChildrEnemy1);
	this.object.appendChild(this.ChildrEnemy2);
	document.getElementById("gameUI").appendChild(this.object);
	this.object.style.left = this.left + this.pxcw[0];
	this.object.style.top = this.top + this.pxcw[1]; 
	this.object.style.transform = 'rotate('+degree+'deg)'; 
	
	this.waiting = false;
	this.delayskill = false;
	this.timeDeplay = timeDeplay;
	this.enebleSkill = enebleSkill;
	this.enebleHide = enebleHide;
	this.delayHide = true;
	this.hiding = false;
	this.active = true;
	var self = this;
	this.timeHiding = timeHiding;
	this.allowMove = true;
	this.waitingAnima = 0;
	
	if (this.enebleHide)
		setTimeout( () => {this.delayHide = false; this.active = false;}, 10000); // Await First Time
	
	this.hide = function(){
		if(this.enebleHide && !this.delayHide){
			this.object.classList.remove('stand');
			this.object.classList.remove('appear');
			this.object.classList.remove('walk');
			this.object.classList.remove('fire');
			this.object.classList.remove('bow');
			if (this.object.classList.contains("up"))
				setObjectDirection('up', this.object);
			else if(this.object.classList.contains("down"))
				setObjectDirection('down', this.object);
			else if(this.object.classList.contains("left"))
				setObjectDirection('left', this.object);
			else if(this.object.classList.contains("right"))
				setObjectDirection('right', this.object);
			this.object.classList.add("stand");
			this.object.classList.add("hide");
			this.delayHide = true;
			this.hiding = true;
			this.active = false;
			this.allowMove = false; 
			playingSound(enemyHideA, false);
			this.object.removeEventListener("animationend", self.setVarible);
			this.object.addEventListener("animationend",self.setVarible, false);
		}
		else if (this.enebleHide && !this.hiding && this.delayHide && !this.active){
			this.object.classList.remove('stand');
			this.object.classList.remove('appear');
			this.object.classList.remove('walk');
			this.object.classList.remove('fire');
			this.object.classList.remove('hide');
			this.object.classList.add("grey");
			this.object.classList.add("stand");
			this.object.classList.add('appear');
			if (this.object.classList.contains("up"))
				setObjectDirection('up', this.object);
			else if(this.object.classList.contains("down"))
				setObjectDirection('down', this.object);
			else if(this.object.classList.contains("left"))
				setObjectDirection('left', this.object);
			else if(this.object.classList.contains("right"))
				setObjectDirection('right', this.object);
			this.active = true;
			self.allowMove = true;
			this.waitingAnima = 500;
			setTimeout( () => {playingSound(enemyAppearA, false);}, 3000);
			setTimeout( ()=> {this.delayHide = false}, 15000);
		}
		
		
	}
	
	this.setVarible = function(){
			if (self.hiding)
				setTimeout( () => {self.hiding = false;} ,self.timeHiding + 2000);
		}
	
	this.useSkill = function(newDegree, player){
		
		if(this.delayskill == false && self.enebleSkill && this.hiding == false){
			this.object.classList.remove('stand');
			this.object.classList.remove('appear');
			this.object.classList.remove('walk');
			if(this.object.offsetLeft > player.offsetLeft)
				setObjectDirection('left', this.object);
			else if(this.object.offsetLeft < player.offsetLeft)
				setObjectDirection('right', this.object);
			this.object.classList.add('stand');
			this.object.classList.add('fire');
			
			var degreeTemp = newDegree;
			for (var i = 1; i <= this.spamAmout; i++){
				arrowList[totalArrow] = new arrow(this.object.offsetLeft, this.object.offsetTop, degreeTemp, 2, "right");
				totalArrow++;
				degreeTemp += 30;
				playingSound(enemyFireA, true);
			}
			self.delayskill = true;
			if(!self.waiting){
			self.waiting = true;
			setTimeout( () => {this.waiting = false;}, 1000);	//	Finish shoot Animation
			}
			setTimeout( () => {this.delayskill = false;}, timeDeplay);	//	Skill delay
		
		}
	}
	
}

function removeObject(object){
	object.parentNode.removeChild(object);
}

function setObjectDirection(dir, object) {
	//Display the walk animation for the correct direction, remove the other directions
	//to ensure the player does not have both "left" and "right" applied at the same time
	object.classList.remove('up');
	object.classList.remove('left');
	object.classList.remove('right');
	object.classList.remove('down');
	object.classList.add(dir);
}

