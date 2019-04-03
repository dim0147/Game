

function roundUpdate(){
	if (level == 1)
	 	roundLevel1();
	else if (level == 2)
		roundLevel2();
	else if (level == 3)
		roundLevel3();
}

function roundLevel1(){

	if(enemyRound1.currentEnemy < enemyRound1.totalEnemy && !delaySpam){
		let randomNum = Math.floor((Math.random() * 4) + 1);

		if (randomNum == 1 && enemyRound1.currentEnemyNormal < enemyRound1.totalEnemyNormal){	//	Normal 
			spawEnemy(null, null, enemyRound1.speed, false, false, false, false , false);
			enemyRound1.currentEnemyNormal++;
			enemyRound1.currentEnemy++;
		}

		else if (randomNum == 2 && enemyRound1.currentEnemyBow < enemyRound1.totalEnemyBow){	//	Bow 
			spawEnemy(null, null, enemyRound1.speed, true, enemyRound1.arrowNum, enemyRound1.delayArrow, false , false);
			enemyRound1.currentEnemyBow++;
			enemyRound1.currentEnemy++;
		}

		else if (randomNum == 3 && enemyRound1.currentEnemyVisible < enemyRound1.totalEnemyVisible){	//	Visible 
			spawEnemy(null, null, enemyRound1.speed, false, false, false, true, enemyRound1.visibleTime);
			enemyRound1.currentEnemyVisible++;
			enemyRound1.currentEnemy++;
		}
		
		else if (randomNum == 4 && enemyRound1.currentEnemyBothSkill < enemyRound1.totalEnemyBothSkill){	//	Visible 
			spawEnemy(null, null, enemyRound1.speed, true, enemyRound1.arrowNum, enemyRound1.delayArrow, true, enemyRound1.visibleTime);
			enemyRound1.currentEnemyBothSkill++;
			enemyRound1.currentEnemy++;
		}
		delaySpam = true;
		if (enemyRound1.currentEnemy == Math.floor(enemyRound1.totalEnemy / 2))	//	A 2
			checkCleanEnemy("loop");
		else
			setTimeout( () => {delaySpam = false;}, enemyRound1.timeDelaySpam)	//	Continue after Time
	}
	else
		if(enemyRound1.currentEnemy >= enemyRound1.totalEnemy && checkCleanEnemy()){
			showText("Round 2!!!");
			setTimeout( () => {level = 2;}, 3000);
		}
}

function roundLevel2(){

	if(enemyRound2.currentEnemy < enemyRound2.totalEnemy && !delaySpam){
		let randomNum = Math.floor((Math.random() * 4) + 1);

		if (randomNum == 1 && enemyRound2.currentEnemyNormal < enemyRound2.totalEnemyNormal){	//	Normal 
			spawEnemy(null, null, enemyRound2.speed, false, false, false, false , false);
			enemyRound2.currentEnemyNormal++;
			enemyRound2.currentEnemy++;
		}

		else if (randomNum == 2 && enemyRound2.currentEnemyBow < enemyRound2.totalEnemyBow){	//	Bow 
			spawEnemy(null, null, enemyRound2.speed, true, enemyRound2.arrowNum, enemyRound2.delayArrow, false , false);
			enemyRound2.currentEnemyBow++;
			enemyRound2.currentEnemy++;
		}

		else if (randomNum == 3 && enemyRound2.currentEnemyVisible < enemyRound2.totalEnemyVisible){	//	Visible 
			spawEnemy(null, null, enemyRound2.speed, false, false, false, true, enemyRound2.visibleTime);
			enemyRound2.currentEnemyVisible++;
			enemyRound2.currentEnemy++;
		}
		
		else if (randomNum == 4 && enemyRound2.currentEnemyBothSkill < enemyRound2.totalEnemyBothSkill){	//	Visible 
			spawEnemy(null, null, enemyRound2.speed, true, enemyRound2.arrowNum, enemyRound2.delayArrow, true, enemyRound2.visibleTime);
			enemyRound2.currentEnemyBothSkill++;
			enemyRound2.currentEnemy++;
		}
		delaySpam = true;
		if (enemyRound2.currentEnemy == Math.floor(enemyRound2.totalEnemy / 2))	//	A 2
			checkCleanEnemy("loop");
		else
			setTimeout( () => {delaySpam = false;}, enemyRound2.timeDelaySpam)	//	Continue after Time
	}
	else
		if(enemyRound2.currentEnemy >= enemyRound2.totalEnemy && checkCleanEnemy()){
			showText("FINAL ROUND!!!");
			setTimeout( () => {level = 3;}, 3000);
		}
}

