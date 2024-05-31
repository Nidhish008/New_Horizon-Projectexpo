var score = 0;
var selfVar= 1;
var ageVar=1;
var genVar=1;
var lossVar=2;
var set = set1;
var i=0;



var set1=[" How often do you feel stressed due to academics ? " , "How often do  you experience peer pressure ? " , "How many hours do you sleep ? " , "Have you experienced panic attacks ? " ,  "Do you have a strong support of friends and family you can rely on ? " , "Have you ever experienced bullying or harassment ? " , "Do you ever feel lonely or isolated ? " , "How do you feel about your academic performance and future goals ? " , "How productive are you ?  " , " Have you experienced any relationship problems ?" ];//finished

var set2=[" How often do you feel stressed due to academics ? " , "How often do  you experience peer pressure ? " , "How many hours do you sleep ? " , "Have you experienced panic attacks ? " ,  "Do you have a strong support of friends and family you can rely on ? " , "Have you ever experienced bullying or harassment ? " , "Do you ever feel lonely or isolated ? " , "How do you feel about your academic performance and future goals ? " , "How productive are you ?  " , " Have you experienced any relationship problems ?" ];

var set3=[" How would you rate your overall mental health on a scale of 1 to 10 ? " ," Do you feel pressure to maintain a certain image or persona at college ?" ," Have you got into any sort of addiction to cope with stress or emotions ?" ," Do you have any concerns or fears about your future after college ? ", " How well do you sleep at night ? "," Do you experience peer pressure ? " ,"  Are you satisfied with your social life in campus ? " ," Have you experienced any relationship issues ? ", " Do you find it difficult to concentrate or focus on academics ?" ," Have you ever had the feeling of homesickness or loneliness ?" ];//finished

var set4=[" How would you rate your overall mental health on a scale of 1 to 10 ? " ," Do you feel pressure to maintain a certain image or persona at college ?" ," Have you got into any sort of addiction to cope with stress or emotions ?" ," Do you have any concerns or fears about your future after college ? ", " How well do you sleep at night ? "," Do you experience peer pressure ? " ,"  Are you satisfied with your social life in campus ? " ," Have you experienced any relationship issues ? ", " Do you find it difficult to concentrate or focus on academics ?" ," Have you ever had the feeling of homesickness or loneliness ?" ];

var set5=["Do you feel stressed about your current work situation" ,  "Have you been feeling overwhelmed by work related responsibilities lately ?"  , " Do you have a healthy work life balance" , "Are you satisfied with your current financial situation ?" , " Have changes in family dynamics or responsibilities affected your mental well being ?"," Do you feel comfortable discussing sensitive topics or emotions with your family members ?" , "Have financial concerns or struggles affected your mental well being recently ?" , "Are you satisfied with your relationships with family members ? " , "Do you find it difficult to maintain a social life due to work or financial constraints ?" , "Do you feel that societal expectations or pressures contribute to your mental health challenges?" ];//finished

var set6=["Do you feel stressed about your current work situation" ,  "Have you been feeling overwhelmed by work related responsibilities lately ?"  , " Do you have a healthy work life balance" , "Are you satisfied with your current financial situation ?" , " Have changes in family dynamics or responsibilities affected your mental well being ?"," Do you feel comfortable discussing sensitive topics or emotions with your family members ?" , "Have financial concerns or struggles affected your mental well being recently ?" , "Are you satisfied with your relationships with family members ? " , "Do you find it difficult to maintain a social life due to work or financial constraints ?" , "Do you feel that societal expectations or pressures contribute to your mental health challenges?" ];


