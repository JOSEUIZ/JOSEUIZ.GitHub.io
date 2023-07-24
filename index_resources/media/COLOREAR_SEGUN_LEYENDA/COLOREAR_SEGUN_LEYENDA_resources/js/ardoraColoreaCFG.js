//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=20; timeIni=20; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="fontEnun";
var timeOnMessage=7; messageOk="ERERS LO MAXIMO"; messageTime=""; messageError="NOOO"; messageErrorG="NOOO"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q09MT1JFQVJfU0VHVU5fTEVZRU5EQQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[];
var c=["#FF0000","#FF0000","#FF0000","#FF0000","#FF0000","#FFCCCC","#0080FF","#0080FF","#000000","#000000","#007EFD","#007EFD","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#E8E800","#A4A400","#A4A400","#A4A400","#A4A400"];
var x=["267","177","253","123","164","173","134","207","253","263","217","183","216","180","174","89","33","54","30","115","316","135","98","328"];
var y=["104","55","286","198","236","153","237","238","164","229","127","113","119","107","277","129","103","84","130","255","229","94","223","61"];
var t=["","","","","","","","","","","","","","","","","","","","","","","",""];
var cM=["#FF0000","#FF0000","#FFCCCC","#0080FF","#000000","#007EFD","#FFFFFF","#FFFFFF","#E8E800","#A4A400"];
var tM=["GORRA","POLO","ROSTRO","PANTALON","CABELLO","OJOS","OJOS 2","GUANTES","BOTON","FONDO"];
var indexColor=0;