function roundLevel3(){
	
	if(enemyRound3.currentEnemy < enemyRound3.totalEnemy && !delaySpam){
		let randomNum = Math.floor((Math.random() * 4) + 1);

		if (randomNum == 1 && enemyRound3.currentEnemyNormal < enemyRound3.totalEnemyNormal){	//	Normal 
			spawEnemy(null, null, enemyRound3.speed, false, false, false, false , false);
			enemyRound3.currentEnemyNormal++;
			enemyRound3.currentEnemy++;
		}

		else if (randomNum == 2 && enemyRound3.currentEnemyBow < enemyRound3.totalEnemyBow){	//	Bow 
			spawEnemy(null, null, enemyRound3.speed, true, enemyRound3.arrowNum, enemyRound3.delayArrow, false , false);
			enemyRound3.currentEnemyBow++;
			enemyRound3.currentEnemy++;
		}

		else if (randomNum == 3 && enemyRound3.currentEnemyVisible < enemyRound3.totalEnemyVisible){	//	Visible 
			spawEnemy(null, null, enemyRound3.speed, false, false, false, true, enemyRound3.visibleTime);
			enemyRound3.currentEnemyVisible++;
			enemyRound3.currentEnemy++;
		}
		
		else if (randomNum == 4 && enemyRound3.currentEnemyBothSkill < enemyRound3.totalEnemyBothSkill){	//	Visible 
			spawEnemy(null, null, enemyRound3.speed, true, enemyRound3.arrowNum, enemyRound3.delayArrow, true, enemyRound3.visibleTime);
			enemyRound3.currentEnemyBothSkill++;
			enemyRound3.currentEnemy++;
		}
		delaySpam = true;
		if (enemyRound3.currentEnemy == Math.floor(enemyRound3.totalEnemy / 2))	//	A 2
			checkCleanEnemy("loop");
		else
			setTimeout( () => {delaySpam = false;}, enemyRound3.timeDelaySpam)	//	Continue after Time
	}
	else
		if(enemyRound3.currentEnemy >= enemyRound3.totalEnemy && checkCleanEnemy()){
			showText("YOU WIN WITH "+ gameMode +" MODE!!!, The Game Will close after few second.");
			setTimeout( () => {endGame("Win");}, 8000)
		}

}

function arrowUpdate(){
	for (var i in arrowList){	
	
		if(!arrowList[i].display || arrowList[i].object == null){	//	Remove
			arrowList[i].object.parentNode.removeChild(arrowList[i].object);
			delete arrowList[i];
			continue;
		}
		
		var leftTemp = arrowList[i].object.offsetLeft;
		var topTemp = arrowList[i].object.offsetTop;
		
		if (!arrowList[i].hitTree && arrowList[i].display){	//	Move +1 Left
			var angle = arrowList[i].degree * Math.PI / 180;
			var xCal = Math.cos(angle) * arrowList[i].speed;
			var yCal = Math.sin(angle) * arrowList[i].speed;
			if(arrowList[i].direction == "right"){
				setObjectDirection("right", arrowList[i].object)
				leftTemp += xCal;
				topTemp += yCal;
			}
			else if(arrowList[i].direction == "left"){
				setObjectDirection("left", arrowList[i].object)
				leftTemp -= xCal;
				topTemp -= yCal;
			}
			arrowList[i].object.style.left = leftTemp + "px";
			arrowList[i].object.style.top = topTemp + "px";
		}
		else if (arrowList[i].hitTree && arrowList[i].display){	//	Move from tree
			arrowList[i].timeLive++;
			if (arrowList[i].timeLive > 200){
				removeObject(arrowList[i].object)
				delete arrowList[i];
				continue;
			}
		}
		
		
		if (topTemp > h || leftTemp > w || leftTemp < 0 || topTemp < 0){	//	 edge sceen
			arrowList[i].display = false;
			continue;
		}
		
		var LeftArrow = leftTemp;
		var RightArrow = leftTemp + 10;
		var TopArrow = topTemp - 30;
		var DownArrow = topTemp;
		
		checkArrow(LeftArrow, RightArrow, TopArrow, DownArrow, topTemp, leftTemp, arrowList[i]);

	}	
}

