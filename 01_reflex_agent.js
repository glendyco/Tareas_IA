var count1 =0;
var count2 =0;
var count3 =0;
var count4 =0;
var count5 =0;
var count6 =0;
var count7 =0;
var count8 =0;
var stop = false;
var states_list = [false, false, false, false, false, false, false, false];

function reflex_agent(location, state){
    if (state=="DIRTY") return "CLEAN";
    else if (location=="A") return "RIGHT";
    else if (location=="B") return "LEFT";
}


function test(states){
  
       var location = states[0];		
       var state = states[0] == "A" ? states[1] : states[2];
       var action_result = reflex_agent(location, state);
       cont_states();
       document.getElementById("log").innerHTML+="<br>Location: ".concat(states[0]).concat(" | ").concat(states[1]).concat(" | ").concat(states[2]).concat("  ").concat(" -- Action: ").concat(action_result);
       if (action_result == "CLEAN"){
         if (location == "A") states[1] = "CLEAN";
         else if (location == "B") states[2] = "CLEAN";
       }
       else if (action_result == "RIGHT") states[0] = "B";
       else if (action_result == "LEFT") states[0] = "A";
      if(!stop){		
        setTimeout(function(){ test(states); }, 500);
        setTimeout(function(){ ensuciar(); }, 100);
      }else{
          document.getElementById("finalizado").innerHTML = "Ejecucion Finalizada!</b> "
      }
}

var states = ["A","DIRTY","DIRTY"];
test(states); 

//-------

function mostrar_acciones(){

  document.getElementById("estadoactual").innerHTML="<br><b>Estado Actual:</b> ".concat(states[0]).concat(" | ").concat(states[1]).concat(" | ").concat(states[2]).concat("  ");
  document.getElementById("conteoestado1").innerHTML="A | DIRTY |DIRTY -- "+count1;
  document.getElementById("conteoestado2").innerHTML="A | DIRTY | CLEAN -- "+count2;
  document.getElementById("conteoestado3").innerHTML="A | CLEAN | DIRTY -- "+count3;
  document.getElementById("conteoestado4").innerHTML="A | CLEAN | CLEAN -- "+count4;
  document.getElementById("conteoestado5").innerHTML="B | DIRTY | DIRTY -- "+count5;
  document.getElementById("conteoestado6").innerHTML="B | DIRTY | CLEAN -- "+count6;
  document.getElementById("conteoestado7").innerHTML="B | CLEAN | DIRTY -- "+count7;
  document.getElementById("conteoestado8").innerHTML="B | CLEAN | CLEAN -- "+count8;
  document.getElementById("totalvisitados").innerHTML = " <br><b>Visitados 2 veces o mas:</b> "+total_visitados();
  setTimeout(function(){ mostrar_acciones(); }, 1000);

}
mostrar_acciones();



function cont_states(){

  if (states[0] == "A"){
    if (states[1]=="DIRTY"){
      if (states[2] == "DIRTY"){
          //A DIRTY  DIRTY
          count1++;
          if(count1 ==2) states_list[0] = true; 
      }
      else{
        //A DIRTY CLEAN
          count2++;
          if(count2 ==2) states_list[1] = true;
      }
    }
    else{
      if (states[2] == "DIRTY"){
        //A CLEAN  DIRTY
        count3++;
        if(count3 ==2) states_list[2] = true;
      }
      else{
        //A CLEAN CLEAN
        count4++;
        if(count4 ==2) states_list[3] = true;
      }
    }
  }
  else{
    if (states[1]=="DIRTY"){
      if (states[2] == "DIRTY"){
        //B DIRTY  DIRTY
        count5++;
        if(count5 ==2) states_list[4] = true;
      }
      else{
        //B DIRTY CLEAN
        count6++;
        if(count6 ==2) states_list[5] = true;
      }
    }
    else{
      if (states[2] == "DIRTY"){
        //B CLEAN DIRTY
        count7++;
        if(count7 ==2) states_list[6] = true;
       
      }
      else{
        //B CLEAN CLEAN
        count8++;
        if(count8 ==2) states_list[7] = true;
       
        
      }
    }
  }
}

//Conteo de total de estados visitados
function total_visitados(){
var count = 0;
  
 for (let index = 0; index < states_list.length; index++) {

  if(states_list[index]) count++;
 }
 if(count==8 ){stop = true;}
  return count;
}


function ensuciar(){
  var action = Math.floor(Math.random()*4);
  switch(action){
    case 0:
    break;

    case 1:
      states[1] = "DIRTY";
    break;

    case 2:
      states[2] = "DIRTY";
    break;

    case 3:
      states[1] = "DIRTY";
      states[2] = "DIRTY";
    break;
  }
 
}

