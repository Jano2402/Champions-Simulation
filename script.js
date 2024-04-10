// Traer los elementos del HTML

let GroupA = document.querySelectorAll('.GroupA');
let GroupB = document.querySelectorAll('.GroupB');
let GroupC = document.querySelectorAll('.GroupC');
let GroupD = document.querySelectorAll('.GroupD');
let GroupE = document.querySelectorAll('.GroupE');
let GroupF = document.querySelectorAll('.GroupF');
let GroupG = document.querySelectorAll('.GroupG');
let GroupH = document.querySelectorAll('.GroupH');

let Group1 = document.querySelectorAll('.Group1')
let Group2 = document.querySelectorAll('.Group2')
let Group3 = document.querySelectorAll('.Group3')
let Group4 = document.querySelectorAll('.Group4')
let Group5 = document.querySelectorAll('.Group5')
let Group6 = document.querySelectorAll('.Group6')
let Group7 = document.querySelectorAll('.Group7')
let Group8 = document.querySelectorAll('.Group8')

let Group11 = document.querySelectorAll('.Group11')
let Group12 = document.querySelectorAll('.Group12')
let Group13 = document.querySelectorAll('.Group13')
let Group14 = document.querySelectorAll('.Group14')

let Group111 = document.querySelectorAll('.Group111')
let Group112 = document.querySelectorAll('.Group112')

let Group1111 = document.querySelectorAll('.Group1111')

let Group11111 = document.querySelectorAll('.Group11111')

let PointsA = document.querySelectorAll('.PointsA');
let PointsB = document.querySelectorAll('.PointsB');
let PointsC = document.querySelectorAll('.PointsC');
let PointsD = document.querySelectorAll('.PointsD');
let PointsE = document.querySelectorAll('.PointsE');
let PointsF = document.querySelectorAll('.PointsF');
let PointsG = document.querySelectorAll('.PointsG');
let PointsH = document.querySelectorAll('.PointsH');

// Parte declarativa

const teams = ['Bayern','Manchester United', 'Copenhague', 'Galatasaray', 'Sevilla', 'Arsenal', 'Psv', 'Lens', 'Nápoles', 'Real Madrid',
              'Braga', 'Unión Berlín', 'Benfica', 'Inter', 'Zalsburgo', 'Real sociedad', 'Feyenoord', 'Atlético Madrid', 'Lazio', 'Celtic',
              'Psg', 'Dortmund', 'Ac milian', 'Newcastle', 'Manchester City', 'RB Leipzig', 'Estrella roja', 'Young boys', 'Barcelona',
              'Oporto', 'Shakhtar', 'Amberes'];

let groups = [Group1, Group2, Group3, Group4, Group5, Group6, Group7, Group8]
let quarterGroups = [Group11, Group12, Group13, Group14]
let semiFinalGroups = [Group111, Group112]
let groupStageTeams = []
let quarterTeams = []
let semiFinalTeams = []
let finalTeams = []
let groupStageMatchs = [[],[],[],[],[],[],[],[]]
let quarterMatchs = [[],[],[],[]]
let semiFinalMatchs = [[],[]]

let generalPoints = [PointsA, PointsB, PointsC, PointsD, PointsE, PointsF, PointsG, PointsH]
let pointsCounter = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

let teamA = [];
let teamB = [];
let teamC = [];
let teamD = [];
let teamE = [];
let teamF = [];
let teamG = [];
let teamH = [];

let teamsSelector = [teamA, teamB, teamC, teamD, teamE, teamF, teamG, teamH]

// Parte lógica

// Armar los grupos

for (let i = 0; i < 4; i++) {
    const teamsCopy = [...teams];

    for (let j = 0; j < 8; j++) {
        let randomNumber = Math.floor(Math.random() * teamsCopy.length);
        let selectedTeam = teamsCopy[randomNumber];

        switch (j) {
            case 0:
                teamA.push(selectedTeam);
                break;
            case 1:
                teamB.push(selectedTeam);
                break;
            case 2:
                teamC.push(selectedTeam);
                break;
            case 3:
                teamD.push(selectedTeam);
                break;
            case 4:
                teamE.push(selectedTeam);
                break;
            case 5:
                teamF.push(selectedTeam);
                break;
            case 6:
                teamG.push(selectedTeam);
                break;
            case 7:
                teamH.push(selectedTeam);
                break;
        }
        teamsCopy.splice(randomNumber, 1);
    }
}

// Mostrar equipos en el HTML

for (let k = 0; k < 4; k++){
    GroupA[k].textContent = teamA[k]
    GroupB[k].textContent = teamB[k]
    GroupC[k].textContent = teamC[k]
    GroupD[k].textContent = teamD[k]
    GroupE[k].textContent = teamE[k]
    GroupF[k].textContent = teamF[k]
    GroupG[k].textContent = teamG[k]
    GroupH[k].textContent = teamH[k]
}

