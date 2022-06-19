let qinput = document.querySelector('input');
let answer = document.querySelector('#answer');
let clue = document.querySelector('#clue');
let counter = document.querySelector('#counter');

let managers = [
  {
    "name": "Pep Guardiola",
    "age": 50,
    "nationality": "Spain",
    "league": "Premier League",
    "team": "Manchester City"
  },
  {
    "name": "Jurgen Klopp",
    "age":50,
    "nationality": "Germany",
    "league": "Premier League",
    "team": "Liverpool"
  },
  {
    "name": "Thomas Frank",
    "age":40,
    "nationality": "Denmark",
    "league": "Premier League",
    "team": "Brentford"
  },
  {
    "name": "Ralph Hasenhuttl",
    "age":50,
    "nationality": "Austria",
    "league": "Premier League",
    "team": "Southampton"
  },
  {
    "name": "Brendan Rodgers",
    "age":40,
    "nationality": "Northern Ireland",
    "league": "Premier League",
    "team": "Leicester City"
  },
  {
    "name": "Graham Potter",
    "age":40,
    "nationality": "England",
    "league": "Premier League",
    "team": "Brighton & Hove Albion"
  },
  {
    "name": "Mikel Arteta",
    "age": 40,
    "nationality": "Spain", 
    "league": "Premier League",
    "team": "Arsenal"
  },
  {
    "name": "David Moyes",
    "age": 50,
    "nationality": "Scotland", 
    "league": "Premier League",
    "team": "West Ham United"
  },
  {
    "name": "Thomas Tuchel",
    "age": 40,
    "nationality": "Germany", 
    "league": "Premier League",
    "team": "Chelsea"
  },
  {
    "name": "Bruna Lage",
    "age": 40,
    "nationality": "Portugal", 
    "league": "Premier League",
    "team": "Wolverhampton"
  },
  {
    "name": "Scott Parker",
    "age": 40,
    "nationality": "England", 
    "league": "Premier League",
    "team": "AFC Bournemouth"
  },
  {
    "name": "Marco Silva",
    "age": 40,
    "nationality": "Portugal", 
    "league": "Premier League",
    "team": "Fulham"
  },
  {
    "name": "Patrick Vieira",
    "age": 40,
    "nationality": "France", 
    "league": "Premier League",
    "team": "Crystal Palace"
  },
  {
    "name": "Steve Cooper",
    "age": 40,
    "nationality": "Wales",
    "league": "Premier League",
    "team": "Nottingham Forest"
  },
  {
    "name": "Antonio Conte",
    "age": 50,
    "nationality": "Italy",
    "league": "Premier League",
    "team": "Tottenham"
  },
  {
    "name": "Eddie Howe",
    "age": 40,
    "nationality": "England",
    "league": "Premier League",
    "team": "Newcastle United"
  },
  {
    "name": "Steven Gerrard",
    "age": 40,
    "nationality": "England",
    "league": "Premier League",
    "team": "Aston Villa"
  },
  {
    "name": "Frank Lampard",
    "age": 40,
    "nationality": "England",
    "league": "Premier League",
    "team": "Everton"
  },
  {
    "name": "Jesse Marsch",
    "age": 40,
    "nationality": "United States",
    "league": "Premier League",
    "team": "Leeds United"
  },
  {
    "name": "Erik ten Hag",
    "age": 50,
    "nationality": "Netherlands",
    "league": "Premier League",
    "team": "Manchester United"
  },
  {
    "name": "Diego Simeone",
    "age": 50,
    "nationality": "Argentina",
    "league": "LaLiga",
    "team": "Atletico Madrid"
  },
  {
    "name": "Jagoba Arrasate",
    "age": 40,
    "nationality": "Spain",
    "league": "LaLiga",
    "team": "Osasuna"
  },
  {
    "name": "Imanol Alguacil",
    "age": 50,
    "nationality": "Spain",
    "league": "LaLiga",
    "team": "Real Sociedad"
  },
  {
    "name": "Julen Lopetegui",
    "age": 50,
    "nationality": "Spain",
    "league": "LaLiga",
    "team": "FC Sevilla"
  },
  {
    "name": "Unai Emery",
    "age": 50,
    "nationality": "Spain",
    "league": "LaLiga",
    "team": "Villareal"
  },
  {
    "name": "Manuel Pellegrini",
    "age": 60,
    "nationality": "Chile",
    "league": "LaLiga",
    "team": "Real Betis"
  },
  {
    "name": "Andoni Iraola",
    "age": 30,
    "nationality": "Spain",
    "league": "LaLiga",
    "team": "Rayo Vallecano"
  },
  {
    "name": "Eduardo Coudet",
    "age": 40,
    "nationality": "Argentina",
    "league": "LaLiga",
    "team": "Celta Vigo"
  },
  {
    "name": "Marcelino",
    "age": 50,
    "nationality": "Spain",
    "league": "LaLiga",
    "team": "Athletic Bilbao"
  },
  {
    "name": "Carlo Ancelotti",
    "age": 60,
    "nationality": "Italy",
    "league": "LaLiga",
    "team": "Real Madrid"
  },
  {
    "name": "Quique Sanchez Flores",
    "age": 50,
    "nationality": "Spain",
    "league": "LaLiga",
    "team": "FC Getafe"
  },
  {
    "name": "Xavi",
    "age": 40,
    "nationality": "Spain",
    "league": "LaLiga",
    "team": "FC Barcelona"
  },
  {
    "name": "Francisco Rodriguez",
    "age": 40,
    "nationality": "Spain",
    "league": "LaLiga",
    "team": "FC Elche"
  },
  {
    "name": "Sergio",
    "age": 40,
    "nationality": "Spain",
    "league": "LaLiga",
    "team": "FC Cadiz"
  },
  {
    "name": "Javier Aguirre",
    "age": 60,
    "nationality": "Mexico",
    "league": "LaLiga",
    "team": "RCD Mallorca"
  },
  {
    "name": "Altor Karanka",
    "age": 40,
    "nationality": "Spain",
    "league": "LaLiga",
    "team": "FC Granada"
  },
  {
    "name": "Luis Garcia",
    "age": 40,
    "nationality": "Spain",
    "league": "LaLiga",
    "team": "Deportivo Alaves"
  },
  {
    "name": "Mehdi Nafti",
    "age": 40,
    "nationality": "Tunisia",
    "league": "LaLiga",
    "team": "UD Levante"
  },
  {
    "name": "Diego Martinez",
    "age": 40,
    "nationality": "Spain",
    "league": "LaLiga",
    "team": "Espanyol Barcelona"
  },
  {
    "name": "Gennaro Gattuso",
    "age": 40,
    "nationality": "Italy",
    "league": "LaLiga",
    "team": "FC Valencia"
  },
  {
    "name": "Gian Piero Gasperini",
    "age": 60,
    "nationality": "Italy",
    "league": "Serie A",
    "team": "Atalanta Bergamo"
  },
  {
    "name": "Sinisa Mihajlovic",
    "age": 50,
    "nationality": "Serbia",
    "league": "Serie A",
    "team": "FC Bologna"
  },
  {
    "name": "Stefano Pioli",
    "age": 50,
    "nationality": "Italy",
    "league": "Serie A",
    "team": "AC Milan"
  },
  {
    "name": "Massimiliano Allegri",
    "age": 50,
    "nationality": "Italy",
    "league": "Serie A",
    "team": "Juventus"
  },
  {
    "name": "Simone Inzaghi",
    "age": 40,
    "nationality": "Italy",
    "league": "Serie A",
    "team": "Inter Milan"
  },
  {
    "name": "Maurizio Sarri",
    "age": 60,
    "nationality": "Italy",
    "league": "Serie A",
    "team": "SS Lazio"
  },
  {
    "name": "Jose Mourinho",
    "age": 50,
    "nationality": "Portugal",
    "league": "Serie A",
    "team": "AS Roma"
  },
  {
    "name": "Luciano Spalletti",
    "age": 60,
    "nationality": "Italy",
    "league": "Serie A",
    "team": "Napoli"
  },
  {
    "name": "Alessio Dionisi",
    "age": 40,
    "nationality": "Italy",
    "league": "Serie A",
    "team": "US Sassuolo"
  },
  {
    "name": "Ivan Juric",
    "age": 40,
    "nationality": "Italy",
    "league": "Serie A",
    "team": "FC Torino"
  },
  {
    "name": "Vincenzo Italiano",
    "age": 40,
    "nationality": "Italy",
    "league": "Serie A",
    "team": "ACF Fiorentina"
  },
  {
    "name": "Thiago Motta",
    "age": 30,
    "nationality": "Italy",
    "league": "Serie A",
    "team": "Spezia Calcio"
  },
  {
    "name": "Marco Giampaolo",
    "age": 50,
    "nationality": "Italy",
    "league": "Serie A",
    "team": "UC Sampdoria"
  },
  {
    "name": "Alexander Blessin",
    "age": 40,
    "nationality": "Germany",
    "league": "Serie A",
    "team": "Genoa CFC"
  },
  {
    "name": "Davide Nicola",
    "age": 40,
    "nationality": "Italy",
    "league": "Serie A",
    "team": "US Salernitana"
  },
  {
    "name": "Paolo Zanetti",
    "age": 30,
    "nationality": "Italy",
    "league": "Serie A",
    "team": "FC Empoli"
  },
  {
    "name": "Andrea Sottil",
    "age": 40,
    "nationality": "Italy",
    "league": "Serie A",
    "team": "Udinese Calcio"
  },
  {
    "name": "Ivan Javorcic",
    "age": 40,
    "nationality": "Croatia",
    "league": "Serie A",
    "team": "Venezia FC"
  },
  {
    "name": "Fabio Liverani",
    "age": 40,
    "nationality": "Italy",
    "league": "Serie A",
    "team": "Cagliari Calcio"
  },
  {
    "name": "Gabriele Cioffi",
    "age": 40,
    "nationality": "Italy",
    "league": "Serie A",
    "team": "Hellas Verona"
  },
  {
    "name": "Gabriele Cioffi",
    "age": 40,
    "nationality": "Italy",
    "league": "Serie A",
    "team": "Hellas Verona"
  },
  {
    "name": "Christian Streich",
    "age": 50,
    "nationality": "Germany",
    "league": "Bundesliga",
    "team": "SC Freiburg"
  },
  {
    "name": "Urs Fischer",
    "age": 50,
    "nationality": "Switzerland",
    "league": "Bundesliga",
    "team": "FC Union Berlin"
  },
  {
    "name": "Stefan Leitl",
    "age": 40,
    "nationality": "Germany",
    "league": "Bundesliga",
    "team": "Greuther Furth"
  },
  {
    "name": "Thomas Reis",
    "age": 40,
    "nationality": "Germany",
    "league": "Bundesliga",
    "team": "VfL Bochum"
  },
  {
    "name": "Pellegrino Matarazzo",
    "age": 40,
    "nationality": "United States",
    "league": "Bundesliga",
    "team": "VfB Stuttgart"
  },
  {
    "name": "Sebastian Hoenes",
    "age": 40,
    "nationality": "Germany",
    "league": "Bundesliga",
    "team": "TSG Hoffenheim"
  },
  {
    "name": "Bo Svensson",
    "age": 40,
    "nationality": "Denmark",
    "league": "Bundesliga",
    "team": "FSV Mainz"
  },
  {
    "name": "Markus Weinzierl",
    "age": 40,
    "nationality": "Germany",
    "league": "Bundesliga",
    "team": "FC Augsburg"
  },
   {
    "name": "Steffen Baumgart",
    "age": 50,
    "nationality": "Germany",
    "league": "Bundesliga",
    "team": "FC Koln"
  },
  {
    "name": "Gerardo Seoane",
    "age": 40,
    "nationality": "Switzerland",
    "league": "Bundesliga",
    "team": "Bayer Leverkusen"
  },
  {
    "name": "Adi Hutter",
    "age": 50,
    "nationality": "Austria",
    "league": "Bundesliga",
    "team": "Borussia Monchengladbach"
  },
  {
    "name": "Oliver Glasner",
    "age": 40,
    "nationality": "Austria",
    "league": "Bundesliga",
    "team": "Eintracht Frankfurt"
  },
  {
    "name": "Julian Nagelsmann",
    "age": 30,
    "nationality": "Germany",
    "league": "Bundesliga",
    "team": "Bayern Munchen"
  },
  {
    "name": "Domenico Tedesco",
    "age": 30,
    "nationality": "Italy",
    "league": "Bundesliga",
    "team": "RB Leipzig"
  },
  {
    "name": "Feliz Magath",
    "age": 60,
    "nationality": "Germany",
    "league": "Bundesliga",
    "team": "Hertha BSC"
  },
  {
    "name": "Marco Kostmann",
    "age": 50,
    "nationality": "Germany",
    "league": "Bundesliga",
    "team": "Arminia Bielefeld"
  },
  {
    "name": "Pascal Gastien",
    "age": 50,
    "nationality": "France",
    "league": "Ligue 1",
    "team": "Clermont Foot 63"
  },
  {
    "name": "Christophe Pelissier",
    "age": 50,
    "nationality": "France",
    "league": "Ligue 1",
    "team": "FC Lorient"
  },
  {
    "name": "Franck Haise",
    "age": 50,
    "nationality": "France",
    "league": "Ligue 1",
    "team": "RC Lens"
  },
  {
    "name": "Mauricio Pochettino",
    "age": 50,
    "nationality": "Argentina",
    "league": "Ligue 1",
    "team": "Paris Saint-Germain"
  },
  {
    "name": "Antoine Kombouare",
    "age": 50,
    "nationality": "France",
    "league": "Ligue 1",
    "team": "FC Nantes"
  },
  {
    "name": "Bruno Genesio",
    "age": 50,
    "nationality": "France",
    "league": "Ligue 1",
    "team": "Stade Rennais FC"
  },
  {
    "name": "Jorge Sampaoli",
    "age": 60,
    "nationality": "Argentina",
    "league": "Ligue 1",
    "team": "Olympique Marseille"
  },
  {
    "name": "Gerald Baticle",
    "age": 50,
    "nationality": "France",
    "league": "Ligue 1",
    "team": "Angers SCO"
  },
  {
    "name": "Julien Stephan",
    "age": 40,
    "nationality": "France",
    "league": "Ligue 1",
    "team": "RC Strasbourg Alsace"
  },
  {
    "name": "Peter Bosz",
    "age": 50,
    "nationality": "Netherlands",
    "league": "Ligue 1",
    "team": "Olympique Lyon"
  },
  {
    "name": "Olivier Dall'Oglio",
    "age": 50,
    "nationality": "France",
    "league": "Ligue 1",
    "team": "Montpellier HSC"
  },
  {
    "name": "Michel Der Zakarian",
    "age": 50,
    "nationality": "Armenia",
    "league": "Ligue 1",
    "team": "Stade Brestois 29"
  },
  {
    "name": "Oscar Garcia",
    "age": 40,
    "nationality": "Spain",
    "league": "Ligue 1",
    "team": "Stade Reims"
  },
  {
    "name": "Christophe Gaitier",
    "age": 50,
    "nationality": "France",
    "league": "Ligue 1",
    "team": "OGC Nice"
  },
  {
    "name": "Philippe Clement",
    "age": 40,
    "nationality": "Belgium",
    "league": "Ligue 1",
    "team": "AS Monaco"
  },
  {
    "name": "Bruno Irles",
    "age": 40,
    "nationality": "France",
    "league": "Ligue 1",
    "team": "ESTAC Troyes"
  },
  {
    "name": "David Guion",
    "age": 50,
    "nationality": "France",
    "league": "Ligue 1",
    "team": "FC Girondins Bordeaux"
  },
  {
    "name": "Laszlo Boloni",
    "age": 60,
    "nationality": "Belgium",
    "league": "Ligue 1",
    "team": "FC Metz"
  },
  {
    "name": "Laurent Batlles",
    "age": 40,
    "nationality": "France",
    "league": "Ligue 1",
    "team": "AS Saint-Etienne"
  }

]

