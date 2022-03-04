

$(document).ready(function(){
    $(".inpt1").click(function valid()
    {
        nameValidate();
        emailValidate();
        mobileNoValidate();
        countryValidate();
        genderValidate();
        return false;
    });
           
			//top - bottom - left - right
        });
 /* function valid()
        {
            nameValidate();
            emailValidate();
            mobileNoValidate();
            countryValidate();
            genderValidate();
        //    return false;
    
           */    


    function nameValidate()
    {
        var fname=document.getElementById("name").value;
        if(fname==" "||fname==""||fname==null)       
        {
        document.getElementById("nm").innerHTML="Please enter your name";
        document.getElementById("name").focus();
     //   document.getElementById("name").focus().style="border:1px solid red";
       return false;
        }
        else 
        {
                     //var ch=/^[A-Za-z]+$/;     //+$/;
                     var ch=/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
                    if(!ch.test(fname))
                            {
            //alert("hi");
                        document.getElementById("nm").innerHTML="Please enter only characters";
        //document.getElementById("name").select();
                        return false;
                            }
                 else 
                 document.getElementById("nm").innerHTML=""; 
       
        }
        //document.getElementById("nm").innerHTML.style.display="none";
        return true;
      /*  if(fname.length>15)
        {
            document.getElementById("nm").innerHTML="length should not more than 15";
        }*/
    }
    function emailValidate()
    {
        var femail=document.getElementById("email").value;
        var emailValid = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/; 
        if(femail==""||femail==" "||femail==null)
        {
           document.getElementById("eml").innerHTML="Please enter your email address";
           document.getElementById("email").focus();
          return false;
        }
        else
        {
            if(!emailValid.test(femail))
            {
            document.getElementById("eml").innerHTML="Please enter valid email address";
            return false;
            }
            else
            document.getElementById("eml").innerHTML="";
        }
        return true;
    }
    function mobileNoValidate()
    {
        var ftel=document.getElementById("tel").value;
        var phValid=/^\d{10}$/;
        if(ftel==""||ftel==" "||ftel==null)
        {
           document.getElementById("ph").innerHTML="Please enter your mobile number";
           document.getElementById("tel").focus();
          return false;
        }
        else
        {
            if(!ftel.match(phValid))
            {
            document.getElementById("ph").innerHTML="Please enter valid phone number";
            return false;
            }
            else
            document.getElementById("ph").innerHTML="";
        }
        return true;
    }
    function countryValidate()
    {
        var foptn=document.getElementById("optn").value;
        if(foptn==""||foptn==" "||foptn==null)
        {
           document.getElementById("opt").innerHTML="Please select your country";
           document.getElementById("optn").focus();
           return false;  
        }
        else
        {
        document.getElementById("opt").innerHTML="";
        }
        return true;
    }
    function genderValidate()
        {
         //   alert("hello");
           var choice="";
           var fgender=document.getElementsByClassName("gendr");
           for(var i=0; i < fgender.length; i++)
           {
            if(fgender[i].checked) 
            {
               choice =fgender[i].value; 
            }
         }
         if(choice=="")
         {
            document.getElementById("rd").innerHTML="Please select your gender";
            //document.getElementById("rd").focus();
            return false; 
         }
         else
         {
         document.getElementById("rd").innerHTML="";
         return true;
         }
        // return true;
        }
         
