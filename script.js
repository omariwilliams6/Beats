const pageLang = new URLSearchParams(window.location.search).get('lang');
const isHungarian = pageLang === 'hu';

const huTranslations = {
  "Home": "Kezdőlap",
  "Basket Beats Athletes": "Basket Beats sportolók",
  "BasketBeats Logo": "BasketBeats logó",
  "Chief Technology Officer": "Technológiai vezető",
  "Lead UX/UI Designer": "Vezető UX/UI designer",
  "Cyber Security Specialist": "Kiberbiztonsági szakértő",
  "Academy": "Akadémia",
  "Training": "Edzések",
  "Pricing": "Árak",
  "Athletes": "Sportolók",
  "About Us": "Rólunk",
  "About us": "Rólunk",
  "Contact": "Kapcsolat",
  "Contact us": "Kapcsolat",
  "Contact Us": "Kapcsolat",
  "Join now": "Csatlakozz most",
  "Built for players who want more": "Azoknak a játékosoknak, akik többre vágynak",
  "Your journey starts here": "Az utad itt kezdődik",
  "Master your": "Fejleszd a",
  "Our": "A mi",
  "Academy": "Akadémia",
  "Our Academy": "Akadémiánk",
  "Building the next generation of basketball players through elite training, real development, and game-ready skills — on and off the court.": "A kosárlabdázók következő generációját építjük elit edzéssel, valódi fejlődéssel és meccsre kész készségekkel, a pályán és azon kívül.",
  "At BasketBeats, we don't just teach basketball—we build champions. From fundamentals to pro-level strategies, our programs foster skill, resilience, and teamwork. Whether you're a beginner lacing up for the first time or a high school star eyeing college scouts, our tailored approach turns potential into performance.": "A BasketBeatsnél nem csak kosárlabdát tanítunk, bajnokokat építünk. Az alapoktól a profi szintű stratégiákig programjaink fejlesztik a készséget, a kitartást és a csapatmunkát. Akár kezdő vagy, akár középiskolai tehetség, személyre szabott módszerünk a lehetőségekből teljesítményt formál.",
  "Explore Programs": "Programok megtekintése",
  "Your browser does not support the video tag.": "A böngésződ nem támogatja a videó lejátszását.",
  "Athletes Trained": "Képzett sportolók",
  "Shooting Improvement": "Dobásjavulás",
  "Scholarships Earned": "Elnyert ösztöndíjak",
  "Years in Budapest": "Év Budapesten",
  "Satisfaction Rate": "Elégedettségi arány",
  "Tournaments Coached": "Edzőként vezetett tornák",
  "Why": "Miért",
  "Choose Us": "minket válassz",
  "Why Choose Us": "Miért minket válassz",
  "Building players, shaping futures — here's what makes us different:": "Játékosokat építünk, jövőt formálunk. Ez különböztet meg minket:",
  "Expert Coaches": "Szakértő edzők",
  "Certified trainers with international basketball experience and proven results.": "Minősített edzők nemzetközi kosárlabda-tapasztalattal és bizonyított eredményekkel.",
  "Skill Development": "Készségfejlesztés",
  "Tailored drills that cover fundamentals, advanced moves, and game intelligence.": "Személyre szabott gyakorlatok az alapoktól a haladó mozdulatokig és a játékintelligenciáig.",
  "Community": "Közösség",
  "A supportive environment where players grow together on and off the court.": "Támogató környezet, ahol a játékosok együtt fejlődnek a pályán és azon kívül.",
  "Training Packages": "Edzéscsomagok",
  "Structured programs built to develop fundamentals, confidence, and elite-level performance.": "Strukturált programok az alapok, az önbizalom és az elit szintű teljesítmény fejlesztésére.",
  "Catch Up": "Felzárkózás",
  "Sharpshooter": "Mesterlövész",
  "Lockdown Defender": "Lezáró védő",
  "Game Controller": "Játékszervező",
  "Rim Dominator": "Palánk alatti domináns",
  "Focused sessions designed for players who need to strengthen fundamentals and close gaps in their skill set.": "Célzott edzések azoknak a játékosoknak, akiknek meg kell erősíteniük az alapokat és be kell zárniuk a készségbeli hiányosságokat.",
  "Intensive shooting program that sharpens mechanics, consistency, and accuracy from all ranges.": "Intenzív dobóprogram, amely fejleszti a technikát, az állandóságot és a pontosságot minden távolságból.",
  "Develop elite defensive instincts, on-ball pressure, and off-ball positioning to dominate on defense.": "Fejleszd az elit védekező ösztönöket, a labdás nyomást és a labda nélküli helyezkedést, hogy urald a védekezést.",
  "Train in advanced playmaking, decision-making, and leadership to orchestrate the game like a true floor general.": "Haladó játékszervezést, döntéshozatalt és vezetést gyakorolhatsz, hogy igazi irányítóként vezesd a játékot.",
  "Power-focused sessions that build finishing, rebounding, and shot-blocking ability around the basket.": "Erőközpontú edzések, amelyek fejlesztik a befejezéseket, lepattanózást és dobásblokkolást a palánk körül.",
  "6 Hours": "6 óra",
  "10 Hours": "10 óra",
  "8 Hours": "8 óra",
  "12 Hours": "12 óra",
  "15 Hours": "15 óra",
  "Our Pricing": "Áraink",
  "Choose the plan that fits your basketball journey": "Válaszd ki a kosárlabda-utazásodhoz illő csomagot",
  "Basic": "Alap",
  "Premium": "Prémium",
  "Ultimate": "Ultimate",
  "Power": "Power",
  "Squad": "Csapat",
  "Recommended": "Ajánlott",
  "Court rental included": "Pályabérlés benne van",
  "Equipment usage included": "Felszereléshasználat benne van",
  "Led by qualified coach": "Képzett edző vezeti",
  "75 minutes, full individual attention": "75 perc, teljes egyéni figyelem",
  "Train with partner drills": "Edzés páros gyakorlatokkal",
  "Game-like 3v3 breakdowns": "Meccsszerű 3v3 elemzések",
  "Team-focused skills with 2v2 drills": "Csapatközpontú készségek 2v2 gyakorlatokkal",
  "Full team synergy, game like situations": "Teljes csapatszinergia, meccsszerű helyzetek",
  "Purchase": "Vásárlás",
  "Our Team": "Csapatunk",
  "Meet the players that fuel the BasketBeats team": "Ismerd meg a BasketBeats csapatát hajtó játékosokat",
  "See All Players": "Összes játékos",
  "Contact Us": "Kapcsolat",
  "Do you have a project you would like us to work on? Or perhaps a few questions?": "Van egy projekted, amelyen szeretnéd, hogy dolgozzunk? Vagy csak néhány kérdésed van?",
  "Contact us and we will be more than happy to assist you.": "Lépj kapcsolatba velünk, és örömmel segítünk.",
  "Our office": "Irodánk",
  "Say hello": "Írj nekünk",
  "Name": "Név",
  "Telephone": "Telefon",
  "Email": "E-mail",
  "Comment": "Üzenet",
  "Submit": "Küldés",
  "Keep connected": "Maradj kapcsolatban",
  "Our Budapest home at CAMUGO SportLab—where champions train.": "Budapesti otthonunk a CAMUGO SportLabban, ahol bajnokok edzenek.",
  "Address": "Cím",
  "Pages": "Oldalak",
  "Subscribe": "Feliratkozás",
  "Enter your email": "Add meg az e-mail címed",
  "Privacy policy": "Adatvédelmi irányelvek",
  "Terms & condition": "Felhasználási feltételek",
  "All rights reserved": "Minden jog fenntartva",
  "Our Athletes": "Sportolóink",
  "Meet the players representing Basket Beats.": "Ismerd meg a Basket Beats játékosait.",
  "At Basket Beats, our athletes reflect the standards, discipline, and ambition that define our programme. From senior players competing at a high level to the next generation pushing toward the future, every profile represents progress, professionalism, and a serious love for the game.": "A Basket Beats sportolói azt a színvonalat, fegyelmet és ambíciót képviselik, amely meghatározza a programunkat. A magas szinten versenyző felnőtt játékosoktól a jövő felé tartó következő generációig minden profil fejlődést, profizmust és komoly játékszeretetet mutat.",
  "View Players": "Játékosok megtekintése",
  "Our Players": "Játékosaink",
  "We work with athletes who are committed to development, competition, and representing the game the right way.": "Olyan sportolókkal dolgozunk, akik elkötelezettek a fejlődés, a versenyzés és a játék méltó képviselete mellett.",
  "Senior players are taken from records marked true in the team column": "A felnőtt játékosok a csapat oszlopban igaz értékkel jelölt rekordokból érkeznek",
  "Remaining players are grouped into the U20 section": "A többi játékos az U20 szekcióba kerül",
  "Profiles are loaded directly from your Supabase player table": "A profilok közvetlenül a Supabase játékostáblából töltődnek be",
  "Browse the athletes representing Basket Beats and explore the players behind the programme.": "Böngészd a Basket Beatset képviselő sportolókat, és ismerd meg a program mögött álló játékosokat.",
  "Show All": "Összes",
  "Senior": "Felnőtt",
  "No players found in this category.": "Ebben a kategóriában nincs játékos.",
  "Could not load players right now.": "A játékosok jelenleg nem tölthetők be.",
  "View Profile": "Profil megtekintése",
  "About": "Rólunk",
  "Us": "",
  "Where basketball meets rhythm.": "Ahol a kosárlabda ritmussal találkozik.",
  "We blend elite skill training with a culture-first community so players grow confidence, coordination, and court IQ at every session.": "Az elit készségfejlesztést közösségközpontú szemlélettel ötvözzük, hogy a játékosok minden edzésen önbizalmat, koordinációt és pályaintelligenciát építsenek.",
  "View Academy": "Akadémia megtekintése",
  "Players trained": "Képzett játékos",
  "Expert coaches": "Szakértő edző",
  "Training tracks": "Edzési irány",
  "Our Mission": "Küldetésünk",
  "Build athletes who move with purpose, play with creativity, and lead with humility on and off the court.": "Olyan sportolókat építünk, akik céllal mozognak, kreatívan játszanak, és alázattal vezetnek a pályán és azon kívül.",
  "Skill-first, game-real training": "Készségközpontú, meccsre épülő edzés",
  "Small groups for personal feedback": "Kis csoportok személyes visszajelzéssel",
  "Performance tracking every month": "Havi teljesítménykövetés",
  "What we stand for": "Amit képviselünk",
  "High standards, real progress, and a community that wins together.": "Magas színvonal, valódi fejlődés és együtt győztes közösség.",
  "Craft": "Mesterség",
  "Footwork, shooting form, and decision-making refined every session.": "Lábmunka, dobótechnika és döntéshozatal finomítása minden edzésen.",
  "Discipline": "Fegyelem",
  "Accountability builds athletes who show up ready and stay consistent.": "A felelősségvállalás olyan sportolókat épít, akik felkészülten érkeznek és következetesek maradnak.",
  "Culture": "Kultúra",
  "We celebrate wins, support growth, and keep the energy positive.": "Megünnepeljük a sikereket, támogatjuk a fejlődést, és pozitív energiát tartunk fenn.",
  "Meet The Team": "Ismerd meg a csapatot",
  "Behind every great project is an even greater team — say hello!": "Minden nagyszerű projekt mögött még nagyszerűbb csapat áll. Köszönj nekik!",
  "With over a decade of experience in software engineering and cloud architecture, Ruiz leads our tech vision.": "Ruiz több mint egy évtizedes szoftvermérnöki és felhőarchitektúra-tapasztalattal vezeti technológiai víziónkat.",
  "Creative mind behind intuitive designs, with a background in user psychology and interactive media.": "Az intuitív dizájn kreatív gondolkodója, felhasználói pszichológiai és interaktív médiás háttérrel.",
  "Expert in network security, threat analysis, and data protection, ensuring system integrity at all levels.": "Hálózatbiztonsági, fenyegetéselemzési és adatvédelmi szakértő, aki minden szinten biztosítja a rendszerintegritást.",
  "See More": "Továbbiak",
  "See Less": "Kevesebb",
  "At Kerridge Digital, our story is one of purpose, progress, and people. What began as a bold idea to streamline business operations has grown into a global force for innovation in trade, manufacturing, and distribution. As we evolve, we remain rooted in our mission: to deliver tailored solutions that help businesses thrive — yesterday, today, and tomorrow.": "A Kerridge Digital története a céltudatosságról, fejlődésről és emberekről szól. Ami merész ötletként indult az üzleti működés egyszerűsítésére, mára globális innovációs erővé nőtt a kereskedelemben, gyártásban és disztribúcióban. Fejlődésünk közben továbbra is küldetésünk vezérel: testre szabott megoldásokat nyújtani, amelyek segítik a vállalkozások sikerét tegnap, ma és holnap.",
  "Discover our story in providing recruitment services.": "Ismerd meg történetünket a toborzási szolgáltatások nyújtásában.",
  "Our Roots": "Gyökereink",
  "In the early 1980s, a group of visionary entrepreneurs identified a need for efficient business management systems within manufacturing and distribution. What started as a consultancy evolved into a full platform, bridging traditional business operations and the digital age.": "Az 1980-as évek elején egy előrelátó vállalkozói csoport felismerte a hatékony üzletirányítási rendszerek szükségességét a gyártásban és a disztribúcióban. Ami tanácsadóként indult, teljes platformmá fejlődött, hidat képezve a hagyományos üzleti működés és a digitális kor között.",
  "Recent History": "Közelmúlt",
  "By 1995, the company launched under the name Carriage Commercial Systems, inspired by their first client. It grew rapidly, offering software solutions across industries, built on customer-centric values and a passion for innovation.": "1995-re a vállalat Carriage Commercial Systems néven indult el, első ügyfeléről inspirálódva. Gyorsan növekedett, több iparágban kínált szoftvermegoldásokat, ügyfélközpontú értékekre és innováció iránti szenvedélyre építve.",
  "Present": "Jelen",
  "Professional Excellence": "Szakmai kiválóság",
  "Today, Kerridge Digital is a global leader in business management solutions, empowering organizations to optimize operations and drive growth. Our commitment to excellence is reflected in our diverse team of experts, who are dedicated to delivering innovative solutions tailored to our clients' unique needs.": "Ma a Kerridge Digital az üzletirányítási megoldások globális vezetője, amely segíti a szervezeteket működésük optimalizálásában és növekedésük felgyorsításában. A kiválóság iránti elkötelezettségünket sokszínű szakértői csapatunk tükrözi, akik ügyfeleink egyedi igényeire szabott innovatív megoldásokat nyújtanak.",
  "Future": "Jövő",
  "Continuing to Make a Difference": "Továbbra is értéket teremtünk",
  "As we look to the future, our commitment to innovation and customer satisfaction remains unwavering. We are dedicated to helping businesses navigate the complexities of the digital landscape, ensuring they are equipped for success in an ever-evolving world. Our journey is just beginning, and we invite you to join us as we continue to make a difference.": "A jövőbe tekintve az innováció és az ügyfél-elégedettség iránti elkötelezettségünk változatlan. Elhivatottan segítünk a vállalkozásoknak eligazodni a digitális környezet összetettségében, hogy felkészülten érjenek el sikert egy folyamatosan változó világban. Utunk még csak most kezdődik, és meghívunk, hogy tarts velünk, miközben továbbra is értéket teremtünk."
};

