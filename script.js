var user=document.getElementById('field1');
var rolex=/^([admin]+)$/
var password=document.getElementById('field2');
var err2=document.getElementById('err2');
var rolex2=/^([12345]+)$/
function validateuser(){
   

    if(user.value.trim()=='')
    {   console.log(user.value)
        err1.innerText="Enter username";
        user.style.border='2px solid red';
        return false;
    }
    else if(!user.value.match(rolex))
    {
        err1.innerText="Invalid username";
        user.style.border='2px solid red';
        return false;  
    }
    else if(user.value.match(rolex))
    {   err1.innerText="";
        user.style.border='2px solid green';
        return true; 
    }
    
}
function validatepass(){
 
    if(password.value.trim()=='')
    {
        err2.innerText="Enter password";
        password.style.border='2px solid red';
        return false;
    }
    else if(!password.value.match(rolex2))
    {
        err2.innerText="Invalid password";
        password.style.border='2px solid red';
        return false;
    }
    else if(password.value.match(rolex2))
    {
        err2.innerText="";
        password.style.border='2px solid green';
        return true;
    }
   
}
function verify(callback)
{
    

    if(validateuser() && validatepass())
    {
        callback();
    return true;
    }
    else
    {
    return false;
    }
}    
function redirect()
{
    window.location.href="sucess.html";
}