function checkArrow(LeftArrow, RightArrow, TopArrow, DownArrow, topTemp, leftTemp, objectA){
	
	for (var id in treeList){	//	 touch tree
		var leftTree = treeList[id].object.offsetLeft - 30;
		var rightTree = treeList[id].object.offsetLeft + 130;
		var topTree = treeList[id].object.offsetTop - 20;
		var downTree = treeList[id].object.offsetTop + 140;
			if (RightArrow > leftTree && RightArrow < rightTree && topTemp > topTree && topTemp < downTree)
				objectA.hitTree = true;
			else if (LeftArrow < rightTree && LeftArrow > leftTree && topTemp > topTree && topTemp < downTree)
				objectA.hitTree = true;
			else if (leftTemp < rightTree && leftTemp > leftTree && TopArrow > topTree && TopArrow < downTree)
				objectA.hitTree = true;
			else if (leftTemp < rightTree && leftTemp > leftTree && DownArrow > topTree && DownArrow < downTree)
				objectA.hitTree = true;
			if (objectA.hitTree){
				return;
			}
		}
		
	for (var i in enemyList){	//	 touch enemy
		var leftE = enemyList[i].object.offsetLeft - 20;		
		var rightE = enemyList[i].object.offsetLeft + 20;
		var topE = enemyList[i].object.offsetTop - 20;
		var botE = enemyList[i].object.offsetTop + 20;
			if (RightArrow > leftE && RightArrow < rightE && topTemp > topE && topTemp < botE && objectA.id == 1 && enemyList[i].display && enemyList[i].waitingAnima <=0 && enemyList[i].allowMove && enemyList[i].readytoFight){
				 enemyList[i].hp--; 
				 objectA.display = false;
				 playingSound(enemyHitA, true);
				 return;
			}
			else if (LeftArrow < rightE && LeftArrow > leftE && topTemp > topE && topTemp < botE && objectA.id == 1 && enemyList[i].display && enemyList[i].waitingAnima <=0 && enemyList[i].allowMove && enemyList[i].readytoFight){
				 enemyList[i].hp--; 
				 objectA.display = false;
				 playingSound(enemyHitA, true);
				 return;
			}
			else if (leftTemp < rightE && leftTemp > leftE && TopArrow > topE && TopArrow < botE && objectA.id == 1 && enemyList[i].display && enemyList[i].waitingAnima <=0 && enemyList[i].allowMove && enemyList[i].readytoFight){
				 enemyList[i].hp--; 
				 objectA.display = false;
				 playingSound(enemyHitA, true);
				 return;
			}
			else if (leftTemp < rightE && leftTemp > leftE && DownArrow > topE && DownArrow < botE && objectA.id == 1 && enemyList[i].display && enemyList[i].waitingAnima <=0 && enemyList[i].allowMove && enemyList[i].readytoFight){
				 enemyList[i].hp--; 
				 objectA.display = false;
				 playingSound(enemyHitA, true);
				 return;
			}
	}
	
	var leftP = leftPlayer - 10;
	var rightP = leftPlayer + 30;
	var topP = topPlayer - 20;
	var downP = topPlayer + 20;
	
		if (RightArrow > leftP && RightArrow < rightP && topTemp > topP && topTemp < downP && objectA.id != 1){
				 hitArrow = true; 
				 objectA.display = false;
				 return;
			}
			else if (LeftArrow < rightP && LeftArrow > leftP && topTemp > topP && topTemp < downP && objectA.id != 1){
				 hitArrow = true; 
				 objectA.display = false;
				 return;
			}
			else if (leftTemp < rightP && leftTemp > leftP && TopArrow > topP && TopArrow < downP && objectA.id != 1){
				 hitArrow = true; 
				 objectA.display = false;
				 return;
			}
			else if (leftTemp < rightP && leftTemp > leftP && DownArrow > topP && DownArrow < downP && objectA.id != 1){
				 hitArrow = true; 
				 objectA.display = false;
				 return;
			}
}

function playerUpdate(){
	if (!hitAnima){
	leftPlayer = player.offsetLeft;
	topPlayer = player.offsetTop;
	console.log(leftPlayer + " " +topPlayer);
	

	playerCheckKeyPress();
	playerCheckTouch();
	}
}

function playerCheckKeyPress(){
	if (downPressed && !spacePressed) {
		playingSound(footA, false);
		setObjectDirection('down', player);
		topPlayer += speedPlayer;
	}

	if (upPressed && !spacePressed) {
		playingSound(footA, false);
		setObjectDirection('up', player);
		topPlayer -= speedPlayer;
	}

	if (leftPressed && !spacePressed) {
		playingSound(footA, false);
		setObjectDirection('left', player);
		leftPlayer -= speedPlayer;
	}

	if (rightPressed && !spacePressed) {
		playingSound(footA, false);
		setObjectDirection('right', player);
		leftPlayer += speedPlayer;
	}
	
	if (dPressed) {
		player.style.transform = 'rotate('+deg+'deg)'; 
		deg++;
	}
	
	if (aPressed) {
		player.style.transform = 'rotate('+deg+'deg)'; 
		deg--;
	}
	
	if (spacePressed) {
		if (player.classList.contains("left"))
			setObjectDirection('left', player);
		else if (player.classList.contains("right"))
			setObjectDirection('right', player);
		else if (player.classList.contains("up"))
			setObjectDirection('up', player);
		else if (player.classList.contains("down"))
			setObjectDirection('down', player);
		shooting(deg);
	}
	//	END CHECK KEY
	
	
	//If any of the keys are being pressed, display the walk animation
	if ((leftPressed || rightPressed || upPressed || downPressed) && !spacePressed) {
		player.classList.remove('stand');
		player.classList.remove('fire');
		player.classList.add('walk');
	}
	else if (spacePressed){
		player.classList.remove('stand');
		player.classList.remove('walk');
		player.classList.add('fire');
		player.classList.add('stand');
	}
	else {
		player.classList.remove('walk');
		player.classList.remove('fire');
		player.classList.remove('stand');
		player.classList.add('stand');
	}
}

