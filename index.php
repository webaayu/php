<!doctype html>
<html>
<head>
<title>Application Form</title>
<link href="style.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="custom.js"></script>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
</head>
<body class="body">

<div class="div">    
<h2 class="h2">Application Form</h2>
<form action="form_submit.php" method="POST">
    <table class="table" align="center">
        <tr><td>Full Name</td></tr>
        <tr><td style="border:1px solid gray"><input type="text" id="name" class="inpt" name="name" ></td></tr>
        <tr><td><span id="nm" class="valid"></span></td></tr>
        <tr><td>Email Address</td></tr>
        <tr><td style="border:1px solid gray"><input id="email" class="inpt" type="text" name="email" onFocus ="nameValidate();"></td></tr>
        <tr><td><span id="eml" class="valid"></span></td></tr>
        <tr><td>Mobile Number</td></tr>
        <tr><td style="border:1px solid gray"><input id="tel" class="inpt" type="text" name="tel" onFocus ="emailValidate();"></td></tr>
        <tr><td><span id="ph" class="valid"></span></td></tr>
        <tr><td>Country</td></tr> 
        <tr><td style="border:1px solid gray"><select class="select" id="optn" name="option" onFocus ="mobileNoValidate();"><option class="option" value="">select</option><option class="option" value="India">India</option><option class="option" value="Australia">Australia</option><option class="option" value="Canada">Canada</option><option class="option" value="Britan">Britan</option></select></td></tr>
        <tr><td><span id="opt" class="valid"></span></td></tr>
        <tr><td>Gender</td></tr> 
        <tr><td style="border:1px solid gray"><input type="radio" class="gendr" name="gender" value="M" onFocus ="countryValidate();">Male<input type="radio" class="gendr" name="gender" value="F">Female
        <tr><td><span id="rd" class="valid"></span></td></tr>
        <tr><td>Hobbies<span id="italic">(optional)</span></td></tr>
        <tr><td style="border:1px solid gray" id="flexx"><input type="checkbox">Sports<input type="checkbox">Movies<input type="checkbox">Music
        <tr><td><button type="submit" class="inpt1" id="sub" value="submit" name="submit">Submit</button></td></tr>
       
    </table>
</form>
</div>

</body>
</html>