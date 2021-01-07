function sendGameData(data) {
    const http = new XMLHttpRequest();
    const url = "/minetetris/controllers/jogoControllers/saveDataGame.php";
    let gameData = new FormData();

    gameData.append("tempo", data.time);
    gameData.append("dificuldade", data.level);
    gameData.append("pontuacao", data.score);
    gameData.append("linhas_eliminadas", data.lines);
    http.open("POST", url, true);
    http.send(gameData);
    console.log(data.time);

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
    const http = new XMLHttpRequest();
    const url = "/minetetris/controllers/jogoControllers/playerHistory.php";
    http.open("POST", url, true);
    http.send();
    http.onload = function () {
        try {
            games = JSON.parse(http.response);

            if(games.length > 0) {
                let playerHistoryTable = document.getElementById("player-history-table");

                games.forEach((game, index) => {
                    let row = playerHistoryTable.insertRow(index + 1);
                    let idColumn = row.insertCell(0);
                    let scoreColumn = row.insertCell(1);
                    let levelColumn = row.insertCell(2);
                    let timeColumn = row.insertCell(3);
                    idColumn.innerHTML = index + 1;
                    scoreColumn.innerHTML = game.pontuacao;
                    levelColumn.innerHTML = game.dificuldade;
                    timeColumn.innerHTML = game.tempo;
                })                
            }
        } catch (err) {

            alert(err.message);
        }
    };
}

function getGameRanking() {
    const http = new XMLHttpRequest();
    const url = "/minetetris/controllers/jogoControllers/gameRanking.php";
    http.open("POST", url, true);
    http.send();
    
    http.onload = function () {
        try {
            games = JSON.parse(http.response);

            if(games.length > 0) {
                let gameRankingTable = document.getElementById("game-ranking-table");

                games.forEach((game, index) => {
                    let row = gameRankingTable.insertRow(index + 1);
                    let idColumn = row.insertCell(0);
                    let usernameColumn = row.insertCell(1);
                    let scoreColumn = row.insertCell(2);
                    let levelColumn = row.insertCell(3);
                    let timeColumn = row.insertCell(4);
                    idColumn.innerHTML = index + 1;
                    usernameColumn.innerHTML = game.username;
                    scoreColumn.innerHTML = game.pontuacao;
                    levelColumn.innerHTML = game.dificuldade;
                    timeColumn.innerHTML = game.tempo;
                })
            }
        } catch (err) {

            alert(err.message);
        }
    };
}