function shown(){
    document.getElementById('box').style.display="none";
	var disc = "<div id='disclamairHead'>Health is Wealth! </div>"+
    "<div id='descriptionText'>"+
    "It's a common adage that if you're healthy, nothing can stop you from being wealthy. We constantly abide by this rule, but sometimes we fail to remember that health is not just about bodily well-being; mental well-being is just as significant. The most crucial aspect is mental wellness, and it must never be neglected! We sometimes don't even become aware that we have this illness. Additionally, due to societal anxieties, when people learn about this sickness, they strive to hide it. But having sadness or something like is entirely natural or acceptable. It's similar to any other ailment in that it has to be caught early to prevent any dangerous situations! We must first do certain screening tests at our level in order to achieve that. This quick exam is created for depression self-screening. The time it takes to complete this test—barely more than 10 minutes—could save your life or the lives of those dear to you! Data is solely requested for assessment reasons because it is an anonymous test. You may take this exam if you are at least 16 years old."+
    '</div>'+
    //'<div id="footerDisclamair">Creativstan By <i>WEB HORIZON</i></div>'+
    '<div id="warningText"><i class="fa fa-exclamation-circle" style="font-size:30px"></i>'+
    '<div >This is just a small self-screening and to get the best treatment, Doctor Consultation is advisable!</div></div>'+
    '<button id="startText" class="mainBtnstart" title="Click Here To Start The Test" onclick="startTheTest()">Start The Test</button>';
	document.getElementById('box2').innerHTML = disc;
    document.getElementById('box2').style.display="flex";
}


function never(num){
	if(i<9){
	i = i+1;
	showQues(i,num);}
	else{
		results();
	}
}
function some(num){
	score += 1;
	if(i<9){
	i = i+1;
	showQues(i,num);}
	else{
		results();
	}
}
function half(num){
	score+= 3;
	if(i<9){
	i = i+1;
	showQues(i,num);}
	else{
		results();
	}
}
function always(num){
	score += 5;
	if(i<9){
	i = i+1;
	showQues(i,num);}
	else{
		results();
	}
}
function setOne(dig){
	var template = '<div class="question">'+set1[dig]+'</div>';
	document.getElementById('box2').innerHTML = template;
	return;
}
function setTwo(dig){
	var template = '<div class="question">'+set2[dig]+'</div>';
	document.getElementById('box2').innerHTML = template;
	return;
 }
function setThree(dig){
	var template = '<div class="question">'+set3[dig]+'</div>';
	document.getElementById('box2').innerHTML = template;
	return;
 }
 function setFour(dig){
	var template ='<div class="question">'+set4[dig]+'</div>';
	document.getElementById('box2').innerHTML = template;
	return;
 }
 function setFive(dig){
	var template = '<div class="question">'+set5[dig]+'</div>';
	document.getElementById('box2').innerHTML = template;
	return;
 }
 function setSix(dig){
	var template = '<div class="question">'+set6[dig]+'</div>';
	document.getElementById('box2').innerHTML = template;
	return;
 }


function showQues(j,n){
	if(n==1){
		setOne(j);
	}
	else if(n==2){
		setTwo(j);
	}
	else if(n==3){
		setThree(j);
	}
	else if(n==4){
		setFour(j);
	}
	else if(n==5){
		setFive(j);
	}
	else if(n==6){
		setSix(j);
	}
	var buttonShow = '<div id="buttonQuesFlex">'+'<button class="buttonOption" onclick="never('+n+')">Never</button>'+'<button class="buttonOption"  onclick="some('+n+')">Sometimes</button>'+'<button class="buttonOption" onclick="half('+n+')">Half Of The Time</button>'+'<button class="buttonOption b" onclick="always('+n+')">Everytime</button>'+'</div>';
	document.getElementById('box2').innerHTML += buttonShow;
}

function selfs(val){
	selfVar=val.value;

}


function ages(age){
	ageVar=age.value;

}

function gens(gen){
	genVar=gen.value;


}

function loss(los){
	lossVar = los.value;

}



function start(){
if(genVar==2){
	score += 1;
}
else if(genVar==3){
	score += 2;
}
if(lossVar==1){
	score +=3;
}
if(ageVar==1){
	if(selfVar==1){
		document.getElementById('box2').innerHTML = "";
		showQues(i,1);
	}else if(selfVar==2){
		document.getElementById('box2').innerHTML = "";
		showQues(i,2);
	}
}
else if(ageVar==2){
	if(selfVar==1){
		document.getElementById('box2').innerHTML = "";
		showQues(i,3);
	}else if(selfVar==2){
		document.getElementById('box2').innerHTML = "";
		showQues(i,4);
	}
}
else if(ageVar==3){
	if(selfVar==1){
		document.getElementById('box2').innerHTML = "";
		showQues(i,5);
	}else if(selfVar==2){
		document.getElementById('box2').innerHTML = "";
		showQues(i,6);
	}
}


}

