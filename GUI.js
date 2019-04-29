var level = 1;

// startUI
var loading = true;
var gameMode = null;
var video = document.getElementById("videoStart");
var currentTabDisplay = null;
var endG = false;

//	PLAYER
var player;
var leftPlayer;
var topPlayer;
var delayShooting = false;
var deg = 1;
var hp;
var speedPlayer;
var hitArrow = false;
var hitAnima = false;
var timeDelayShootPlayer;
var amoutArrowPlayer;

//	SCEEN
const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var bgCustom = new Audio("src/background.mp3");

//	KEY
var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var spacePressed = false;
var dPressed = false;
var aPressed = false;

//	ENEMY
var enemyInfo = function(){
	speed = null,
	arrowNum = null,    
	delayArrow = null,
	visibleTime = null,
	timeDelaySpam = null,

	currentEnemyNormal = null,
	totalEnemyNormal = null,

	currentEnemyBow = null,
	totalEnemyBow = null,

	currentEnemyVisible = null,
	totalEnemyVisible = null,

	currentEnemyBothSkill = null,
	totalEnemyBothSkill = null,

	currentEnemy = null,
	totalEnemy = null
}

var enemyRound1;

var enemyRound2;

var enemyRound3;

enemyRound1 =  new enemyInfo();
enemyRound2 = new enemyInfo()
enemyRound3 = new enemyInfo();

var delaySpam = false;


hideDiv("gameUI");  

videoLOAD();
// Set Dufault Button Main
document.getElementById("standard").style.display = "none"; 
document.getElementById("custom").style.display = "none";


function stand(){   //  Display standard mode
    document.getElementById("standard").style.display = "none";
    document.getElementById("custom").style.display = "none";
    document.getElementById("titleGame").style.display = "none";
    document.getElementById("radioType").style.display = "block";
    document.getElementById("submitRadio").style.display = "block";
    document.getElementById("return").style.display = "block";
    document.getElementById("radioType").style.animation = "movingRadio 1s forwards";
    document.getElementById("submitRadio").style.animation = "movingButtonSubmit 1s forwards";
    document.getElementById("return").style.animation = "movingReturn 1s forwards";
    video.muted = false;
}

function cust(){    //  Display custom mode
    setDefaultValueCustom();
    document.getElementById("standard").style.display = "none";
    document.getElementById("custom").style.display = "none";
    document.getElementById("titleGame").style.display = "none";
    document.getElementById("submitRadio").style.display = "block";
    document.getElementById("element1st").style.display = "block";
    document.getElementById("inputType").style.display = "block";
    document.getElementById("return").style.display = "block";
    document.getElementById("submitRadio").style.animation = "movingButtonSubmit 1s forwards";
    document.getElementById("return").style.animation = "movingReturn 1s forwards";
    document.getElementById("inputType").style.animation = "movingCustomUI2st 1s forwards";
    document.getElementById("element1st").style.animation = "movingCustomUI1st 1s forwards";
    document.getElementById("round1").click();
    video.muted = false;
    currentTabDisplay = "round1";
}

function tabChange(evt, round){     //  ON CUSTOM
    document.getElementById("okha").classList.remove("animaAppear");
    var allTab = document.getElementsByClassName("tablinks");
    for (var i = 0; i < allTab.length; i++) {
        allTab[i].className = allTab[i].className.replace(" active", "");
    }
    document.getElementById(round).style.display = "block";
    evt.currentTarget.className += " active";
    currentTabDisplay = round;
    setTimeout( function() { document.getElementById("okha").classList.add("animaAppear");setValueTab();}, 100)
}