function playerCheckTouch(){
	
	if (leftPlayer + 32 < w - 32 && topPlayer + 48 < h - 48 && leftPlayer + 32 > 32 && topPlayer + 48 > 48 && !hitAnima){
	var playerTopLeft = document.elementFromPoint(leftPlayer, topPlayer);
	var playerTopRight = document.elementFromPoint(leftPlayer+32, topPlayer);
	var playerBottomLeft = document.elementFromPoint(leftPlayer, topPlayer+48);
	var playerBottomRight = document.elementFromPoint(leftPlayer+32, topPlayer+48);

	
	if (!playerTopLeft.classList.contains('blocking') && !playerTopRight.classList.contains('blocking')	//	Touch tree
		&& !playerBottomLeft.classList.contains('blocking') && !playerBottomRight.classList.contains('blocking')) {
		player.style.left = leftPlayer + 'px';
		player.style.top = topPlayer + 'px';
	}
	
	if (playerTopLeft.classList.contains('enemy') || playerTopRight.classList.contains('enemy')	//	Touch bullet and enemy
		|| playerBottomLeft.classList.contains('enemy') || playerBottomRight.classList.contains('enemy')){
			playerHit();
		}
		
	}
	
	else{
		if (!hitAnima){	
			if (leftPlayer + 32 > w - 32){   
				leftPlayer = w - 32 - 33;
				player.style.left = leftPlayer + "px";
			}
			else if (topPlayer + 48 > h - 48){
				topPlayer = h - 48 - 49;
				player.style.top = topPlayer + "px";
			}			
			else if  (leftPlayer + 32 < 32){
				leftPlayer = 32;
				player.style.left = leftPlayer + "px";
			}
			else if (topPlayer + 48 < 48){
				topPlayer = 48;
				player.style.top = topPlayer + "px";
			}
		}
	}
	
	if(hitArrow)
		playerHit();

}

function playerHit(){
	if (hp <= 0)
		playerDie();
	else{
		var list = document.getElementById("myList");	//	remove hp icon
		list.removeChild(list.childNodes[hp - 1]);
		hp--;
		hitAnima = true;
		playerSetAnimationHit();
		showText("You Have Been Hit, respawn after 2 seconds!");
		hitArrow = false;	
		setTimeout(function(){playerResspaw();hitAnima = false}, 2000)		
	}
}

function playerSetAnimationHit(){
	if (player.classList.contains("up"))
		setObjectDirection("up", player);
	else if (player.classList.contains("down"))
		setObjectDirection("down", player);
	else if (player.classList.contains("left"))
		setObjectDirection("left", player);
	else if (player.classList.contains("right"))
		setObjectDirection("right", player);
	player.classList.remove("fire");
	player.classList.remove("stand");
	player.classList.remove("walk");
	player.classList.add("hit");
	playingSound(playerHitA, false);
}

function playerDie(){
	player.classList.remove('stand');
	player.classList.remove('walk');
	player.classList.remove('fire');
	player.classList.remove('up');
	player.classList.remove('left');
	player.classList.remove('right');
	player.classList.remove('down');
	player.className = "character dead stand";
	hitAnima = true;
	playingSound(playerDieA, false);
	setTimeout( () => {endGame("thua")}, 2000);
}

