/**
 * =============================================================================
 * WEDDING INVITATION CONFIGURATION
 * =============================================================================
 * You can easily customize ALL details of the wedding from this single object.
 * All texts, dates, venues, links, and image paths can be modified right here.
 * =============================================================================
 */

const CONFIG = {
  // Groom Details
  groom: {
    fullName: "Rahul Sharma",
    parentsLine1: "Son of Late Bindu Devi & Late Bindra Prasad Sharma",
    parentsLine2: "Son of Smt. Sushma Sharma & Shri Ramesh Sharma",
    city: "Lucknow"
  },

  // Bride Details
  bride: {
    fullName: "Pooja Sharma",
    parentsLine1: "Daughter of Late Malti Devi & Late Krishna Kumar Sharma",
    parentsLine2: "Daughter of Smt. Sunita Sharma & Shri Rajesh Sharma",
    city: "Sahabganj, Rampath, Ayodhya"
  },

  // Target Wedding Date & Time for Countdown & Scratch Card
  weddingDateISO: "2027-01-28T19:00:00", // Format: YYYY-MM-DDTHH:mm:ss

  // Save the Date display on Scratch Card
  saveTheDate: {
    month: "JANUARY",
    day: "28",
    year: "2027",
    dayName: "THURSDAY"
  },

  // Main Celebration Venue
  venue: {
    name: "Mamta Lawn",
    address: "Near Saket Mahavidyalaya, Ranopali",
    cityState: "Ayodhya",
    description: "Join us amidst royal ambience, grand floral decorations, and festive warmth as we celebrate the union of two families.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mamta+Lawn+Ranopali+Ayodhya",
    imageUrl: "./image/mamta.jpeg"
  },

  // The 3 Auspicious Wedding Functions (using existing 3 cards)
  functions: {
    haldi: {
      title: "HALDI",
      date: "27 January 2027",
      time: "10:00 AM onwards",
      venue: "Sahabganj, Rampath, Ayodhya",
      description: "A sacred and auspicious ceremony marking the beginning of wedding rituals.",
      googleMapsUrl: "https://maps.app.goo.gl/MJdNMnGLC8KsjgER9?g_st=ac",
      imageUrl: "./image/hald.jpg"
    },
    mehndi: {
      title: "MEHNDI",
      date: "27 January 2027",
      time: "05:00 PM onwards",
      venue: "Sahabganj, Rampath, Ayodhya",
      description: "Seeking divine blessings from ancestors and mothers for happiness and prosperity.",
      googleMapsUrl: "https://maps.app.goo.gl/MJdNMnGLC8KsjgER9?g_st=ac",
      imageUrl: "./image/mehndi.jpg"
    },
    weddingVidai: {
      title: "SHUBH VIVAH",
      date: "28 January 2027",
      time: "07:00 PM onwards (Vidai: 29 January 2027)",
      venue: "Mamta Lawn, Ayodhya",
      description: "With the blessings of our families, we begin a beautiful new journey together.",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Mamta+Lawn+Ranopali+Ayodhya",
      imageUrl: "./image/wedding.jpg"
    }
  },

  // Imagery (from existing image folder)
  images: {
    ganesh: "./image/ganeshji.jpg"
  }
};


/* =============================================================================
   1. DOM POPULATION FROM CONFIGURATION
   ============================================================================= */

