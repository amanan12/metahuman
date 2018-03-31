var stored = window.localStorage;
var arr;

$(".metaImg").hide();

var meta = ["Alien", "Metahuman", "Human", "In Human", "Mutant"].sort();

function process(){
  var str = "";
      meta.unshift("Select Type");
  
  for(var i = 0; i < meta.length ; i++) {
    
     str += "<option value='" + i + "'>" + meta[i] + "</option>";
  }
  
  $(".metaType").html(str);
}
process();

var gen = ["Male", "Female"].sort();

function process1(){
  var str = "";
      gen.unshift("Select Gender");
  
  for(var i = 0; i < gen.length ; i++) {
    
     str += "<option value='" + i + "'>" + gen[i] + "</option>";
  }
  
  $(".gender").html(str);
}
process1();

function showValue(newValue){
  
  if(newValue == 0){
    $("#range").css("color", "#000000");
  } else if(newValue == 1){
    $("#range").css("color", "#EB4747");
  } else if(newValue == 2){
    $("#range").css("color", "#F53D3D");
  } else if(newValue == 3){
    $("#range").css("color", "#FF3333");
  } else if(newValue == 4){
    $("#range").css("color", "#FF0000");
  } else if(newValue == 5){
    $("#range").css("color", "#F20D0D");
  } else if(newValue == 6){
    $("#range").css("color", "#E61919");
  } else if(newValue == 7){
    $("#range").css("color", "#D92626");
  } else if(newValue == 8){
    $("#range").css("color", "#CC3333");
  } else if(newValue == 9){
    $("#range").css("color", "#A32929");
  } else if(newValue == 10){
    $("#range").css("color", "#6B2E2E");
  }
  
  $("#range").val("Threat Level: " + newValue);
  
}     

$(".modalS").click(function(){
  $("#myModal").modal("show");
});

$(".uploading").change(function(){
  var a = $(".uploading").val();
  $(".metaImg").attr("src", a);
  
  if(a !== ""){
    $(".metaImg").show();
  }
  
});

var file = [];

$("#btn1").click(function(){
  
  var fName = $(".firstN").val();
  var lName = $(".lastN").val();
  var metaT = parseInt($(".metaType option:selected").val());
  var metaG = parseInt($(".gender option:selected").val());
  var img = $(".uploading").val();
  var threat = $("#range").val();
  
  file.push({"first_name": fName, "last_name": lName, "meta_type": metaT, "meta_gender": metaG, "img": img, "threat_level": threat});
  
  push();
  
  $(".firstN").val("");
  $(".lastN").val("");
  $(".metaType").val(0);
  $(".gender").val(0);
  $(".uploading").val("");
  //$(".valu").slider({value: [0]});
  $("#range").val("");
  $(".metaImg").hide();
  
  get();
  
  $("#myModal").modal("hide");
  
});

function push(){
  stored.setItem("file", JSON.stringify(file));
}

function get(){
  arr = JSON.parse( stored.getItem("file") );
  update(arr);
}

function update(stuff){
  
  var str = "";
  
  stuff.forEach(function(list){
    
    str += "<div class='flame col-lg-4'><img class='proImg' src='" + list.img + "' /><p>" + "Name: " + list.first_name + " " + list.last_name + "<br>" + "Type: " + checkT( list.meta_type ) + "<br>" + "Gender: " + checkG( list.meta_gender ) + "<br>" + list.threat_level + "</p></div>";
    
  });
  
  $(".row").html(str);
  
}

function checkT(type){
  
  if(type == 1){ 
    return "Alien";
  } else if(type == 2){ 
    return "Human";
  } else if(type == 3){
    return "In Human"
  } else if(type == 4){
    return "Metahuman"
  } else if(type == 5){
    return "Mutant";
  }
  
}

function checkG(gender){
  
  if(gender == 1){
    return "Female";
  } else {
    return "Male";
  }
  
}

// http://cdn.wallpapersafari.com/35/60/qPaFez.jpg

// http://foundation.zurb.com/sites/docs/v/5.5.3/components/range_slider.html

// http://emorywheel.com/wp-content/uploads/2016/10/ac1fafb4cef5bb6bf83b03a08c3d20d3.jpg