function setValueTab(){ //  Set value of current Tab when user click
    if (currentTabDisplay == "round1"){

        if (enemyRound1.totalEnemyNormal != null)
            document.getElementById("enemyNormal").value = enemyRound1.totalEnemyNormal;
        else 
            document.getElementById("enemyNormal").value = "";

        if (enemyRound1.totalEnemyBow != null)
            document.getElementById("enemyArrow").value = enemyRound1.totalEnemyBow;
        else 
            document.getElementById("enemyArrow").value = "";
        if (enemyRound1.totalEnemyVisible != null)
            document.getElementById("enemyVisible").value = enemyRound1.totalEnemyVisible;
        else 
            document.getElementById("enemyVisible").value = "";
        if (enemyRound1.totalEnemyBothSkill != null)
            document.getElementById("enemyBothSkill").value = enemyRound1.totalEnemyBothSkill;
        else 
            document.getElementById("enemyBothSkill").value = "";

        if (enemyRound1.speed != null)
            document.getElementById("enemySpeed").value = enemyRound1.speed;
        else 
            document.getElementById("enemySpeed").value = "";
        if (enemyRound1.arrowNum != null)
            document.getElementById("enemyNumberArrow").value = enemyRound1.arrowNum;
        else 
            document.getElementById("enemyNumberArrow").value = "";
        if (enemyRound1.delayArrow != null)
            document.getElementById("enemyDelayArrow").value = enemyRound1.delayArrow;
        else 
            document.getElementById("enemyDelayArrow").value = "";
        if (enemyRound1.visibleTime != null)
            document.getElementById("enemmyTimeVisible").value = enemyRound1.visibleTime;
        else 
            document.getElementById("enemmyTimeVisible").value = "";
        if (enemyRound1.timeDelaySpam != null)
            document.getElementById("enemySpamDelay").value = enemyRound1.timeDelaySpam; 
        else 
            document.getElementById("enemySpamDelay").value = "";
    }
    else if (currentTabDisplay == "round2"){
        if (enemyRound2.totalEnemyNormal != null)
            document.getElementById("enemyNormal").value = enemyRound2.totalEnemyNormal;
        else 
            document.getElementById("enemyNormal").value = "";
        if (enemyRound2.totalEnemyBow != null)
            document.getElementById("enemyArrow").value = enemyRound2.totalEnemyBow;
        else 
            document.getElementById("enemyArrow").value = "";
        if (enemyRound2.totalEnemyVisible != null)
            document.getElementById("enemyVisible").value = enemyRound2.totalEnemyVisible;
        else 
            document.getElementById("enemyVisible").value = "";
        if (enemyRound2.totalEnemyBothSkill != null)
            document.getElementById("enemyBothSkill").value = enemyRound2.totalEnemyBothSkill;
        else 
            document.getElementById("enemyBothSkill").value = "";
        if (enemyRound2.speed != null)
            document.getElementById("enemySpeed").value = enemyRound2.speed;
        else 
            document.getElementById("enemySpeed").value = "";
        if (enemyRound2.arrowNum != null)
            document.getElementById("enemyNumberArrow").value = enemyRound2.arrowNum;
        else 
            document.getElementById("enemyNumberArrow").value = "";
        if (enemyRound2.delayArrow != null)
            document.getElementById("enemyDelayArrow").value = enemyRound2.delayArrow;
        else 
            document.getElementById("enemyDelayArrow").value = "";
        if (enemyRound2.visibleTime != null)
            document.getElementById("enemmyTimeVisible").value = enemyRound2.visibleTime;
        else 
            document.getElementById("enemmyTimeVisible").value = "";
        if (enemyRound2.timeDelaySpam != null)
            document.getElementById("enemySpamDelay").value = enemyRound2.timeDelaySpam; 
        else 
            document.getElementById("enemySpamDelay").value = "";
    }
    else if (currentTabDisplay == "round3"){
        if (enemyRound3.totalEnemyNormal != null)
            document.getElementById("enemyNormal").value = enemyRound3.totalEnemyNormal;
        else 
            document.getElementById("enemyNormal").value = "";
        if (enemyRound3.totalEnemyBow != null)
            document.getElementById("enemyArrow").value = enemyRound3.totalEnemyBow;
        else 
            document.getElementById("enemyArrow").value = "";
        if (enemyRound3.totalEnemyVisible != null)
            document.getElementById("enemyVisible").value = enemyRound3.totalEnemyVisible;
        else 
            document.getElementById("enemyVisible").value = "";
        if (enemyRound3.totalEnemyBothSkill != null)
            document.getElementById("enemyBothSkill").value = enemyRound3.totalEnemyBothSkill;
        else 
            document.getElementById("enemyBothSkill").value = "";
        if (enemyRound3.speed != null)
            document.getElementById("enemySpeed").value = enemyRound3.speed;
        else 
            document.getElementById("enemySpeed").value = "";
        if (enemyRound3.arrowNum != null)
            document.getElementById("enemyNumberArrow").value = enemyRound3.arrowNum;
        else 
            document.getElementById("enemyNumberArrow").value = "";
        if (enemyRound3.delayArrow != null)
            document.getElementById("enemyDelayArrow").value = enemyRound3.delayArrow;
        else 
            document.getElementById("enemyDelayArrow").value = "";
        if (enemyRound3.visibleTime != null)
            document.getElementById("enemmyTimeVisible").value = enemyRound3.visibleTime;
        else 
            document.getElementById("enemmyTimeVisible").value = "";
        if (enemyRound3.timeDelaySpam != null)
            document.getElementById("enemySpamDelay").value = enemyRound3.timeDelaySpam; 
        else 
            document.getElementById("enemySpamDelay").value = "";
    }
}

