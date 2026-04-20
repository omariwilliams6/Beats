document.addEventListener('DOMContentLoaded', function () {
  const supabase = window.supabase.createClient(
    'https://ngufsfhraaldkelzszgr.supabase.co',
    'sb_publishable_gkRkVNwOnk7SkMmanVUpyQ_pOFlBiTt'
  );

  let allPlayers = [];
  let activeFilter = 'all';

  const playersGrid = document.getElementById('playersGrid');
  const filterButtons = document.querySelectorAll('.players-filter-btn');

  function getCategory(player) {
    return player.team === true ? 'senior' : 'u20';
  }

  function getBirthYear(dateOfBirth) {
    return dateOfBirth ? new Date(dateOfBirth).getFullYear() : '';
  }

  function renderPlayers() {
    if (!playersGrid) return;

    let filteredPlayers = allPlayers;

    if (activeFilter !== 'all') {
      filteredPlayers = allPlayers.filter(player => getCategory(player) === activeFilter);
    }

    if (!filteredPlayers.length) {
      playersGrid.innerHTML = `<div class="players-empty">No players found in this category.</div>`;
      return;
    }

    playersGrid.innerHTML = filteredPlayers.map(player => {
      const birthYear = getBirthYear(player.date_of_birth);
      const imageSrc = player.photo_url && player.photo_url.trim() !== ''
        ? player.photo_url
        : 'images/placeholder.png';

      const badge = getCategory(player) === 'senior' ? 'Senior' : 'U20';

      return `
        <article class="player-card">
          <div class="player-card-inner">
            <img src="${imageSrc}" alt="${player.name || ''}">
            <span class="player-badge">${badge}</span>
            <h3 class="player-name">${player.name || ''}</h3>
            <p class="player-meta">${player.weight_kg || ''}kg / ${player.height_cm || ''}cm / ${birthYear}</p>
            <p class="player-position">${player.position || ''}</p>
            <a class="player-link" href="player-detail.html?code=${player.code || ''}">View Profile</a>
          </div>
        </article>
      `;
    }).join('');
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      activeFilter = this.dataset.filter;
      renderPlayers();
    });
  });

  async function loadAllPlayers() {
    const { data, error } = await supabase
      .from('players')
      .select('code, name, position, height_cm, weight_kg, date_of_birth, photo_url, team')
      .order('name', { ascending: true });

    if (error) {
      console.error('Error loading players:', error);
      if (playersGrid) {
        playersGrid.innerHTML = `<div class="players-empty">Could not load players right now.</div>`;
      }
      return;
    }

    allPlayers = data || [];
    renderPlayers();
  }

  loadAllPlayers();
});