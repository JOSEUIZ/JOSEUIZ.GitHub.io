//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=50; timeIni=50; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
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
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var d=[[1,1,1,1,1,1,1,1,1],],],]];
var vCell=[["1","1","1","1","1","1","1","1","1"],["4","4","4","4","4","4","4","4","4"],["4","4","4","4","4","4","4","4","4"],["4","4","4","4","4","4","4","4","4"]];
var a0Cell=[["YW5pbWFsIHF1ZSBzZSBhbGltZW50YSBkZSBncmFub3M=","b2PDqWFubyBtw6FzIGdyYW5kZSBkZWwgbXVuZG8gZW4gdMOpcm1pbm9zIGRlIHN1cGVyZmljaWU=","bWV0YWwgbcOhcyBhYnVuZGFudGUgZW4gbGEgY29ydGV6YSB0ZXJyZXN0cmU=","Y2FwaXRhbCBkZSBBdXN0cmFsaWE=","ZWxlbWVudG8gcXXDrW1pY28gbcOhcyBsaWdlcm8=","cGHDrXMgbcOhcyBncmFuZGUgZGVsIG11bmRvIGVuIHTDqXJtaW5vcyBkZSBzdXBlcmZpY2ll","ZWwgcGxhbmV0YSBtw6FzIGNlcmNhbm8gYWwgU29s","YXV0b3IgZGUgXCJEb24gUXVpam90ZSBkZSBsYSBNYW5jaGFcIg==","bGEgbW9udGHDsWEgbcOhcyBhbHRhIGRlbCBtdW5kbw=="],["Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg=="],["Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg=="],["Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg==","Mg=="]];
var c=[[32,53,43,20,27,51,29,35,29],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
var c1=[[112,16,6,6,9,5,8,28,13],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
var c2=[[0,13,3,9,7,5,5,22,17],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
var c3=[[0,15,5,8,7,14,5,19,17],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
var a1Cell=[["Q29ub2NpZG9zIGNvbW8gZ3JhbsOtdm9yb3MsIGxvcyBhbmltYWxlcyBxdWUgY29tZW4gZ3Jhbm9zIHNlIGVuY3VlbnRyYW4gY2xhc2lmaWNhZG9zIGNvbW8gaGVyYsOtdm9yb3MgdSBvbW7DrXZvcm9zLg==","T2PDqWFubyBBdGzDoW50aWNv","SGllcnJv","U3lkbmV5","SGlkcsOzZ2Vubw==","UnVzaWE=","TWVyY3VyaW8=","TWlndWVsIGRlIENlcnZhbnRlcyBTYWF2ZWRyYQ==","TW9udGUgRXZlcmVzdA=="],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]];
var a2Cell=[["YW5pbWFsIHF1ZSBzZSBhbGltZW50YSBkZSBncmFub3M=","T2PDqWFubyDDjW5kaWNv","T3Jv","TWVsYm91cm5l","T3jDrWdlbm8=","Q2hpbmE=","VmVudXM=","R2FicmllbCBHYXJjw61hIE3DoXJxdWV6","TW9udGUgS2lsaW1hbmphcm8="],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]];
var a3Cell=[["YW5pbWFsIHF1ZSBzZSBhbGltZW50YSBkZSBncmFub3M=","T2PDqWFubyBQYWPDrWZpY28=","Q29icmU=","Q2FuYmVycmE=","Q2FyYm9ubw==","RXN0YWRvcyBVbmlkb3M=","TWFydGU=","V2lsbGlhbSBTaGFrZXNwZWFyZQ==","TW9udGHDsWEgQWNvbmNhZ3Vh"],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]];
var wordsGame="VEFCTEFT"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cols=4; var rows=9;var showC=true;