function submit(){  //  User click play button
    if (currentTabDisplay != null){ //  Tab return true if Tab is showing for user
        if(checkInput())    //  Check any input is emty
        gameMode = "custom";
    }
    else if (document.getElementById("easy").checked)
        gameMode = "easy";
    else if (document.getElementById("normal").checked)
        gameMode = "normal";
    else if (document.getElementById("hard").checked)
        gameMode = "hard";
    else if (document.getElementById("legendary").checked)
        gameMode = "legendary"; 
        setGameMode(gameMode);
}

function checkInput(){  //  Check input user
    if (document.getElementById("treeSpam").value == ""){
        alert("Please enter the tree");
        return false;
    }
    else if (document.getElementById("playerHP").value == ""){
        alert("Please enter player HP");
        return false;
    }
    else if (document.getElementById("playerSpeed").value == ""){
        alert("Please enter player speed");
        return false;
    }
    else if (document.getElementById("playerArrowNumber").value == ""){
        alert("Please enter player Arrow Number");
        return false;
    }
    else if (document.getElementById("playerArrowFrame").value == ""){
        alert("Please enter player Arrow Frame");
        return false;
    }
    else if (enemyRound1.speed == null){
        alert("Please enter enemy speed round 1");
        document.getElementById("round1").click();
        return false;
    }
    else if (enemyRound1.arrowNum == null){
        alert("Please enter arrow number enemy round 1");
        document.getElementById("round1").click();
        return false;
    }
    else if (enemyRound1.delayArrow == null){
        alert("Please enter enemy delay arrow round 1");
        document.getElementById("round1").click();
        return false;
    }
    else if (enemyRound1.visibleTime == null){
        alert("Please enter enemy visible time round 1");
        document.getElementById("round1").click();
        return false;
    }
    else if (enemyRound1.timeDelaySpam == null){
        alert("Please enter enemy time delay spam round 1");
        document.getElementById("round1").click();
        return false;
    }
    else if (enemyRound1.totalEnemyNormal == null){
        alert("Please enter Normal Enemy round 1");
        document.getElementById("round1").click();
        return false;
    }
    else if (enemyRound1.totalEnemyBow == null){
        alert("Please enter Bow Enemy round 1");
        document.getElementById("round1").click();
        return false;
    }
    else if (enemyRound1.totalEnemyVisible == null){
        alert("Please enter Visible Enemy round 1");
        document.getElementById("round1").click();
        return false;
    }
    else if (enemyRound1.totalEnemyBothSkill == null){
        alert("Please enter Both Skill Enemy round 1");
        document.getElementById("round1").click();
        return false;
    }
    else if (enemyRound2.speed == null){
        alert("Please enter enemy speed round 2");
        document.getElementById("round2").click();
        return false;
    }
    else if (enemyRound2.arrowNum == null){
        alert("Please enter arrow number enemy round 2");
        document.getElementById("round2").click();
        return false;
    }
    else if (enemyRound2.delayArrow == null){
        alert("Please enter enemy delay arrow round 2");
        document.getElementById("round2").click();
        return false;
    }
    else if (enemyRound2.visibleTime == null){
        alert("Please enter enemy visible time round 2");
        document.getElementById("round2").click();
        return false;
    }
    else if (enemyRound2.timeDelaySpam == null){
        alert("Please enter enemy time delay spam round 2");
        document.getElementById("round2").click();
        return false;
    }
    else if (enemyRound2.totalEnemyNormal == null){
        alert("Please enter Normal Enemy round 2");
        document.getElementById("round2").click();
        return false;
    }
    else if (enemyRound2.totalEnemyBow == null){
        alert("Please enter Bow Enemy round 2");
        document.getElementById("round2").click();
        return false;
    }
    else if (enemyRound2.totalEnemyVisible == null){
        alert("Please enter Visible Enemy round 2");
        document.getElementById("round2").click();
        return false;
    }
    else if (enemyRound2.totalEnemyBothSkill == null){
        alert("Please enter Both Skill Enemy round 2");
        document.getElementById("round2").click();
        return false;
    }
    else if (enemyRound3.speed == null){
        alert("Please enter enemy speed round 3");
        document.getElementById("round3").click();
        return false;
    }
    else if (enemyRound3.arrowNum == null){
        alert("Please enter arrow number enemy round 3");
        document.getElementById("round3").click();
        return false;
    }
    else if (enemyRound3.delayArrow == null){
        alert("Please enter enemy delay arrow round 3");
        document.getElementById("round3").click();
        return false;
    }
    else if (enemyRound3.visibleTime == null){
        alert("Please enter enemy visible time round 3");
        document.getElementById("round3").click();
        return false;
    }
    else if (enemyRound3.timeDelaySpam == null){
        alert("Please enter enemy time delay spam round 3");
        document.getElementById("round3").click();
        return false;
    }
    else if (enemyRound3.totalEnemyNormal == null){
        alert("Please enter Normal Enemy round 3");
        document.getElementById("round3").click();
        return false;
    }
    else if (enemyRound3.totalEnemyBow == null){
        alert("Please enter Bow Enemy round 3");
        document.getElementById("round3").click();
        return false;
    }
    else if (enemyRound3.totalEnemyVisible == null){
        alert("Please enter Visible Enemy round 3");
        document.getElementById("round3").click();
        return false;
    }
    else if (enemyRound3.totalEnemyBothSkill == null){
        alert("Please enter Both Skill Enemy round 3");
        document.getElementById("round3").click();
        return false;
    }
    return true;
    
}

