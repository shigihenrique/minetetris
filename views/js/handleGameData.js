function sendGameData(data) {
    let http = new XMLHttpRequest();
    let url = "/minetetris/controllers/jogoControllers/saveDataGame.php";
    let gameData = new FormData();

    gameData.append("tempo", data.time);
    gameData.append("dificuldade", data.level);
    gameData.append("pontuacao", data.score);
    gameData.append("linhas_eliminadas", data.lines);
    http.open("POST", url, true);
    http.send(gameData);
  
    let time = data.time.split(':');
    let text = "Game Over";
    text += "\nTempo de partida: " + time[0] + "m";
    text += " " + time[1] + "s";
    text += "\nDificuldade: " + data.level;
    text += "\nPontuação: " + data.score;
    text += "\nLinhas Eliminadas: " + data.lines;
  
    window.location.reload();
    window.alert(text);
}


function getPlayerHistory() {
    let http = new XMLHttpRequest();
    let url = "/minetetris/controllers/jogoControllers/rankingLastAllGamePlayer.php";
    http.open("POST", url, true);
    http.send();
    http.onload = function () {
        try {
            games = JSON.parse(http.response);

            if(!games.length <= 0) {
                let tableRankingLastGames = document.getElementById("tableRankingLastAllGameplayer");

                for (const x of games) {
                let row = tableRankingLastGames.insertRow(index);
                let idTable = row.insertCell(0);
                let punctuationTable = row.insertCell(1);
                let difficultyTable = row.insertCell(2);
                let timeEndTable = row.insertCell(3);
                idTable.innerHTML = index;
                punctuationTable.innerHTML = x.pontuacao;
                difficultyTable.innerHTML = x.dificuldade;
                timeEndTable.innerHTML = x.tempo;

                index++;
                }
            }
        } catch (err) {

            alert(err.message);

        }
    };
}