function applyConfigToDOM() {
  // Page Title
  document.title = `${CONFIG.groom.fullName} & ${CONFIG.bride.fullName} | Wedding Invitation`;

  // Envelope Slip
  const slipBrideName = document.getElementById("slipBrideName");
  const slipGroomName = document.getElementById("slipGroomName");
  
  if (slipGroomName) slipGroomName.textContent = CONFIG.bride.fullName;
  if (slipBrideName) slipBrideName.textContent = CONFIG.groom.fullName;

  // Couple Section — Groom
  const groomNameEl = document.getElementById("groomNameDisplay");
  if (groomNameEl) groomNameEl.textContent = CONFIG.groom.fullName;

  // Couple Section — Bride
  const brideNameEl = document.getElementById("brideNameDisplay");
  if (brideNameEl) brideNameEl.textContent = CONFIG.bride.fullName;

  // Save the Date Scratch Card
  const revMonth = document.getElementById("revealedMonth");
  const revDay = document.getElementById("revealedDay");
  const revYear = document.getElementById("revealedYear");
  const revDayName = document.getElementById("revealedDayName");

  if (revMonth) revMonth.textContent = CONFIG.saveTheDate.month;
  if (revDay) revDay.textContent = CONFIG.saveTheDate.day;
  if (revYear) revYear.textContent = CONFIG.saveTheDate.year;
  if (revDayName) revDayName.textContent = CONFIG.saveTheDate.dayName;

  // Venue Section
  const venueNameEl = document.getElementById("venueNameDisplay");
  const venueAddressEl = document.getElementById("venueAddressDisplay");
  const venueCityStateEl = document.getElementById("venueCityStateDisplay");
  const venueDescEl = document.getElementById("venueDescDisplay");
  const venueMapBtn = document.getElementById("venueMapBtn");
  const venueImg = document.getElementById("venueImg");

  if (venueNameEl) venueNameEl.textContent = CONFIG.venue.name;
  if (venueAddressEl) venueAddressEl.textContent = CONFIG.venue.address;
  if (venueCityStateEl) venueCityStateEl.textContent = CONFIG.venue.cityState;
  if (venueDescEl) venueDescEl.textContent = CONFIG.venue.description;
  if (venueMapBtn) venueMapBtn.href = CONFIG.venue.googleMapsUrl;
  if (venueImg && CONFIG.venue.imageUrl) venueImg.src = CONFIG.venue.imageUrl;

  // Event 1: Haldi (Card 1)
  const haldiTitleEl = document.getElementById("haldiTitle");
  const haldiDateEl = document.getElementById("haldiDateDisplay");
  const haldiTimeEl = document.getElementById("haldiTimeDisplay");
  const haldiVenueEl = document.getElementById("haldiVenueDisplay");
  const haldiDescEl = document.getElementById("haldiDescDisplay");
  const haldiMapBtn = document.getElementById("haldiMapBtn");
  const haldiImg = document.getElementById("haldiImg");

  if (haldiTitleEl && CONFIG.functions.haldi.title) haldiTitleEl.textContent = CONFIG.functions.haldi.title;
  if (haldiDateEl) haldiDateEl.textContent = CONFIG.functions.haldi.date;
  if (haldiTimeEl) haldiTimeEl.textContent = CONFIG.functions.haldi.time;
  if (haldiVenueEl) haldiVenueEl.textContent = CONFIG.functions.haldi.venue;
  if (haldiDescEl) haldiDescEl.textContent = `"${CONFIG.functions.haldi.description}"`;
  if (haldiMapBtn) haldiMapBtn.href = CONFIG.functions.haldi.googleMapsUrl;
  if (haldiImg && CONFIG.functions.haldi.imageUrl) haldiImg.src = CONFIG.functions.haldi.imageUrl;

  // Event 2: Mehndi (Card 2)
  const mehndiTitleEl = document.getElementById("mehndiTitle");
  const mehndiDateEl = document.getElementById("mehndiDateDisplay");
  const mehndiTimeEl = document.getElementById("mehndiTimeDisplay");
  const mehndiVenueEl = document.getElementById("mehndiVenueDisplay");
  const mehndiDescEl = document.getElementById("mehndiDescDisplay");
  const mehndiMapBtn = document.getElementById("mehndiMapBtn");
  const mehndiImg = document.getElementById("mehndiImg");

  if (mehndiTitleEl && CONFIG.functions.mehndi.title) mehndiTitleEl.textContent = CONFIG.functions.mehndi.title;
  if (mehndiDateEl) mehndiDateEl.textContent = CONFIG.functions.mehndi.date;
  if (mehndiTimeEl) mehndiTimeEl.textContent = CONFIG.functions.mehndi.time;
  if (mehndiVenueEl) mehndiVenueEl.textContent = CONFIG.functions.mehndi.venue;
  if (mehndiDescEl) mehndiDescEl.textContent = `"${CONFIG.functions.mehndi.description}"`;
  if (mehndiMapBtn) mehndiMapBtn.href = CONFIG.functions.mehndi.googleMapsUrl;
  if (mehndiImg && CONFIG.functions.mehndi.imageUrl) mehndiImg.src = CONFIG.functions.mehndi.imageUrl;

  // Event 3: Shubh Vivah (Card 3)
  const weddingTitleEl = document.getElementById("weddingTitle");
  const weddingDateEl = document.getElementById("weddingDateDisplay");
  const weddingTimeEl = document.getElementById("weddingTimeDisplay");
  const weddingVenueEl = document.getElementById("weddingVenueDisplay");
  const weddingDescEl = document.getElementById("weddingDescDisplay");
  const weddingMapBtn = document.getElementById("weddingMapBtn");
  const weddingVidaiImg = document.getElementById("weddingVidaiImg");

  if (weddingTitleEl && CONFIG.functions.weddingVidai.title) weddingTitleEl.textContent = CONFIG.functions.weddingVidai.title;
  if (weddingDateEl) weddingDateEl.textContent = CONFIG.functions.weddingVidai.date;
  if (weddingTimeEl) weddingTimeEl.textContent = CONFIG.functions.weddingVidai.time;
  if (weddingVenueEl) weddingVenueEl.textContent = CONFIG.functions.weddingVidai.venue;
  if (weddingDescEl) weddingDescEl.textContent = `"${CONFIG.functions.weddingVidai.description}"`;
  if (weddingMapBtn) weddingMapBtn.href = CONFIG.functions.weddingVidai.googleMapsUrl;
  if (weddingVidaiImg && CONFIG.functions.weddingVidai.imageUrl) weddingVidaiImg.src = CONFIG.functions.weddingVidai.imageUrl;

  // Final Closing Section
  const finalGroomEl = document.getElementById("finalGroomName");
  const finalBrideEl = document.getElementById("finalBrideName");

  if (finalGroomEl) finalGroomEl.textContent = CONFIG.groom.fullName;
  if (finalBrideEl) finalBrideEl.textContent = CONFIG.bride.fullName;
}


