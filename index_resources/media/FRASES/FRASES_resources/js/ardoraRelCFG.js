//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=50; timeIni=50; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=4;
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
var timeOnMessage=5; messageOk="ERES LO MAXIMO"; messageTime=""; messageError="NOOOO"; messageErrorG="NOOOO"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="RlJBU0VT"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>El arte es la más alta expresión del espíritu humano.</p>","<p>es un dispositivo electrónico portátil que se utiliza principalmente para realizar y recibir llamadas telefónicas, enviar mensajes de texto y acceder a una amplia gama de funciones y servicios digitales.</p>","<p>vehículo de transporte personal que se utiliza para desplazarse por carreteras y vías públicas. Se trata de un medio de transporte motorizado, diseñado para transportar a una o varias personas, así como carga o equipaje, de manera cómoda y eficiente.</p>","<p>estructura arquitectónica diseñada y construida para proporcionar refugio, comodidad y seguridad a sus habitantes. Es un lugar donde las personas viven y realizan diversas actividades diarias.</p>","<p>medio de transporte de propulsión humana que consta de dos ruedas alineadas y un marco que las conecta. Es un vehículo versátil y eficiente que utiliza el esfuerzo físico del ciclista para moverse.</p>"];
var iL=["<div  align='center'><img alt='' src='FRASES_resources/media/ABRAN.jpg'></div>","<div  align='center'><img alt='' src='FRASES_resources/media/descarga__5_.jpg'></div>","<div  align='center'><img alt='' src='FRASES_resources/media/AUTO.jpg'></div>","<div  align='center'><img alt='' src='FRASES_resources/media/CASA.jpg'></div>","<div  align='center'><img alt='' src='FRASES_resources/media/BICLCETA.jpg'></div>"];
var order=["","","","",""]; orderR=["","","","",""];indexR=0; indexL=0;
var cR=["<p>herramienta eléctrica utilizada para perforar agujeros en diferentes materiales, como madera, metal, plástico y hormigón.</p>","<p>miembro de las fuerzas militares que ha sido entrenado y equipado para cumplir funciones y tareas relacionadas con la defensa y protección de su país</p>","<p>tipo de calzado diseñado para actividades deportivas o para uso casual y cotidiano. Son populares tanto entre los aficionados al deporte como entre aquellos que buscan comodidad y estilo en su vestimenta.</p>","<p>mamífero herbívoro domesticado, perteneciente a la especie Bos taurus. Es uno de los animales de granja más comunes y ampliamente criado en diferentes partes del mundo por su utilidad en la producción de carne y leche.</p>","<p>dispositivo electroquímico que almacena energía química y la convierte en energía eléctrica mediante una reacción química controlada.</p>"]; ansRL=["MQ==","MA==","Mw==","Mg==","NA=="];
var iR=["<div  align='center'><img alt='' src='FRASES_resources/media/TALADRO.jpg'></div>","<div  align='center'><img alt='' src='FRASES_resources/media/SOLDADO2.jpg'></div>","<div  align='center'><img alt='' src='FRASES_resources/media/ZAPATILLAS.jpg'></div>","<div  align='center'><img alt='' src='FRASES_resources/media/VACA.jpg'></div>","<div  align='center'><img alt='' src='FRASES_resources/media/BATERIA.jpg'></div>"];
var auR=[2,1,4,3,5];
