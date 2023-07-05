$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            
            },
            sname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true

            },
            password:{
                required:true,
                minlength:6
                
            },
            day:{
                required:true
            },
            gender:{
                required:true,
            },
            messages:{
                fname:{
                required:"Enter first name",
                minlength:"Enter minimum 4 characters"
                }
            }


        }
      
    })
})