//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=24; attempts=0; attemptsMax=5;
var score=0; scoreMax=24; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Arial, Helvetica, sans-serif";
var timeOnMessage=2; messageOk="¡Muy bien has ganado!"; messageTime=""; messageError="Fallaste. ¡Intentalo otra vez!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var posX=[245,231,206,260,253,208,189,176,164,131,105,140,154,144,117,80,110,117,77,69,133,38,26,35]; var posY=[384,364,341,329,257,294,305,216,309,309,264,287,251,223,204,213,157,51,111,146,178,138,112,85];
var coorx=["MjQw", "MjI2", "MjAx", "MjU1", "MjQ4", "MjAz", "MTg0", "MTcx", "MTU5", "MTI2", "MTAw", "MTM1", "MTQ5", "MTM5", "MTEy", "NzU", "MTA1", "MTYz", "NzI", "NjQ", "NjQ", "MzM", "MjE", "MTU"]; var coory=["Mzg0", "MzY0", "MzQx", "MzI5", "MjU3", "Mjk0", "MzA1", "MjE2", "MzA5", "MzA5", "MjY0", "Mjg3", "MjUx", "MjIz", "MjA0", "MjEz", "MTU3", "ODY", "MTEx", "MTQ2", "MTc1", "MTM4", "MTEy", "ODY"]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al2=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al3=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; var al4=["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]; answers=["Tacna", "Moquegua", "Arequipa", "Puno", "Madre de Dios", "Cuzco", "Apurimac", "Ucayali", "Ayacucho", "Ica", "Lima", "Huancavelica", "Junin", "Pasco", "Huanuco", "Ancash", "San Martin", "Loreto", "Amazonas", "Cajamarca", "La libertad", "Lambayeque", "Piura", "Tumbes"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="ZHA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
