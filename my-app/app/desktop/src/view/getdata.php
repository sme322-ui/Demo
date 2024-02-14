<?php
$conn = mysql_connect("localhost", "root", "");
mysql_select_db("login");
$sql = "select id,name,password from login";
result=mysqlquery(sql, $conn);
  
while (row=mysqlfetcharray(result)) {
    arr4[]=row;
}
echo json_encode($arr4);
?>