function shooting(degree){
	
	if (!delayShooting){
		var dgTemp  = 0;
			for (var numb = 0; numb < amoutArrowPlayer; numb++){
				playingSound(arrowShootA, true);
				if(player.classList.contains("right"))
					arrowList[totalArrow] = new arrow(leftPlayer + 20, topPlayer + 20, degree + dgTemp, 1, "right");
				else if(player.classList.contains("left"))
					arrowList[totalArrow] = new arrow(leftPlayer + 20, topPlayer + 20, degree + dgTemp, 1, "left");
				else if(player.classList.contains("up"))
					arrowList[totalArrow] = new arrow(leftPlayer + 20, topPlayer + 20, degree - 87 + dgTemp, 1, "right");
				else if(player.classList.contains("down"))
					arrowList[totalArrow] = new arrow(leftPlayer + 20, topPlayer + 20, degree + 90 + dgTemp, 1, "right")
				totalArrow++;
				dgTemp += 20;
			}
		delayShooting = true;
		setTimeout(function(){delayShooting = false}, timeDelayShootPlayer);
	}
	
}

function enemyUpdate(){
	
	for (var i in enemyList){	//	Update 
		
		var ObjectEnemy = enemyList[i];
		var ObjectHtml = ObjectEnemy.object;
		
		
		if(ObjectEnemy.dead){	//	Delete  die
			removeObject(enemyList[i].object);
			delete enemyList[i];
			continue;
		}
			
		if(ObjectEnemy.hp <= 0 && ObjectEnemy.display){	//	Set Die animation
			let tempO = ObjectEnemy;
			ObjectHtml.className = "";			
			ObjectHtml.classList.add("dead");
			ObjectHtml.classList.add("enemy");
			ObjectHtml.classList.add("grey");
			ObjectEnemy.display = false;
			ObjectHtml.addEventListener("animationend", function(){tempO.dead = true;}, false);
			continue;
		}
		if(ObjectEnemy.display && ObjectEnemy.readytoFight)	//	Move
		{	
			ObjectEnemy.hide();
				if (ObjectEnemy.allowMove){
					if(ObjectEnemy.waitingAnima <= 0){	//	Appear delay
						if (!ObjectEnemy.waiting){	//	Shootting delay
						ObjectHtml.classList.remove('fire');
						setMove(ObjectHtml, ObjectEnemy);
						}
						
						var angleDeg = Math.atan2(player.offsetTop - ObjectHtml.offsetTop, player.offsetLeft - ObjectHtml.offsetLeft) * 180 / Math.PI ;
						ObjectEnemy.useSkill(angleDeg, player)
					}
					else
						ObjectEnemy.waitingAnima--;
				}
		}
	}
}

