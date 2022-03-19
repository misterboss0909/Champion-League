const firstPlace = [
  {
    club: 'Manchester City',
    country: 'England',
    group: 'A',
    position: 1,
  },

  {
    club: 'Liverpool',
    country: 'England',
    group: 'B',
    position: 1,
  },

  {
    club: 'Ajax',
    country: 'Netherland',
    group: 'C',
    position: 1,
  },

  {
    club: 'Real Madrid',
    country: 'Spain',
    group: 'D',
    position: 1,
  },

  {
    club: 'Bayern Munich',
    country: 'Germany',
    group: 'E',
    position: 1,
  },

  {
    club: 'Manchester United',
    country: 'England',
    group: 'F',
    position: 1,
  },

  {
    club: 'Lille',
    country: 'France',
    group: 'G',
    position: 1,
  },

  {
    club: 'Juventus',
    country: 'Italy',
    group: 'H',
    position: 1,
  },
];

const secondPlace = [
  {
    club: 'PSG',
    country: 'France',
    group: 'A',
    position: 2,
  },
  {
    club: 'Atletico Madrid',
    country: 'Spain',
    group: 'B',
    position: 2,
  },
  {
    club: 'Sporting',
    country: 'Portugal',
    group: 'C',
    position: 2,
  },
  {
    club: 'Inter',
    country: 'Italy',
    group: 'D',
    position: 2,
  },
  {
    club: 'Benfica',
    country: 'Portugal',
    group: 'E',
    position: 2,
  },
  {
    club: 'Villareal',
    country: 'Spain',
    group: 'F',
    position: 2,
  },
  {
    club: 'RB Salsuburg',
    country: 'Austria',
    group: 'G',
    position: 2,
  },
  {
    club: 'Chelsea',
    country: 'England',
    group: 'H',
    position: 2,
  },
];

function pickRandom(arr) {
  let firstPlaceIndex = arr.length,
    tempValue,
    randomIndex;
  if (firstPlaceIndex != 0) {
    randomIndex = Math.floor(Math.random() * firstPlaceIndex);
    firstPlaceIndex--;

    tempValue = arr[firstPlaceIndex];

    arr[firstPlaceIndex] = arr[randomIndex];

    arr[randomIndex] = tempValue;
  }
  return arr;
}

pickRandom(firstPlace);
pickRandom(secondPlace);

let drawResult = [];

for (let i = 0; i < firstPlace.length; i++) {
  for (let j = 0; j < secondPlace.length; j++) {
    const firstPlaceIndex = firstPlace[i];
    const secondPlaceIndex = secondPlace[j];

    if (
      secondPlaceIndex.country !== firstPlaceIndex.country &&
      secondPlaceIndex.group !== firstPlaceIndex.group
    ) {
      const drawOne = drawResult
        .map((e) => e.club)
        .indexOf(secondPlaceIndex.club);
      const drawTwo = drawResult
        .map((e) => e.club)
        .indexOf(firstPlaceIndex.club);
      // console.log(drawOne);
      // console.log(drawTwo);
      if (drawOne === -1 && drawTwo === -1) {
        drawResult.push(firstPlaceIndex, secondPlaceIndex);
      }
    }
  }
}

let counter = 1;
let table = [];

for (let i = 0; i < drawResult.length; i += 2) {
  let draw = [counter, drawResult[i].club, drawResult[i + 1].club];
  console.log(draw);

  counter++;
  table.push(draw);
}

let tablee = document.querySelector('.table');
function drawTable(tab) {
  for (let i = 1; i < tab.rows.length; i++) {
    for (let j = 0; j < tab.rows[i].cells.length; j++) {
      tab.rows[i].cells[j].innerHTML = table[i - 1][j];
    }
  }
}
function reDraw(tab) {
  for (let i = 1; i < tab.rows.length; i++) {
    for (let j = 0; j < tab.rows[i].cells.length; j++) {
      tab.rows[i].cells[j].innerHTML = '';
    }
  }
}
