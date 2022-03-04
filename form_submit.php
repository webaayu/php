<?php

include_once 'db_connect.php';

$name=$_POST['name'];
$email=$_POST['email'];
$tel=$_POST['tel'];

$option=$_POST['option'];
$gender=$_POST['gender'];
//$servername = "localhost";

if($conn->connect_error)
{
    die('connection failed:'.$conn->connect_error);
}
else
{
    $stmt=$conn->prepare("insert into applicant_data(ap_name,email,ph_number,country,gender)values(?,?,?,?,?)");
    $stmt->bind_param("sssss",$name,$email,$tel,$option,$gender);
    $stmt->execute();
    echo "registration successfully done";
    $stmt->close();
    $conn->close();
}

?>