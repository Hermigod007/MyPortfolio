<?

$Full_Name = $_POST['Full_Name'];
$Email_Address = $_POST['Email_Address'];
$Mobile_Number = $_POST['Mobile_Number'];
$Email_Subject = $_POST['Email_Subject'];
$Message = $_POST['Message'];

$conn = new mysqli('localhost','root','','test');
if($conn->connect_error){
  die('Connection Failed : '.$conn->connect_error);
}
else{
  $stmt = $conn->prepare("Insert you details(Full_Name, Email_Address, Mobile_Number, Email_Subject, Message) values(?, ?, ?, ?, ?)");
  $stmt->blind_param("ssiss", $Full_Name,$Email_Address, $Mobile_Number, $Email_Subject, $Message );
  echo "Your response have been saved ";
}

?>