function returnFun(){   // RETURN MAIN PAGE WHEN USER CLICK RETURN ICON
    document.getElementById("standard").style.display = "movingStandardButton 1s forwards";
    document.getElementById("custom").style.display = "movingCustomButton 1s forwards";
    document.getElementById("standard").style.display = "block";
    document.getElementById("custom").style.display = "block";
    document.getElementById("titleGame").style.display = "block";
    document.getElementById("radioType").style.display = "none";
    document.getElementById("submitRadio").style.display = "none";
    document.getElementById("return").style.display = "none";
    document.getElementById("inputType").style.display = "none";
    document.getElementById("element1st").style.display = "none";
    currentTabDisplay = null;
}

function videoLOAD(){   // LOAD VIDEO
        video.load();
        video.loop = true;
        video.muted = true;
}

function displayDiv(id){    
    var divGame = document.getElementById(id).children;
    for (var i = 0 ; i < divGame.length; i++) {
        divGame[i].style.display = "block";
    } 
}

function hideDiv(id){
    var divGame = document.getElementById(id).children;
    for (var i = 0 ; i < divGame.length; i++) {
        divGame[i].style.display = "none";
    }
}

function playms(){  //  first button
    video.muted = false;
    video.play();
    document.getElementById("go").style.display = "none";
    document.getElementById("standard").style.display = "block";
    document.getElementById("custom").style.display = "block";
    document.getElementById("titleGame").style.display = "block";
    setButton();
}

