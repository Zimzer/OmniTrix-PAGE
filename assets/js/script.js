// --- TRANSLATIONS OBJECT ---
// All text content for the website in English and Polish
const translations = {
  en: {
    // Meta Tags
    meta_title: "OmniTrix - BOT",
    meta_title_content: "OmniTrix - Multifunctional Bot",
    meta_description_content: "OmniTrix - The highest quality app for your Discord server!",
    // Navigation & Buttons
    nav_features: "Features",
    nav_commands: "Commands",
    nav_support: "Support",
    btn_support_server: "Support Server",
    btn_add_to_discord: "Add to Discord",
    // Hero Section
    hero_badge: "Discord multifunctional Bot",
    hero_title: "OmniTrix - The highest quality app for your Discord server!",
    hero_description: "Hey, I'm OmniTrix!",
    hero_feat_admin: "Administrative Functions",
    hero_feat_support: "24/7 Support",
    hero_feat_updates: "Constantly updated",
    btn_add_to_discord_hero: "Add to Discord",
    btn_see_features: "See Features",
    // Features Section
    features_title: "Why Choose OmniTrix?",
    features_subtitle: "We try our best to optimize applications!",
    feature1_title: "Moderation",
    feature1_desc: "Our bot is equipped with an extensive moderation system that simplifies server management and maintains order in the community. Thanks to intuitive and clear commands, you can quickly respond to undesirable behavior, block users, and select the number of messages to delete.",
    feature2_title: "Positive user reviews",
    feature2_desc: "Our bot is highly regarded within the Discord community. Users particularly appreciate its reliability, speed, and intuitive commands, which make it simple and enjoyable to use. Thanks to regular updates and active support, the bot is constantly evolving, providing more and more features tailored to the real needs of servers.",
    feature3_title: "24/7 Support",
    feature3_desc: "We want every user of our bot to be able to use it without interruption at any time of the day or night. That's why we offer 24/7 technical support, ensuring quick troubleshooting and assistance with bot configuration and operation.",
    // Commands Section
    commands_title: "Flexible Controls & Commands",
    commands_subtitle: "Control your server and more!",
    cmd_category_admin: "Administration",
    cmd_category_utility: "Utility",
    cmd_category_fun: "Fun",
    cmd_admin_title: "Administration Commands",
    cmd_ban_desc: "Bans a user from the server",
    cmd_unban_desc: "Unbans a user by ID",
    cmd_kick_desc: "Kicks the user from the server",
    cmd_mute_desc: "Mute a user for a specific period of time or permanently",
    cmd_unmute_desc: "Unmute a user",
    cmd_clear_desc: "Deletes messages from the channel",
    cmd_listbans_desc: "Shows a list of all bans",
    cmd_nuke_desc: "Creates a fresh channel with the same settings",
    cmd_slowmode_desc: "Sets the time between sending messages",
    cmd_represet_desc: "Resets reputation on this server",
    cmd_setlang_desc: "Set the bot language on the server",
    cmd_fun_title: "Fun Commands",
    cmd_cat_desc: "Sends a random cat",
    cmd_dog_desc: "Sends a random dog",
    cmd_8ball_desc: "Random answer to a question",
    cmd_math_desc: "Calculates a mathematical operation",
    cmd_mcstatus_desc: "Check the status of a Minecraft server",
    cmd_utility_title: "Utility Commands",
    cmd_help_desc: "Show all available commands",
    cmd_ping_desc: "Check bot's response time",
    cmd_avatar_desc: "Get user's avatar",
    cmd_userinfo_desc: "Get information about a user",
    cmd_serverinfo_desc: "Displays information about the server",
    cmd_weather_desc: "Displays current weather information in a given city or country",
    cmd_rep_desc: "Give a reputation point to a user",
    cmd_reps_desc: "Check reputation",
    cmd_repleaderboard_desc: "Reputation ranking on this server",
    cmd_invite_desc: "Link to invite the bot to other servers",
    cmd_prop_desc: "Report the introduction of a function or feature",
    cmd_audit_desc: "Shows recent actions in server audit logs",
    cmd_rps_desc: "Rock, Paper, Scissors Game",
    // Community Section
    community_title: "Join Our Community",
    community_subtitle: "Get help, share feedback, and connect with other server owners",
    support_card1_title: "Support Server",
    support_card1_desc: "Join our Discord community for instant support, updates, and to connect with other OmniTrix users.",
    btn_join_support: "Support Server",
    support_card2_title: "Vote Now",
    support_card2_desc: "Show your love for OmniTrix by voting for us! Every single vote helps us grow and deliver even better features to you.",
    btn_vote_now: "Vote Now",
    // Footer
    footer_links: "Links",
    footer_legal: "Legal",
    footer_terms: "Terms of Service",
    footer_privacy: "Privacy Policy",
    footer_connect: "Connect",
    footer_vote: "Vote on Top.gg",
    footer_copyright: "&copy; 2025 OmniTrix. All rights reserved.",
    // Terms of Service Page
    terms_title: "Terms of Service",
    terms_subtitle: "Please read these terms carefully before using OmniTrix",
    terms_header: "Terms of Service",
    terms_p1: "Welcome to OmniTrix! These Terms of Service ('Terms') govern your access to and use of the OmniTrix Discord music bot ('Bot'), website, and related services (collectively, the 'Services'). By using our Services, you agree to be bound by these Terms.",
    // Privacy Policy Page
    privacy_title: "Privacy Policy",
    privacy_subtitle: "How we collect, use, and protect your information",
    privacy_header: "Privacy Policy",
    privacy_p1: "At OmniTrix, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our Discord music bot ('Bot'), website, and related services (collectively, the 'Services')."
  },
  pl: {
    // Meta Tags
    meta_title: "OmniTrix - BOT",
    meta_title_content: "OmniTrix - Wielofunkcyjny Bot",
    meta_description_content: "OmniTrix - Najwyższej jakości aplikacja dla Twojego serwera Discord!",
    // Navigation & Buttons
    nav_features: "Funkcje",
    nav_commands: "Komendy",
    nav_support: "Wsparcie",
    btn_support_server: "Serwer Wsparcia",
    btn_add_to_discord: "Dodaj na Discorda",
    // Hero Section
    hero_badge: "Wielofunkcyjny bot na Discorda",
    hero_title: "OmniTrix - Najwyższej jakości aplikacja dla Twojego serwera Discord!",
    hero_description: "Cześć, jestem OmniTrix!",
    hero_feat_admin: "Funkcje administracyjne",
    hero_feat_support: "Wsparcie 24/7",
    hero_feat_updates: "Ciągle aktualizowany",
    btn_add_to_discord_hero: "Dodaj na Discorda",
    btn_see_features: "Zobacz Funkcje",
    // Features Section
    features_title: "Dlaczego Warto Wybrać OmniTrix?",
    features_subtitle: "Dokładamy wszelkich starań, aby optymalizować aplikacje!",
    feature1_title: "Moderacja",
    feature1_desc: "Nasz bot jest wyposażony w rozbudowany system moderacji, który ułatwia zarządzanie serwerem i utrzymanie porządku w społeczności. Dzięki intuicjnym i jasnym komendom możesz szybko reagować na niepożądane zachowania, blokować użytkowników i wybierać liczbę wiadomości do usunięcia.",
    feature2_title: "Pozytywne opinie użytkowników",
    feature2_desc: "Nasz bot jest wysoko oceniany w społeczności Discorda. Użytkownicy szczególnie doceniają jego niezawodność, szybkość i intuicyjne komendy, które sprawiają, że korzystanie z niego jest proste i przyjemne. Dzięki regularnym aktualizacjom i aktywnemu wsparciu bot stale się rozwija, dostarczając coraz więcej funkcji dostosowanych do realnych potrzeb serwerów.",
    feature3_title: "Wsparcie 24/7",
    feature3_desc: "Chcemy, aby każdy użytkownik naszego bota mógł korzystać z niego bez przerw o każdej porze dnia i nocy. Dlatego oferujemy całodobowe wsparcie techniczne, zapewniając szybkie rozwiązywanie problemów oraz pomoc w konfiguracji i obsłudze bota.",
    // Commands Section
    commands_title: "Elastyczne Sterowanie i Komendy",
    commands_subtitle: "Kontroluj swój serwer i nie tylko!",
    cmd_category_admin: "Administracja",
    cmd_category_utility: "Użytkowe",
    cmd_category_fun: "Zabawa",
    cmd_admin_title: "Komendy Administracyjne",
    cmd_ban_desc: "Banuje użytkownika na serwerze",
    cmd_unban_desc: "Odbanowuje użytkownika po ID",
    cmd_kick_desc: "Wyrzuca użytkownika z serwera",
    cmd_mute_desc: "Wycisza użytkownika na określony czas lub na stałe",
    cmd_unmute_desc: "Odcisza użytkownika",
    cmd_clear_desc: "Usuwa wiadomości z kanału",
    cmd_listbans_desc: "Pokazuje listę wszystkich banów",
    cmd_nuke_desc: "Tworzy nowy kanał z tymi samymi ustawieniami",
    cmd_slowmode_desc: "Ustawia czas pomiędzy wysyłaniem wiadomości",
    cmd_represet_desc: "Resetuje reputację na tym serwerze",
    cmd_setlang_desc: "Ustawia język bota na serwerze",
    cmd_fun_title: "Komendy 4Fun",
    cmd_cat_desc: "Wysyła losowego kota",
    cmd_dog_desc: "Wysyła losowego psa",
    cmd_8ball_desc: "Losowa odpowiedź na pytanie",
    cmd_math_desc: "Oblicza działanie matematyczne",
    cmd_mcstatus_desc: "Sprawdza status serwera Minecraft",
    cmd_utility_title: "Komendy Użytkowe",
    cmd_help_desc: "Pokazuje wszystkie dostępne komendy",
    cmd_ping_desc: "Sprawdza czas odpowiedzi bota",
    cmd_avatar_desc: "Pobiera awatar użytkownika",
    cmd_userinfo_desc: "Pobiera informacje o użytkowniku",
    cmd_serverinfo_desc: "Wyświetla informacje o serwerze",
    cmd_weather_desc: "Wyświetla aktualne informacje o pogodzie w danym mieście",
    cmd_rep_desc: "Daje punkt reputacji użytkownikowi",
    cmd_reps_desc: "Sprawdza reputację",
    cmd_repleaderboard_desc: "Ranking reputacji na tym serwerze",
    cmd_invite_desc: "Link do zaproszenia bota na inne serwery",
    cmd_prop_desc: "Zgłoś propozycję dodania komendy lub funkcji",
    cmd_audit_desc: "Pokazuje ostatnie działania w dziennikach audytu serwera",
    cmd_rps_desc: "Gra kamień, papier, nożyce",
    // Community Section
    community_title: "Dołącz do Naszej Społeczności",
    community_subtitle: "Uzyskaj pomoc, podziel się opinią i połącz się z innymi właścicielami serwerów",
    support_card1_title: "Serwer Wsparcia",
    support_card1_desc: "Dołącz do naszej społeczności na Discordzie, aby uzyskać natychmiastowe wsparcie, aktualizacje i połączyć się z innymi użytkownikami OmniTrix.",
    btn_join_support: "Serwer Wsparcia",
    support_card2_title: "Głosuj Teraz",
    support_card2_desc: "Okaż swoje wsparcie dla OmniTrix, głosując na nas! Każdy głos pomaga nam się rozwijać i dostarczać jeszcze lepsze funkcje.",
    btn_vote_now: "Głosuj Teraz",
    // Footer
    footer_links: "Linki",
    footer_legal: "Prawne",
    footer_terms: "Warunki korzystania z usługi",
    footer_privacy: "Polityka prywatności",
    footer_connect: "Kontakt",
    footer_vote: "Głosuj na Top.gg",
    footer_copyright: "&copy; 2025 OmniTrix. Wszelkie prawa zastrzeżone.",
    // Terms of Service Page
    terms_title: "Warunki korzystania z usługi",
    terms_subtitle: "Przeczytaj uważnie te warunki przed użyciem OmniTrix",
    terms_header: "Warunki korzystania z usługi",
    terms_p1: "Witaj w OmniTrix! Niniejsze Warunki korzystania z usługi ('Warunki') regulują dostęp i korzystanie z bota muzycznego OmniTrix na Discordzie ('Bot'), strony internetowej i powiązanych usług (łącznie 'Usługi'). Korzystając z naszych Usług, zgadzasz się na przestrzeganie niniejszych Warunków.",
    // Privacy Policy Page
    privacy_title: "Polityka Prywatności",
    privacy_subtitle: "Jak zbieramy, używamy i chronimy Twoje informacje",
    privacy_header: "Polityka Prywatności",
    privacy_p1: "W OmniTrix poważnie podchodzimy do Twojej prywatności. Niniejsza Polityka Prywatności wyjaśnia, jak zbieramy, używamy i chronimy Twoje dane osobowe, gdy korzystasz z naszego bota muzycznego na Discordzie ('Bot'), strony internetowej i powiązanych usług (łącznie 'Usługi')."
  }
};

