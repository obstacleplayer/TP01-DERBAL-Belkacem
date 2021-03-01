function matchpassword() 
{
    var pw1 = $("input[name='txtNewPassword']").val();

    var pw2 = $("input[name='txtConfirmPassword']").val();

    if(pw1 != pw2 ) 
    {   
        alert("Passwords did not match");  
    }
    else
     {  
        alert("Password created successfully");  
      }  
}