function setMove(ObjectHtml, ObjectEnemy){
	
	if(ObjectEnemy.moveTree != null && ObjectEnemy.readytoFight)	//	Check if touch Tree
	{
		if(ObjectEnemy.moveTree == "up"){
			if(ObjectHtml.offsetLeft > player.offsetLeft && ObjectEnemy.treeDirection == null)
				ObjectEnemy.treeDirection = "left";
			else{
				if( ObjectEnemy.treeDirection == null)
				 ObjectEnemy.treeDirection = "right";
			}
			
			avoidingTree(ObjectHtml, ObjectEnemy, ObjectEnemy.treeDirection)
			if(enemyTouch(ObjectHtml, ObjectEnemy, "up") == false){
				ObjectEnemy.moveTree = null;
				ObjectEnemy.treeDirection = null;	
			}
		}
		
		else if(ObjectEnemy.moveTree == "down"){
			if(ObjectHtml.offsetLeft > player.offsetLeft && ObjectEnemy.treeDirection == null)
				ObjectEnemy.treeDirection = "left";
				else{
				if( ObjectEnemy.treeDirection == null)
				 ObjectEnemy.treeDirection = "right";
			}
			
			avoidingTree(ObjectHtml, ObjectEnemy, ObjectEnemy.treeDirection)
				
			if(enemyTouch(ObjectHtml, ObjectEnemy, "down") == false){
				ObjectEnemy.moveTree = null;
				ObjectEnemy.treeDirection = null;
			}
		}
		
		else if(ObjectEnemy.moveTree == "left"){
			if(ObjectHtml.offsetTop > player.offsetTop && ObjectEnemy.treeDirection == null)
				ObjectEnemy.treeDirection = "up";
			else{
				if( ObjectEnemy.treeDirection == null)
				 ObjectEnemy.treeDirection = "down";
			}
			
			avoidingTree(ObjectHtml, ObjectEnemy, ObjectEnemy.treeDirection)
				
			if(enemyTouch(ObjectHtml, ObjectEnemy, "left") == false){
				ObjectEnemy.moveTree = null;
				ObjectEnemy.treeDirection = null;
			}
		}
		
		else if(ObjectEnemy.moveTree == "right"){
			if(ObjectHtml.offsetTop > player.offsetTop && ObjectEnemy.treeDirection == null)
				ObjectEnemy.treeDirection = "up";
			else{
				if( ObjectEnemy.treeDirection == null)
				 ObjectEnemy.treeDirection = "down";
			}
			avoidingTree(ObjectHtml, ObjectEnemy, ObjectEnemy.treeDirection)
				
			if(enemyTouch(ObjectHtml, ObjectEnemy, "right") == false){
				ObjectEnemy.moveTree = null;
				ObjectEnemy.treeDirection = null;
			}		
		}
		
		return false;
	}
		
		
	
	if(ObjectHtml.offsetLeft > player.offsetLeft && ObjectEnemy.readytoFight && ObjectEnemy.move.currentMove == "left" && ObjectEnemy.moveTree == null){
		
		if(ObjectEnemy.move.cout == ObjectEnemy.move.totalLeft){
			ObjectEnemy.move.currentMove = "top";
			ObjectEnemy.move.cout = 0;
		}
		
		ObjectHtml.classList.remove("stand");	//	Set Animation
		ObjectHtml.classList.remove("appear");
		if(!ObjectHtml.classList.contains("walk"))
			ObjectHtml.classList.add("walk");
		if(!ObjectHtml.classList.contains("left"))
			setObjectDirection("left",ObjectHtml);
		
		var leftTemp = ObjectHtml.offsetLeft - ObjectEnemy.speed;
			enemyTouch(ObjectHtml, ObjectEnemy, "left");
			ObjectHtml.style.left = leftTemp + "px";;
			ObjectEnemy.move.cout++;
	}
	else if(ObjectHtml.offsetLeft < player.offsetLeft && ObjectEnemy.readytoFight  && ObjectEnemy.move.currentMove == "left" && ObjectEnemy.moveTree == null){
		
		if(ObjectEnemy.move.cout == ObjectEnemy.move.totalLeft){
			ObjectEnemy.move.currentMove = "top";
			ObjectEnemy.move.cout = 0;
		}
		ObjectHtml.classList.remove("stand");
		ObjectHtml.classList.remove("appear");
		if(!ObjectHtml.classList.contains("walk"))
			ObjectHtml.classList.add("walk");
		if(!ObjectHtml.classList.contains("right"))
			setObjectDirection("right",ObjectHtml);
		var leftTemp = ObjectHtml.offsetLeft + ObjectEnemy.speed;
			enemyTouch(ObjectHtml, ObjectEnemy, "right");
			ObjectHtml.style.left = leftTemp + "px";
			ObjectEnemy.move.cout++;
		
	}
	else {
		if (ObjectEnemy.move.currentMove == "left" &&  ObjectEnemy.readytoFight && ObjectEnemy.moveTree == null){
			ObjectEnemy.move.currentMove = "top";
			ObjectEnemy.move.cout = 0;
		}
	}
		
		
	if(ObjectHtml.offsetTop > player.offsetTop && ObjectEnemy.readytoFight && ObjectEnemy.move.currentMove == "top" && ObjectEnemy.moveTree == null){
		if(ObjectEnemy.move.cout == ObjectEnemy.move.totalTop){
			ObjectEnemy.move.currentMove = "left";
			ObjectEnemy.move.cout = 0;
		}
		ObjectHtml.classList.remove("stand");
		ObjectHtml.classList.remove("appear");
		if(!ObjectHtml.classList.contains("walk"))
			ObjectHtml.classList.add("walk");
		var check = ObjectHtml.offsetLeft - player.offsetLeft;
		if(!ObjectHtml.classList.contains("up"))
			setObjectDirection("up",ObjectHtml);
		var topTemp = ObjectHtml.offsetTop - ObjectEnemy.speed;
			enemyTouch(ObjectHtml, ObjectEnemy, "up");
			ObjectHtml.style.top = topTemp + "px";
			ObjectEnemy.move.cout++;
	}
	
	else if(ObjectHtml.offsetTop < player.offsetTop && ObjectEnemy.readytoFight  && ObjectEnemy.move.currentMove == "top" && ObjectEnemy.moveTree == null){
		if(ObjectEnemy.move.cout == ObjectEnemy.move.totalTop){
			ObjectEnemy.move.currentMove = "left";
			ObjectEnemy.move.cout = 0;
		}
		ObjectHtml.classList.remove("stand");
		ObjectHtml.classList.remove("appear");
		if(!ObjectHtml.classList.contains("walk"))
			ObjectHtml.classList.add("walk");
		var check = ObjectHtml.offsetLeft - player.offsetLeft;
		if(!ObjectHtml.classList.contains("down"))
			setObjectDirection("down",ObjectHtml);
			enemyTouch(ObjectHtml, ObjectEnemy, "down");
		var topTemp = ObjectHtml.offsetTop + ObjectEnemy.speed;
			ObjectHtml.style.top = topTemp + "px";
			ObjectEnemy.move.cout++;
	}
	
	else{
		if (ObjectEnemy.move.currentMove == "top" &&  ObjectEnemy.readytoFight && ObjectEnemy.moveTree == null){
			ObjectEnemy.move.currentMove = "left";
			ObjectEnemy.move.cout = 0;
		}
	}
}