// Fase de grupos (Se repiten algunos equipos)

for (let l = 0; l < generalPoints.length; l++) {
    for (let m = 0; m < 2; m++) {
        for (let a = 1; a < teamA.length; a ++) {
            let winning = Math.floor(Math.random() * 3)
            const winningPoint = 3;
            const tiePoint = 1;

            if (winning == 0) {
                generalPoints[l][0].textContent = parseInt(generalPoints[l][0].textContent) + winningPoint;
                pointsCounter[l][0] += winningPoint
            } 
            else if (winning == 1) {
                generalPoints[l][a].textContent = parseInt(generalPoints[l][a].textContent) + winningPoint;
                pointsCounter[l][a] += winningPoint
            } 
            else {
                generalPoints[l][a].textContent = parseInt(generalPoints[l][a].textContent) + tiePoint;
                pointsCounter[l][a] += tiePoint
                generalPoints[l][0].textContent = parseInt(generalPoints[l][0].textContent) + tiePoint;
                pointsCounter[l][0] += tiePoint
            }
        }
    }
    let max1 = -Infinity
    let max2 = -Infinity

    for (let points of pointsCounter[l]) {
        if (points >= max1) {
            max2 = max1
            max1 = points
        } else if (points > max2) {
            max2 = points
        }
    }

    max1Index = pointsCounter[l].indexOf(max1)
    max2Index = pointsCounter[l].indexOf(max2)

    groupStageTeams.push(teamsSelector[l][max1Index])
    groupStageTeams.push(teamsSelector[l][max2Index])
}

// Octavos

const groupTeamsCopy = [...groupStageTeams];

for (let n = 0; n < groupStageMatchs.length; n++) {
    for (let v = 0; v < 2; v++) {
        let randomNumber = Math.floor(Math.random() * groupTeamsCopy.length);
        let selectedTeam = groupTeamsCopy[randomNumber];
        groupStageMatchs[n].push(selectedTeam);
        groupTeamsCopy.splice(randomNumber, 1);
    }
}

for (let h = 0; h < groupStageMatchs.length; h++) {
    for (let s = 0; s < 2; s++) {
        groups[h][s].textContent = groupStageMatchs[h][s]
    }
}

// Cuartos, semi, final y ganador (Optimizar el algoritmo)

for (let y = 0; y < 8; y++) {
    let winning = Math.floor(Math.random() * 2)
    let selectedTeam = groupStageMatchs[y][winning]
    quarterTeams.push(selectedTeam)
}

quarterMatchs[0][0] = quarterTeams[0]
quarterMatchs[0][1] = quarterTeams[1]
quarterMatchs[1][0] = quarterTeams[2]
quarterMatchs[1][1] = quarterTeams[3]
quarterMatchs[2][0] = quarterTeams[4]
quarterMatchs[2][1] = quarterTeams[5]
quarterMatchs[3][0] = quarterTeams[6]
quarterMatchs[3][1] = quarterTeams[7]

quarterGroups[0][0].textContent = quarterMatchs[0][0]
quarterGroups[0][1].textContent = quarterMatchs[0][1]
quarterGroups[1][0].textContent = quarterMatchs[1][0]
quarterGroups[1][1].textContent = quarterMatchs[1][1]
quarterGroups[2][0].textContent = quarterMatchs[2][0]
quarterGroups[2][1].textContent = quarterMatchs[2][1]
quarterGroups[3][0].textContent = quarterMatchs[3][0]
quarterGroups[3][1].textContent = quarterMatchs[3][1]

for (let z = 0; z < 4; z++) {
    let winning = Math.floor(Math.random() * 2)
    let selectedTeam = quarterMatchs[z][winning]
    semiFinalTeams.push(selectedTeam)
}

semiFinalMatchs[0][0] = semiFinalTeams[0]
semiFinalMatchs[0][1] = semiFinalTeams[1]
semiFinalMatchs[1][0] = semiFinalTeams[2]
semiFinalMatchs[1][1] = semiFinalTeams[3]

semiFinalGroups[0][0].textContent = semiFinalMatchs[0][0]
semiFinalGroups[0][1].textContent = semiFinalMatchs[0][1]
semiFinalGroups[1][0].textContent = semiFinalMatchs[1][0]
semiFinalGroups[1][1].textContent = semiFinalMatchs[1][1]

for (let x = 0; x < 2; x++) {
    let winning = Math.floor(Math.random() * 2)
    let selectedTeam = semiFinalMatchs[x][winning]
    finalTeams.push(selectedTeam)
}

Group1111[0].textContent = finalTeams[0]
Group1111[1].textContent = finalTeams[1]

let random = Math.floor(Math.random() * 2)

Group11111[0].textContent = finalTeams[random]