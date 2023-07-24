//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=50;timeIni=50; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=4;
var score=0;scoreMax=1;scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="ERES LO MAXIMO"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts="NOOO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError=""; borderAttempts="#FF0000";
var wordsGame="SlVFR09fZGVfbWVtb3JpYQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var wo1=["POLLO","DISCO","CELULAR","PARLANTE","GATO","TALADRO","",""];im1=["POLLO.jpg","disco.jpg","descarga__5_.jpg","jbl-prx-815w-1500w-15-pulg-parlante-amplificado-unidad.jpg","GATO.jpg","TALADRO.jpg","",""];mp31=["","","","","","","",""];alt1=["","","","","","","",""];
var wo2=["TORNILLOS","","","MICROFONO","HUEVO","DISCMAN","AUDIFONOS","RATON"];im2=["TORNILLO.jpg","","","61ASFiMKASL._AC_SL1000_.jpg","HUEVO.jpg","DISCMAN.jpg","AUFONOS.jpg","RATON.jpg"];mp32=["","","","","","","",""];alt2=["","","","","","","",""];
var cols=4; rows=3; items=6; itp=["MTA=","MTE=","MTI=","MTM=","MTQ=","MTU=","MTY=","MTc="]; pos=["MjQ=","MjU=","MjY=","MjM=","Mjc=","MjA=","LTE=","LTE="];
var boardGame=[["","","",""],["","","",""],["","","",""]]; dirMedia="JUEGO_de_memoria_resources/media/"
var open1R=""; open1C=""; open2R=""; open2C=""; ansDo=0;
var a;
