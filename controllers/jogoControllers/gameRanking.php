<?php

require_once '..\services\post.php';
require_once '..\..\models\Jogo.php';
require_once '..\db\dbConnection.php';
require_once '..\..\models\DAO\JogoDAO.php';
require_once '..\services\errors.php';

session_start();

try {

    if (isset($_POST)) {
        fixPost();
        
        JogoDAO::selectGamesOrderByScore(getNewDBConnection());
    }
} catch (Exception $e) {

    returnErrorToLastPage($e->getMessage());
}
