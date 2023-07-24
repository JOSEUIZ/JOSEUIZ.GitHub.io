//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=100; timeIni=100; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
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
var fPreg="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="ERES LO MAXIMO"; messageTime="";messageError="NOOO";messageErrorG="NOOO"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var actMaxWidth="600"; actMaxHeight="";indexQ=0;dirMedia="IMAGENES_Y_SONIDOS_resources/media/";
var quest=[["CUANDO EN TIK TOK TE MATAN","X",""],["CUANDO TE SORPRENDES DE ALGO INESPERADO","",""],["CUANDO TE SORPRENDE DEL SECRETO QUE TE GUARDAS PROFUNDAMENTE","X",""]];
var altQuest=["","",""];
var media=[["MQ==","TUFUQVJPTiBBIFVOIElOT0NFTlRF","0_mataron_a_una_inocente.jpg","X"],["Mg==","UVVFUyBFU09PTw==","0_BOBO_ESPONJA.jpg","X"],["Mw==","Q0VMTCBBU1VTVEFETw==","0_CELL_AUSUTADO.jpg","X"]];
var alt=["","",""];
var dat=[["Mg==","MQ==","MA==","MQ==","MQ==","MQ=="],["Mg==","Mg==","MQ==","MQ==","MQ==","MQ=="],["MQ==","MQ==","MQ==","MQ==","MQ==","MQ=="],["MQ==","Mg==","MA==","MQ==","MQ==","MQ=="],["Mw==","MQ==","MA==","MQ==","MQ==","MQ=="],["Mw==","Mg==","MA==","MQ==","MQ==","MQ=="],["Mw==","Mw==","MQ==","MQ==","MQ==","MQ=="]];
var actualBoard=[];actualState=[];indexGame=1;tiAudio=false;
var wordsGame="SU1BR0VORVNfWV9TT05JRE9T"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actorder=[1,2,3];var in_act=0;
