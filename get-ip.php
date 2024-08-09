<?php
header('Content-Type: application/json');

// Get the visitor's IP address
$ip = $_SERVER['REMOTE_ADDR'];
echo json_encode(['ip' => $ip]);
?>