/* =============================================================================
   2. REALISTIC WEDDING ENVELOPE OPENING ANIMATION
   ============================================================================= */

const openingScreen = document.getElementById("openingScreen");
const envelope = document.getElementById("envelope");
const openSealBtn = document.getElementById("openSealBtn");
const mainContent = document.getElementById("mainContent");

let isEnvelopeOpening = false;

function openEnvelope() {
  if (isEnvelopeOpening) return;
  isEnvelopeOpening = true;

  // Start sound / music if possible
  initiateMusic();

  // 1. Envelope animation class triggers flap rotation and card slide
  envelope.classList.add("open");

  // Create burst of golden sparkles around envelope
  createSparkleBurst(window.innerWidth / 2, window.innerHeight / 2, 25);

  // 2. Wait for card to slide out and flap to open, then smoothly transition into main page
  setTimeout(() => {
    openingScreen.classList.add("opened");
    mainContent.classList.remove("hidden");
    document.body.classList.remove("locked");

    // Recompute scratch card dimensions accurately now that mainContent is visible
    setTimeout(() => {
      initScratchCard();
    }, 100);

    // Smooth scroll to top of main invitation
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 1700);
}

if (openSealBtn) {
  openSealBtn.addEventListener("click", openEnvelope);
  openSealBtn.addEventListener("touchend", (e) => {
    e.preventDefault();
    openEnvelope();
  });
}
if (envelope) {
  envelope.addEventListener("click", openEnvelope);
}


/* =============================================================================
   3. SAVE THE DATE — INTERACTIVE SCRATCH CARD
   ============================================================================= */

const canvas = document.getElementById("scratchCanvas");
const scratchHint = document.getElementById("scratchHint");
const scratchHintText = document.getElementById("scratchHintText");
const revealDirectBtn = document.getElementById("revealDirectBtn");

let ctx = null;
let isScratching = false;
let isScratchFinished = false;

function initScratchCard() {
  if (!canvas) return;
  ctx = canvas.getContext("2d");

  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;

  if (rect.width === 0 || rect.height === 0) return;

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  // Render Royal Gold Foil Shimmer Texture
  renderGoldFoilTexture(rect.width, rect.height);
}

function renderGoldFoilTexture(width, height) {
  if (!ctx) return;

  // Base Rich Gold Gradient
  const grad = ctx.createLinearGradient(0, 0, width, height);
  grad.addColorStop(0, "#c4933a");
  grad.addColorStop(0.25, "#f3dc94");
  grad.addColorStop(0.5, "#d6a94f");
  grad.addColorStop(0.75, "#fff0b8");
  grad.addColorStop(1, "#a87522");

  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Decorative Golden Sparkle Dots
  ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
  for (let i = 0; i < 90; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const r = Math.random() * 2.2 + 0.5;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  // Inner Ornate Border
  ctx.strokeStyle = "rgba(78, 15, 25, 0.35)";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(10, 10, width - 20, height - 20);

  // Ornate Mandala Center Emblem
  ctx.fillStyle = "#4a0e17";
  ctx.font = "bold 24px 'Cinzel', serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("❖", width / 2, height / 2 - 28);

  // Foil Heading
  ctx.font = "bold 18px 'Cinzel', serif";
  ctx.fillText("SCRATCH HERE", width / 2, height / 2 + 5);

  ctx.font = "italic 13px 'Cormorant Garamond', Georgia, serif";
  ctx.fillStyle = "#380811";
  ctx.fillText("to reveal the auspicious wedding date", width / 2, height / 2 + 28);
}

function scratchAt(x, y) {
  if (!ctx || isScratchFinished) return;

  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(x, y, 28, 0, Math.PI * 2);
  ctx.fill();

  checkScratchPercentage();
}

function checkScratchPercentage() {
  if (isScratchFinished || !ctx || !canvas) return;

  const width = canvas.width;
  const height = canvas.height;
  
  // Sample every 4th pixel for high performance
  const imgData = ctx.getImageData(0, 0, width, height);
  const data = imgData.data;
  let transparentCount = 0;
  const totalPixels = data.length / 16; // sampled by 4 in loops

  for (let i = 3; i < data.length; i += 16) {
    if (data[i] === 0) {
      transparentCount++;
    }
  }

  const percentage = (transparentCount / totalPixels) * 100;

  if (percentage >= 38) {
    completeScratch();
  }
}

function completeScratch() {
  if (isScratchFinished) return;
  isScratchFinished = true;

  if (canvas) {
    canvas.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    canvas.style.opacity = "0";
    canvas.style.transform = "scale(1.04)";
    setTimeout(() => {
      canvas.style.display = "none";
    }, 800);
  }

  if (scratchHintText) {
    scratchHintText.innerHTML = "✨ <strong>Save The Date Revealed!</strong> ✨";
  }

  if (revealDirectBtn) {
    revealDirectBtn.style.display = "none";
  }

  // Celebrate with sparkles
  const rect = canvas.getBoundingClientRect();
  createSparkleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 35);
}

// Scratch Event Listeners
if (canvas) {
  function getCanvasCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  canvas.addEventListener("mousedown", (e) => {
    isScratching = true;
    const { x, y } = getCanvasCoords(e);
    scratchAt(x, y);
  });

  window.addEventListener("mousemove", (e) => {
    if (!isScratching) return;
    const { x, y } = getCanvasCoords(e);
    scratchAt(x, y);
  });

  window.addEventListener("mouseup", () => {
    isScratching = false;
  });

  // Touch handlers
  canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    isScratching = true;
    const { x, y } = getCanvasCoords(e);
    scratchAt(x, y);
  }, { passive: false });

  canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    if (!isScratching) return;
    const { x, y } = getCanvasCoords(e);
    scratchAt(x, y);
  }, { passive: false });

  canvas.addEventListener("touchend", () => {
    isScratching = false;
  });

  // Resize handler
  window.addEventListener("resize", () => {
    if (!isScratchFinished) {
      initScratchCard();
    }
  });
}

