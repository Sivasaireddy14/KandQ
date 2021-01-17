function rul(){
  alert("Game Rules:\r\n King:1000 pts \r\n Queen:700 pts \r\n Minister:500 pts \r\n Soldier:300 pts \r\n Police : If you find the thief 100 pts \/ if you can't find then 0 pts \r\n Thief:0 pts \r\n Total rounds: 12  \r\n Have Fun.........!")
}
jQuery(document).ready(function(){
  var p=prompt("Enter your Name");
  alert("Game Rules:\r\n King:1000 pts \r\n Queen:700 pts \r\n Minister:500 pts \r\n Soldier:300 pts \r\n Police : If you find the thief 100 pts \/ if you can't find then 0 pts \r\n Thief:0 pts \r\n Total rounds: 12  \r\n Have Fun.........!")
    var Acount=0;
    var dummy,king ,queen,minister,soldier,police,theif;
    var set,scset;
    var r1,r2,r3,r4,r5,r6;
    var ran,ran1,ran2,ran3,ran4,ran5,ran6;
    var score;
    var rant;
    var x;
    var s1=s2=s3=s4=s5=s6=0;
    var win;
    $("#player").html(p);
    $("#player1").html(p);
    if(p==='')||(p===null)
    {
      $("#player").html("Guest");
      $("#player1").html("Guest");
    }
    var dis=$("#bin")
    var msg="FIND THE THEIF...!"
    var msg1="SELECT YOUR CARD"
  $("#but").click(function(){
    setTimeout(function(){
      dis.fadeOut(1000,function(){
      dis.html(msg1)
      dis.css("margin-left","32%")
      dis.fadeIn(1000)
      dis.fadeOut(2000)
      });
    },2000);
   king="url('https://static.toiimg.com/photo/msid-76889998/76889998.jpg?503418')";
   queen="url('https://www.india.com/wp-content/uploads/2017/03/Anushka-Shetty-1.jpg')";
   minister="url('https://static.theprint.in/wp-content/uploads/2020/04/PM-Modi-speech-2-696x421.jpeg')";
   soldier="url('https://st1.bollywoodlife.com/wp-content/uploads/2017/08/Vivegam_5-reasons.jpg')";
   police="url('https://www.wallsnapy.com/img_gallery/surya-hd-images-singam-1059401.png')";
   theif="url('https://www.filmibeat.com/ph-big/2011/09/1317287280658708.jpg')";
   count=0;
   rant='';
   scset=[0,100,300,500,700,1000];

   set=[dummy,king,queen,minister,soldier,police,theif];

    r1= Math.floor(Math.random()*(6-1+1))+1;
    ran1=set[r1];
    set.splice(r1,1)
    r2= Math.floor(Math.random()*(5-1+1))+1;
     ran2=set[r2];
    set.splice(r2,1)
    r3= Math.floor(Math.random()*(4-1+1))+1;
   ran3=set[r3];
    set.splice(r3,1)
   r4= Math.floor(Math.random()*(3-1+1))+1;
   ran4=set[r4];
    set.splice(r4,1)
   r5= Math.floor(Math.random()*(2-1+1))+1;
   ran5=set[r5];
    set.splice(r5,1)
   r6= Math.floor(Math.random()*(1-1+1))+1;
   ran6=set[r6];
    set.splice(r6,1)
    count=0;
   Acount=Acount+1;
   $(".scor").removeClass("sc1")
    $("div.c1").removeClass("d1")
    $("div.c2").removeClass("d2")
    $("div.c3").removeClass("d3")
    $("div.c4").removeClass("d4")
    $("div.c5").removeClass("d5")
    $("div.c6").removeClass("d6")
    $("div.c1").removeAttr("style")
    $("div.c2").removeAttr("style")
    $("div.c3").removeAttr("style")
    $("div.c4").removeAttr("style")
    $("div.c5").removeAttr("style")
    $("div.c6").removeAttr("style")
    $("div.g").attr("id","c4")
      setTimeout(function(){
    $("div.c1").removeAttr("id")
    $("div.c1").removeClass("d11")
    $("div.c1").addClass("d1")
    $("div.c2").removeAttr("id")
    $("div.c2").removeClass("d22")
    $("div.c2").addClass("d2")
    $("div.c3").removeAttr("id")
    $("div.c3").removeClass("d33")
    $("div.c3").addClass("d3")
    $("div.c4").removeAttr("id")
    $("div.c4").removeClass("d44")
    $("div.c4").addClass("d4")
    $("div.c5").removeAttr("id")
    $("div.c5").removeClass("d55")
    $("div.c5").addClass("d5")
    $("div.c6").removeAttr("id")
    $("div.c6").removeClass("d66")
    $("div.c6").addClass("d6")},2000);
    $("#but").attr("disabled","true")
  });

var div1=$("div.c1")
var div2=$("div.c2")
var div3=$("div.c3")
var div4=$("div.c4")
var div5=$("div.c5")
var div6=$("div.c6")
setTimeout(function(){
div1.click(function(){
  if(count===0)
  {
    ran=ran1;
    count=1;
    if(ran1==police){
      dis.fadeOut(1000,function(){
      dis.html(msg)
      dis.fadeIn(1000)
      dis.fadeOut(2000)
      });
      rant=ran1;
      count=0;
    }
    if(count===1){
      $(".rev").removeAttr("disabled")
    }
  div1.fadeOut(1000,function(){
div1.css("background",ran1)
div1.css("background-size","280px 300px")
div1.fadeIn(1000)
});
}
});


div2.click(function(){
  if(count===0)
  {
    ran=ran2;
    count=1;
    if(ran2==police){
      dis.fadeOut(1000,function(){
      dis.html(msg)
      dis.fadeIn(1000)
      dis.fadeOut(2000)
      });
      rant=ran2;
      count=0;
    }
    if(count===1){
      $(".rev").removeAttr("disabled")
    }
  div2.fadeOut(1000,function(){
div2.css("background",ran2)
div2.css("background-size","280px 300px")
div2.fadeIn(1000)
});
}
});


div3.click(function(){
  if(count===0)
  {
        ran=ran3;
    count=1;
    if(ran3==police){
      dis.fadeOut(1000,function(){
      dis.html(msg)
      dis.fadeIn(1000)
      dis.fadeOut(2000)
      });
      rant=ran3;
      count=0;
    }
    if(count===1){
      $(".rev").removeAttr("disabled")
    }
  div3.fadeOut(1000,function(){
div3.css("background",ran3)
div3.css("background-size","280px 300px")
div3.fadeIn(1000)
});
}
});


div4.click(function(){
  if(count===0)
  {
        ran=ran4;
    count=1;
    if(ran4==police){
      dis.fadeOut(1000,function(){
      dis.html(msg)
      dis.fadeIn(1000)
      dis.fadeOut(2000)
      });
      rant=ran4;
      count=0;
    }
    if(count===1){
      $(".rev").removeAttr("disabled")
    }
  div4.fadeOut(1000,function(){
div4.css("background",ran4)
div4.css("background-size","280px 300px")
div4.fadeIn(1000)
});
}
});

div5.click(function(){
  if(count===0)
  {
        ran=ran5;
    count=1;
    if(ran5==police){
    dis.fadeOut(1000,function(){
    dis.html(msg)
    dis.fadeIn(1000)
    dis.fadeOut(2000)
    });
      rant=ran5;
      count=0;
    }
    if(count===1){
      $(".rev").removeAttr("disabled")
    }
  div5.fadeOut(1000,function(){
div5.css("background",ran5)
div5.css("background-size","280px 300px")
div5.fadeIn(1000)
});
}
});

div6.click(function(){
  if(count===0)
  {
        ran=ran6;
    count=1;
    if(ran6==police){
      dis.fadeOut(1000,function(){
      dis.html(msg)
      dis.fadeIn(1000)
      dis.fadeOut(2000)
      });
      rant=ran6;
      count=0;
    }
    if(count===1){
      $(".rev").removeAttr("disabled")
    }
  div6.fadeOut(1000,function(){
div6.css("background",ran6)
div6.css("background-size","280px 300px")
div6.fadeIn(1000)
});
}
});
},4000);

$(".rev").click(function(){
div1.fadeOut(1000,function(){
div1.css("background",ran1)
div1.css("background-size","280px 300px")
div1.fadeIn(1000)
});

div2.fadeOut(1000,function(){
div2.css("background",ran2)
div2.css("background-size","280px 300px")
div2.fadeIn(1000)
});

div3.fadeOut(1000,function(){
div3.css("background",ran3)
div3.css("background-size","280px 300px")
div3.fadeIn(1000)
});

div4.fadeOut(1000,function(){
div4.css("background",ran4)
div4.css("background-size","280px 300px")
div4.fadeIn(1000)
});

div5.fadeOut(1000,function(){
div5.css("background",ran5)
div5.css("background-size","280px 300px")
div5.fadeIn(1000)
});

div6.fadeOut(1000,function(){
div6.css("background",ran6)
div6.css("background-size","280px 300px")
div6.fadeIn(1000)
});
$(".rev").attr("disabled","true")
function sho(ran,rant){
  if((ran===king)&&(rant===''))
  {
    score=1000;
  }
  if((ran===queen)&&(rant===''))
  {
    score=700;
  }
  if((ran===minister)&&(rant===''))
  {
    score=500;
  }
  if((ran===soldier)&&(rant===''))
  {
    score=300;
  }
  if(ran===theif)
  {
    score=0;
  }
  if((rant===police)&&(ran===theif))
  {
    score=100;
  }
  if((rant===police)&&((ran===king)||(ran===queen)||(ran===minister)||(ran===soldier)))
  {
    score=0;
  }
}
sho(ran,rant);
function ind(arr,sco){
  for (var i = 0; i < arr.length; i++) {
  if(arr[i]===sco){
    x=i;
    break;
  }
  }
  return x;
}
p1=ind(scset,score);
t1=scset[p1];
s1=s1+scset[p1];
scset.splice(p1,1);
p2=Math.floor(Math.random()*scset.length);
t2=scset[p2];
s2=s2+scset[p2];
scset.splice(p2,1);
p3=Math.floor(Math.random()*scset.length);
t3=scset[p3];
s3=s3+scset[p3];
scset.splice(p3,1);
p4=Math.floor(Math.random()*scset.length);
t4=scset[p4];
s4=s4+scset[p4];
scset.splice(p4,1);
p5=Math.floor(Math.random()*scset.length);
t5=scset[p5];
s5=s5+scset[p5];
scset.splice(p5,1);
p6=Math.floor(Math.random()*scset.length);
t6=scset[p6];
s6=s6+scset[p6];
$(".scor").html(t1)
$(".scor").addClass("sc1")
$("table.fin #s1").html(s1);
$("table.fin #s2").html(s2);
$("table.fin #s3").html(s3);
$("table.fin #s4").html(s4);
$("table.fin #s5").html(s5);
$("table.fin #s6").html(s6);
row="<tr><td>"+ t1+"</td><td>"+ t2+"</td><td>"+ t3+"</td><td>"+ t4+"</td><td>"+ t5+"</td><td>"+ t6+"</td></tr>"
$('table.tab .tbod').append(row);
if(Acount<12)
{
setTimeout(function(){
$(".but").removeAttr("disabled")
   $(".scor").html('')
},4000);
}
if(Acount==12){
  win=Math.max(s1,s2,s3,s4,s5,s6);
setTimeout(function(){
  if(s1===win){
    $(".scor").html('');
    ws="WINNER WINNER";
    ws1="RAJA RANI DINNER...!"
  }
  else{
    $(".scor").html('')
    ws="BETTER LUCK";
    ws1="NEXT TIME..........!";
  }
  $("#win").html(ws);
  $("#wint").html(ws1);
},1000);
}
setTimeout(function(){
  div1.css("background","url('https://opengameart.org/sites/default/files/card%20back%20red.png')")
  div1.css("background-size","280px 300px")
  div2.css("background","url('https://opengameart.org/sites/default/files/card%20back%20red.png')")
  div2.css("background-size","280px 300px")
  div3.css("background","url('https://opengameart.org/sites/default/files/card%20back%20red.png')")
  div3.css("background-size","280px 300px")
  div4.css("background","url('https://opengameart.org/sites/default/files/card%20back%20red.png')")
  div4.css("background-size","280px 300px")
  div5.css("background","url('https://opengameart.org/sites/default/files/card%20back%20red.png')")
  div5.css("background-size","280px 300px")
  div6.css("background","url('https://opengameart.org/sites/default/files/card%20back%20red.png')")
  div6.css("background-size","280px 300px")
},3000);
setTimeout(function(){
  $(".d1").addClass("d11")
  $(".d2").addClass("d22")
  $(".d3").addClass("d33")
  $(".d4").addClass("d44")
  $(".d5").addClass("d55")
  $(".d6").addClass("d66")
},3000);
});
});