function enemyTouch(ObjectHtml, ObjectEnemy, direction){
	var predictOffset = 40;
	for (var i in treeList){
		var left = treeList[i].object.offsetLeft + 130;
		var right = treeList[i].object.offsetLeft - 30;
		var top = treeList[i].object.offsetTop - 40;
		var down = treeList[i].object.offsetTop + 140;
		
		if(direction == "left" && ObjectHtml.offsetLeft - predictOffset < left && ObjectHtml.offsetLeft - predictOffset > right &&
			ObjectHtml.offsetTop > top && ObjectHtml.offsetTop < down){
			ObjectEnemy.moveTree = "left";
			return;			
			}
		else if (direction == "right" && ObjectHtml.offsetLeft + predictOffset > right && ObjectHtml.offsetLeft + predictOffset < left &&
			ObjectHtml.offsetTop > top && ObjectHtml.offsetTop < down){
			ObjectEnemy.moveTree = "right";
			return;
			}
		else if (direction == "up" && ObjectHtml.offsetTop - predictOffset < down && ObjectHtml.offsetTop - predictOffset > top &&
			ObjectHtml.offsetLeft > right && ObjectHtml.offsetLeft < left){
			ObjectEnemy.moveTree = "up";
			return;
			}
		else if (direction == "down" && ObjectHtml.offsetTop + predictOffset > top && ObjectHtml.offsetTop - predictOffset < down &&
			ObjectHtml.offsetLeft > right && ObjectHtml.offsetLeft < left){
			ObjectEnemy.moveTree = "down";
			return;
			}
	}
	return false;
	
}

function spawEnemy(leftE, topE, speed, useSkill, amoutSkill, delaySkill, setVisible, timeVisi){
	var leftEnemy;
	var topEnemy;
	if (leftE == null && topE == null){
		leftEnemy = Math.floor((Math.random() * (w - 100)) + 10);
		topEnemy = Math.floor((Math.random() * (h - 50) ) + 10);

		var enemyTopLeft = document.elementFromPoint(leftEnemy, topEnemy);
		var enemyTopRight = document.elementFromPoint(leftEnemy+32, topEnemy);
		var enemyBottomLeft = document.elementFromPoint(leftEnemy, topEnemy+48);
		var eemyBottomRight = document.elementFromPoint(leftEnemy+32, topEnemy+48);
			//	LOOP CHECK
		while (enemyTopLeft.classList.contains('blocking') || enemyTopRight.classList.contains('blocking')
			|| enemyBottomLeft.classList.contains('blocking') || eemyBottomRight.classList.contains('blocking')
			|| enemyTopLeft.classList.contains('character') || enemyTopRight.classList.contains('character')
			|| enemyBottomLeft.classList.contains('character') || eemyBottomRight.classList.contains('character')){
			leftEnemy = Math.floor((Math.random() * (w - 100)) + 10);
			topEnemy = Math.floor((Math.random() * (h - 50) ) + 10);
			enemyTopLeft = document.elementFromPoint(leftEnemy, topEnemy);
			enemyTopRight = document.elementFromPoint(leftEnemy+32, topEnemy);
			enemyBottomLeft = document.elementFromPoint(leftEnemy, topEnemy+48);
			eemyBottomRight = document.elementFromPoint(leftEnemy+32, topEnemy+48);
		}
	}
	else{
		leftEnemy =	leftE;	//	Specifi XY Case
		topEnemy = topE;
	}
	//	3000 : animation time
	createEnemy(leftEnemy, topEnemy, 1, 0, speed, useSkill, amoutSkill, delaySkill + 3000, setVisible, timeVisi + 3000);
}

function checkCleanEnemy(status){
	var clean = true;
	for (var i in enemyList){
		if (!enemyList[i].dead){
			clean = false;
			break;
		}
	}

	if (clean && status == "loop"){
		showText("Ready for next attack!!!");
		setTimeout( () => {delaySpam = false}, 3000);
	}
	else if (clean && status == null)
		return true;
	else if (!clean && status == "loop")
		setTimeout( () => {checkCleanEnemy("loop")}, 2000);
	else if (!clean && status == null)
		return false;
}