function setButton(){   //  set animate of TWO MAIN BUTTON
    document.getElementById("standard").style.animation = "movingStandardButton 1s forwards";
    document.getElementById("custom").style.animation = "movingCustomButton 1s forwards";
}

function setGameMode(mode){ // Set mode for game

    if (mode == null)
        return;
    else if (mode == "easy"){
        hp = 10;
        speedPlayer = 2;
        amoutArrowPlayer = 1;
        timeDelayShootPlayer = 500;
        treeSpaw("default");
        setEnemyRound(enemyRound1, 8, 0, 0, 0, 1, 3, 2000, 3000, 1000);
        
        setEnemyRound(enemyRound2, 10, 0, 0, 0, 1, 3, 2000, 3000, 1000);
        
        setEnemyRound(enemyRound3, 12, 0, 0, 0, 1, 3, 2000, 3000, 700);
    }
    else if (mode == "normal"){
        hp = 5;
        speedPlayer = 1;
        amoutArrowPlayer = 1;
        timeDelayShootPlayer = 500;
        treeSpaw("default");
        setEnemyRound(enemyRound1, 10, 3, 2, 1, 1, 3, 2000, 3000, 1000);
        
        setEnemyRound(enemyRound2, 15, 3, 1, 1, 1, 1, 2000, 3000, 1000);
        
        setEnemyRound(enemyRound3, 20, 5, 2, 1, 1, 2, 2000, 3000, 700);
    }
    else if (mode == "hard"){
        hp = 3;
        timeDelayShootPlayer = 500;
        speedPlayer = 1;
        amoutArrowPlayer = 1;
        treeSpaw("default");
        setEnemyRound(enemyRound1, 9, 5, 2, 3, 1, 3, 2000, 3000, 1000);
        
        setEnemyRound(enemyRound2, 10, 7, 5, 4, 1, 1, 2000, 3000, 1000);
        
        setEnemyRound(enemyRound3, 14, 15, 13, 10, 1, 2, 2000, 3000, 700);
    }
    else if (mode == "legendary"){
        hp = 0;
        speedPlayer = 1;
        amoutArrowPlayer = 1;
        timeDelayShootPlayer = 500;
        treeSpaw("default");
        setEnemyRound(enemyRound1, 15, 8, 6, 4, 1, 3, 2000, 3000, 1000);
        
        setEnemyRound(enemyRound2, 20, 10, 14, 9, 1, 1, 2000, 3000, 1000);
        
        setEnemyRound(enemyRound3, 14, 15, 21, 10, 1, 2, 2000, 3000, 700);
    }
    else if (mode == "custom"){
        hp = document.getElementById("playerHP").value;
        hp = Number(hp);
        speedPlayer = document.getElementById("playerSpeed").value;
        speedPlayer = Number(speedPlayer);
        amoutArrowPlayer = document.getElementById("playerArrowNumber").value;
        amoutArrowPlayer = Number(amoutArrowPlayer);
        timeDelayShootPlayer = document.getElementById("playerArrowFrame").value;
        timeDelayShootPlayer = Number(timeDelayShootPlayer);
        treeSpaw("default");
        enemyRound1.delayArrow += "000";    // convert to correct type
        enemyRound1.delayArrow = Number(enemyRound1.delayArrow);
        enemyRound1.visibleTime += "000";
        enemyRound1.visibleTime = Number(enemyRound1.visibleTime);
        enemyRound1.timeDelaySpam += "000";
        enemyRound1.timeDelaySpam = Number(enemyRound1.timeDelaySpam);

        enemyRound2.delayArrow += "000";
        enemyRound2.delayArrow = Number(enemyRound2.delayArrow);
        enemyRound2.visibleTime += "000";
        enemyRound2.visibleTime = Number(enemyRound2.visibleTime);
        enemyRound2.timeDelaySpam += "000";
        enemyRound2.timeDelaySpam = Number(enemyRound2.timeDelaySpam);
        
        enemyRound3.delayArrow += "000";
        enemyRound3.delayArrow = Number(enemyRound3.delayArrow);
        enemyRound3.visibleTime += "000";
        enemyRound3.visibleTime = Number(enemyRound3.visibleTime);
        enemyRound3.timeDelaySpam += "000";
        enemyRound3.timeDelaySpam = Number(enemyRound3.timeDelaySpam);
        setEnemyRound(enemyRound1,Number(enemyRound1.totalEnemyNormal), Number(enemyRound1.totalEnemyBow), Number(enemyRound1.totalEnemyVisible), Number(enemyRound1.totalEnemyBothSkill), Number(enemyRound1.speed), Number(enemyRound1.arrowNum), Number(enemyRound1.delayArrow), Number(enemyRound1.visibleTime), Number(enemyRound1.timeDelaySpam));
        setEnemyRound(enemyRound2,Number(enemyRound2.totalEnemyNormal), Number(enemyRound2.totalEnemyBow), Number(enemyRound2.totalEnemyVisible), Number(enemyRound2.totalEnemyBothSkill), Number(enemyRound2.speed), Number(enemyRound2.arrowNum), Number(enemyRound2.delayArrow), Number(enemyRound2.visibleTime), Number(enemyRound2.timeDelaySpam));
        setEnemyRound(enemyRound3,Number(enemyRound3.totalEnemyNormal), Number(enemyRound3.totalEnemyBow), Number(enemyRound3.totalEnemyVisible), Number(enemyRound3.totalEnemyBothSkill), Number(enemyRound3.speed), Number(enemyRound3.arrowNum), Number(enemyRound3.delayArrow), Number(enemyRound3.visibleTime), Number(enemyRound3.timeDelaySpam));
        playingSound(bgCustom);
        bgCustom.loop = true;
    }
    hideDiv("startUI");
    document.getElementById("startUI").style.width = 0 + "px";
    document.getElementById("startUI").style.height = 0 + "px";
    displayDiv("gameUI");
    document.getElementById("gameUI").style.width = w + "px";
    document.getElementById("gameUI").style.height = h + "px";
    loading = false;
    video.pause();
    createHealthB();
}

