//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=12; attempts=0; attemptsMax=1;
var score=0; scoreMax=12; scoreInc=1; scoreDec=1
var typeGame=2;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Tahoma, Geneva, sans-serif";
var timeOnMessage=5; messageOk="ERES LO MAXIMO"; messageTime=""; messageError="NOOO"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0","0","0","0","0"];
var doneB=["-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1","-1"];
var posX=[256,158,92,410,301,22,503,462,527,252,195,505]; var posY=[109,302,181,307,235,139,143,18,97,57,11,236];
var coorx=["MjEy", "MTQ5", "MTI2", "Mzcy", "MzI3", "MTc=", "NDk4", "NDA5", "NTIy", "MjQ3", "MzY3", "NTAw"]; var coory=["MTQz", "MjQ4", "MjIx", "Mjcx", "MTk5", "MTM5", "MTQz", "MjY=", "OTc=", "NTc=", "Mzc=", "MjAw"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", "", "", "", "", "", ""]; answers=["ZOCALO UPC", "CONECTOR USB", "RJ45", "PCI EXPRESS", "TARJETA DE VIDEO", "OUT AUDIOS", "CONECTOR SATA", "NECTOR US PANEL FRONTAL", "CONECTOR MICRO USB", "RANURA RAM", "BATERIA R34", "12 VOLT"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="UEFORUxfR1JBRklDTw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=true;
