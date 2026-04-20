$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Skills", "Mindset", "Game", "Offense", "Defense"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
});

// Wrap vanilla JS features in DOMContentLoaded to ensure DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  // Training Tabs
  const tabButtons = document.querySelectorAll(".tabs button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      tabButtons.forEach(btn => btn.classList.remove("active"));
      tabContents.forEach(content => content.classList.remove("active"));

      button.classList.add("active");
      document.getElementById(button.dataset.tab).classList.add("active");
    });
  });

  // Stats Counter Animation
  const stats = document.querySelectorAll('.stat-card h3');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.textContent.replace(/[^\d]/g, ''));
        let count = 0;
        const increment = target / 100;

        const timer = setInterval(() => {
          count += increment;
          entry.target.textContent = Math.floor(count) + (entry.target.textContent.includes('%') ? '%' : '+');

          if (count >= target) {
            entry.target.textContent = target + (entry.target.textContent.includes('%') ? '%' : '+');
            clearInterval(timer);
          }
        }, 20);

        observer.unobserve(entry.target);
      }
    });
  });

  stats.forEach(stat => observer.observe(stat));
});

// Video pause on scroll (optional)
$(window).scroll(function () {
  var video = $('.video-wrapper video')[0];
  if (video) {
    if (
      $(this).scrollTop() > $('#academy').offset().top + $('#academy').height() ||
      $(this).scrollTop() + $(window).height() < $('#academy').offset().top
    ) {
      video.pause();
    } else {
      video.play();
    }
  }
});

// Video Play/Pause Toggle + Supabase
document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('academy-video');
  const toggleBtn = document.getElementById('video-toggle');
  const icon = document.getElementById('video-icon');

  if (video && toggleBtn && icon) {
    function toggleVideo() {
      if (video.paused) {
        video.play();
        icon.className = 'fas fa-pause';
      } else {
        video.pause();
        icon.className = 'fas fa-play';
      }
    }

    toggleBtn.addEventListener('click', function (e) {
      e.preventDefault();
      toggleVideo();
    });

    video.addEventListener('click', function (e) {
      if (e.target !== toggleBtn && !toggleBtn.contains(e.target)) {
        toggleVideo();
      }
    });

    video.addEventListener('loadeddata', function () {
      if (video.paused) {
        icon.className = 'fas fa-play';
      } else {
        icon.className = 'fas fa-pause';
      }
    });

    video.addEventListener('play', function () {
      icon.className = 'fas fa-pause';
    });

    video.addEventListener('pause', function () {
      icon.className = 'fas fa-play';
    });
  }

  const supabase = window.supabase.createClient(
    'https://ngufsfhraaldkelzszgr.supabase.co',
    'sb_publishable_gkRkVNwOnk7SkMmanVUpyQ_pOFlBiTt'
  );

  const HOME_PLAYER_LIMIT = 6;

  async function loadPlayers() {
    const { data, error } = await supabase
      .from('players')
      .select('code, name, position, height_cm, weight_kg, date_of_birth, photo_url')
      .order('code', { ascending: true })
      .limit(HOME_PLAYER_LIMIT);

    if (error) {
      console.error('Error loading players:', error);
      return;
    }

    const teamGrid = document.getElementById('teamGrid');
    if (!teamGrid) return;

    teamGrid.innerHTML = '';

    data.forEach((player) => {
      const card = document.createElement('div');
      card.className = 'player-member';

      const birthYear = player.date_of_birth
        ? new Date(player.date_of_birth).getFullYear()
        : '';

      const imageSrc = player.photo_url && player.photo_url.trim() !== ''
        ? player.photo_url
        : 'images/placeholder.png';

      card.innerHTML = `
        <img src="${imageSrc}" alt="${player.name}">
        <h3>${player.name || ''}</h3>
        <p>${player.weight_kg || ''}kg / ${player.height_cm || ''}cm / ${birthYear}</p>
        <p>${player.position || ''}</p>
      `;

      teamGrid.appendChild(card);
    });
  }

  loadPlayers();

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      const form = e.target;
      const name = form.querySelector('input[placeholder="Name"]').value;
      const telephone = form.querySelector('input[placeholder="Telephone"]').value;
      const email = form.querySelector('input[placeholder="Email"]').value;
      const message = form.querySelector('textarea[placeholder="Comment"]').value;

      const { error } = await supabase
        .from("contact_form")
        .insert([{ name, telephone, email, message }]);

      if (error) {
        alert("❌ Something went wrong.");
        console.error(error);
      } else {
        alert("✔️ Message sent!");
        form.reset();
      }
    });
  }
});