// --- LANGUAGE SWITCHER LOGIC WITH SMOOTH EFFECT ---
function setLanguage(lang) {
  const body = document.body;

  body.classList.add('lang-fade');

  setTimeout(() => {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    const toggleImage = document.querySelector('#language-toggle img');
    if (toggleImage) {
      let pathPrefix = './';
      if (window.location.pathname.includes('/terms/') || window.location.pathname.includes('/privacy/')) {
        pathPrefix = '../';
      }
      toggleImage.src = `${pathPrefix}assets/images/${lang}.png`;
      toggleImage.alt = `${lang} language flag`;
    }

    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key]) {
        if (element.tagName === 'META' || element.tagName === 'TITLE') {
          if (element.hasAttribute('content')) {
            element.setAttribute('content', translations[lang][key]);
          } else {
            element.textContent = translations[lang][key];
          }
        } else {
          element.innerHTML = translations[lang][key];
        }
      }
    });

    body.classList.remove('lang-fade');
  }, 300);
}

// --- MAIN SCRIPT LOGIC ---
document.addEventListener('DOMContentLoaded', () => {

  // --- Initialize Language Toggle ---
  const toggleButton = document.getElementById('language-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      const currentLang = localStorage.getItem('language') || 'en';
      const newLang = currentLang === 'en' ? 'pl' : 'en';
      setLanguage(newLang);
    });
  }

  // --- Initial Language Load ---
  if (document.querySelector('.command-list')) {
      generateCommandGroups();
  }
  const savedLang = localStorage.getItem('language') || 'en';
  setLanguage(savedLang);

  // --- Header Scroll Effect ---
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // =================================================================
  // --- MOBILE MENU (ULEPSZONA WERSJA) ---
  // =================================================================
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navContainer = document.getElementById('nav-container'); // Zmiana na getElementById
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileMenuToggle && navContainer) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpened = navContainer.classList.toggle('active');
      mobileMenuToggle.setAttribute('aria-expanded', isOpened);
      document.body.classList.toggle('menu-open', isOpened);
      const icon = mobileMenuToggle.querySelector('i');
      icon.className = isOpened ? 'fas fa-times' : 'fas fa-bars';
    });
  }

  const closeMobileMenu = () => {
    if (navContainer && navContainer.classList.contains('active')) {
      navContainer.classList.remove('active');
      document.body.classList.remove('menu-open');
      mobileMenuToggle.setAttribute('aria-expanded', 'false');
      if (mobileMenuToggle) {
        mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
      }
    }
  };

  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('click', (e) => {
    if (
      navContainer && navContainer.classList.contains('active') &&
      !navContainer.contains(e.target) &&
      mobileMenuToggle && !mobileMenuToggle.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });

  // Zamykanie menu klawiszem Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navContainer && navContainer.classList.contains('active')) {
      closeMobileMenu();
    }
  });
  // =================================================================
  // --- KONIEC SEKCJI MOBILE MENU ---
  // =================================================================


  // --- Smooth Scrolling ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Commands Section Logic ---
  const commandsSection = document.querySelector('.commands');
  if (commandsSection) {
    const categories = document.querySelectorAll('.category');
    let userInteracted = false;
    let currentCategoryIndex = 0;
    let animationFrameId;
    
    function switchToCategory(categoryIndex) {
      const category = categories[categoryIndex];
      if (!category || category.classList.contains('active')) return;

      categories.forEach(c => c.classList.remove('active'));
      category.classList.add('active');

      const activeGroup = document.querySelector('.command-group.active');
      const groupToShow = document.querySelector(`[data-group="${category.dataset.category}"]`);

      const animateOut = (group) => {
          if (!group) return;
          group.querySelectorAll('.command-item').forEach((item, index) => {
              setTimeout(() => {
                  item.style.opacity = '0';
                  item.style.transform = 'translateY(-20px)';
              }, 30 * index);
          });
      };
      
      const animateIn = (group) => {
          if (!group) return;
          group.classList.add('active');
          group.querySelectorAll('.command-item').forEach((item, index) => {
              item.style.opacity = '0';
              item.style.transform = 'translateY(20px)';
              setTimeout(() => {
                  item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                  item.style.opacity = '1';
                  item.style.transform = 'translateY(0)';
              }, 50 * index);
          });
      };

      if (activeGroup) {
          animateOut(activeGroup);
          setTimeout(() => {
              document.querySelectorAll('.command-group').forEach(g => g.classList.remove('active'));
              animateIn(groupToShow);
          }, 300);
      } else {
          animateIn(groupToShow);
      }
    }

    const progressBar = document.querySelector('.category-progress');
    const switchInterval = 5000;
    let startTime;

    function animateProgress(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / switchInterval * 100, 100);

      if (progressBar) progressBar.style.width = `${progress}%`;

      if (progress < 100 && !userInteracted) {
        animationFrameId = requestAnimationFrame(animateProgress);
      } else if (progress >= 100 && !userInteracted) {
        currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
        switchToCategory(currentCategoryIndex);
        startAutoSwitch();
      }
    }

    function startAutoSwitch() {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (progressBar) {
          progressBar.style.transition = 'none';
          progressBar.style.width = '0%';
      }
      
      setTimeout(() => {
          if(progressBar) progressBar.style.transition = '';
          startTime = null;
          userInteracted = false;
          animationFrameId = requestAnimationFrame(animateProgress);
      }, 50);
    }

    categories.forEach((category, index) => {
      category.addEventListener('click', () => {
        userInteracted = true;
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        currentCategoryIndex = index;
        switchToCategory(index);
        if (progressBar) progressBar.style.width = '0%';
      });
    });

    commandsSection.addEventListener('mouseenter', () => {
      userInteracted = true;
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (progressBar) progressBar.style.width = '0%';
    });

    setTimeout(() => {
      const activeGroup = document.querySelector('.command-group.active');
      if (activeGroup) {
        activeGroup.querySelectorAll('.command-item').forEach((item, index) => {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          setTimeout(() => {
            item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 50 * index);
        });
      }
      startAutoSwitch();
    }, 500);
  }

  // --- General Initial Animations ---
  initAnimations();
});

