    const startDate = new Date('2024-04-03T20:00:00');

    function updateTime() {
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = hours;
      document.getElementById('minutes').textContent = minutes;
      document.getElementById('seconds').textContent = seconds;

      document.getElementById('nights').textContent = days;
    }

    setInterval(updateTime, 1000);
    updateTime();

    function pluralize(value, singular, plural) {
  return value === 1 ? singular : plural;
}

function updateTime() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  document.getElementById('hours-label').textContent = pluralize(hours, 'HORA', 'HORAS');
  document.getElementById('minutes-label').textContent = pluralize(minutes, 'MINUTO', 'MINUTOS');
  document.getElementById('seconds-label').textContent = pluralize(seconds, 'SEGUNDO', 'SEGUNDOS');

  document.getElementById('nights').textContent = days;
}
