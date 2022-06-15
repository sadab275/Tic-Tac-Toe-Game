var c=0;
$(".box").click(function(){
 if($(this).html()==""){
 if(c%2==0){
   $(this).html("X");
  }else{$(this).html("O");
 }
 c++;
}
check();
});

function check(){
  var a2=$("#box2").html();
  var a1=$("#box1").html();
  var a3=$("#box3").html();
  var a4=$("#box4").html();
  var a5=$("#box5").html();
  var a6=$("#box6").html();
  var a7=$("#box7").html();
  var a8=$("#box8").html();
  var a9=$("#box9").html();

  if (a1 && a2 && a3){
    if (a1==a2 && a2==a3 && a1==a3){
      alert("winner: "+ a1 );
      $(".box").html("");
      c=0;
    }
  }

  if (a4 && a5 && a6){
    if (a4==a5 && a5==a6 && a4==a6){
      alert("winner: "+ a4 );
      $(".box").html("");
      c=0;
    }
  }

  if (a7 && a8 && a9){
    if (a7==a8 && a8==a9 && a7==a9){
      alert("winner: "+ a7 );
      $(".box").html("");
      c=0;
    }
  }

  if (a1 && a4 && a7){
    if (a1==a4 && a4==a7 && a1==a7){
      alert("winner: "+ a1 );
      $(".box").html("");
      c=0;
    }
  }

  if (a2 && a5 && a8){
    if (a2==a5 && a5==a8 && a2==a8){
      alert("winner: "+ a8 );
      $(".box").html("");
      c=0;
    }
  }

  if (a3 && a6 && a9){
    if (a3==a6 && a6==a9 && a3==a9){
      alert("winner: "+ a3 );
      $(".box").html("");
      c=0;
    }
  }

  if (a1 && a5 && a9){
    if (a1==a5 && a5==a9 && a1==a9){
      alert("winner: "+ a1 );
      $(".box").html("");
      c=0;
    }
  }

  if (a3 && a5 && a7){
    if (a3==a5 && a5==a7 && a3==a7){
      alert("winner: "+ a3 );
      $(".box").html("");
      c=0;
    }
  }

  if(a1 && a2 && a3 && a4 && a5 && a6 && a7 && a8 && a9){
    alert("Match Draw");
  }

}