let manager = managers[Math.floor(Math.random()*managers.length)]

qinput.placeholder = "Enter a manager..."

clue.innerHTML = "You're looking for a manager in their " + manager.age + "s from " + manager.nationality + "."

let count = 0

counter.innerHTML = count + " guesses" 


document.getElementById("theButton").onclick = function(){ 
  var x = qinput.value;
  if (x != "") {
  count++;
  console.log(x)
  if (x.toLowerCase() === manager.name.toLowerCase()) {
    answer.innerHTML = "Congratulations! The solution was " + manager.name + ". You got it in " + count + " guesses."
  } else {
     let test = false;
  let pos = -1;
  for (let i = 0; i < managers.length; i++) {
    if (managers[i].name.toLowerCase() === x.toLowerCase()) {
      test = true;
      pos = i;
      break;
    }
  }
  if (!test) {
    answer.innerHTML += "I don't know that manager. Guess does not count. (" + x + ")<br/>";
    count--;
  }
  if (test && managers[pos].league === manager.league) {
    answer.innerHTML += "Incorrect. The correct manager coaches in the same league as " + x +".<br/>";
  } else if (test) {
    answer.innerHTML += "Incorrect. ("+x+")<br/>"
  }

  }
  }
  counter.innerHTML = count + " guesses" 
  qinput.value = "";
}

function giveHint() {
  document.getElementById("hint").innerHTML = "The correct manager coaches in " + manager.league +".";
}

function giveTeam() {
  document.getElementById("team").innerHTML = "The correct manage coaches for " + manager.team + " in " + manager.league +".";
}

function giveUp() {
  answer.innerHTML = "You gave up after " + count + " guesses. The correct manager was " + manager.name + " of " + manager.team + ".";
  }