function avoidingTree(ObjectHtml, ObjectEnemy, direction){
	if (direction == "left"){
		if(!ObjectHtml.classList.contains("left"))
			setObjectDirection("left",ObjectHtml);
		var leftTemp = ObjectHtml.offsetLeft - ObjectEnemy.speed;
		ObjectHtml.style.left = leftTemp + "px";
	}
	else if (direction == "right"){
		if(!ObjectHtml.classList.contains("right"))
			setObjectDirection("right",ObjectHtml);
		var leftTemp = ObjectHtml.offsetLeft + ObjectEnemy.speed;
		ObjectHtml.style.left = leftTemp + "px";
	}
	
	else if (direction == "up"){
		if(!ObjectHtml.classList.contains("up"))
			setObjectDirection("up",ObjectHtml);
		var topTemp = ObjectHtml.offsetTop - ObjectEnemy.speed;
		ObjectHtml.style.top = topTemp + "px";
	}
	
	else if (direction == "down"){
		if(!ObjectHtml.classList.contains("down"))
			setObjectDirection("down",ObjectHtml);
		var topTemp = ObjectHtml.offsetTop + ObjectEnemy.speed;
		ObjectHtml.style.top = topTemp + "px";
	}
}

function endGame(stt){
	document.getElementById("gameUI").style.display = "none";
	if (stt == "Win"){
		document.getElementById("textAG").innerHTML = "Congratulation,You have win the game with "+gameMode+" mode."
	}
	else
	document.getElementById("textAG").innerHTML = "You have lose, but thank for playing, if you want to revenge, click the button below."
	if(gameMode == "custom")
		bgCustom.pause();
	endG = true;
	document.getElementById("affterGame").style.display = "block";
	playingSound(endgSound);
    endgSound.loop = true;
}




function main() {
	if (!endG){
	roundUpdate();
	playerUpdate();
	enemyUpdate();
	arrowUpdate();
	}
}


function gameStart() {
	if (!loading){
	EntityFirstRound();
	setInterval(main, 10);
	document.addEventListener('keydown', keyDown);
	document.addEventListener('keyup', keyUp);
	showText("You are playing : "+gameMode+" mode!");
	createPlayer();
	leftPlayer = player.offsetLeft;
	topPlayer = player.offsetTop;
	deg++;
	player.style.transform = 'rotate('+deg+'deg)'; 
	alert("Press A and D to rotate!");
	return;
	}
	setTimeout(() => {gameStart()}, 1000);
}

gameStart();


function showText(text){
	if (document.getElementById("texting").textContent == text)
		return;
	
	document.getElementById("texting").innerHTML = text;
	document.getElementById("texting").style.display = "block"; 
	setTimeout( () => {document.getElementById("texting").style.display = "none";}, 5000 );
}

function EntityFirstRound(){
	//	Create HP
	var hpBarID = document.getElementById("healthBar");
	var ulHpbar = document.createElement("ul");
	ulHpbar.className = "health";
	ulHpbar.id = "myList";
	hpBarID.appendChild(ulHpbar);
	for (var numbhp = 0; numbhp < hp; numbhp++){
		ulHpbar.appendChild(document.createElement("li"));
	}	
}


function createEnemy(xLocation, yLocation, id, degree, speed, useSkill, spamAmout, timeDeplay, enebleHide, timeHide){		
	enemyList[totalEnemy] = new enemy(xLocation, yLocation, id, degree, speed, useSkill, spamAmout, timeDeplay, enebleHide, timeHide);
	var tempObjcet = enemyList[totalEnemy];
	enemyList[totalEnemy].object.addEventListener("animationend", function(){tempObjcet.readytoFight = true; tempObjcet.waitingAnima = 100;}, false);
	totalEnemy++;
	setTimeout( () => {playingSound(enemyAppearA, false);}, 3000);
}

function keyUp(event) {
	if (event.keyCode == 37) {
		leftPressed = false;
	}

	if (event.keyCode == 39) {
		rightPressed = false;
	}

	if (event.keyCode == 38) {
		upPressed = false;
	}

	if (event.keyCode == 40) {
		downPressed = false;
	}
	
	if (event.keyCode == 32) {
		spacePressed = false;
	}
	
	if (event.keyCode == 68) {
		dPressed = false;
	}
	
	if (event.keyCode == 65) {
		aPressed = false;
	}
}

function keyDown(event) {
	if (event.keyCode == 37) {
		leftPressed = true;
	}

	if (event.keyCode == 39) {
		rightPressed = true;
	}

	if (event.keyCode == 38) {
		upPressed = true;
	}

	if (event.keyCode == 40) {
		downPressed = true;
	}
	
	if (event.keyCode == 32) {
		spacePressed = true;
	}
	
	if (event.keyCode == 68) {
		dPressed = true;
	}
	
	if (event.keyCode == 65) {
		aPressed = true;
	}
	
}

function restartGame(){
	location.reload(true);
}