function reload(){
	location.reload();
}

function endMsg(advise){
	var temp = '<div class="alertFlex">'
	+'<div id="scoreWhole">'
	+'<div id="score"> Score After Evaluation : '+score+' </div>'
	+'<div id="advise">'+advise+'</div>'
	+'</div>'
	+'  <hr>'
	+'  <div id="wish">A Better Tomorrow</div>'
	+'<div id="warningText"><i class="fa fa-exclamation-circle" style="font-size:30px"></i>'
	+'<div>This is just a small survey to get to know yourself </div></div>'
	+'<button id="startNew" class="mainBtnagain" title="Click Here To Start The Test" onclick="startTheTest()">Take Survey Again</button>'
	+'<button onclick="reload()" title="Click here to go to home page!" class="mainBtn" id="goHomePageBtn">Go To Home Page</button>';
	document.getElementById('box2').innerHTML += temp;	
}

function results(){
	alert('You have successfully answered all the questions!!')
    document.getElementById('box2').innerHTML = "";
	var templates;
	if(score>=40){
		templates = '<div class="alertHead" id="veryhighAlert">You are at a very High Risk !</div>';
		document.getElementById('box2').innerHTML += templates;
		endMsg('Doctor consultation is highly recommended ! Talk with your family! And remember you are not alone!');
	}
	else if(score>=27 && score<40){
		templates = '<div class="alertHead" id="highAlert">You are at a High Risk !</div>';
		document.getElementById('box2').innerHTML += templates;
		endMsg('Doctor Consultation is advisable! Talk with your family! And remember you are not alone!');
		
	}
	else if(score>=16 && score<27){
		templates = '<div class="alertHead" id="mediumAlert">You are at a Medium Risk !</div>';
		document.getElementById('box2').innerHTML += templates;
		endMsg('Talk with your Family! You can consult your Doctor if any of the above symptoms continues or become frequent!');
		
	}
	else if(score>=6 && score<16){
		templates = '<div class="alertHead" id="lessAlert">You are at Less Risk !</div>';
		document.getElementById('box2').innerHTML += templates;
		endMsg('Your Mental is doing well! Just believe in yourself and never forget that you are not alone! Talk to your loved ones if needed!');
		
	}
	else if(score>=0 && score<6){
		templates = '<div class="alertHead" id="veryLessAlert">You are at a very Low Risk ! </div>';
		document.getElementById('box2').innerHTML += templates;
		endMsg("Your Mental Health is completely fine!! KEEP GOING HAPPILY!! ");
		
	}
}

function startTheTest(){
	shown();
    document.getElementById('box2').innerHTML = "";
    var infoTemp = '<div id="infoFlex">'+
    '<div id="headInfo">Please provide the primary info</div>'+
    '<div id="optionOne" class="options">'+
    '<select class="optional" onchange="selfs(this)">'+
      '<option selected>You are taking this test for</option>'+
      '<option value="1">Yourself</option>'+
      '<option value="2">Any Other Person</option>'+
      '</select>'+
      '<br>'+
      '<select class="optional" onchange="ages(this)">'+
        '<option selected>Select The Age</option>'+
        '<option value="1">Between 15 to 17</option>'+
        '<option value="2">Between 18 to 22</option>'+
        '<option value="3">Above 22</option>'+
      '</select>'+
      '<br>'+
      '<select class="optional" onchange="gens(this)">'+
       '<option selected>Select The Gender</option>'+
        '<option value="1">Male</option>'+
        '<option value="2">Female</option>'+
        '<option value="3">Other</option>'+
      '</select>'+
      '<br>'+
      //'<div class="labelLoss">Any mishappening has happened to you or your loved one like the loss of anyone close, any financial crisis, any relationship issues, etc.</div>'+
      //'<select id="lossOption" class="optional" onchange="loss(this)">'+
      //  '<option selected>Select</option>'+
      //  '<option value="1">Yes</option>'+
      //  '<option value="2">No</option>'+
      //'</select>'+
  '<br>'+
    '</select>'+
    '</div>'+
    '<button id="nextTest" onclick="start()">NEXT</button>'
    '</div>';
    document.getElementById('box2').innerHTML = infoTemp;
}
