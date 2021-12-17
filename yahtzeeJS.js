x = 0;
y1 = 0;
y2 = 0;
y3 = 0;
y4 = 0;
y5 = 0;
y6 = 0;
y7 = 0;
y8 = 0;
y9 = 0;
y10 = 0;
y11 = 0;
y12 = 0;
y13 = 0;
y14 = 0;
y15 = 0;

onesF = 0;
twosF = 0;
threesF = 0;
foursF = 0;
fivesF = 0;
sixesF = 0;
tokF = 0;
fokF = 0;
fhF = 0;
ssF = 0;
lsF = 0;
yaF = 0;
chF = 0;
yabF = 0;



function Roll1() {
    

    if(x < 3){
        x = x + 1;

    if(document.getElementById("b1").innerHTML == "Lock"){

    var rollResult = Math.floor(Math.random() * 6) + 1;
    var pic = document.getElementById("1");
     if (rollResult == 1) [pic.setAttribute('src', '1.png'), pic.value = 1];
    else if (rollResult == 2) [pic.setAttribute('src', '2.png'), pic.value = 2];
    else if (rollResult == 3) [pic.setAttribute('src', '3.png'), pic.value = 3];
    else if (rollResult == 4) [pic.setAttribute('src', '4.png'), pic.value = 4];
    else if (rollResult == 5) [pic.setAttribute('src', '5.png'), pic.value = 5];
    else  [pic.setAttribute('src', '6.png'), pic.value = 6];
    }

    if(document.getElementById("b2").innerHTML == "Lock"){

    var rollResult = Math.floor(Math.random() * 6) + 1;
    var pic = document.getElementById("2");
    if (rollResult == 1) [pic.setAttribute('src', '1.png'), pic.value = 1];
    else if (rollResult == 2) [pic.setAttribute('src', '2.png'), pic.value = 2];
    else if (rollResult == 3) [pic.setAttribute('src', '3.png'), pic.value = 3];
    else if (rollResult == 4) [pic.setAttribute('src', '4.png'), pic.value = 4];
    else if (rollResult == 5) [pic.setAttribute('src', '5.png'), pic.value = 5];
    else  [pic.setAttribute('src', '6.png'), pic.value = 6];
    }

    if(document.getElementById("b3").innerHTML == "Lock"){

    var rollResult = Math.floor(Math.random() * 6) + 1;
    var pic = document.getElementById("3");
    if (rollResult == 1) [pic.setAttribute('src', '1.png'), pic.value = 1];
    else if (rollResult == 2) [pic.setAttribute('src', '2.png'), pic.value = 2];
    else if (rollResult == 3) [pic.setAttribute('src', '3.png'), pic.value = 3];
    else if (rollResult == 4) [pic.setAttribute('src', '4.png'), pic.value = 4];
    else if (rollResult == 5) [pic.setAttribute('src', '5.png'), pic.value = 5];
    else  [pic.setAttribute('src', '6.png'), pic.value = 6];
    }

    if(document.getElementById("b4").innerHTML == "Lock"){

    var rollResult = Math.floor(Math.random() * 6) + 1;
    var pic = document.getElementById("4");
    if (rollResult == 1) [pic.setAttribute('src', '1.png'), pic.value = 1];
    else if (rollResult == 2) [pic.setAttribute('src', '2.png'), pic.value = 2];
    else if (rollResult == 3) [pic.setAttribute('src', '3.png'), pic.value = 3];
    else if (rollResult == 4) [pic.setAttribute('src', '4.png'), pic.value = 4];
    else if (rollResult == 5) [pic.setAttribute('src', '5.png'), pic.value = 5];
    else  [pic.setAttribute('src', '6.png'), pic.value = 6];
    }

    if(document.getElementById("b5").innerHTML == "Lock"){

    var rollResult = Math.floor(Math.random() * 6) + 1;
    var pic = document.getElementById("5");
    if (rollResult == 1) [pic.setAttribute('src', '1.png'), pic.value = 1];
    else if (rollResult == 2) [pic.setAttribute('src', '2.png'), pic.value = 2];
    else if (rollResult == 3) [pic.setAttribute('src', '3.png'), pic.value = 3];
    else if (rollResult == 4) [pic.setAttribute('src', '4.png'), pic.value = 4];
    else if (rollResult == 5) [pic.setAttribute('src', '5.png'), pic.value = 5];
    else  [pic.setAttribute('src', '6.png'), pic.value = 6];
        }
    }

    if (x > 0){

        ones = 0;
        twos = 0;
        threes = 0;
        fours = 0;
        fives = 0;
        sixes = 0;

        // ones total //
        if (document.getElementById("1").value == "1") ones = ones + 1;
        if (document.getElementById("2").value == "1") ones = ones + 1;
        if (document.getElementById("3").value == "1") ones = ones + 1;
        if (document.getElementById("4").value == "1") ones = ones + 1;
        if (document.getElementById("5").value == "1") ones = ones + 1;
        console.log(ones);

        // twos total //
        if (document.getElementById("1").value == "2") twos = twos + 2;
        if (document.getElementById("2").value == "2") twos = twos + 2;
        if (document.getElementById("3").value == "2") twos = twos + 2;
        if (document.getElementById("4").value == "2") twos = twos + 2;
        if (document.getElementById("5").value == "2") twos = twos + 2;
        console.log(twos);

        // threes total //
        if (document.getElementById("1").value == "3") threes = threes + 3;
        if (document.getElementById("2").value == "3") threes = threes + 3;
        if (document.getElementById("3").value == "3") threes = threes + 3;
        if (document.getElementById("4").value == "3") threes = threes + 3;
        if (document.getElementById("5").value == "3") threes = threes + 3;
        console.log(threes);

        // fours total //
        if (document.getElementById("1").value == "4") fours = fours + 4;
        if (document.getElementById("2").value == "4") fours = fours + 4;
        if (document.getElementById("3").value == "4") fours = fours + 4;
        if (document.getElementById("4").value == "4") fours = fours + 4;
        if (document.getElementById("5").value == "4") fours = fours + 4;
        console.log(fours);

        // fives total //
        if (document.getElementById("1").value == "5") fives = fives + 5;
        if (document.getElementById("2").value == "5") fives = fives + 5;
        if (document.getElementById("3").value == "5") fives = fives + 5;
        if (document.getElementById("4").value == "5") fives = fives + 5;
        if (document.getElementById("5").value == "5") fives = fives + 5;
        console.log(fives);

        // sixes total //
        if (document.getElementById("1").value == "6") sixes = sixes + 6;
        if (document.getElementById("2").value == "6") sixes = sixes + 6;
        if (document.getElementById("3").value == "6") sixes = sixes + 6;
        if (document.getElementById("4").value == "6") sixes = sixes + 6;
        if (document.getElementById("5").value == "6") sixes = sixes + 6;
        console.log(sixes);
        
    
       
    
       DiceOne = document.getElementById("1").value;
       DiceTwo = document.getElementById("2").value;
       DiceThree = document.getElementById("3").value;
       DiceFour = document.getElementById("4").value;
       DiceFive = document.getElementById("5").value;

       const diceTotal = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive];

       var uniq = diceTotal.reduce(function(a,b){
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
        },[]);
        uniq.sort(function(a, b){return a - b});
        console.log(uniq);

       // sorts the dice in order //
       diceTotal.sort(function(a, b){return a - b});
       console.log(diceTotal);


       //total of top section //
       totalTop = onesF + twosF + threesF + foursF + fivesF+ sixesF;



       // 3 of a kind //
       if(diceTotal[2] == diceTotal[0] && diceTotal[2] == diceTotal[1] || diceTotal[2] == diceTotal[3] && diceTotal[2] == diceTotal[4] || diceTotal[2] == diceTotal[1] && diceTotal[2] == diceTotal[3]){
           threeKind = DiceOne + DiceTwo + DiceThree + DiceFour + DiceFive;
           console.log(threeKind);
       }else{
           threeKind = 0;
       }

       // 4 of a kind //
       if(diceTotal[2] == diceTotal[0] && diceTotal[2] == diceTotal[1] && diceTotal[2] == diceTotal[3] || diceTotal[2] == diceTotal[1] && diceTotal[2] == diceTotal[3] && diceTotal[2] == diceTotal[4]){
            fourKind = DiceOne + DiceTwo + DiceThree + DiceFour + DiceFive;
            console.log(fourKind);
       }else{
           fourKind = 0;
      }

      // full house //
      if(diceTotal[0] == diceTotal[1] && diceTotal[2] == diceTotal[3] && diceTotal[2] == diceTotal[4] || diceTotal[0] == diceTotal[1] && diceTotal[0] == diceTotal[2] && diceTotal[3] == diceTotal[4]){
          fullHouse = 25;
          console.log(fullHouse);
      }else{
          fullHouse = 0;
      }

      // small straight //
      if(uniq[0] + 1 == uniq[1] && uniq[0] + 2 == uniq[2] && uniq[0] + 3 == uniq[3] || uniq[1] + 1 == uniq[2] && uniq[1] + 2 == uniq[3] && uniq[1] + 3 == uniq[4]){
          smallStraight = 30;
          console.log(smallStraight);
      }else{
          smallStraight = 0;
      }

      // large straight //
      if(diceTotal[0] + 1 == diceTotal[1] && diceTotal[0] + 2 == diceTotal[2] && diceTotal[0] + 3 == diceTotal[3] && diceTotal[0] + 4 == diceTotal[4]){
          largeStraight = 40;
          console.log(largeStraight);
      }else{
          largeStraight = 0;
      }

      // yahtzee //
      if(diceTotal[0] == diceTotal[4]){
        yahtzee = 50;
        console.log(yahtzee);

      }else{
          yahtzee = 0;
      }

      // chance //
        chance = DiceOne + DiceTwo + DiceThree + DiceFour + DiceFive;
        console.log(chance);

     // yahtzee bonus //
     if(diceTotal[0] == diceTotal[4] && y13 == 1){
         yahtzeeBonus = 100;
         console.log(yahtzeeBonus);
     }else{
         yahtzeeBonus = 0;
     }

     // grand total //
     total = totalTop + tokF + fokF + ssF + lsF + fhF + chF+ yaF + yabF;

     if(y1 == 0){
     var buttonOne = document.getElementById("score1");
     buttonOne.innerHTML = ones;
    }
    if(y2 == 0){
     var buttonOne = document.getElementById("score2");
     buttonOne.innerHTML = twos;
    }
    if(y3 == 0){
     var buttonOne = document.getElementById("score3");
     buttonOne.innerHTML = threes;
    }
    if(y4 == 0){
     var buttonOne = document.getElementById("score4");
     buttonOne.innerHTML = fours;
    }
    if(y5 == 0){
     var buttonOne = document.getElementById("score5");
     buttonOne.innerHTML = fives;
    }
    if(y6 == 0){
     var buttonOne = document.getElementById("score6");
     buttonOne.innerHTML = sixes;
    }
    if(y7 == 0){
     var buttonOne = document.getElementById("score7");
     buttonOne.innerHTML = totalTop;
    }
    if(y8 == 0){
     var buttonOne = document.getElementById("score8");
     buttonOne.innerHTML = threeKind;
    }
    if(y9 == 0){
     var buttonOne = document.getElementById("score9");
     buttonOne.innerHTML = fourKind;
    }
    if(y10 == 0){
     var buttonOne = document.getElementById("score10");
     buttonOne.innerHTML = fullHouse;
    }
    if(y11 == 0){
     var buttonOne = document.getElementById("score11");
     buttonOne.innerHTML = smallStraight;
    }
    if(y12 == 0){
     var buttonOne = document.getElementById("score12");
     buttonOne.innerHTML = largeStraight;
    }
     if(y13 == 0){
     var buttonOne = document.getElementById("score13");
     buttonOne.innerHTML = yahtzee;
     }
     if(y14 == 0){
     var buttonOne = document.getElementById("score14");
     buttonOne.innerHTML = chance;
     }
     if(y15 == 0){
     var buttonOne = document.getElementById("score15");
     buttonOne.innerHTML = yahtzeeBonus;
     }
     var buttonOne = document.getElementById("score16");
     buttonOne.innerHTML = total;


    }

}

