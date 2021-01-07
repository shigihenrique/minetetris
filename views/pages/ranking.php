<?php
session_start();

if (!isset($_SESSION['usuario'])) {
    header("location:../../controllers/jogadorControllers/logout.php");
}
?>

<!DOCTYPE html>
<html lang="pt">

<head>
    <link href="../lib/img/favicon.ico" rel="icon" type="image/x-icon" />
    <link rel="stylesheet" href="../styles/template.css" />
    <link rel="stylesheet" href="../styles/ranking.css" />
    <meta charset="utf-8" />
    <title>MINETETRIS</title>
</head>

<body onload="getGameRanking()">
    <header>
        <figure>
            <a href="rt.php">
                <img src="../lib/img/minetetris.png" alt="Logo" />
            </a>
        </figure>
    </header>
    <main>
        <section>
            <h2>Ranking global</h2>
            <div id="ranking-list">
                <table id="game-ranking-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>Pontos</th>
                            <th>Nível</th>
                            <th>Tempo</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </section>
    </main>

    <script type="text/javascript" src="../js/handleGameData.js"></script>
</body>

</html>