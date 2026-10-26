/**
 * Artiste Dz - Interactive Application Engine
 * Official Red & White Editorial System (Writer Home 4 Theme)
 * High-Contrast Typography: ALL WORDS IN PURE BLACK (#000000)
 * Centered Titles System & 100% Fully Responsive Layouts
 * Founder, Critic & Celebrity Interviewer: Halim Zerrouki
 */

(function () {
  'use strict';

  // Global App State
  const state = {
    lang: localStorage.getItem('artiste_dz_lang') || 'ar',
    currentSlide: 0,
    slideInterval: null,
    slideDuration: 6000,
    slideTimerStart: 0,
    isSlidePaused: false,
    activeCoverageCategory: 'all',
    activeArtistCategory: 'all',
    coverageSearchQuery: '',
    countersAnimated: false
  };

  // Cached DOM Selectors
  const DOM = {
    html: document.documentElement,
    body: document.body,
    // Ticker
    tickerContainer: document.getElementById('tickerItems'),
    // Slider
    sliderContainer: document.getElementById('heroSlider'),
    slideTrack: document.getElementById('slideTrack'),
    sliderPrev: document.getElementById('sliderPrev'),
    sliderNext: document.getElementById('sliderNext'),
    sliderDots: document.getElementById('sliderDots'),
    sliderProgress: document.getElementById('sliderProgress'),
    // Blog Feed
    blogFeedGrid: document.getElementById('blogFeedGrid'),
    // About
    aboutContent: document.getElementById('aboutContent'),
    kpiGrid: document.getElementById('kpiGrid'),
    // Coverage
    coverageFilterTabs: document.getElementById('coverageFilterTabs'),
    coverageSearchInput: document.getElementById('coverageSearchInput'),
    coverageGrid: document.getElementById('coverageGrid'),
    // Collaborations
    artistsMarquee: document.getElementById('artistsMarquee'),
    artistsGrid: document.getElementById('artistsGrid'),
    // Journal
    journalGrid: document.getElementById('journalGrid'),
    // Events
    eventsGrid: document.getElementById('eventsGrid'),
    // Booking Form
    bookingForm: document.getElementById('bookingForm'),
    serviceSelect: document.getElementById('serviceSelect'),
    formSubmitBtn: document.getElementById('formSubmitBtn'),
    // Modals
    mediaModal: document.getElementById('mediaModal'),
    modalContainer: document.getElementById('modalContainer'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    // Newsletter
    newsletterForm: document.getElementById('newsletterForm'),
    // Mobile menu
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileMenu: document.getElementById('mobileMenu'),
    mobileMenuClose: document.getElementById('mobileMenuClose'),
    // Toast
    toast: document.getElementById('toastNotice'),
    toastMessage: document.getElementById('toastMessage')
  };

  function getData() {
    return ArtisteDzData[state.lang] || ArtisteDzData.ar;
  }

  function showToast(message, duration = 4500) {
    if (!DOM.toast || !DOM.toastMessage) return;
    DOM.toastMessage.innerHTML = message;
    DOM.toast.classList.remove('hidden');
    DOM.toast.classList.add('flex');

    setTimeout(() => {
      DOM.toast.classList.add('hidden');
      DOM.toast.classList.remove('flex');
    }, duration);
  }

  // 1. Language and Direction Handler
  function setLanguage(lang) {
    if (!ArtisteDzData[lang]) lang = 'ar';
    state.lang = lang;
    localStorage.setItem('artiste_dz_lang', lang);

    const isRtl = lang === 'ar';
    DOM.html.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    DOM.html.setAttribute('lang', lang);

    // Update Language Buttons Active State in Red & White
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang-btn');
      if (btnLang === lang) {
        btn.classList.add('text-white', 'font-black', 'bg-red-600', 'shadow-md');
        btn.classList.remove('text-black', 'bg-transparent');
      } else {
        btn.classList.remove('text-white', 'bg-red-600', 'shadow-md');
        btn.classList.add('text-black', 'font-bold', 'bg-transparent');
      }
    });

    renderAll();
  }

  // Master Render Engine
  function renderAll() {
    const data = getData();
    renderNavigation(data);
    renderTicker(data);
    renderHeroSlider(data);
    renderBlogFeed(data);
    renderAbout(data);
    renderCoverage(data);
    renderCollaborations(data);
    renderJournal(data);
    renderEvents(data);
    renderBooking(data);
    renderFooter(data);
  }

  function renderNavigation(data) {
    const navMap = {
      'nav-home': data.nav.home,
      'nav-about': data.nav.about,
      'nav-coverage': data.nav.coverage,
      'nav-artists': data.nav.artists,
      'nav-journal': data.nav.journal,
      'nav-contact': data.nav.contact,
      'nav-cta': data.nav.bookCta,
      'nav-breaking-label': data.nav.breakingLabel
    };

    for (const [id, text] of Object.entries(navMap)) {
      document.querySelectorAll(`[data-i18n="${id}"]`).forEach(el => {
        el.textContent = text;
      });
    }
  }

  // Render Breaking Ticker in Pure Black Words
  function renderTicker(data) {
    if (!DOM.tickerContainer) return;
    const items = data.breakingNews || [];
    
    const tickerHtml = items.map(text => `
      <div class="inline-flex items-center gap-3 sm:gap-4 mx-4 sm:mx-6 text-xs font-bold text-black cursor-pointer hover:text-red-600 transition-colors">
        <span class="w-2 h-2 rounded-full bg-red-600 flex-shrink-0"></span>
        <span class="text-black font-extrabold">${text}</span>
      </div>
    `).join('');

    DOM.tickerContainer.innerHTML = tickerHtml + tickerHtml;
  }

  // Render Hero Slider with Centered Title & Full Responsive Layout
  function renderHeroSlider(data) {
    if (!DOM.slideTrack) return;
    const slides = data.heroSlides;

    DOM.slideTrack.innerHTML = slides.map((slide, idx) => `
      <div class="slide-item w-full flex-shrink-0 relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" data-slide-index="${idx}">
        
        <!-- High-res Backdrop Image -->
        <img src="${slide.image}" alt="${slide.title}" class="absolute inset-0 w-full h-full object-cover object-center transform scale-100 transition-transform duration-1000 ease-out" />
        
        <!-- Filmic Gradient & Vignette Overlay -->
        <div class="absolute inset-0 bg-black/45 backdrop-blur-[2px]"></div>

        <!-- Slide Content: Crisp High-Contrast White Card with All Titles & Words Centered -->
        <div class="relative z-10 max-w-4xl w-full mx-auto">
          <div class="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-gray-200 shadow-2xl space-y-4 sm:space-y-5 text-center flex flex-col items-center justify-center">
            
            <!-- Category Tag & Metadata Centered -->
            <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span class="badge-red text-xs font-black tracking-wider">
                ${slide.tag}
              </span>
              <span class="text-xs font-black text-black font-mono flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                <span>⏱️ ${slide.duration}</span>
                <span>•</span>
                <span>👁️ ${slide.views}</span>
              </span>
            </div>

            <!-- Headline Centered in Pure Black Editorial Serif Typography -->
            <h1 class="text-xl sm:text-3xl lg:text-5xl font-black text-black font-editorial leading-tight tracking-tight text-center max-w-3xl mx-auto">
              ${slide.title}
            </h1>

            <!-- Excerpt Centered in Pure Black -->
            <p class="text-black text-xs sm:text-sm lg:text-base leading-relaxed font-medium text-center max-w-2xl mx-auto">
              ${slide.excerpt}
            </p>

            <!-- Byline Centered in Pure Black -->
            <div class="pt-1 flex flex-wrap items-center justify-center gap-2 text-xs font-black text-black text-center">
              <div class="w-6 h-6 rounded-full overflow-hidden border border-red-600 flex-shrink-0">
                <img src="assets/images/halim_zerrouki_profile.jpg" alt="Halim Zerrouki" class="w-full h-full object-cover" />
              </div>
              <span>بقلم ومحاورة: حليم زروقي • Halim Zerrouki</span>
              <span class="text-red-600">•</span>
              <span>جريدة ArtisteDz الحصرية</span>
            </div>

            <!-- Dual Action Buttons Centered & Responsive -->
            <div class="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
              <button onclick="window.ArtisteDzApp.openSlideModal('${slide.id}')" class="btn-brand-red w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-black text-sm cursor-pointer shadow-lg">
                <span class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg class="w-3.5 h-3.5 fill-current text-white translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </span>
                <span>${slide.actionText}</span>
              </button>

              <a href="#coverage" class="btn-brand-outline w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-black text-sm text-black border-2 border-black hover:border-red-600 transition-colors">
                <span>تصفح الأرشيف الكامل</span>
                <svg class="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </a>
            </div>

          </div>
        </div>

      </div>
    `).join('');

    // Render slider dots in Red & White
    if (DOM.sliderDots) {
      DOM.sliderDots.innerHTML = slides.map((_, i) => `
        <button onclick="window.ArtisteDzApp.goToSlide(${i})" class="h-2.5 rounded-full transition-all duration-300 ${i === state.currentSlide ? 'w-8 bg-red-600' : 'w-2.5 bg-white/60 hover:bg-white'}" aria-label="Slide ${i + 1}"></button>
      `).join('');
    }

    updateSlidePosition();
    startSlideTimer();
  }

  function goToSlide(idx) {
    const slides = getData().heroSlides;
    if (idx < 0) idx = slides.length - 1;
    if (idx >= slides.length) idx = 0;
    state.currentSlide = idx;
    updateSlidePosition();
    resetSlideTimer();
  }

  function nextSlide() {
    goToSlide(state.currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(state.currentSlide - 1);
  }

  function updateSlidePosition() {
    if (!DOM.slideTrack) return;
    const isRtl = state.lang === 'ar';
    const offset = state.currentSlide * 100;
    DOM.slideTrack.style.transform = isRtl ? `translateX(${offset}%)` : `translateX(-${offset}%)`;

    if (DOM.sliderDots) {
      const dots = DOM.sliderDots.children;
      for (let i = 0; i < dots.length; i++) {
        if (i === state.currentSlide) {
          dots[i].className = 'w-8 h-2.5 rounded-full bg-red-600 transition-all duration-300';
        } else {
          dots[i].className = 'w-2.5 h-2.5 rounded-full bg-white/60 hover:bg-white transition-all duration-300';
        }
      }
    }
  }

  function startSlideTimer() {
    clearInterval(state.slideInterval);
    state.slideTimerStart = Date.now();

    if (DOM.sliderProgress) {
      DOM.sliderProgress.style.width = '0%';
    }

    state.slideInterval = setInterval(() => {
      if (state.isSlidePaused) return;

      const elapsed = Date.now() - state.slideTimerStart;
      const pct = Math.min((elapsed / state.slideDuration) * 100, 100);

      if (DOM.sliderProgress) {
        DOM.sliderProgress.style.width = `${pct}%`;
      }

      if (elapsed >= state.slideDuration) {
        nextSlide();
      }
    }, 100);
  }

  function resetSlideTimer() {
    startSlideTimer();
  }

  // Render Section 01: "BLOG FEED" / Latest From the Blog (Writer Home 4)
  function renderBlogFeed(data) {
    if (!DOM.blogFeedGrid) return;
    const posts = data.blogFeed || [];

    DOM.blogFeedGrid.innerHTML = posts.map(post => `
      <article onclick="window.ArtisteDzApp.openBlogModal('${post.id}')" class="writer-card overflow-hidden flex flex-col group cursor-pointer border border-gray-200 hover:border-red-600 transition-all bg-white shadow-sm">
        <!-- Thumbnail -->
        <div class="relative aspect-[16/10] overflow-hidden bg-gray-100 img-zoom-container">
          <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover img-zoom-target" />
          <div class="absolute top-3 right-3 rtl:right-3 rtl:left-auto ltr:left-3 ltr:right-auto">
            <span class="badge-red text-[10px] font-black tracking-wider">${post.tag}</span>
          </div>
        </div>

        <!-- Content with Centered Headlines -->
        <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 bg-white text-center">
          <div class="space-y-2.5">
            <div class="flex items-center justify-center gap-2 text-xs font-black text-black">
              <span>✍️ ${post.author}</span>
              <span class="text-red-600">•</span>
              <span>${post.date}</span>
            </div>

            <h3 class="text-base sm:text-lg font-black text-black font-editorial group-hover:text-red-600 transition-colors leading-snug text-center">
              ${post.title}
            </h3>

            <p class="text-xs text-black font-medium leading-relaxed line-clamp-3 text-center">
              ${post.excerpt}
            </p>
          </div>

          <div class="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-black text-black">
            <span>💬 ${post.comments}</span>
            <span class="text-red-600 font-extrabold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>اقرأ المقال</span>
              <span class="rtl:rotate-180">→</span>
            </span>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Render Section 02: About Halim Zerrouki in All Words Black & Centered
  function renderAbout(data) {
    if (!DOM.aboutContent) return;
    const about = data.about;

    DOM.aboutContent.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        <!-- Portrait Image Column (Centered on Mobile) -->
        <div class="lg:col-span-5 relative group w-full max-w-md mx-auto lg:max-w-none">
          <div class="relative">
            
            <!-- Red Frame Border -->
            <div class="relative rounded-3xl overflow-hidden border-2 border-red-600 bg-white shadow-2xl p-2">
              <div class="aspect-square sm:aspect-[4/5] relative overflow-hidden rounded-2xl">
                <img src="assets/images/halim_zerrouki_profile.jpg" alt="Halim Zerrouki" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                <div class="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>
              </div>

              <!-- Floating Accreditation Tag -->
              <div class="absolute top-5 ${state.lang === 'ar' ? 'right-5' : 'left-5'} bg-white border-2 border-red-600 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xl">
                <span class="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                <span class="text-[10px] sm:text-[11px] font-black text-black tracking-wider">OFFICIAL PRESS ACCREDITED</span>
              </div>

              <!-- Overlay Card Footer in Pure Black Words -->
              <div class="absolute bottom-2 inset-x-2 p-4 sm:p-6 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200 space-y-2 shadow-lg text-center">
                <div class="flex items-center justify-center gap-2">
                  <h3 class="text-xl sm:text-2xl font-black text-black">حليم زروقي</h3>
                  <span class="text-red-600 font-editorial text-base sm:text-lg font-bold">| Halim Zerrouki</span>
                </div>
                <p class="text-xs sm:text-sm text-black font-bold">
                  ${about.subtitle}
                </p>
                
                <!-- Social quick link to Facebook ArtisteDz094 -->
                <div class="mt-3 pt-3 border-t border-gray-200 flex items-center justify-between text-xs">
                  <a href="https://www.facebook.com/ArtisteDz094" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 font-black text-black hover:text-red-600 transition-colors">
                    <svg class="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    <span>@ArtisteDz094</span>
                    <span class="text-[10px] bg-red-100 text-red-600 border border-red-300 px-2 py-0.5 rounded-full font-black">حساب موثق</span>
                  </a>
                  <span class="text-[11px] text-black font-mono font-bold">Algiers Media Lounge</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- Narrative & KPIs Column in Pure Black Words (Responsive & Centered Headers) -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-start">
          <div class="space-y-3 flex flex-col items-center lg:items-start text-center lg:text-start">
            <span class="badge-red inline-flex items-center gap-1.5 text-xs font-black">
              ${about.sectionBadge}
            </span>
            <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black text-black font-editorial tracking-tight text-center lg:text-start">
              ${about.title}
            </h2>
            <p class="text-base sm:text-lg font-black text-black text-center lg:text-start">
              ${about.subtitle}
            </p>
          </div>

          <div class="space-y-4 text-black text-xs sm:text-sm sm:text-base leading-relaxed font-medium text-center lg:text-start">
            <p>${about.leadParagraph}</p>
            <p>${about.bodyParagraph}</p>
          </div>

          <!-- Official Statement Banner (Authentic motto in Pure Black Words) -->
          <div class="p-4 sm:p-5 rounded-2xl bg-white border-2 border-red-600 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 shadow-sm text-center sm:text-start">
            <span class="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0 font-black shadow-md">★</span>
            <div>
              <p class="text-xs font-black text-black uppercase tracking-wider">${about.officialQuoteBadge}</p>
              <p class="text-xs sm:text-sm font-black text-black mt-0.5 leading-snug">${about.officialStatement}</p>
            </div>
          </div>

          <!-- Accreditations List -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            ${about.accreditations.map(acc => `
              <div class="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-gray-200 hover:border-red-600 transition-colors shadow-sm text-start">
                <span class="text-red-600 font-black text-sm mt-0.5">✦</span>
                <span class="text-xs text-black font-black leading-snug">${acc}</span>
              </div>
            `).join('')}
          </div>

          <!-- Quote Card in Pure Black Words -->
          <div class="writer-pullquote text-center sm:text-start">
            <p class="italic text-xs sm:text-sm sm:text-base text-black font-bold">
              ${about.quote}
            </p>
            <p class="text-xs text-black font-black mt-2">
              — ${about.quoteAuthor}
            </p>
          </div>

          <!-- CTA Buttons Centered on Mobile -->
          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
            <a href="#contact" class="btn-brand-red w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-black text-sm">
              <svg class="w-4 h-4 fill-current text-white" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/></svg>
              <span>${about.buttons.interview}</span>
            </a>
            
            <a href="https://www.facebook.com/ArtisteDz094" target="_blank" rel="noopener noreferrer" class="btn-brand-outline w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-black text-sm text-black border-2 border-black hover:border-red-600 transition-colors">
              <svg class="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <span>${about.buttons.facebook}</span>
            </a>
          </div>

        </div>

      </div>
    `;

    // Render KPI Cards in All Words Black
    if (DOM.kpiGrid) {
      DOM.kpiGrid.innerHTML = about.kpis.map(kpi => `
        <div class="writer-card p-5 sm:p-6 text-center space-y-1 relative overflow-hidden group border border-gray-200 hover:border-red-600 bg-white shadow-sm">
          <div class="text-2xl sm:text-4xl lg:text-5xl font-black text-black kpi-counter font-mono" data-kpi-target="${kpi.value}">
            ${kpi.value}
          </div>
          <div class="text-xs sm:text-sm sm:text-base font-black text-black pt-1">
            ${kpi.label}
          </div>
          <div class="text-[11px] sm:text-xs text-black font-bold">
            ${kpi.sub}
          </div>
        </div>
      `).join('');
    }
  }

  // Render Coverage Section & Categories Centered
  function renderCoverage(data) {
    if (!DOM.coverageFilterTabs || !DOM.coverageGrid) return;
    const categories = data.categories;

    DOM.coverageFilterTabs.innerHTML = Object.entries(categories).map(([key, label]) => `
      <button onclick="window.ArtisteDzApp.setCoverageCategory('${key}')" class="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${state.activeCoverageCategory === key ? 'bg-red-600 text-white shadow-md' : 'bg-white text-black border-2 border-black hover:border-red-600 hover:text-red-600'}">
        ${label}
      </button>
    `).join('');

    renderCoverageGrid(data);
  }

  function setCoverageCategory(cat) {
    state.activeCoverageCategory = cat;
    renderCoverage(getData());
  }

  function setCoverageSearch(query) {
    state.coverageSearchQuery = query.toLowerCase().trim();
    renderCoverageGrid(getData());
  }

  function renderCoverageGrid(data) {
    if (!DOM.coverageGrid) return;
    let items = data.coverageItems;

    if (state.activeCoverageCategory !== 'all') {
      items = items.filter(item => item.category === state.activeCoverageCategory);
    }

    if (state.coverageSearchQuery) {
      items = items.filter(item => 
        item.title.toLowerCase().includes(state.coverageSearchQuery) ||
        item.guest.toLowerCase().includes(state.coverageSearchQuery) ||
        item.excerpt.toLowerCase().includes(state.coverageSearchQuery)
      );
    }

    if (items.length === 0) {
      DOM.coverageGrid.innerHTML = `
        <div class="col-span-full py-16 text-center space-y-3 bg-white rounded-3xl border border-gray-200">
          <p class="text-black font-black text-base sm:text-lg">لا توجد تغطيات مطابقة لبحثك الحالي</p>
        </div>
      `;
      return;
    }

    DOM.coverageGrid.innerHTML = items.map(item => `
      <article onclick="window.ArtisteDzApp.openCoverageModal('${item.id}')" class="writer-card overflow-hidden flex flex-col group cursor-pointer border border-gray-200 hover:border-red-600 transition-all duration-300 bg-white shadow-sm">
        
        <!-- Thumbnail Container -->
        <div class="relative aspect-video overflow-hidden bg-gray-100 img-zoom-container">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover img-zoom-target" />
          
          <!-- Video Play Badge Overlay -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform play-btn-pulse">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>

          <!-- Category Badge & Duration -->
          <div class="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between text-xs">
            <span class="badge-red text-[10px] sm:text-[11px] font-black">
              ${item.categoryLabel}
            </span>
            <span class="bg-white text-black font-black font-mono px-2 py-0.5 rounded text-[10px] sm:text-[11px] border border-black shadow">
              ${item.duration}
            </span>
          </div>

        </div>

        <!-- Content Body in All Words Black & Centered -->
        <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 bg-white text-center">
          <div class="space-y-2">
            <div class="flex items-center justify-center gap-1.5 text-xs text-black font-black">
              <span class="w-2 h-2 rounded-full bg-red-600"></span>
              <span>الضيف: ${item.guest}</span>
            </div>
            
            <h3 class="text-sm sm:text-base font-black text-black group-hover:text-red-600 transition-colors line-clamp-2 leading-snug font-editorial text-center">
              ${item.title}
            </h3>

            <p class="text-xs text-black font-medium leading-relaxed line-clamp-2 text-center">
              ${item.excerpt}
            </p>
          </div>

          <!-- Footer Metadata in Pure Black Words -->
          <div class="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-black font-black">
            <span>📅 ${item.date}</span>
            <span class="font-mono">👁️ ${item.views}</span>
          </div>

        </div>

      </article>
    `).join('');
  }

  // Render Collaborations Section in All Words Black
  function renderCollaborations(data) {
    const collab = data.collaborations;
    if (!collab) return;

    if (DOM.artistsMarquee) {
      const marqueeCards = collab.artists.map(art => `
        <div onclick="window.ArtisteDzApp.openArtistModal('${art.latinName}')" class="writer-card flex-shrink-0 w-60 sm:w-72 mx-2 sm:mx-3 p-3.5 sm:p-4 flex items-center gap-3.5 cursor-pointer hover:border-red-600 transition-all group bg-white border border-gray-200 shadow-sm text-start">
          <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-red-600 flex-shrink-0 relative">
            <img src="${art.image}" alt="${art.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div class="min-w-0 flex-1">
            <span class="badge-red text-[9px] sm:text-[10px] font-black">${art.badge}</span>
            <h4 class="text-xs sm:text-sm font-black text-black group-hover:text-red-600 transition-colors truncate mt-1">${art.name}</h4>
            <p class="text-[11px] sm:text-xs text-black font-bold truncate">${art.role}</p>
          </div>
        </div>
      `).join('');

      DOM.artistsMarquee.innerHTML = marqueeCards + marqueeCards;
    }

    if (DOM.artistsGrid) {
      renderArtistsGrid(collab.artists);
    }
  }

  function renderArtistsGrid(artists) {
    if (!DOM.artistsGrid) return;
    DOM.artistsGrid.innerHTML = artists.map(art => `
      <div onclick="window.ArtisteDzApp.openArtistModal('${art.latinName}')" class="writer-card p-4 sm:p-5 text-center space-y-2.5 cursor-pointer group border border-gray-200 hover:border-red-600 transition-all bg-white shadow-sm flex flex-col justify-between">
        
        <div class="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto">
          <div class="w-full h-full rounded-full overflow-hidden border-2 border-red-600 group-hover:border-black transition-colors">
            <img src="${art.image}" alt="${art.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <span class="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-red-600 text-white font-black text-[10px] flex items-center justify-center border border-white">★</span>
        </div>

        <div class="space-y-1">
          <span class="badge-red text-[8px] sm:text-[9px] font-black inline-block">${art.badge}</span>
          <h4 class="text-xs sm:text-sm font-black text-black group-hover:text-red-600 transition-colors mt-1 truncate">${art.name}</h4>
          <p class="text-[11px] sm:text-xs text-black font-black truncate">${art.role}</p>
          <p class="text-[10px] sm:text-[11px] text-black font-medium leading-relaxed pt-1 line-clamp-2">${art.desc}</p>
        </div>

        <button class="w-full py-1.5 sm:py-2 px-2.5 rounded-xl bg-white hover:bg-red-600 hover:text-white text-[11px] sm:text-xs font-black text-black border border-black hover:border-red-600 transition-all">
          عرض اللقاء
        </button>

      </div>
    `).join('');
  }

  // Render Journal Section in All Words Black & Centered Cards
  function renderJournal(data) {
    if (!DOM.journalGrid) return;
    const journal = data.journal;

    DOM.journalGrid.innerHTML = journal.articles.map(art => `
      <article onclick="window.ArtisteDzApp.openJournalModal('${art.id}')" class="writer-card p-5 sm:p-8 flex flex-col justify-between space-y-4 sm:space-y-5 cursor-pointer group border border-gray-200 hover:border-red-600 transition-all bg-white text-center shadow-sm">
        <div class="space-y-3">
          <div class="flex items-center justify-between text-xs">
            <span class="badge-red text-[10px] sm:text-[11px] font-black">${art.tag}</span>
            <span class="text-black font-mono font-black text-[11px] sm:text-xs bg-red-50 border border-red-200 px-2.5 py-1 rounded-full">${art.score}</span>
          </div>

          <h3 class="text-lg sm:text-xl font-black text-black font-editorial group-hover:text-red-600 transition-colors leading-snug text-center">
            ${art.title}
          </h3>

          <p class="text-xs sm:text-sm text-black font-medium leading-relaxed line-clamp-3 text-center">
            ${art.excerpt}
          </p>
        </div>

        <div class="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-black text-black">
          <div class="flex items-center gap-1.5">
            <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden border border-red-600">
              <img src="assets/images/halim_zerrouki_profile.jpg" alt="Halim Zerrouki" class="w-full h-full object-cover" />
            </div>
            <span>${art.author}</span>
          </div>
          <div class="flex items-center gap-1.5 font-mono">
            <span>${art.date}</span>
            <span>•</span>
            <span>${art.readTime}</span>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Render Events Section in All Words Black & Centered Cards
  function renderEvents(data) {
    if (!DOM.eventsGrid) return;
    const events = data.events || [];

    DOM.eventsGrid.innerHTML = events.map(evt => `
      <div class="writer-card overflow-hidden group border border-gray-200 hover:border-red-600 transition-all flex flex-col justify-between bg-white text-center shadow-sm">
        <div class="relative aspect-video overflow-hidden bg-gray-100 img-zoom-container">
          <img src="${evt.image}" alt="${evt.title}" class="w-full h-full object-cover img-zoom-target" />
          <div class="absolute top-3 right-3 rtl:right-3 rtl:left-auto ltr:left-3 ltr:right-auto">
            <span class="badge-red text-[10px] font-black">${evt.badge}</span>
          </div>
        </div>

        <div class="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between bg-white">
          <div class="space-y-2">
            <div class="flex items-center justify-center gap-2 text-xs font-black text-black">
              <span>📍 ${evt.location}</span>
              <span class="text-red-600">•</span>
              <span>📅 ${evt.date}</span>
            </div>

            <h3 class="text-sm sm:text-base font-black text-black font-editorial group-hover:text-red-600 transition-colors leading-snug text-center">
              ${evt.title}
            </h3>

            <p class="text-xs text-black font-medium leading-relaxed line-clamp-3 text-center">
              ${evt.desc}
            </p>
          </div>

          <button onclick="window.ArtisteDzApp.openEventModal('${evt.id}')" class="w-full mt-3 py-2 px-3 rounded-xl bg-white hover:bg-red-600 hover:text-white text-xs font-black text-black border border-black hover:border-red-600 transition-all">
            تفاصيل التغطية الصحفية
          </button>
        </div>
      </div>
    `).join('');
  }

  // Render Booking Form Options in All Words Black
  function renderBooking(data) {
    if (!DOM.serviceSelect) return;
    const booking = data.booking;

    DOM.serviceSelect.innerHTML = booking.form.serviceOptions.map(opt => `
      <option value="${opt}" class="bg-white text-black font-bold">${opt}</option>
    `).join('');

    const f = booking.form;
    document.querySelectorAll('[data-booking-name-label]').forEach(el => el.textContent = f.nameLabel);
    document.querySelectorAll('[data-booking-name-placeholder]').forEach(el => el.setAttribute('placeholder', f.namePlaceholder));
    document.querySelectorAll('[data-booking-email-label]').forEach(el => el.textContent = f.emailLabel);
    document.querySelectorAll('[data-booking-email-placeholder]').forEach(el => el.setAttribute('placeholder', f.emailPlaceholder));
    document.querySelectorAll('[data-booking-phone-label]').forEach(el => el.textContent = f.phoneLabel);
    document.querySelectorAll('[data-booking-phone-placeholder]').forEach(el => el.setAttribute('placeholder', f.phonePlaceholder));
    document.querySelectorAll('[data-booking-service-label]').forEach(el => el.textContent = f.serviceLabel);
    document.querySelectorAll('[data-booking-location-label]').forEach(el => el.textContent = f.locationLabel);
    document.querySelectorAll('[data-booking-location-placeholder]').forEach(el => el.setAttribute('placeholder', f.locationPlaceholder));
    document.querySelectorAll('[data-booking-message-label]').forEach(el => el.textContent = f.messageLabel);
    document.querySelectorAll('[data-booking-message-placeholder]').forEach(el => el.setAttribute('placeholder', f.messagePlaceholder));
    
    if (DOM.formSubmitBtn) {
      DOM.formSubmitBtn.querySelector('span').textContent = f.submitBtn;
    }
  }

  function renderFooter(data) {
    const f = data.footer;
    document.querySelectorAll('[data-footer-about]').forEach(el => el.textContent = f.aboutText);
    document.querySelectorAll('[data-footer-newsletter-title]').forEach(el => el.textContent = f.newsletterTitle);
    document.querySelectorAll('[data-footer-newsletter-desc]').forEach(el => el.textContent = f.newsletterDesc);
    document.querySelectorAll('[data-footer-rights]').forEach(el => el.textContent = f.rights);
  }

  // Modal Dialog Injections in Pure Black Words on White (Responsive)
  function openSlideModal(slideId) {
    const data = getData();
    const slide = data.heroSlides.find(s => s.id === slideId);
    if (!slide || !DOM.mediaModal || !DOM.modalContainer) return;

    DOM.modalContainer.innerHTML = `
      <div class="space-y-5 text-center sm:text-start">
        <div class="relative aspect-video rounded-2xl overflow-hidden bg-black border border-gray-200 shadow-xl">
          <img src="${slide.image}" class="w-full h-full object-cover filter brightness-90" />
          <div class="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 bg-black/40">
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl play-btn-pulse mb-3 cursor-pointer">
              <svg class="w-6 h-6 sm:w-7 sm:h-7 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <p class="text-white font-black text-base sm:text-lg text-center drop-shadow">${slide.videoData?.title || slide.title}</p>
          </div>
        </div>

        <div class="space-y-3">
          <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <span class="badge-red text-xs font-black uppercase">${slide.badge}</span>
            <span class="text-xs text-black font-mono font-black">${slide.duration}</span>
            <span class="text-xs text-black font-mono font-black">${slide.views}</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-black font-editorial leading-snug">${slide.title}</h2>
          <p class="text-black leading-relaxed text-xs sm:text-sm font-medium">${slide.videoData?.summary || slide.excerpt}</p>
          
          <div class="p-3.5 sm:p-4 rounded-xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-start">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-red-600 flex-shrink-0">
                <img src="assets/images/halim_zerrouki_profile.jpg" alt="Halim Zerrouki" class="w-full h-full object-cover" />
              </div>
              <div>
                <p class="text-xs font-black text-black">إعداد ومحاورة: حليم زروقي</p>
                <p class="text-[11px] text-black font-bold">جريدة ومنصة ArtisteDz الإلكترونية</p>
              </div>
            </div>
            <a href="https://www.facebook.com/ArtisteDz094" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black transition-colors text-center">
              متابعة على فيسبوك
            </a>
          </div>
        </div>
      </div>
    `;

    DOM.mediaModal.showModal();
  }

  function openCoverageModal(covId) {
    const data = getData();
    const item = data.coverageItems.find(c => c.id === covId);
    if (!item || !DOM.mediaModal || !DOM.modalContainer) return;

    DOM.modalContainer.innerHTML = `
      <div class="space-y-5 text-center sm:text-start">
        <div class="relative aspect-video rounded-2xl overflow-hidden bg-black border border-gray-200 shadow-xl">
          <img src="${item.image}" class="w-full h-full object-cover filter brightness-90" />
          <div class="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 bg-black/40">
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl play-btn-pulse mb-3 cursor-pointer">
              <svg class="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <p class="text-white font-black text-base sm:text-lg text-center drop-shadow">${item.title}</p>
            <p class="text-white text-xs sm:text-sm mt-1 font-black bg-red-600 px-3 py-1 rounded-full">الضيف: ${item.guest}</p>
          </div>
        </div>

        <div class="space-y-3">
          <div class="flex flex-wrap items-center justify-center sm:justify-between gap-2 text-xs text-black font-black">
            <span class="badge-red font-black">${item.categoryLabel}</span>
            <div class="flex items-center gap-2 sm:gap-3 font-mono">
              <span>📅 ${item.date}</span>
              <span>•</span>
              <span>⏱️ ${item.duration}</span>
              <span>•</span>
              <span>👁️ ${item.views}</span>
            </div>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-black font-editorial leading-snug">${item.title}</h2>
          <p class="text-black leading-relaxed text-xs sm:text-sm font-medium">${item.excerpt}</p>
          
          <div class="p-3.5 sm:p-4 rounded-xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-start">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-red-600 flex-shrink-0">
                <img src="assets/images/halim_zerrouki_profile.jpg" alt="Halim Zerrouki" class="w-full h-full object-cover" />
              </div>
              <div>
                <p class="text-xs font-black text-black">حوار حصري مع: ${item.guest}</p>
                <p class="text-[11px] text-black font-bold">بإشراف وتقديم: حليم زروقي • ArtisteDz</p>
              </div>
            </div>
            <a href="https://www.facebook.com/ArtisteDz094" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-black transition-colors text-center">
              مشاهدة اللقاء الكامل
            </a>
          </div>
        </div>
      </div>
    `;

    DOM.mediaModal.showModal();
  }

  function openArtistModal(latinName) {
    const data = getData();
    const artist = data.collaborations.artists.find(a => a.latinName === latinName);
    if (!artist || !DOM.mediaModal || !DOM.modalContainer) return;

    DOM.modalContainer.innerHTML = `
      <div class="space-y-5 text-center sm:text-start">
        <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-gray-50 border border-gray-200">
          <div class="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-red-600 flex-shrink-0 shadow-xl">
            <img src="${artist.image}" alt="${artist.name}" class="w-full h-full object-cover" />
          </div>
          <div class="space-y-1.5 text-center sm:text-start flex-1">
            <span class="badge-red px-2.5 py-0.5 rounded-full text-xs font-black">${artist.badge}</span>
            <h2 class="text-xl sm:text-2xl font-black text-black font-editorial">${artist.name}</h2>
            <p class="text-xs sm:text-sm font-black text-black">${artist.role}</p>
            <p class="text-xs text-black font-mono font-bold">${artist.domain}</p>
            <p class="text-xs sm:text-sm text-black leading-relaxed pt-1.5 font-medium">${artist.desc}</p>
          </div>
        </div>

        <div class="space-y-3">
          <div class="p-3.5 sm:p-4 rounded-xl bg-white border-2 border-red-600 text-xs text-black font-bold leading-relaxed text-center sm:text-start">
            <strong class="text-red-600 block mb-1">توثيق الحوار:</strong>
            «لقاء وحوار حصري مسجل ضمن أرشيف جريدة ArtisteDz الفنية مع الإعلامي حليم زروقي.»
          </div>
          
          <div class="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-2">
            <a href="https://www.facebook.com/ArtisteDz094" target="_blank" rel="noopener noreferrer" class="btn-brand-red w-full sm:w-auto px-5 py-2.5 rounded-xl font-black text-xs text-center">
              مشاهدة الحوار على صفحة ArtisteDz
            </a>
            <button onclick="document.getElementById('mediaModal').close()" class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-black text-black text-center">
              إغلاق النافذة
            </button>
          </div>
        </div>
      </div>
    `;

    DOM.mediaModal.showModal();
  }

  function openJournalModal(artId) {
    const data = getData();
    const art = data.journal.articles.find(a => a.id === artId);
    if (!art || !DOM.mediaModal || !DOM.modalContainer) return;

    DOM.modalContainer.innerHTML = `
      <div class="space-y-5 text-center sm:text-start">
        <div class="space-y-2.5">
          <div class="flex items-center justify-between text-xs font-black text-black">
            <span class="badge-red">${art.tag}</span>
            <span class="font-mono bg-red-100 text-red-600 border border-red-300 px-3 py-1 rounded-full">${art.score}</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-black font-editorial leading-tight">${art.title}</h2>
          <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-black font-bold">
            <span>✍️ بقلم: ${art.author}</span>
            <span>•</span>
            <span>📅 ${art.date}</span>
            <span>•</span>
            <span>⏱️ ${art.readTime}</span>
          </div>
        </div>

        <div class="p-4 sm:p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3 text-black text-xs sm:text-sm leading-relaxed font-medium">
          <p>${art.excerpt}</p>
          <p class="font-bold">المقال التحليلي الموسع يستعرض آليات الكتابة الدرامية، التناول البصري للمخرج، والأداء التمثيلي مع وضع العمل في سياق الإنتاج السينمائي والمسرحي الراهن في الجزائر والعالم العربي.</p>
        </div>

        <div class="p-3.5 sm:p-4 rounded-xl bg-white border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-start">
          <span class="text-xs text-black font-black">ناقد سينمائي وعضو لجان تحكيم مهرجانات دولية: حليم زروقي</span>
          <button onclick="document.getElementById('mediaModal').close()" class="btn-brand-red w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-black">
            إغلاق
          </button>
        </div>
      </div>
    `;

    DOM.mediaModal.showModal();
  }

  function openBlogModal(blogId) {
    const data = getData();
    const post = (data.blogFeed || []).find(p => p.id === blogId);
    if (!post || !DOM.mediaModal || !DOM.modalContainer) return;

    DOM.modalContainer.innerHTML = `
      <div class="space-y-5 text-center sm:text-start">
        <div class="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
          <img src="${post.image}" class="w-full h-full object-cover" />
          <div class="absolute top-4 right-4">
            <span class="badge-red">${post.tag}</span>
          </div>
        </div>

        <div class="space-y-2.5">
          <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-black text-black">
            <span>✍️ ${post.author}</span>
            <span>•</span>
            <span>📅 ${post.date}</span>
            <span>•</span>
            <span>⏱️ ${post.readTime}</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-black font-editorial">${post.title}</h2>
          <p class="text-black text-xs sm:text-sm leading-relaxed font-medium">${post.excerpt}</p>
        </div>

        <div class="p-3.5 sm:p-4 rounded-xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-start">
          <a href="https://www.facebook.com/ArtisteDz094" target="_blank" rel="noopener noreferrer" class="btn-brand-red w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-black text-center">
            قراءة النقاش على فيسبوك (${post.comments})
          </a>
          <button onclick="document.getElementById('mediaModal').close()" class="w-full sm:w-auto px-4 py-2 rounded-xl bg-white border border-black text-black font-black text-xs hover:bg-gray-100 text-center">
            إغلاق
          </button>
        </div>
      </div>
    `;

    DOM.mediaModal.showModal();
  }

  function openEventModal(eventId) {
    const data = getData();
    const evt = (data.events || []).find(e => e.id === eventId);
    if (!evt || !DOM.mediaModal || !DOM.modalContainer) return;

    DOM.modalContainer.innerHTML = `
      <div class="space-y-5 text-center sm:text-start">
        <div class="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
          <img src="${evt.image}" class="w-full h-full object-cover" />
          <div class="absolute top-4 right-4">
            <span class="badge-red">${evt.badge}</span>
          </div>
        </div>

        <div class="space-y-2.5">
          <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-black text-black">
            <span>📍 ${evt.location}</span>
            <span>•</span>
            <span>📅 ${evt.date}</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-black text-black font-editorial">${evt.title}</h2>
          <p class="text-black text-xs sm:text-sm leading-relaxed font-medium">${evt.desc}</p>
        </div>

        <div class="p-3.5 sm:p-4 rounded-xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-start">
          <a href="#contact" onclick="document.getElementById('mediaModal').close()" class="btn-brand-red w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-black text-center">
            طلب اعتماد وتغطية لفعاليتكم
          </a>
          <button onclick="document.getElementById('mediaModal').close()" class="w-full sm:w-auto px-4 py-2 rounded-xl bg-white border border-black text-black font-black text-xs hover:bg-gray-100 text-center">
            إغلاق
          </button>
        </div>
      </div>
    `;

    DOM.mediaModal.showModal();
  }

  // Interactive Form Submissions
  function handleBookingSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = getData().booking.form;

    if (DOM.formSubmitBtn) {
      DOM.formSubmitBtn.disabled = true;
      DOM.formSubmitBtn.querySelector('span').textContent = data.submitting;
    }

    setTimeout(() => {
      showToast(`<strong>تم استلام طلبكم بنجاح!</strong><br>${data.successMsg}`);
      form.reset();
      if (DOM.formSubmitBtn) {
        DOM.formSubmitBtn.disabled = false;
        DOM.formSubmitBtn.querySelector('span').textContent = data.submitBtn;
      }
    }, 1200);
  }

  function handleNewsletter(e) {
    e.preventDefault();
    const input = e.target.querySelector('input[type="email"]');
    const val = input ? input.value : '';
    showToast(`<strong>شكراً لاشتراككم!</strong><br>تم تسجيل البريد (${val}) بنجاح لتلقي نشرة ArtisteDz الدورية.`);
    e.target.reset();
  }

  function downloadMediaKit() {
    showToast(`<strong>جاري تحميل الملف الإعلامي لـ ArtisteDz</strong><br>النسخة الرسمية 2026 (PDF) موثقة بإشراف حليم زروقي.`);
  }

  // Control Initializations
  function initSliderControls() {
    if (DOM.sliderPrev) DOM.sliderPrev.addEventListener('click', prevSlide);
    if (DOM.sliderNext) DOM.sliderNext.addEventListener('click', nextSlide);

    if (DOM.sliderContainer) {
      DOM.sliderContainer.addEventListener('mouseenter', () => state.isSlidePaused = true);
      DOM.sliderContainer.addEventListener('mouseleave', () => state.isSlidePaused = false);
    }
  }

  function initBookingForm() {
    if (DOM.bookingForm) {
      DOM.bookingForm.addEventListener('submit', handleBookingSubmit);
    }
  }

  function initNewsletterForm() {
    if (DOM.newsletterForm) {
      DOM.newsletterForm.addEventListener('submit', handleNewsletter);
    }
  }

  function initSearch() {
    if (DOM.coverageSearchInput) {
      DOM.coverageSearchInput.addEventListener('input', (e) => {
        setCoverageSearch(e.target.value);
      });
    }

    // Rebuilt Mobile Menu Controls (Touch Friendly with Backdrop Click & Escape Key)
    if (DOM.mobileMenuBtn && DOM.mobileMenu) {
      DOM.mobileMenuBtn.addEventListener('click', () => {
        DOM.mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      });
    }

    if (DOM.mobileMenuClose && DOM.mobileMenu) {
      DOM.mobileMenuClose.addEventListener('click', () => {
        DOM.mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
      });
    }

    if (DOM.mobileMenu) {
      DOM.mobileMenu.addEventListener('click', (e) => {
        if (e.target === DOM.mobileMenu) {
          DOM.mobileMenu.classList.add('hidden');
          document.body.style.overflow = '';
        }
      });
    }

    document.querySelectorAll('[data-mobile-nav-link]').forEach(link => {
      link.addEventListener('click', () => {
        if (DOM.mobileMenu) {
          DOM.mobileMenu.classList.add('hidden');
          document.body.style.overflow = '';
        }
      });
    });

    // Global Escape Key to close modals or drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (DOM.mobileMenu && !DOM.mobileMenu.classList.contains('hidden')) {
          DOM.mobileMenu.classList.add('hidden');
          document.body.style.overflow = '';
        }
        if (DOM.mediaModal && DOM.mediaModal.open) {
          DOM.mediaModal.close();
        }
      }
    });
  }

  // Public API
  window.ArtisteDzApp = {
    setLanguage,
    goToSlide,
    nextSlide,
    prevSlide,
    setCoverageCategory,
    setCoverageSearch,
    openSlideModal,
    openCoverageModal,
    openArtistModal,
    openJournalModal,
    openBlogModal,
    openEventModal,
    handleBookingSubmit,
    handleNewsletter,
    downloadMediaKit,
    showToast
  };

  document.addEventListener('DOMContentLoaded', () => {
    setLanguage(state.lang);
    initSliderControls();
    initBookingForm();
    initNewsletterForm();
    initSearch();
  });

})();
