<?php
    $host = "localhost";
    $user = "root";
    $password = "";
    $port = "3306";
    $database = "foco_na_verdade";

    $conexao = new mysqli($host, $user, $password, $database, $port);

    if (!$conexao) {
        echo "Conexão mal-sucedida";
    };