function ResetScores(){

    if(y1 == 0) {document.getElementById("score1").innerHTML = 0;}
    if(y2 == 0) {document.getElementById("score2").innerHTML = 0;}
    if(y3 == 0) {document.getElementById("score3").innerHTML = 0;}
    if(y4 == 0) {document.getElementById("score4").innerHTML = 0;}
    if(y5 == 0) {document.getElementById("score5").innerHTML = 0;}
    if(y6 == 0) {document.getElementById("score6").innerHTML = 0;}
    if(y8 == 0) {document.getElementById("score8").innerHTML = 0;}
    if(y9 == 0) {document.getElementById("score9").innerHTML = 0;}
    if(y10 == 0) {document.getElementById("score10").innerHTML = 0;}
    if(y11 == 0) {document.getElementById("score11").innerHTML = 0;}
    if(y12 == 0) {document.getElementById("score12").innerHTML = 0;}
    if(y13 == 0) {document.getElementById("score13").innerHTML = 0;}
    if(y14 == 0) {document.getElementById("score14").innerHTML = 0;}
    if(y15 == 0) {document.getElementById("score15").innerHTML = 0;}


    var pic = document.getElementById("1");
    pic.src = "1.png";
    var pic = document.getElementById("2");
    pic.src = "1.png";
    var pic = document.getElementById("3");
    pic.src = "1.png";
    var pic = document.getElementById("4");
    pic.src = "1.png";
    var pic = document.getElementById("5");
    pic.src = "1.png";

    var elem = document.getElementById("b1");
    elem.innerHTML = "Lock";
    var elem = document.getElementById("b2");
    elem.innerHTML = "Lock";
    var elem = document.getElementById("b3");
    elem.innerHTML = "Lock";
    var elem = document.getElementById("b4");
    elem.innerHTML = "Lock";
    var elem = document.getElementById("b5");
    elem.innerHTML = "Lock";




}



