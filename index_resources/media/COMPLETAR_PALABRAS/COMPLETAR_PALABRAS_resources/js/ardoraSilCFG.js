//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=50; timeIni=50; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="ERES LO MAXIMO"; messageTime=""; messageError="NOOO"; messageErrorG="NOOO"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wGame=["-TE","-TOM","-LOG","-LLE","-SA"];
var wIma=["ACEITE.jpg","REATON.jpg","RELOJ.jpg","CALLE.jpg","CASA.jpg"];
var audio=["","","","",""];
var wAlt=["","","","",""];
var w0=["QUNFSQ==","UkE=","UkU=","Q0E=","Q0E="];
var w1=["VUlB","UlU=","Ukk=","TEtMRQ==","R0g="];
var w2=["RUk=","UklB","UlVP","REZGSA==","S0E="];
var w3=["T1U=","UkVB","UkVU","RUVU","QVM="];
var c=[4,2,2,2,2];
var wW=["","","","",""];
var dirMedia="COMPLETAR_PALABRAS_resources/media/";
var wordsGame="Q09NUExFVEFSX1BBTEFCUkFT"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var ram_G=["-1","-1","-1","-1","-1"]; var indexGame=0; var tiAudio=false;