function setEnemyRound(Object, totalEnemyNormal, totalEnemyBow, totalEnemyVisible, totalEnemyBothSkill, speed,
	arrowNum, delayArrow, visibleTime, timeDelaySpam){  
	Object.currentEnemyNormal = 0;
	Object.currentEnemyBow = 0;
	Object.currentEnemyVisible = 0;
	Object.currentEnemyBothSkill = 0;
	Object.currentEnemy = 0;
	
	Object.totalEnemyNormal = totalEnemyNormal;
	Object.totalEnemyBow = totalEnemyBow;
	Object.totalEnemyVisible = totalEnemyVisible;
	Object.totalEnemyBothSkill = totalEnemyBothSkill;
	Object.totalEnemy = totalEnemyNormal + totalEnemyBow + totalEnemyVisible + totalEnemyBothSkill;

	Object.speed = speed;
	Object.arrowNum = arrowNum;
	Object.delayArrow = delayArrow;
	Object.visibleTime = visibleTime;
	Object.timeDelaySpam = timeDelaySpam;

}

// Set value for input

function setNormalEnemy(id){ 
    var value = document.getElementById(id).value;
    if(currentTabDisplay == "round1")
        enemyRound1.totalEnemyNormal = value;
    else if (currentTabDisplay == "round2")
        enemyRound2.totalEnemyNormal = value;
    else if (currentTabDisplay == "round3")
        enemyRound3.totalEnemyNormal = value;
}