function Checker1(){
    const S1 = document.getElementById('score1');
    S1.disabled = true;
    onesF = ones;
    x = 0;
    y1 = 1;

    document.getElementById("score1").style.background='#000000';
}
function Checker2(){
    const S2 = document.getElementById('score2');
    S2.disabled = true;
    twosF = twos;
    x = 0;
    y2 = 1;

    document.getElementById("score2").style.background='#000000';
}

function Checker3(){
    const S3 = document.getElementById('score3');
    S3.disabled = true;
    threesF = threes;
    x = 0;
    y3 = 1;

    document.getElementById("score3").style.background='#000000';
}

function Checker4(){
    const S4 = document.getElementById('score4');
    S4.disabled = true;
    foursF = fours;
    x = 0;
    y4 = 1;

    document.getElementById("score4").style.background='#000000';
}

function Checker5(){
    const S5 = document.getElementById('score5');
    S5.disabled = true;
    fivesF = fives;
    x = 0;
    y5 = 1;

    document.getElementById("score5").style.background='#000000';
}

function Checker6(){
    const S6 = document.getElementById('score6');
    S6.disabled = true;
    sixesF = sixes;
    x = 0;
    y6 = 1;

    document.getElementById("score6").style.background='#000000';
}

function Checker8(){
    const S8 = document.getElementById('score8');
    S8.disabled = true;
    tokF = threeKind;
    x = 0;
    y8 = 1;

    document.getElementById("score8").style.background='#000000';
}