function normalizeText(text) {
  return text.replace(/\s+/g, ' ').trim();
}

function translateTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!normalizeText(node.nodeValue)) return NodeFilter.FILTER_REJECT;
      if (node.parentElement && ['SCRIPT', 'STYLE', 'IFRAME'].includes(node.parentElement.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    const text = normalizeText(node.nodeValue);
    if (huTranslations[text]) {
      node.nodeValue = node.nodeValue.replace(text, huTranslations[text]);
    }
  });
}

function translateAttributes(root) {
  root.querySelectorAll('[placeholder], [value], [alt], [title], [aria-label]').forEach(element => {
    ['placeholder', 'value', 'alt', 'title', 'aria-label'].forEach(attribute => {
      if (!element.hasAttribute(attribute)) return;
      const value = normalizeText(element.getAttribute(attribute));
      if (huTranslations[value]) {
        element.setAttribute(attribute, huTranslations[value]);
      }
    });
  });
}

function updateLanguageLinks() {
  document.querySelectorAll('.lang a').forEach(link => {
    const url = new URL(window.location.href);
    if (isHungarian) {
      url.searchParams.delete('lang');
      link.textContent = 'EN';
    } else {
      url.searchParams.set('lang', 'hu');
      link.textContent = 'HU';
    }
    link.href = `${url.pathname}${url.search}${url.hash}`;
  });
}

