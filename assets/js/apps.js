$(document).ready(function(){
    
    var flagpcnh = true;
    var flagpcna = true;
    var flagnpq = true;
    var flagnv = true;
    var flagsec = true;
    
    
    $("#pcnh").on('click', function(){
        
        if(flagpcnh === true){
            $("#txtnh").css("height", "150px");
            $("#txtnh").css("overflow","visible");
            flagpcnh = false;
        }else{
            $("#txtnh").css("height", "100px");
            $("#txtnh").css("overflow","hidden"); 
            flagpcnh = true;
        }
           
    });
      
    $("#pcna").on('click', function(){
        
        if(flagpcna === true){
            $("#txtna").css("height", "100px");
            $("#txtna").css("overflow","visible");
            flagpcna = false;
        }else{
            $("#txtna").css("height", "55px");
            $("#txtna").css("overflow","hidden");
            flagpcna = true;
        }
        
        
    });
    
    
    //  ------         NOTRE POLITIQUE QUALITE  
 
    $("#pcnpq").on('click', function(){
        
        if(flagnpq === true){
            $("#tab").hide();
            $(this).removeClass("glyphicon glyphicon-plus-sign white").addClass("glyphicon glyphicon-minus-sign white");
            $("#txtnpq").addClass("animated bounceInUp");
            $("#txtnpq").css("overflow","visible");
            $("#txtnpq").css("height", "186px");
            $(".npqtxt").css("height", "305px");
            
            
            flagnpq = false;
        }else{
            $("#tab").show();
            $(this).removeClass("glyphicon glyphicon-minus-sign white").addClass("glyphicon glyphicon-plus-sign white");
            $("#txtnpq").addClass("animated bounceInUp");
            $("#txtnpq").css("height", "55px");
            $("#txtnpq").css("overflow","hidden");
            $(".npqtxt").css("height", "174px");


            flagnpq = true;
        }
    
    });
    
//    ----------     NOS VALEURS
    $("#pcnv").on('click', function(){

            $("#tab").show();
            $("#pcnpq").removeClass("glyphicon glyphicon-minus-sign white").addClass("glyphicon glyphicon-plus-sign white");
            $("#txtnpq").addClass("animated bounceInUp");
            $("#txtnpq").css("height", "55px");
            $("#txtnpq").css("overflow","hidden");
            $(".npqtxt").css("height", "174px");


            flagnpq = true;
            $('#Modalnv').modal('show');
          
    });
    
    $("#pcsec").on('click', function(){

            $("#tab").show();
            $("#pcnpq").removeClass("glyphicon glyphicon-minus-sign white").addClass("glyphicon glyphicon-plus-sign white");
            $("#txtnpq").addClass("animated bounceInUp");
            $("#txtnpq").css("height", "55px");
            $("#txtnpq").css("overflow","hidden");
            $(".npqtxt").css("height", "174px");


            flagnpq = true;
            $('#Modalsec').modal('show');
          
    });
    
});
