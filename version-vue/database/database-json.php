<?php 
include_once __DIR__ . "/database.php";

$database_filtrato = [
    "genere" => [],
    "database_filtered" => [],
];

foreach($database as $data){
    if(!in_array($data["genre"], $database_filtrato["genere"])){
        $database_filtrato["genere"][] = $data["genre"];
    }
}


$query = $_GET["query"];

if(empty($query) || $query == "all"){
    $database_filtrato["database_filtered"] = $database;
}else if($data["genre"] === $query){
    foreach($database as $data){
        $database_filtrato["database_filtered"][] = $data;
    }
}


header("content-type(application/json)");
echo json_encode($database_filtrato);
?> 