function setArrowEnemy(id){
    var value = document.getElementById(id).value;
    if(currentTabDisplay == "round1")
        enemyRound1.totalEnemyBow = value;
    else if (currentTabDisplay == "round2")
        enemyRound2.totalEnemyBow = value;
    else if (currentTabDisplay == "round3")
        enemyRound3.totalEnemyBow = value;
}

function setVisibleEnemy(id){
    var value = document.getElementById(id).value;
    if(currentTabDisplay == "round1")
        enemyRound1.totalEnemyVisible = value;
    else if (currentTabDisplay == "round2")
        enemyRound2.totalEnemyVisible = value;
    else if (currentTabDisplay == "round3")
        enemyRound3.totalEnemyVisible = value;
}

function setBothSkillEnemy(id){
    var value = document.getElementById(id).value;
    if(currentTabDisplay == "round1")
        enemyRound1.totalEnemyBothSkill = value;
    else if (currentTabDisplay == "round2")
        enemyRound2.totalEnemyBothSkill = value;
    else if (currentTabDisplay == "round3")
        enemyRound3.totalEnemyBothSkill = value;
}

function setEnemySpeed(id){
    var value = document.getElementById(id).value;
    if(currentTabDisplay == "round1")
        enemyRound1.speed = value;
    else if (currentTabDisplay == "round2")
        enemyRound2.speed = value;
    else if (currentTabDisplay == "round3")
        enemyRound3.speed = value;
}

function setEnemyNumberArrow(id){
    var value = document.getElementById(id).value;
    if(currentTabDisplay == "round1")
        enemyRound1.arrowNum = value;
    else if (currentTabDisplay == "round2")
        enemyRound2.arrowNum = value;
    else if (currentTabDisplay == "round3")
        enemyRound3.arrowNum = value;
}

function setEnemyDelayArrow(id){
    var value = document.getElementById(id).value;
    if(currentTabDisplay == "round1")
        enemyRound1.delayArrow = value;
    else if (currentTabDisplay == "round2")
        enemyRound2.delayArrow = value;
    else if (currentTabDisplay == "round3")
        enemyRound3.delayArrow = value;
}

function setEnemyTimevisible(id){
    var value = document.getElementById(id).value;
    if(currentTabDisplay == "round1")
        enemyRound1.visibleTime = value;
    else if (currentTabDisplay == "round2")
        enemyRound2.visibleTime = value;
    else if (currentTabDisplay == "round3")
        enemyRound3.visibleTime = value;
}

function setEnemySpamDelay(id){
    var value = document.getElementById(id).value;
    if(currentTabDisplay == "round1")
        enemyRound1.timeDelaySpam = value;
    else if (currentTabDisplay == "round2")
        enemyRound2.timeDelaySpam = value;
    else if (currentTabDisplay == "round3")
        enemyRound3.timeDelaySpam = value;
}


// END Set value for input


