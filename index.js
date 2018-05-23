function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine === undefined || katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    var firstPerson = katzDeliLine.shift();
    return `Currently serving ${firstPerson}`;
  }
  
}

function currentLine(){
  
}

//var katzDeliLine = [];
 
//console.log(takeANumber(katzDeliLine, "Ada"));
//console.log(takeANumber(katzDeliLine, "Grace"));