function applyHungarianTranslation(root = document.body) {
  if (!isHungarian || !root) return;
  document.documentElement.lang = 'hu';
  if (huTranslations[document.title]) document.title = huTranslations[document.title];
  translateTextNodes(root);
  translateAttributes(root);
}

function keepHungarianTranslationCurrent() {
  if (!isHungarian) return;

  const observer = new MutationObserver(mutations => {
    observer.disconnect();
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          applyHungarianTranslation(node);
        } else if (node.nodeType === Node.TEXT_NODE && huTranslations[normalizeText(node.nodeValue)]) {
          node.nodeValue = huTranslations[normalizeText(node.nodeValue)];
        }
      });
      if (mutation.type === 'characterData') {
        const text = normalizeText(mutation.target.nodeValue);
        if (huTranslations[text]) mutation.target.nodeValue = huTranslations[text];
      }
    });
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });
  });

  observer.observe(document.body, { childList: true, characterData: true, subtree: true });
}

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
    strings: isHungarian ? ["készségeidet", "gondolkodásodat", "játékodat", "támadásodat", "védekezésedet"] : ["Skills", "Mindset", "Game", "Offense", "Defense"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: isHungarian ? ["YouTubert", "fejlesztőt", "bloggert", "designert", "szabadúszót"] : ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
});

// Wrap vanilla JS features in DOMContentLoaded to ensure DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  updateLanguageLinks();
  applyHungarianTranslation();
  keepHungarianTranslationCurrent();

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
