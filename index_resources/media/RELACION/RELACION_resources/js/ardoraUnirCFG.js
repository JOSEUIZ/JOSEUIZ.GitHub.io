//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=50; timeIni=50; timeBon=0;
var successes=0; successesMax=20; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
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
var fActi="'Arial Black', Gadget, sans-serif";
var fEnun="'Arial Black', Gadget, sans-serif";
var timeOnMessage=5; messageOk="ERES LO MAXIMO"; messageTime=""; messageError="NOOOOO"; messageErrorG="NOOOOO"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UkVMQUNJT04="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["T0JKRVRPUyBFTEVDVFJJQ09T", "UExBTkNIQQ=="],["UExBTkNIQQ==", "VEVMRVZJU09S"],["UEVSUk8=", "RVNQRUNJRQ=="],["Q09DSEU=", "TUFSQ0E="],["TUFSQ0E=", "TU9ERUxP"],["RkxPUg==", "VElQTw=="],["VElQTw==", "QVJPTUE="],["TElCUk8=", "QVVUT1I="],["QVVUT1I=", "R0VORVJP"],["Q0FTQQ==", "RVNUSUxP"],["RVNUSUxP", "VEFNQcORTw=="],["UEFJUw==", "Q0FQSVRBTA=="],["Q0FQSVRBTA==", "SURJT01B"],["RlJVVEE=", "VkFSSUVEQUQ="],["VkFSSUVEQUQ=", "U0FCT1I="],["TU9OVEHDkUE=", "QUxUVVJB"],["QUxUVVJB", "UEFJU0FKRQ=="],["UEVMSUNVTEE=", "RElSRUNUT1I="],["RElSRUNUT1I=", "R0VORVJP"],["RVNQRUNJRQ==", "VEFNQcORTw=="]];
var c=[[18,7],[7,9],[5,7],[5,5],[5,6],[4,4],[4,5],[5,5],[5,6],[4,6],[6,6],[4,7],[7,6],[5,8],[8,5],[7,6],[6,7],[8,8],[8,6],[7,6]];
var con1=["OBJETOS ELECTRICOS","PERRO","COCHE","FLOR","LIBRO","CASA","PAIS","FRUTA","MONTAÑA","PELICULA"];
var con2=["PLANCHA","ESPECIE","MARCA","TIPO","AUTOR","ESTILO","CAPITAL","VARIEDAD","ALTURA","DIRECTOR"];
var con3=["TELEVISOR","TAMAÑO","MODELO","AROMA","GENERO","TAMAÑO","IDIOMA","SABOR","PAISAJE","GENERO"];
var sel1=""; join1=[]; join2=[];