function treeSpaw(value){
    if (value == "default"){
    createTree(29, 48);
	createTree(65, 128);
	createTree(14, 128);
	createTree(36, 80);
	createTree(65, 72);
	createTree(18, 8);
	createTree(51, 32);
    }
    else{
        for (var i = 0; i < document.getElementById("treeSpam").value; i++){
            var leftTree = Math.floor((Math.random() * (w - 100)) + 10);
            var topTree = Math.floor((Math.random() * (h - 50) ) + 50);
            for (var i in treeList){
                var left = treeList[i].object.offsetLeft + 130;
                var right = treeList[i].object.offsetLeft - 30;
                var top = treeList[i].object.offsetTop - 40;
                var down = treeList[i].object.offsetTop + 140;
                while (leftTree < left && leftTree > right &&
                    topTree > top && topTree < down){
                        leftTree = Math.floor((Math.random() * (w - 100)) + 10);
                        topTree = Math.floor((Math.random() * (h - 50) ) + 10);
                }
            }
            createTree(leftTree, topTree);
        }
    } 
}


function createTree(x, y){
	treeList[totalTree] = new tree(x, y);
	totalTree++;
}

function playingSound(object, type){  
	if (!object.paused && type){
		object.pause();
		object.currentTime = 0;
	}
	object.play();
}

function createHealthB(){
    var object = document.createElement('div');
    object.className =	"hud";
    object.setAttribute("id", "healthBar");
    document.getElementById("gameUI").appendChild(object);  
}

function createPlayer(){
    var object = document.createElement('div');
	object.className =	"character stand down";
	var ChildrEnemy = document.createElement('div');
	var ChildrEnemy1 = document.createElement('div');
	var ChildrEnemy2 = document.createElement('div');
	ChildrEnemy.className ="head";
	ChildrEnemy1.className ="body";
	ChildrEnemy2.className ="weapon bow";
	object.appendChild(ChildrEnemy);
	object.appendChild(ChildrEnemy1);
	object.appendChild(ChildrEnemy2);
    document.getElementById("gameUI").appendChild(object);
    player = object;
    playerResspaw();
}

function playerResspaw(){
	deg = 1;
	leftPlayer = Math.floor((Math.random() * (w - 100)) + 10);
	topPlayer = Math.floor((Math.random() * (h - 50) ) + 10);
	
	var playerTopLeft = document.elementFromPoint(leftPlayer, topPlayer);
	var playerTopRight = document.elementFromPoint(leftPlayer+32, topPlayer);
	var playerBottomLeft = document.elementFromPoint(leftPlayer, topPlayer+48);
	var playerBottomRight = document.elementFromPoint(leftPlayer+32, topPlayer+48);
	
	while (playerTopLeft.classList.contains('blocking') || playerTopRight.classList.contains('blocking')
		|| playerBottomLeft.classList.contains('blocking') || playerBottomRight.classList.contains('blocking') 
		|| playerTopLeft.classList.contains('enemy') || playerTopRight.classList.contains('enemy')
		|| playerBottomLeft.classList.contains('enemy') || playerBottomRight.classList.contains('enemy') ) {
		leftPlayer = Math.floor((Math.random() * (w - 100)) + 10);
		topPlayer = Math.floor((Math.random() * (h - 50) ) + 10);
		
		playerTopLeft = document.elementFromPoint(leftPlayer, topPlayer);
		playerTopRight = document.elementFromPoint(leftPlayer+32, topPlayer);
		playerBottomLeft = document.elementFromPoint(leftPlayer, topPlayer+48);
		playerBottomRight = document.elementFromPoint(leftPlayer+32, topPlayer+48);
	}
	player.style.left = leftPlayer + "px";
	player.style.top = topPlayer + "px";
	player.className = "";
	player.className = "character stand down";
	player.style.transform = 'rotate(0deg)'; 
	showText("Respawn!!!");
	hitArrow = false;
}

function setDefaultValueCustom(){ //  Set Default value for custom
    setEnemyRound(enemyRound1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        
    setEnemyRound(enemyRound2, 1, 1, 1, 1, 1, 1, 1, 1, 1);
        
    setEnemyRound(enemyRound3, 1, 1, 1, 1, 1, 1, 1, 1, 1);
}