if (revealDirectBtn) {
  revealDirectBtn.addEventListener("click", completeScratch);
}


/* =============================================================================
   4. LIVE COUNTDOWN TIMER
   ============================================================================= */

const cdDays = document.getElementById("cdDays");
const cdHours = document.getElementById("cdHours");
const cdMinutes = document.getElementById("cdMinutes");
const cdSeconds = document.getElementById("cdSeconds");
const countdownStatusMsg = document.getElementById("countdownStatusMsg");

function updateCountdown() {
  if (!cdDays) return;

  const targetDate = new Date(CONFIG.weddingDateISO).getTime();
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    cdDays.textContent = "00";
    cdHours.textContent = "00";
    cdMinutes.textContent = "00";
    cdSeconds.textContent = "00";

    if (countdownStatusMsg) {
      countdownStatusMsg.innerHTML = "✨ The auspicious wedding celebrations have commenced! ✨";
    }
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  cdDays.textContent = String(days).padStart(2, "0");
  cdHours.textContent = String(hours).padStart(2, "0");
  cdMinutes.textContent = String(minutes).padStart(2, "0");
  cdSeconds.textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();


/* =============================================================================
   5. SCROLL REVEAL OBSERVER
   ============================================================================= */

function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  reveals.forEach((el) => observer.observe(el));
}