function Checker9(){
    const S9 = document.getElementById('score9');
    S9.disabled = true;
    fokF = fourKind;
    x = 0;
    y9 = 1;

    document.getElementById("score9").style.background='#000000';
}

function Checker10(){
    const S10= document.getElementById('score10');
    S10.disabled = true;
    fhF = fullHouse
    x = 0;
    y10= 1;

    document.getElementById("score10").style.background='#000000';
}

function Checker11(){
    const S11= document.getElementById('score11');
    S11.disabled = true;
    ssF = smallStraight;
    x = 0;
    y11= 1;

    document.getElementById("score11").style.background='#000000';
}

function Checker12(){
    const S12= document.getElementById('score12');
    S12.disabled = true;
    lsF = largeStraight;
    x = 0;
    y12 = 1;

    document.getElementById("score12").style.background='#000000';
}

function Checker13(){
    const S13= document.getElementById('score13');
    S13.disabled = true;
    yaF = yahtzee;
    x = 0;
    y13 = 1;

    document.getElementById("score13").style.background='#000000';
}

function Checker14(){
    const S14= document.getElementById('score14');
    S14.disabled = true;
    chF = chance;
    x = 0;
    y14 = 1;

    document.getElementById("score14").style.background='#000000';
}

function Checker15(){
    const S15= document.getElementById('score15');
    S15.disabled = true;
    yabF = yahtzeeBonus
    x = 0;
    y15 = 1;

    document.getElementById("score15").style.background='#000000';
}


function Dice1(){

    var elem = document.getElementById("b1");
    if(elem.innerHTML == "Lock") elem.innerHTML = "Unlock";
    else elem.innerHTML = "Lock";

    }


function Dice2(){

    var elem = document.getElementById("b2");
    if(elem.innerHTML == "Lock") elem.innerHTML = "Unlock";
    else elem.innerHTML = "Lock";
    
    }

function Dice3(){

    var elem = document.getElementById("b3");
    if(elem.innerHTML == "Lock") elem.innerHTML = "Unlock";
    else elem.innerHTML = "Lock";
    
    }
    
    
function Dice4(){
    
    var elem = document.getElementById("b4");
    if(elem.innerHTML == "Lock") elem.innerHTML = "Unlock";
    else elem.innerHTML = "Lock";
        
    }
    
function Dice5(){
    
    var elem = document.getElementById("b5");
    if(elem.innerHTML == "Lock") elem.innerHTML = "Unlock";
    else elem.innerHTML = "Lock";
            
    }
