const TEAMS = ['Argentina', 'Australia', 'Belgium', 'Brazil', 'Colombia', 'Costa Rica', 'Croatia', 'Denmark', 'Egypt', 'England', 'France', 'Germany', 'Iceland', 'IR Iran', 'Japan', 'Korea Republic', 'Mexico', 'Morocco', 'Nigeria', 'Panama', 'Peru', 'Poland', 'Portugal', 'Russia', 'Saudi Arabia', 'Senegal', 'Serbia', 'Spain', 'Sweden', 'Switzerland', 'Tunisia', 'Uruguay'];
const shuffle = ([...arr]) => arr.sort(() => Math.random() - 0.5);

const $shuffleButton = document.querySelector('#shuffle');
const $teamsContainer = document.querySelector('#teams');

const renderTeams = (teams) => teams.map(team => `<div id="${team}" class="team">${team}</div>`).join('');

$teamsContainer.innerHTML = renderTeams(TEAMS);

$shuffleButton.addEventListener('click', () => requestAnimationFrame(() => {
  // first
  const firstTops = TEAMS.map(team => document.getElementById(team).getBoundingClientRect().top);

  // last
  $teamsContainer.innerHTML = renderTeams(shuffle(TEAMS));
  const lastTops = TEAMS.map(team => document.getElementById(team).getBoundingClientRect().top);

  // invert
  const diffTops = lastTops.map((last, i) => last - firstTops[i]);
  TEAMS.forEach((team, i) => {
    document.getElementById(team).style.transform = `translateY(${-diffTops[i]}px)`;
  });

  // play
  requestAnimationFrame(() => {
    TEAMS.forEach((team, i) => {
      const $team = document.getElementById(team);
      $team.style.transition = 'transform 1s';
      $team.style.transform = '';
    });
  });
}));