/* =============================================================================
   6. FLOATING MARIGOLD & ROSE PETALS
   ============================================================================= */

function initFlowerPetals() {
  const container = document.getElementById("flower-container");
  if (!container) return;

  const petalColors = [
    "radial-gradient(circle, #f39c12 0%, #d35400 100%)", // Marigold orange
    "radial-gradient(circle, #e74c3c 0%, #900c3f 100%)", // Rose red
    "radial-gradient(circle, #f5dc99 0%, #c4933a 100%)", // Gold petal
    "radial-gradient(circle, #e8a87c 0%, #c38d9e 100%)"  // Blush pink
  ];

  function spawnPetal() {
    // Only spawn if page has active focus
    if (document.hidden) return;

    const petal = document.createElement("div");
    petal.classList.add("flower-petal");

    const size = Math.random() * 14 + 10; // 10px to 24px
    const startX = Math.random() * 100; // 0 to 100vw
    const duration = Math.random() * 4 + 6; // 6 to 10 seconds
    const color = petalColors[Math.floor(Math.random() * petalColors.length)];

    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.3}px`;
    petal.style.left = `${startX}vw`;
    petal.style.background = color;
    petal.style.animationDuration = `${duration}s`;

    container.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, duration * 1000);
  }

  // Spawn periodic petals
  setInterval(spawnPetal, 450);
}


/* =============================================================================
   7. SPARKLE BURST PARTICLE EFFECT
   ============================================================================= */

function createSparkleBurst(centerX, centerY, count = 20) {
  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement("div");
    sparkle.style.position = "fixed";
    sparkle.style.left = `${centerX}px`;
    sparkle.style.top = `${centerY}px`;
    sparkle.style.width = `${Math.random() * 8 + 4}px`;
    sparkle.style.height = sparkle.style.width;
    sparkle.style.borderRadius = "50%";
    sparkle.style.backgroundColor = Math.random() > 0.4 ? "#f5dc99" : "#ffffff";
    sparkle.style.boxShadow = "0 0 10px #f5dc99";
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "99999";
    sparkle.style.transition = "all 1s cubic-bezier(0.2, 0.9, 0.3, 1)";
    document.body.appendChild(sparkle);

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 140 + 40;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance;

    requestAnimationFrame(() => {
      sparkle.style.transform = `translate(${destX}px, ${destY}px) scale(0)`;
      sparkle.style.opacity = "0";
    });

    setTimeout(() => sparkle.remove(), 1100);
  }
}


/* =============================================================================
   8. MUSIC PLAY / PAUSE & SYNTHESIS FALLBACK
   ============================================================================= */

const musicToggleBtn = document.getElementById("musicToggleBtn");
const weddingMusic = document.getElementById("weddingMusic");
let isMusicActive = false;
let audioSynthContext = null;
let synthOscillators = [];

if (weddingMusic) {
  weddingMusic.volume = 0.85;
  weddingMusic.addEventListener("play", () => setMusicActive(true));
  weddingMusic.addEventListener("pause", () => {
    if (synthOscillators.length === 0) {
      setMusicActive(false);
    }
  });
}

function initiateMusic() {
  if (isMusicActive && weddingMusic && !weddingMusic.paused) return;

  // Try playing the audio element first
  if (weddingMusic) {
    weddingMusic.volume = 0.85;
    const playPromise = weddingMusic.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setMusicActive(true);
        })
        .catch((err) => {
          console.warn("Autoplay blocked or audio play failed:", err);
          // Audio source genuinely failed (not just blocked by autoplay)
          if (weddingMusic.error) {
            startAmbientWeddingDrone();
            setMusicActive(true);
          }
        });
      return;
    }
  }

  // Fallback to ambient wedding drone if no audio element exists
  startAmbientWeddingDrone();
  setMusicActive(true);
}

function toggleMusic() {
  if (isMusicActive) {
    stopMusic();
  } else {
    if (weddingMusic) {
      weddingMusic.volume = 0.85;
      const playPromise = weddingMusic.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setMusicActive(true))
          .catch((err) => {
            console.warn("Toggle play failed:", err);
            startAmbientWeddingDrone();
            setMusicActive(true);
          });
      }
    } else {
      startAmbientWeddingDrone();
      setMusicActive(true);
    }
  }
}

function setMusicActive(active) {
  isMusicActive = active;
  if (musicToggleBtn) {
    if (active) {
      musicToggleBtn.classList.add("playing");
      musicToggleBtn.setAttribute("title", "Pause Wedding Music");
    } else {
      musicToggleBtn.classList.remove("playing");
      musicToggleBtn.setAttribute("title", "Play Wedding Music");
    }
  }
}

function stopMusic() {
  if (weddingMusic) {
    try { weddingMusic.pause(); } catch (e) {}
  }
  stopAmbientWeddingDrone();
  setMusicActive(false);
}

// Auspicious Sitar / Shehnai Harmonic Tanpura Ambient Drone Generator (Zero-Asset Web Audio)
function startAmbientWeddingDrone() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    if (!audioSynthContext) {
      audioSynthContext = new AudioCtx();
    }
    if (audioSynthContext.state === "suspended") {
      audioSynthContext.resume();
    }

    // Sa - Pa classical Indian tanpura tuning (C#3: ~138.6Hz, G#3: ~207.65Hz, C#4: ~277.18Hz)
    const frequencies = [138.6, 207.65, 277.18, 415.3];

    synthOscillators = frequencies.map((freq, idx) => {
      const osc = audioSynthContext.createOscillator();
      const gain = audioSynthContext.createGain();

      osc.type = idx % 2 === 0 ? "triangle" : "sine";
      osc.frequency.setValueAtTime(freq, audioSynthContext.currentTime);

      // Soft, soothing volume
      gain.gain.setValueAtTime(0.012 / (idx + 1), audioSynthContext.currentTime);

      osc.connect(gain);
      gain.connect(audioSynthContext.destination);
      osc.start();

      return { osc, gain };
    });
  } catch (err) {
    console.log("Ambient audio generation handled:", err);
  }
}

function stopAmbientWeddingDrone() {
  if (synthOscillators.length > 0) {
    synthOscillators.forEach(({ osc, gain }) => {
      try {
        gain.gain.setTargetAtTime(0, audioSynthContext.currentTime, 0.2);
        setTimeout(() => osc.stop(), 250);
      } catch (e) {}
    });
    synthOscillators = [];
  }
}

if (musicToggleBtn) {
  musicToggleBtn.addEventListener("click", toggleMusic);
}


/* =============================================================================
   INITIALIZE ON DOM CONTENT LOADED
   ============================================================================= */

document.addEventListener("DOMContentLoaded", () => {
  applyConfigToDOM();
  initScrollReveal();
  initFlowerPetals();
});