// --- HELPER FUNCTIONS ---

function generateCommandGroups() {
  const commandList = document.querySelector('.command-list');
  if (!commandList) return;

  const adminCommands = `
    <div class="command-group active" data-group="Administration">
      <h3 class="command-category-title"><i class="fa-solid fa-shield-halved"></i> <span data-translate="cmd_admin_title">Administration Commands</span></h3>
      <div class="command-category-list">
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>ban</div>
          <div class="command-description" data-translate="cmd_ban_desc">Bans a user from the server</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>unban</div>
          <div class="command-description" data-translate="cmd_unban_desc">Unbans a user by ID</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>kick</div>
          <div class="command-description" data-translate="cmd_kick_desc">Kicks the user from the server</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>mute</div>
          <div class="command-description" data-translate="cmd_mute_desc">Mute a user for a specific period of time or permanently</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>unmute</div>
          <div class="command-description" data-translate="cmd_unmute_desc">Unmute a user</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>clear</div>
          <div class="command-description" data-translate="cmd_clear_desc">Deletes messages from the channel</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>listbans</div>
          <div class="command-description" data-translate="cmd_listbans_desc">Shows a list of all bans</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>nuke</div>
          <div class="command-description" data-translate="cmd_nuke_desc">Creates a fresh channel with the same settings</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>slowmode</div>
          <div class="command-description" data-translate="cmd_slowmode_desc">Sets the time between sending messages</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>represet</div>
          <div class="command-description" data-translate="cmd_represet_desc">Resets reputation on this server</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>setlang</div>
          <div class="command-description" data-translate="cmd_setlang_desc">Set the bot language on the server</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>audit</div>
          <div class="command-description" data-translate="cmd_audit_desc">Shows recent actions in server audit logs</div>
        </div>
      </div>
    </div>
  `;
  const funCommands = `
    <div class="command-group" data-group="fun">
      <h3 class="command-category-title"><i class="fa-solid fa-face-smile"></i> <span data-translate="cmd_fun_title">Fun Commands</span></h3>
      <div class="command-category-list">
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>cat</div>
          <div class="command-description" data-translate="cmd_cat_desc">Sends a random cat</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>dog</div>
          <div class="command-description" data-translate="cmd_dog_desc">Sends a random dog</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>8ball</div>
          <div class="command-description" data-translate="cmd_8ball_desc">Random answer to a question</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>math</div>
          <div class="command-description" data-translate="cmd_math_desc">Calculates a mathematical operation</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>minecraft-status</div>
          <div class="command-description" data-translate="cmd_mcstatus_desc">Check the status of a Minecraft server</div>
        </div>
      </div>
    </div>
  `;

  const utilityCommands = `
    <div class="command-group" data-group="Utility">
      <h3 class="command-category-title"><i class="fas fa-tools"></i> <span data-translate="cmd_utility_title">Utility Commands</span></h3>
      <div class="command-category-list">
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>help</div>
          <div class="command-description" data-translate="cmd_help_desc">Show all available commands</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>ping</div>
          <div class="command-description" data-translate="cmd_ping_desc">Check bot's response time</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>avatar</div>
          <div class="command-description" data-translate="cmd_avatar_desc">Get user's avatar</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>userinfo</div>
          <div class="command-description" data-translate="cmd_userinfo_desc">Get information about a user</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>serverinfo</div>
          <div class="command-description" data-translate="cmd_serverinfo_desc">Displays information about the server</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>weather</div>
          <div class="command-description" data-translate="cmd_weather_desc">Displays current weather information in a given city or country</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>rep</div>
          <div class="command-description" data-translate="cmd_rep_desc">Give a reputation point to a user</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>reps</div>
          <div class="command-description" data-translate="cmd_reps_desc">Check reputation</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>repleaderboard</div>
          <div class="command-description" data-translate="cmd_repleaderboard_desc">Reputation ranking on this server</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>invite</div>
          <div class="command-description" data-translate="cmd_invite_desc">Link to invite the bot to other servers</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>prop</div>
          <div class="command-description" data-translate="cmd_prop_desc">Link to invite the bot to other servers</div>
        </div>
        <div class="command-item">
          <div class="command-name"><i class="fa-solid fa-slash" style="transform: scaleX(-0.5); margin-right: -5px;"></i>rps</div>
          <div class="command-description" data-translate="cmd_rps_desc">Rock, Paper, Scissors Game</div>
        </div>
    </div>
  `;

  commandList.innerHTML = adminCommands + funCommands + utilityCommands;
}


function initAnimations() {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .pricing-card, .support-card');
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.classList.add('animate');
      }
    });
  };
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
}