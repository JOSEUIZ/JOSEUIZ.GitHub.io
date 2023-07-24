//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=3;
var score=0; scoreMax=5; scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=false;
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
var fEnun="Arial, Helvetica, sans-serif";
var timeOnMessage=5; messageOk="eres lo maximo"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QUhPUkNBRE9T"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["Q0hJTkNIQVlDT0NIQQ==","Q0hBQ0FNQVJDQQ==","SFVBWUxMQVk=","TUFDSFVQSUNDSFU=","VElUSUNBQ0E=","","","","",""];imaW=["0_000299934W.jpg","0_santuario-historico-de-chacamarca10.jpg","0_descarga__2_.jpg","0_descarga__3_.jpg","0_descarga__4_.jpg","","","","",""];queW=["se encuentra en la provincia de junin y es el segundo lago mas grande de Peru ","ubicado en los Andes Centrales","ubicado en el distrito de Huayllay, provincia y departamento de Pasco","se ubica en la provincia de Urubamba, Región Cusco.","está ubicado al sureste del Perú, en la región de Puno. Se sitúa a una altura de 3,812 metros sobre el nivel del mar, haciéndolo el lago navegable más alto del mundo.","","","","",""];var wordsL=[13,10,8,11,8,"","","","",""];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="AHORCADOS_resources/media/"; textBNext="";
