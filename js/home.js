(function () {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const destinations = [
    {
      id: "santorini",
      name: "Santorini",
      country: "Greece",
      category: "coast",
      tag: "Cyclades",
      tagline: "Whitewashed cliffs, blue domes and long Aegean sunsets.",
      price: 420,
      rating: 4.9,
      image: "images/dest-santorini.webp"
    },
    {
      id: "bali",
      name: "Bali",
      country: "Indonesia",
      category: "island",
      tag: "Ubud & the coast",
      tagline: "Rice terraces, temple bells and warm green mornings.",
      price: 185,
      rating: 4.8,
      image: "images/dest-bali.webp"
    },
    {
      id: "kyoto",
      name: "Kyoto",
      country: "Japan",
      category: "culture",
      tag: "Kansai",
      tagline: "Lantern-lit lanes, quiet gardens and a slower kind of city.",
      price: 260,
      rating: 4.9,
      image: "images/dest-kyoto.webp"
    },
    {
      id: "alps",
      name: "Swiss Alps",
      country: "Switzerland",
      category: "mountain",
      tag: "Zermatt",
      tagline: "High air, long trails and a fire waiting at the end of them.",
      price: 390,
      rating: 4.9,
      image: "images/dest-alps.webp"
    },
    {
      id: "marrakech",
      name: "Marrakech",
      country: "Morocco",
      category: "culture",
      tag: "Medina",
      tagline: "Spice markets, shaded courtyards and colours you can feel.",
      price: 150,
      rating: 4.6,
      image: "images/dest-marrakech.webp"
    },
    {
      id: "maldives",
      name: "Maldives",
      country: "Indian Ocean",
      category: "island",
      tag: "Baa Atoll",
      tagline: "Overwater calm, coral gardens and nothing on the schedule.",
      price: 560,
      rating: 5,
      image: "images/dest-maldives.webp"
    },
    {
      id: "paris",
      name: "Paris",
      country: "France",
      category: "city",
      tag: "Le Marais",
      tagline: "Long lunches, little galleries and evening walks by the river.",
      price: 310,
      rating: 4.7,
      image: "images/dest-paris.webp"
    },
    {
      id: "lisbon",
      name: "Lisbon",
      country: "Portugal",
      category: "city",
      tag: "Alfama",
      tagline: "Tiled facades, Atlantic light and a city built on hills.",
      price: 190,
      rating: 4.5,
      image: "images/dest-lisbon.webp"
    }
  ];

  const hotels = [
    {
      id: 1,
      name: "Aegean Cliff House",
      destination: "Santorini",
      location: "Oia, Greece",
      price: 420,
      rating: 4.9,
      reviews: 328,
      tag: "Editor’s pick",
      image: "images/hotel-1.webp",
      amenities: [
        { label: "Infinity pool", icon: "fa-solid fa-water" },
        { label: "Breakfast", icon: "fa-solid fa-mug-hot" },
        { label: "Wi-Fi", icon: "fa-solid fa-wifi" }
      ]
    },
    {
      id: 2,
      name: "Ubud Canopy Retreat",
      destination: "Bali",
      location: "Ubud, Indonesia",
      price: 185,
      rating: 4.8,
      reviews: 412,
      tag: "Guest favourite",
      image: "images/hotel-2.webp",
      amenities: [
        { label: "Jungle pool", icon: "fa-solid fa-water" },
        { label: "Breakfast", icon: "fa-solid fa-mug-hot" },
        { label: "Wi-Fi", icon: "fa-solid fa-wifi" }
      ]
    },
    {
      id: 3,
      name: "Ryokan Matsu",
      destination: "Kyoto",
      location: "Gion, Japan",
      price: 260,
      rating: 4.7,
      reviews: 289,
      tag: "Adults only",
      image: "images/hotel-3.webp",
      amenities: [
        { label: "Onsen", icon: "fa-solid fa-spa" },
        { label: "Kaiseki", icon: "fa-solid fa-utensils" },
        { label: "Wi-Fi", icon: "fa-solid fa-wifi" }
      ]
    },
    {
      id: 4,
      name: "Chalet Aurora",
      destination: "Swiss Alps",
      location: "Zermatt, Switzerland",
      price: 390,
      rating: 4.9,
      reviews: 176,
      tag: "New in",
      image: "images/hotel-4.webp",
      amenities: [
        { label: "Mountain view", icon: "fa-solid fa-mountain" },
        { label: "Fireplace", icon: "fa-solid fa-fire" },
        { label: "Ski store", icon: "fa-solid fa-snowflake" }
      ]
    },
    {
      id: 5,
      name: "Riad Noor",
      destination: "Marrakech",
      location: "Medina, Morocco",
      price: 150,
      rating: 4.6,
      reviews: 241,
      tag: "Family run",
      image: "images/hotel-5.webp",
      amenities: [
        { label: "Courtyard pool", icon: "fa-solid fa-water" },
        { label: "Breakfast", icon: "fa-solid fa-mug-hot" },
        { label: "Wi-Fi", icon: "fa-solid fa-wifi" }
      ]
    },
    {
      id: 6,
      name: "Coral Lagoon Villas",
      destination: "Maldives",
      location: "Baa Atoll, Maldives",
      price: 560,
      rating: 5,
      reviews: 198,
      tag: "Honeymoon",
      image: "images/hotel-6.webp",
      amenities: [
        { label: "Private pool", icon: "fa-solid fa-water" },
        { label: "Spa", icon: "fa-solid fa-spa" },
        { label: "Seaplane", icon: "fa-solid fa-plane" }
      ]
    },
    {
      id: 7,
      name: "Maison Lumière",
      destination: "Paris",
      location: "Le Marais, France",
      price: 310,
      rating: 4.7,
      reviews: 364,
      tag: "Design stay",
      image: "images/hotel-7.webp",
      amenities: [
        { label: "Breakfast", icon: "fa-solid fa-mug-hot" },
        { label: "Bar", icon: "fa-solid fa-wine-glass" },
        { label: "Wi-Fi", icon: "fa-solid fa-wifi" }
      ]
    },
    {
      id: 8,
      name: "Casa Atlântica",
      destination: "Lisbon",
      location: "Alfama, Portugal",
      price: 190,
      rating: 4.5,
      reviews: 218,
      tag: "City hideaway",
      image: "images/hotel-8.webp",
      amenities: [
        { label: "Roof terrace", icon: "fa-solid fa-sun" },
        { label: "Breakfast", icon: "fa-solid fa-mug-hot" },
        { label: "Wi-Fi", icon: "fa-solid fa-wifi" }
      ]
    },
    {
      id: 9,
      name: "Dune & Olive Resort",
      destination: "Marrakech",
      location: "Palmeraie, Morocco",
      price: 225,
      rating: 4.4,
      reviews: 132,
      tag: "Slow escape",
      image: "images/hotel-9.webp",
      amenities: [
        { label: "Olive pool", icon: "fa-solid fa-water" },
        { label: "Spa", icon: "fa-solid fa-spa" },
        { label: "Wi-Fi", icon: "fa-solid fa-wifi" }
      ]
    },
    {
      id: 10,
      name: "Alpine Pine Lodge",
      destination: "Swiss Alps",
      location: "Grindelwald, Switzerland",
      price: 275,
      rating: 4.6,
      reviews: 204,
      tag: "Mountain hideout",
      image: "images/hotel-10.webp",
      amenities: [
        { label: "Mountain view", icon: "fa-solid fa-mountain" },
        { label: "Sauna", icon: "fa-solid fa-fire" },
        { label: "Wi-Fi", icon: "fa-solid fa-wifi" }
      ]
    },
    {
      id: 11,
      name: "Rice Terrace Villas",
      destination: "Bali",
      location: "Tegallalang, Indonesia",
      price: 230,
      rating: 4.7,
      reviews: 267,
      tag: "Quiet escape",
      image: "images/hotel-2.webp",
      amenities: [
        { label: "Private pool", icon: "fa-solid fa-water" },
        { label: "Yoga deck", icon: "fa-solid fa-spa" },
        { label: "Wi-Fi", icon: "fa-solid fa-wifi" }
      ]
    },
    {
      id: 12,
      name: "Kamogawa Machiya",
      destination: "Kyoto",
      location: "Gion, Japan",
      price: 310,
      rating: 4.8,
      reviews: 189,
      tag: "Local favourite",
      image: "images/hotel-3.webp",
      amenities: [
        { label: "Tea room", icon: "fa-solid fa-mug-hot" },
        { label: "Onsen bath", icon: "fa-solid fa-spa" },
        { label: "Wi-Fi", icon: "fa-solid fa-wifi" }
      ]
    }
  ];

  const offers = [
    {
      id: 1,
      eyebrow: "Seven nights in the Cyclades",
      title: "Golden week in Santorini",
      description: "A cliffside suite, slow breakfasts and a private sunset sail for two. Book before the winter rush.",
      discount: "25% off",
      code: "GOLDEN25",
      image: "images/offer-1.webp",
      days: 6
    },
    {
      id: 2,
      eyebrow: "Overwater honeymoon",
      title: "Maldives, just the two of you",
      description: "Five nights in a lagoon villa with a complimentary seaplane transfer and a candlelit dinner on the sand.",
      discount: "20% off",
      code: "TEMPT20",
      image: "images/offer-2.webp",
      days: 9
    },
    {
      id: 3,
      eyebrow: "City lights weekender",
      title: "Three nights, two cities",
      description: "A design-led stay in Paris or Lisbon, late checkout and a curated little black book of our favourite places.",
      discount: "15% off",
      code: "CITY15",
      image: "images/offer-3.webp",
      days: 4
    }
  ];

  const testimonials = [
    {
      name: "Ananya Rao",
      role: "Architect · Bengaluru",
      trip: "Santorini & Milos · 9 days",
      rating: 5,
      avatar: "images/avatar-1.webp",
      quote: "Stackly planned the kind of trip I didn't know I needed. Every stay felt like it had been chosen for us, not for a brochure. We came home slower, happier and already planning the next one."
    },
    {
      name: "James Whitmore",
      role: "Photographer · London",
      trip: "Swiss Alps · 6 days",
      rating: 5,
      avatar: "images/avatar-2.webp",
      quote: "The little details made it: the train seats on the right side, the note at the chalet, the restaurant nobody else seemed to know about. It felt personal from the first email to the last."
    },
    {
      name: "Sofia Marchetti",
      role: "Chef · Milan",
      trip: "Kyoto & Osaka · 11 days",
      rating: 5,
      avatar: "images/avatar-3.webp",
      quote: "I travel for food and I am hard to impress. The market walk, the tiny counter restaurant and the ryokan breakfast were all extraordinary. I still think about that breakfast."
    },
    {
      name: "Ethan Cole",
      role: "Founder · New York",
      trip: "Maldives · 7 days",
      rating: 5,
      avatar: "images/avatar-4.webp",
      quote: "We asked for quiet and they delivered actual quiet. No queues, no upselling, no itinerary that made us tired. Just a beautiful room, warm water and a week that felt twice as long."
    },
    {
      name: "Priya Nair",
      role: "Writer · Dubai",
      trip: "Marrakech · 5 days",
      rating: 5,
      avatar: "images/avatar-5.webp",
      quote: "The riad was a dream and the guide they arranged felt like an old friend. What I loved most was how much space there was to wander and find things for ourselves."
    },
    {
      name: "Lucas Meyer",
      role: "Designer · Berlin",
      trip: "Lisbon & Comporta · 8 days",
      rating: 5,
      avatar: "images/avatar-6.webp",
      quote: "Every recommendation had a point of view. Not just the obvious places, but the bakery, the swim spot, the bar with six seats. It was the most design-literate trip I've taken."
    }
  ];

  const destinationMap = new Map(destinations.map((destination) => [String(destination.id), destination]));
  const hotelMap = new Map(hotels.map((hotel) => [String(hotel.id), hotel]));
  const wishlistKey = "stackly.wishlist.v1";
  const subscriberKey = "stackly.subscribers.v1";

  const state = {
    destinationCategory: "all",
    destinationQuery: "",
    hotels: {
      price: 600,
      rating: 0,
      destination: "all",
      sort: "recommended",
      query: "",
      visible: 12
    },
    guests: {
      adults: 2,
      children: 0,
      rooms: 1
    },
    estimate: {
      destination: destinations[0].name,
      hotelId: "1",
      nights: 5,
      guests: 2,
      rooms: 1,
      breakfast: false,
      transfer: false,
      spa: false
    },
    testimonialIndex: 0,
    testimonialTimer: null,
    offerDeadline: 0
  };

  function formatMoney(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(value);
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function formatShortDate(date) {
    return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short" }).format(date);
  }

  function parseDate(value) {
    if (!value) return null;
    const parts = value.split("-").map(Number);
    if (parts.length !== 3 || parts.some((part) => Number.isNaN(part))) return null;
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  function dateToISO(date) {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }

  function addDays(date, days) {
    const copy = new Date(date);
    copy.setDate(copy.getDate() + days);
    return copy;
  }

  function nightsBetween(start, end) {
    return Math.round((end.getTime() - start.getTime()) / 86400000);
  }

  function getWishlist() {
    try {
      const value = JSON.parse(localStorage.getItem(wishlistKey) || "[]");
      return Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
    } catch (error) {
      return [];
    }
  }

  function saveWishlist(list) {
    try {
      localStorage.setItem(wishlistKey, JSON.stringify(list));
    } catch (error) {
      return;
    }
  }

  function showToast(message, type = "success") {
    const stack = $("#toastStack");
    if (!stack) return;
    const toast = document.createElement("div");
    toast.className = `toast${type === "error" ? " is-error" : ""}`;
    toast.innerHTML = `<i class="fa-solid ${type === "error" ? "fa-circle-exclamation" : "fa-check"}"></i><p>${message}</p>`;
    stack.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("is-visible"));
    window.setTimeout(() => {
      toast.classList.remove("is-visible");
      window.setTimeout(() => toast.remove(), 450);
    }, 3800);
  }

  function updateRangeFill(input) {
    if (!input) return;
    const min = Number(input.min) || 0;
    const max = Number(input.max) || 100;
    const value = Number(input.value);
    const progress = max === min ? 0 : ((value - min) / (max - min)) * 100;
    input.style.setProperty("--range-progress", `${progress}%`);
  }

  const preloaderLottieData = {
    v: "5.12.2",
    fr: 60,
    ip: 0,
    op: 240,
    w: 400,
    h: 400,
    nm: "Stackly orbit",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Outer orbit",
        sr: 1,
        ks: {
          o: { a: 0, k: 42 },
          r: {
            a: 1,
            k: [
              { i: { x: [0.5], y: [0.5] }, o: { x: [0.5], y: [0.5] }, t: 0, s: [0], e: [360] },
              { t: 360, s: [360] }
            ]
          },
          p: { a: 0, k: [200, 200, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              { ty: "el", d: 1, s: { a: 0, k: [334, 334] }, p: { a: 0, k: [0, 0] }, nm: "Outer ring", mn: "ADBE Vector Shape - Ellipse", hd: false },
              {
                ty: "st",
                c: { a: 0, k: [0.663, 0.749, 0.659, 1] },
                o: { a: 0, k: 100 },
                w: { a: 0, k: 1.6 },
                lc: 2,
                lj: 1,
                ml: 4,
                bm: 0,
                d: [
                  { n: "d", nm: "dash", v: { a: 0, k: 2 } },
                  { n: "g", nm: "gap", v: { a: 0, k: 11 } },
                  { n: "o", nm: "offset", v: { a: 0, k: 0 } }
                ],
                nm: "Outer stroke",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
                r: { a: 0, k: 0 },
                o: { a: 0, k: 100 },
                sk: { a: 0, k: 0 },
                sa: { a: 0, k: 0 },
                nm: "Transform"
              }
            ],
            nm: "Outer group",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 240,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "Inner dots",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: {
            a: 1,
            k: [
              { i: { x: [0.5], y: [0.5] }, o: { x: [0.5], y: [0.5] }, t: 0, s: [0], e: [360] },
              { t: 240, s: [360] }
            ]
          },
          p: { a: 0, k: [200, 200, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              { ty: "el", d: 1, s: { a: 0, k: [266, 266] }, p: { a: 0, k: [0, 0] }, nm: "Dotted ring", mn: "ADBE Vector Shape - Ellipse", hd: false },
              {
                ty: "st",
                c: { a: 0, k: [0.773, 0.42, 0.271, 1] },
                o: { a: 0, k: 90 },
                w: { a: 0, k: 5 },
                lc: 2,
                lj: 1,
                ml: 4,
                bm: 0,
                d: [
                  { n: "d", nm: "dash", v: { a: 0, k: 0.1 } },
                  { n: "g", nm: "gap", v: { a: 0, k: 13 } },
                  { n: "o", nm: "offset", v: { a: 0, k: 0 } }
                ],
                nm: "Dot stroke",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
                r: { a: 0, k: 0 },
                o: { a: 0, k: 100 },
                sk: { a: 0, k: 0 },
                sa: { a: 0, k: 0 },
                nm: "Transform"
              }
            ],
            nm: "Dot group",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 240,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "Traveler",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: {
            a: 1,
            k: [
              { i: { x: [0.5], y: [0.5] }, o: { x: [0.5], y: [0.5] }, t: 0, s: [0], e: [360] },
              { t: 240, s: [360] }
            ]
          },
          p: { a: 0, k: [200, 200, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              { ty: "el", d: 1, s: { a: 0, k: [15, 15] }, p: { a: 0, k: [0, -133] }, nm: "Traveler dot", mn: "ADBE Vector Shape - Ellipse", hd: false },
              { ty: "fl", c: { a: 0, k: [0.953, 0.933, 0.898, 1] }, o: { a: 0, k: 100 }, r: 1, bm: 0, nm: "Cream fill", mn: "ADBE Vector Graphic - Fill", hd: false },
              {
                ty: "tr",
                p: { a: 0, k: [0, 0] },
                a: { a: 0, k: [0, 0] },
                s: { a: 0, k: [100, 100] },
                r: { a: 0, k: 0 },
                o: { a: 0, k: 100 },
                sk: { a: 0, k: 0 },
                sa: { a: 0, k: 0 },
                nm: "Transform"
              }
            ],
            nm: "Traveler group",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 240,
        st: 0,
        bm: 0
      }
    ]
  };

  function initPreloaderLottie() {
    const host = $("#preloaderLottie");
    if (!host || !window.lottie || reduceMotion) return null;
    try {
      return window.lottie.loadAnimation({
        container: host,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: preloaderLottieData,
        rendererSettings: { preserveAspectRatio: "xMidYMid meet" }
      });
    } catch (error) {
      return null;
    }
  }

  function initPreloader() {
    const preloader = $("#preloader");
    const bar = $("#preloaderBar");
    const percent = $("#preloaderPercent");
    if (!preloader) return;
    const orbit = initPreloaderLottie();

    let progress = 0;
    let finished = false;
    const startTime = performance.now();

    const timer = window.setInterval(() => {
      progress = Math.min(92, progress + Math.random() * 11 + 3);
      if (bar) bar.style.width = `${progress}%`;
      if (percent) percent.textContent = `${Math.round(progress)}%`;
    }, 90);

    function finish() {
      if (finished) return;
      finished = true;
      window.clearInterval(timer);
      if (bar) bar.style.width = "100%";
      if (percent) percent.textContent = "100%";
      window.setTimeout(() => {
        preloader.classList.add("is-hidden");
        document.body.classList.remove("is-loading");
        startHeroAnimation();
        window.setTimeout(() => {
          if (orbit) orbit.destroy();
          preloader.remove();
        }, 900);
      }, 260);
    }

    window.addEventListener("load", () => {
      const elapsed = performance.now() - startTime;
      window.setTimeout(finish, Math.max(500, 1450 - elapsed));
    });

    window.setTimeout(finish, 4300);
  }

  function initDates() {
    const checkIn = $("#checkIn");
    const checkOut = $("#checkOut");
    const dateHint = $("#dateHint");
    const nightsHint = $("#nightsHint");
    if (!checkIn || !checkOut) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const defaultIn = addDays(today, 14);
    const defaultOut = addDays(today, 18);

    checkIn.min = dateToISO(today);
    checkOut.min = dateToISO(addDays(today, 1));
    checkIn.value = dateToISO(defaultIn);
    checkOut.value = dateToISO(defaultOut);

    function refreshHints() {
      const start = parseDate(checkIn.value);
      const end = parseDate(checkOut.value);
      if (start) {
        dateHint.textContent = `Arriving ${formatShortDate(start)}`;
      } else {
        dateHint.textContent = "Add dates for the best rates";
      }
      if (start && end && end > start) {
        const nights = nightsBetween(start, end);
        nightsHint.textContent = `${nights} night${nights === 1 ? "" : "s"} · ${formatShortDate(start)} – ${formatShortDate(end)}`;
      } else {
        nightsHint.textContent = "Flexible? That's fine too";
      }
    }

    checkIn.addEventListener("change", () => {
      const start = parseDate(checkIn.value);
      if (!start) {
        refreshHints();
        return;
      }
      const minimumOut = addDays(start, 1);
      checkOut.min = dateToISO(minimumOut);
      const currentOut = parseDate(checkOut.value);
      if (!currentOut || currentOut <= start) {
        checkOut.value = dateToISO(addDays(start, 3));
      }
      refreshHints();
    });

    checkOut.addEventListener("change", refreshHints);
    refreshHints();
  }

  function validateStayDates(withToast = false) {
    const checkIn = $("#checkIn");
    const checkOut = $("#checkOut");
    const start = parseDate(checkIn ? checkIn.value : "");
    const end = parseDate(checkOut ? checkOut.value : "");
    if (!start || !end) {
      if (withToast) showToast("Please choose both a check-in and check-out date.", "error");
      return false;
    }
    if (end <= start) {
      if (withToast) showToast("Check-out needs to be at least one night after check-in.", "error");
      return false;
    }
    return true;
  }

  function syncGuestSummary() {
    const summary = $("#guestSummary");
    const countNodes = $$("[data-guest-count]");
    if (!summary) return;
    countNodes.forEach((node) => {
      const key = node.dataset.guestCount;
      if (key in state.guests) node.textContent = state.guests[key];
    });
    const parts = [`${state.guests.adults} adult${state.guests.adults === 1 ? "" : "s"}`];
    if (state.guests.children > 0) {
      parts.push(`${state.guests.children} child${state.guests.children === 1 ? "" : "ren"}`);
    }
    parts.push(`${state.guests.rooms} room${state.guests.rooms === 1 ? "" : "s"}`);
    summary.textContent = parts.join(" · ");
  }

  function initGuestPicker() {
    const toggle = $("#guestToggle");
    const popover = $("#guestPopover");
    if (!toggle || !popover) return;

    function close() {
      popover.classList.remove("is-open");
      popover.hidden = true;
      popover.setAttribute("aria-hidden", "true");
      toggle.setAttribute("aria-expanded", "false");
    }

    function open() {
      popover.hidden = false;
      popover.classList.add("is-open");
      popover.setAttribute("aria-hidden", "false");
      toggle.setAttribute("aria-expanded", "true");
    }

    toggle.addEventListener("click", () => {
      if (popover.classList.contains("is-open")) close();
      else open();
    });

    $$("[data-guest-step]", popover).forEach((button) => {
      button.addEventListener("click", () => {
        const key = button.dataset.guestStep;
        const direction = Number(button.dataset.dir);
        const limits = { adults: [1, 8], children: [0, 6], rooms: [1, 4] };
        const [min, max] = limits[key] || [0, 10];
        state.guests[key] = Math.min(max, Math.max(min, state.guests[key] + direction));
        if (state.guests.rooms > state.guests.adults) {
          state.guests.rooms = state.guests.adults;
        }
        syncGuestSummary();
      });
    });

    $("#guestDone")?.addEventListener("click", close);

    document.addEventListener("click", (event) => {
      if (!popover.classList.contains("is-open")) return;
      if (popover.contains(event.target) || toggle.contains(event.target)) return;
      close();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && popover.classList.contains("is-open")) close();
    });

    syncGuestSummary();
  }

  function renderDestinationSuggestions(query = "") {
    const panel = $("#destinationSuggestions");
    if (!panel) return;
    const term = query.trim().toLowerCase();
    const matches = destinations.filter((destination) => {
      if (!term) return true;
      return `${destination.name} ${destination.country} ${destination.tag}`.toLowerCase().includes(term);
    }).slice(0, 5);

    if (!matches.length) {
      panel.innerHTML = '<p class="suggestion-empty">No places match that yet. Try “Bali” or “Kyoto”.</p>';
    } else {
      panel.innerHTML = matches.map((destination) => `
        <button class="suggestion" type="button" role="option" data-suggestion="${destination.name}">
          <span>
            <strong>${destination.name}</strong>
            <small>${destination.country} · ${destination.tag}</small>
          </span>
          <span>from ${formatMoney(destination.price)}</span>
        </button>
      `).join("");
    }
    panel.classList.add("is-open");
  }

  function closeDestinationSuggestions() {
    const panel = $("#destinationSuggestions");
    if (panel) panel.classList.remove("is-open");
  }

  function initDestinationSuggestions() {
    const input = $("#destinationInput");
    const panel = $("#destinationSuggestions");
    if (!input || !panel) return;

    input.addEventListener("input", () => renderDestinationSuggestions(input.value));
    input.addEventListener("focus", () => renderDestinationSuggestions(input.value));

    panel.addEventListener("click", (event) => {
      const suggestion = event.target.closest("[data-suggestion]");
      if (!suggestion) return;
      input.value = suggestion.dataset.suggestion;
      closeDestinationSuggestions();
      input.focus();
    });

    input.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        panel.querySelector(".suggestion")?.focus();
      }
      if (event.key === "Escape") {
        closeDestinationSuggestions();
      }
    });

    panel.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeDestinationSuggestions();
        input.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (panel.contains(event.target) || input.contains(event.target)) return;
      closeDestinationSuggestions();
    });
  }

  function setDestinationFilter(name) {
    const select = $("#destinationFilter");
    if (!select) return;
    const valid = destinations.some((destination) => destination.name === name);
    select.value = valid ? name : "all";
    state.hotels.destination = select.value;
    state.hotels.visible = 12;
    renderHotels();
  }

  function performHeroSearch() {
    const input = $("#destinationInput");
    if (!input) return;
    const value = input.value.trim();
    if (!value) {
      showToast("Tell us where you'd like to go — or pick a suggestion.", "error");
      input.focus();
      return;
    }
    if (!validateStayDates(true)) return;

    const matched = destinations.find((destination) => {
      return `${destination.name} ${destination.country}`.toLowerCase().includes(value.toLowerCase());
    });

    if (matched) {
      setDestinationFilter(matched.name);
      showToast(`Showing stays in ${matched.name}. Dates and guests are ready to go.`);
    } else {
      setDestinationFilter("all");
      showToast("No exact match yet — showing all stays so you can explore.", "error");
    }

    document.getElementById("stays")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function initHeroSearch() {
    const form = $("#heroSearch");
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        performHeroSearch();
      });
    }

    $$("[data-hero-search]").forEach((button) => {
      button.addEventListener("click", () => {
        const input = $("#destinationInput");
        if (input) input.value = button.dataset.heroSearch;
        renderDestinationSuggestions(button.dataset.heroSearch);
        performHeroSearch();
      });
    });

    initDates();
    initGuestPicker();
    initDestinationSuggestions();
  }

  function updateWishlistUI() {
    const wishlist = getWishlist();
    const set = new Set(wishlist);
    $$(".wish-btn[data-key]").forEach((button) => {
      const active = set.has(button.dataset.key);
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
      const icon = button.querySelector("i");
      if (icon) {
        icon.className = active ? "fa-solid fa-heart" : "fa-regular fa-heart";
      }
    });
    const count = $("#wishlistCount");
    if (count) count.textContent = wishlist.length;
    const footCount = $("#wishlistFootCount");
    if (footCount) footCount.textContent = wishlist.length;
    renderWishlistDrawer(wishlist);
  }

  function resolveWishlistItem(key) {
    const [type, id] = key.split(":");
    if (type === "hotel") {
      const hotel = hotelMap.get(id);
      return hotel ? {
        type: "Stay",
        name: hotel.name,
        image: hotel.image,
        price: `${formatMoney(hotel.price)} / night`,
        key
      } : null;
    }
    const destination = destinationMap.get(id);
    return destination ? {
      type: "Destination",
      name: destination.name,
      image: destination.image,
      price: `Stays from ${formatMoney(destination.price)}`,
      key
    } : null;
  }

  function renderWishlistDrawer(wishlist = getWishlist()) {
    const drawer = $("#wishlistDrawer");
    const container = $("#wishlistItems");
    if (!drawer || !container) return;
    const items = wishlist.map(resolveWishlistItem).filter(Boolean);
    drawer.classList.toggle("is-empty", items.length === 0);
    container.innerHTML = items.map((item) => `
      <div class="wishlist-item">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="wishlist-item__info">
          <p><i class="fa-solid ${item.type === "Stay" ? "fa-bed" : "fa-location-dot"}"></i>${item.type}</p>
          <h4>${item.name}</h4>
          <span>${item.price}</span>
        </div>
        <button class="wishlist-item__remove" type="button" data-remove="${item.key}" aria-label="Remove ${item.name} from wishlist">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `).join("");
  }

  function toggleWishlist(key) {
    const wishlist = getWishlist();
    const index = wishlist.indexOf(key);
    let added = false;
    if (index >= 0) {
      wishlist.splice(index, 1);
    } else {
      wishlist.push(key);
      added = true;
    }
    saveWishlist(wishlist);
    updateWishlistUI();
    const item = resolveWishlistItem(key);
    if (item) {
      showToast(added ? `${item.name} saved to your wishlist.` : `${item.name} removed from your wishlist.`);
    }
  }

  function openWishlist() {
    const drawer = $("#wishlistDrawer");
    const backdrop = $("#drawerBackdrop");
    if (!drawer || !backdrop) return;
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    backdrop.classList.add("is-open");
    document.body.classList.add("wishlist-open");
    $("#wishlistClose")?.focus();
  }

  function closeWishlist() {
    const drawer = $("#wishlistDrawer");
    const backdrop = $("#drawerBackdrop");
    if (!drawer || !backdrop) return;
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    backdrop.classList.remove("is-open");
    document.body.classList.remove("wishlist-open");
    $("#wishlistTrigger")?.focus();
  }

  function initWishlist() {
    $("#wishlistTrigger")?.addEventListener("click", openWishlist);
    $("#wishlistClose")?.addEventListener("click", closeWishlist);
    $("#drawerBackdrop")?.addEventListener("click", closeWishlist);

    $("#wishlistExplore")?.addEventListener("click", () => {
      closeWishlist();
      document.getElementById("destination")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    $("#wishlistPlan")?.addEventListener("click", () => {
      window.location.href = "HTML/404.html";
    });

    $("#wishlistItems")?.addEventListener("click", (event) => {
      const remove = event.target.closest("[data-remove]");
      if (!remove) return;
      const list = getWishlist().filter((key) => key !== remove.dataset.remove);
      saveWishlist(list);
      updateWishlistUI();
      const item = resolveWishlistItem(remove.dataset.remove);
      showToast(item ? `${item.name} removed from your wishlist.` : "Removed from your wishlist.");
    });

    document.addEventListener("click", (event) => {
      const wishButton = event.target.closest(".wish-btn[data-key]");
      if (wishButton) {
        event.preventDefault();
        event.stopPropagation();
        toggleWishlist(wishButton.dataset.key);
        return;
      }

      if (event.target.closest(".place-card__go")) return;
      const destinationCard = event.target.closest("[data-destination-card]");
      if (destinationCard) {
        setDestinationFilter(destinationCard.dataset.destinationCard);
        document.getElementById("stays")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    updateWishlistUI();
  }

  function renderDestinations() {
    const track = $("#destinationsTrack");
    const count = $("#destinationCount");
    const empty = $("#destinationEmpty");
    if (!track) return;
    const term = state.destinationQuery.trim().toLowerCase();
    const filtered = destinations.filter((destination) => {
      const matchesCategory = state.destinationCategory === "all" || destination.category === state.destinationCategory;
      const haystack = `${destination.name} ${destination.country} ${destination.tag} ${destination.tagline}`.toLowerCase();
      return matchesCategory && (!term || haystack.includes(term));
    });

    track.innerHTML = filtered.map((destination) => `
      <article class="place-card" data-destination-card="${destination.name}" aria-label="Explore ${destination.name}" tabindex="0">
        <div class="place-card__media">
          <img src="${destination.image}" alt="${destination.name}, ${destination.country}" width="800" height="1000" loading="lazy">
        </div>
        <span class="place-card__country">${destination.country}</span>
        <button class="wish-btn" type="button" data-key="destination:${destination.id}" aria-label="Save ${destination.name} to wishlist" aria-pressed="false">
          <i class="fa-regular fa-heart"></i>
        </button>
        <div class="place-card__body">
          <h3>${destination.name}</h3>
          <p class="place-card__meta">${destination.tag}</p>
          <p class="place-card__line">${destination.tagline}</p>
          <div class="place-card__foot">
            <span class="place-card__price">Stays from <strong>${formatMoney(destination.price)}</strong></span>
            <a class="place-card__go" href="HTML/404.html">Explore <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </article>
    `).join("");

    if (count) {
      count.textContent = `${filtered.length} place${filtered.length === 1 ? "" : "s"}${term ? ` matching “${state.destinationQuery.trim()}”` : ""}`;
    }
    if (empty) empty.hidden = filtered.length > 0;

    updateWishlistUI();

    if (window.gsap && !reduceMotion && filtered.length) {
      window.gsap.fromTo(
        $$(".place-card", track),
        { y: 26, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.65, stagger: 0.055, ease: "power3.out", overwrite: true }
      );
    }
  }

  function initDestinationFilters() {
    const filters = $("#destinationFilters");
    const search = $("#destinationSearch");
    const track = $("#destinationsTrack");

    filters?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      state.destinationCategory = button.dataset.category;
      $$("[data-category]", filters).forEach((chip) => chip.classList.toggle("is-active", chip === button));
      renderDestinations();
      track?.scrollTo({ left: 0, behavior: "smooth" });
    });

    search?.addEventListener("input", () => {
      state.destinationQuery = search.value;
      renderDestinations();
      track?.scrollTo({ left: 0, behavior: "smooth" });
    });

    const scrollRail = (direction) => {
      if (!track) return;
      const card = track.querySelector(".place-card");
      const step = card ? card.getBoundingClientRect().width + 22 : track.clientWidth * 0.8;
      track.scrollBy({ left: step * direction, behavior: "smooth" });
    };

    $("#destPrev")?.addEventListener("click", () => scrollRail(-1));
    $("#destNext")?.addEventListener("click", () => scrollRail(1));

    track?.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      if (event.target.closest(".place-card__go")) return;
      const card = event.target.closest("[data-destination-card]");
      if (!card) return;
      event.preventDefault();
      setDestinationFilter(card.dataset.destinationCard);
      document.getElementById("stays")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function getFilteredHotels() {
    const term = state.hotels.query.trim().toLowerCase();
    const list = hotels.filter((hotel) => {
      const priceMatch = hotel.price <= state.hotels.price;
      const ratingMatch = hotel.rating >= state.hotels.rating;
      const destinationMatch = state.hotels.destination === "all" || hotel.destination === state.hotels.destination;
      const haystack = `${hotel.name} ${hotel.destination} ${hotel.location} ${hotel.tag}`.toLowerCase();
      const queryMatch = !term || haystack.includes(term);
      return priceMatch && ratingMatch && destinationMatch && queryMatch;
    });

    if (state.hotels.sort === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (state.hotels.sort === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (state.hotels.sort === "rating-desc") {
      list.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
    } else if (state.hotels.sort === "name-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }

  function renderHotels() {
    const grid = $("#hotelGrid");
    const count = $("#hotelCount");
    const empty = $("#hotelEmpty");
    if (!grid) return;
    const filtered = getFilteredHotels();
    const visible = filtered.slice(0, state.hotels.visible);

    grid.innerHTML = visible.map((hotel) => `
      <article class="stay-card">
        <div class="stay-card__media">
          <img src="${hotel.image}" alt="${hotel.name} in ${hotel.destination}" width="900" height="650" loading="lazy">
          <span class="stay-card__tag">${hotel.tag}</span>
          <button class="wish-btn" type="button" data-key="hotel:${hotel.id}" aria-label="Save ${hotel.name} to wishlist" aria-pressed="false">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>
        <div class="stay-card__body">
          <p class="stay-card__location">
            <i class="fa-solid fa-location-dot"></i>${hotel.location}
            <span class="stay-card__rating"><i class="fa-solid fa-star"></i>${hotel.rating.toFixed(1)} <span>(${hotel.reviews})</span></span>
          </p>
          <h3>${hotel.name}</h3>
          <div class="stay-card__amenities">
            ${hotel.amenities.map((amenity) => `<span><i class="${amenity.icon}"></i>${amenity.label}</span>`).join("")}
          </div>
          <div class="stay-card__foot">
            <div class="stay-card__price">
              from
              <strong>${formatMoney(hotel.price)}</strong>
              <small>/ night</small>
            </div>
            <a class="stay-card__view" href="HTML/404.html" aria-label="View ${hotel.name}">
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </article>
    `).join("");

    if (count) {
      count.textContent = filtered.length
        ? `Showing ${visible.length} of ${filtered.length} curated stay${filtered.length === 1 ? "" : "s"}`
        : "No stays match your filters";
    }
    if (empty) empty.hidden = filtered.length > 0;

    updateWishlistUI();

    if (window.gsap && !reduceMotion && visible.length) {
      window.gsap.fromTo(
        $$(".stay-card", grid),
        { y: 22, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.045, ease: "power2.out", overwrite: true }
      );
    }
  }

  function syncHotelFilterControls() {
    const price = $("#priceRange");
    const priceValue = $("#priceOutput");
    const destination = $("#destinationFilter");
    const sort = $("#sortHotels");
    const search = $("#hotelSearch");
    if (price) {
      price.value = state.hotels.price;
      updateRangeFill(price);
    }
    if (priceValue) priceValue.textContent = formatMoney(state.hotels.price);
    if (destination) destination.value = state.hotels.destination;
    if (sort) sort.value = state.hotels.sort;
    if (search) search.value = state.hotels.query;
    $$("[data-rating]", $("#ratingChips")).forEach((chip) => {
      chip.classList.toggle("is-active", Number(chip.dataset.rating) === state.hotels.rating);
    });
  }

  function resetHotelFilters() {
    state.hotels.price = 600;
    state.hotels.rating = 0;
    state.hotels.destination = "all";
    state.hotels.sort = "recommended";
    state.hotels.query = "";
    state.hotels.visible = 12;
    syncHotelFilterControls();
    renderHotels();
  }

  function initHotelFilters() {
    const price = $("#priceRange");
    const destination = $("#destinationFilter");
    const search = $("#hotelSearch");

    syncHotelFilterControls();

    price?.addEventListener("input", () => {
      state.hotels.price = Number(price.value);
      state.hotels.visible = 12;
      updateRangeFill(price);
      const output = $("#priceOutput");
      if (output) output.textContent = formatMoney(state.hotels.price);
      renderHotels();
    });

    $("#ratingChips")?.addEventListener("click", (event) => {
      const chip = event.target.closest("[data-rating]");
      if (!chip) return;
      state.hotels.rating = Number(chip.dataset.rating);
      state.hotels.visible = 12;
      syncHotelFilterControls();
      renderHotels();
    });

    destination?.addEventListener("change", () => {
      state.hotels.destination = destination.value;
      state.hotels.visible = 12;
      renderHotels();
    });

    search?.addEventListener("input", () => {
      state.hotels.query = search.value;
      state.hotels.visible = 12;
      renderHotels();
    });

    $("#sortHotels")?.addEventListener("change", (event) => {
      state.hotels.sort = event.target.value;
      state.hotels.visible = 12;
      renderHotels();
    });

    $("#resetHotelFilters")?.addEventListener("click", resetHotelFilters);

    $("#hotelGrid")?.addEventListener("click", (event) => {
      const planButton = event.target.closest("[data-hotel-plan]");
      if (!planButton) return;
      const hotel = hotelMap.get(planButton.dataset.hotelPlan);
      if (!hotel) return;
      state.estimate.destination = hotel.destination;
      state.estimate.hotelId = String(hotel.id);
      syncEstimatorSelects();
      calculateEstimate();
      document.getElementById("planner")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function renderOffers() {
    const grid = $("#offersGrid");
    if (!grid) return;
    const now = Date.now();
    state.offerDeadline = now + Math.min(...offers.map((offer) => offer.days)) * 86400000;

    grid.innerHTML = offers.map((offer) => `
      <article class="offer-ticket">
        <div class="offer-ticket__media">
          <img src="${offer.image}" alt="${offer.title}" width="1000" height="700" loading="lazy">
          <span class="offer-ticket__discount">${offer.discount}</span>
        </div>
        <div class="offer-ticket__body">
          <p class="offer-ticket__eyebrow">${offer.eyebrow}</p>
          <h3>${offer.title}</h3>
          <p>${offer.description}</p>
          <div class="offer-ticket__code">
            <div>
              <span>Use code</span>
              <strong>${offer.code}</strong>
            </div>
            <button class="copy-btn" type="button" data-copy="${offer.code}" aria-label="Copy coupon code ${offer.code}">
              <i class="fa-regular fa-copy"></i> Copy
            </button>
          </div>
        </div>
      </article>
    `).join("");

    updateCountdowns();
    window.setInterval(updateCountdowns, 1000);
  }

  function updateCountdowns() {
    if (!state.offerDeadline) return;
    const diff = Math.max(0, state.offerDeadline - Date.now());
    const values = {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000)
    };
    const map = {
      days: $("#countdownDays"),
      hours: $("#countdownHours"),
      minutes: $("#countdownMinutes"),
      seconds: $("#countdownSeconds")
    };
    Object.keys(map).forEach((unit) => {
      if (map[unit]) map[unit].textContent = pad(values[unit]);
    });
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (error) {
        return copyTextFallback(text);
      }
    }
    return copyTextFallback(text);
  }

  function copyTextFallback(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    document.body.appendChild(textarea);
    textarea.select();
    let success = false;
    try {
      success = document.execCommand("copy");
    } catch (error) {
      success = false;
    }
    textarea.remove();
    return success;
  }

  function initOfferActions() {
    $("#offersGrid")?.addEventListener("click", async (event) => {
      const button = event.target.closest("[data-copy]");
      if (!button) return;
      const code = button.dataset.copy;
      const original = button.innerHTML;
      const success = await copyText(code);
      if (success) {
        button.classList.add("is-copied");
        button.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
        window.setTimeout(() => {
          button.classList.remove("is-copied");
          button.innerHTML = original;
        }, 2200);
        showToast(`Code ${code} copied. Use it when you request your stay.`);
      } else {
        showToast(`Could not copy automatically. Your code is ${code}.`, "error");
      }
    });
  }

  function renderTestimonials() {
    const track = $("#testimonialTrack");
    const dots = $("#testimonialDots");
    if (!track || !dots) return;

    track.innerHTML = testimonials.map((testimonial, index) => `
      <article class="quote-card" role="group" aria-roledescription="slide" aria-label="${index + 1} of ${testimonials.length}" aria-hidden="${index === 0 ? "false" : "true"}">
        <i class="fa-solid fa-quote-left quote-card__mark"></i>
        <blockquote class="quote-card__text">“${testimonial.quote}”</blockquote>
        <div class="quote-card__foot">
          <img class="quote-card__avatar" src="${testimonial.avatar}" alt="${testimonial.name}" width="220" height="220" loading="lazy">
          <div class="quote-card__person">
            <strong>${testimonial.name}</strong>
            <span>${testimonial.role}</span>
            <span class="quote-card__stars">${'<i class="fa-solid fa-star"></i>'.repeat(testimonial.rating)} ${testimonial.rating.toFixed(1)}</span>
          </div>
          <span class="quote-card__trip">${testimonial.trip}</span>
        </div>
      </article>
    `).join("");

    dots.innerHTML = testimonials.map((testimonial, index) => `
      <button type="button" data-testimonial="${index}" role="tab" aria-selected="${index === 0 ? "true" : "false"}" aria-label="Show testimonial from ${testimonial.name}"${index === 0 ? ' class="is-active"' : ""}></button>
    `).join("");

    goToTestimonial(0, false);
  }

  function goToTestimonial(index, userInitiated = true) {
    const track = $("#testimonialTrack");
    if (!track) return;
    const total = testimonials.length;
    state.testimonialIndex = (index + total) % total;
    track.style.transform = `translateX(-${state.testimonialIndex * 100}%)`;

    $$(".quote-card", track).forEach((slide, slideIndex) => {
      slide.setAttribute("aria-hidden", String(slideIndex !== state.testimonialIndex));
    });

    $$("[data-testimonial]", $("#testimonialDots")).forEach((dot, dotIndex) => {
      const active = dotIndex === state.testimonialIndex;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-selected", String(active));
    });

    const current = $("#testimonialCurrent");
    if (current) current.textContent = pad(state.testimonialIndex + 1);
    resetTestimonialProgress();

    const activeSlide = $$(".quote-card", track)[state.testimonialIndex];
    if (activeSlide && window.gsap && !reduceMotion) {
      window.gsap.fromTo(
        activeSlide.querySelector("blockquote"),
        { y: 18, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out" }
      );
    }

    if (userInitiated) restartTestimonialTimer();
  }

  function resetTestimonialProgress() {
    const progress = $("#testimonialProgress");
    if (!progress) return;
    progress.style.transition = "none";
    progress.style.width = "0%";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        progress.style.transition = "width 7s linear";
        progress.style.width = "100%";
      });
    });
  }

  function restartTestimonialTimer() {
    window.clearInterval(state.testimonialTimer);
    if (reduceMotion) return;
    state.testimonialTimer = window.setInterval(() => {
      goToTestimonial(state.testimonialIndex + 1, false);
    }, 7000);
  }

  function initTestimonials() {
    renderTestimonials();

    $("#testimonialPrev")?.addEventListener("click", () => goToTestimonial(state.testimonialIndex - 1));
    $("#testimonialNext")?.addEventListener("click", () => goToTestimonial(state.testimonialIndex + 1));

    $("#testimonialDots")?.addEventListener("click", (event) => {
      const dot = event.target.closest("[data-testimonial]");
      if (!dot) return;
      goToTestimonial(Number(dot.dataset.testimonial));
    });

    const viewport = $("#testimonialViewport");
    const shell = $(".stories-stage");
    let startX = null;

    viewport?.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      startX = event.clientX;
    });

    viewport?.addEventListener("pointerup", (event) => {
      if (startX === null) return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) > 50) {
        goToTestimonial(state.testimonialIndex + (delta < 0 ? 1 : -1));
      }
      startX = null;
    });

    viewport?.addEventListener("pointercancel", () => {
      startX = null;
    });

    shell?.addEventListener("mouseenter", () => window.clearInterval(state.testimonialTimer));
    shell?.addEventListener("mouseleave", restartTestimonialTimer);
    shell?.addEventListener("focusin", () => window.clearInterval(state.testimonialTimer));
    shell?.addEventListener("focusout", restartTestimonialTimer);

    restartTestimonialTimer();
  }

  function initNewsletter() {
    const form = $("#newsletterForm");
    const input = $("#newsletterEmail");
    const message = $("#newsletterMessage");
    if (!form || !input || !message) return;
    const wrapper = input.closest(".newsletter-form__row");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    function setError(text) {
      message.textContent = text;
      message.className = "form-message is-error";
      wrapper?.classList.add("has-error");
      input.setAttribute("aria-invalid", "true");
      if (window.gsap && !reduceMotion) {
        window.gsap.fromTo(wrapper, { x: -5 }, { x: 0, duration: 0.42, ease: "elastic.out(1, 0.35)" });
      }
      input.focus();
    }

    input.addEventListener("input", () => {
      message.textContent = "";
      message.className = "form-message";
      wrapper?.classList.remove("has-error");
      input.removeAttribute("aria-invalid");
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = input.value.trim();
      if (!email) {
        setError("Please enter your email address.");
        return;
      }
      if (!emailPattern.test(email)) {
        setError("That email doesn't look quite right. Try again?");
        return;
      }

      let subscribers = [];
      try {
        const stored = JSON.parse(localStorage.getItem(subscriberKey) || "[]");
        subscribers = Array.isArray(stored) ? stored : [];
      } catch (error) {
        subscribers = [];
      }

      if (!subscribers.includes(email.toLowerCase())) {
        subscribers.push(email.toLowerCase());
        try {
          localStorage.setItem(subscriberKey, JSON.stringify(subscribers));
        } catch (error) {
          showToast("Your browser blocked local storage, but you're on the list for this visit.", "error");
        }
      }

      message.textContent = "You're in. The next Sunday postcard is on its way.";
      message.className = "form-message is-success";
      wrapper?.classList.remove("has-error");
      input.removeAttribute("aria-invalid");
      form.reset();
      window.location.href = "HTML/404.html";
    });
  }

  function formatCounterValue(value, decimals) {
    if (decimals > 0) return value.toFixed(decimals);
    return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(Math.round(value));
  }

  function animateCounter(element) {
    const target = Number(element.dataset.count);
    const decimals = Number(element.dataset.decimals || 0);
    const suffix = element.dataset.suffix || "";
    const start = performance.now();
    const duration = 1600;

    function frame(now) {
      const elapsed = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - elapsed, 4);
      element.textContent = `${formatCounterValue(target * eased, decimals)}${suffix}`;
      if (elapsed < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }

  function initCounters() {
    const counters = $$("[data-count]");
    if (!counters.length) return;
    if (!("IntersectionObserver" in window) || reduceMotion) {
      counters.forEach((counter) => {
        counter.textContent = `${formatCounterValue(Number(counter.dataset.count), Number(counter.dataset.decimals || 0))}${counter.dataset.suffix || ""}`;
      });
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.45 });

    counters.forEach((counter) => observer.observe(counter));
  }

  function syncEstimatorSelects() {
    const destinationSelect = $("#estimateDestination");
    const hotelSelect = $("#estimateHotel");
    if (!destinationSelect || !hotelSelect) return;

    destinationSelect.value = state.estimate.destination;
    const destinationHotels = hotels.filter((hotel) => hotel.destination === state.estimate.destination);
    hotelSelect.innerHTML = destinationHotels.map((hotel) => `
      <option value="${hotel.id}">${hotel.name} · ${formatMoney(hotel.price)} / night</option>
    `).join("");

    if (!destinationHotels.some((hotel) => String(hotel.id) === state.estimate.hotelId)) {
      state.estimate.hotelId = String(destinationHotels[0]?.id || "");
    }
    hotelSelect.value = state.estimate.hotelId;
  }

  function calculateEstimate() {
    const hotel = hotelMap.get(state.estimate.hotelId) || hotels[0];
    if (!hotel) return;

    const nights = state.estimate.nights;
    const guests = state.estimate.guests;
    const stayTotal = hotel.price * nights;
    const breakfast = state.estimate.breakfast ? 24 * guests * nights : 0;
    const transfer = state.estimate.transfer ? 90 : 0;
    const spa = state.estimate.spa ? 80 : 0;
    const extras = breakfast + transfer + spa;
    const service = Math.round((stayTotal + extras) * 0.08);
    const total = stayTotal + extras + service;

    const priceStay = $("#priceStay");
    const priceExtras = $("#priceExtras");
    const priceService = $("#priceService");
    const priceTotal = $("#priceTotal");
    const nightsOutput = $("#nightsOutput");
    const nightsInput = $("#estimateNights");
    const guestsOutput = $("#guestsOutput");
    const guestsInput = $("#estimateGuests");
    const receiptHotel = $("#receiptHotel");
    const receiptMeta = $("#receiptMeta");

    if (priceStay) priceStay.textContent = formatMoney(stayTotal);
    if (priceExtras) priceExtras.textContent = formatMoney(extras);
    if (priceService) priceService.textContent = formatMoney(service);
    if (priceTotal) priceTotal.textContent = formatMoney(total);
    if (nightsOutput) nightsOutput.textContent = nights;
    if (nightsInput) {
      nightsInput.value = nights;
      updateRangeFill(nightsInput);
    }
    if (guestsOutput) guestsOutput.textContent = guests;
    if (guestsInput) {
      guestsInput.value = guests;
      updateRangeFill(guestsInput);
    }
    if (receiptHotel) receiptHotel.textContent = hotel.name;
    if (receiptMeta) receiptMeta.textContent = `${hotel.destination} · ${nights} night${nights === 1 ? "" : "s"} · ${guests} guest${guests === 1 ? "" : "s"}`;
  }

  function initEstimator() {
    const destinationSelect = $("#estimateDestination");
    const hotelSelect = $("#estimateHotel");
    const nightsInput = $("#estimateNights");
    if (!destinationSelect || !hotelSelect || !nightsInput) return;

    destinationSelect.innerHTML = destinations.map((destination) => `
      <option value="${destination.name}">${destination.name}, ${destination.country}</option>
    `).join("");

    syncEstimatorSelects();
    calculateEstimate();

    destinationSelect.addEventListener("change", () => {
      state.estimate.destination = destinationSelect.value;
      state.estimate.hotelId = "";
      syncEstimatorSelects();
      calculateEstimate();
    });

    hotelSelect.addEventListener("change", () => {
      state.estimate.hotelId = hotelSelect.value;
      calculateEstimate();
    });

    nightsInput.addEventListener("input", () => {
      state.estimate.nights = Number(nightsInput.value);
      calculateEstimate();
    });

    $("#estimateGuests")?.addEventListener("input", (event) => {
      state.estimate.guests = Number(event.target.value);
      calculateEstimate();
    });

    $("#addBreakfast")?.addEventListener("change", (event) => {
      state.estimate.breakfast = event.target.checked;
      calculateEstimate();
    });

    $("#addTransfer")?.addEventListener("change", (event) => {
      state.estimate.transfer = event.target.checked;
      calculateEstimate();
    });

    $("#addSpa")?.addEventListener("change", (event) => {
      state.estimate.spa = event.target.checked;
      calculateEstimate();
    });

    $("#estimateCta")?.addEventListener("click", () => {
      const key = `hotel:${state.estimate.hotelId}`;
      const wishlist = getWishlist();
      if (!wishlist.includes(key)) {
        wishlist.push(key);
        saveWishlist(wishlist);
        updateWishlistUI();
      }
      const hotel = hotelMap.get(state.estimate.hotelId);
      showToast(hotel ? `${hotel.name} saved with your dates and extras.` : "Escape saved to your wishlist.");
    });
  }

  function initHeader() {
    const header = $("#siteHeader");
    const backToTop = $("#backToTop");

    function onScroll() {
      const scrolled = window.scrollY > 36;
      header?.classList.toggle("is-scrolled", scrolled);
      backToTop?.classList.toggle("is-visible", window.scrollY > 650);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    backToTop?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function initMobileMenu() {
    const menu = $("#mobileMenu");
    const hamburger = $("#hamburger");
    const closeButton = $("#menuClose");
    if (!menu || !hamburger || !closeButton) return;

    function open() {
      menu.classList.add("is-open");
      menu.setAttribute("aria-hidden", "false");
      hamburger.setAttribute("aria-expanded", "true");
      document.body.classList.add("menu-open");
      closeButton.focus();
      if (window.gsap && !reduceMotion) {
        window.gsap.fromTo(
          $$(".mobile-menu__nav a", menu),
          { y: 26, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.06, delay: 0.2, ease: "power3.out" }
        );
      }
    }

    function close() {
      menu.classList.remove("is-open");
      menu.setAttribute("aria-hidden", "true");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
      hamburger.focus();
    }

    hamburger.addEventListener("click", () => {
      if (menu.classList.contains("is-open")) close();
      else open();
    });

    closeButton.addEventListener("click", close);

    $$("a", menu).forEach((link) => {
      link.addEventListener("click", () => {
        if (menu.classList.contains("is-open")) {
          menu.classList.remove("is-open");
          menu.setAttribute("aria-hidden", "true");
          hamburger.setAttribute("aria-expanded", "false");
          document.body.classList.remove("menu-open");
        }
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      if (menu.classList.contains("is-open")) close();
    });

    const desktopQuery = window.matchMedia("(min-width: 941px)");
    desktopQuery.addEventListener?.("change", (event) => {
      if (event.matches && menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        menu.setAttribute("aria-hidden", "true");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      }
    });
  }

  function startHeroAnimation() {
    if (!window.gsap || reduceMotion) return;
    const timeline = window.gsap.timeline({ defaults: { ease: "power3.out" } });
    timeline
      .from(".hero .eyebrow", { y: 18, autoAlpha: 0, duration: 0.65 })
      .from(".hero h1", { y: 38, autoAlpha: 0, duration: 0.95 }, "-=0.35")
      .from(".hero__lede", { y: 22, autoAlpha: 0, duration: 0.75 }, "-=0.55")
      .from(".hero__actions .btn", { y: 18, autoAlpha: 0, stagger: 0.08, duration: 0.55 }, "-=0.45")
      .from(".hero__visual", { y: 30, autoAlpha: 0, duration: 0.85 }, "-=0.55")
      .from(".search-ticket", { y: 34, autoAlpha: 0, duration: 0.85 }, "-=0.6")
      .from(".hero__proof", { autoAlpha: 0, duration: 0.5 }, "-=0.35");
  }

  function initScrollEffects() {
    if (!window.gsap || !window.ScrollTrigger || reduceMotion) return;
    window.gsap.registerPlugin(window.ScrollTrigger);

    window.gsap.to(".hero__photo--main img", {
      yPercent: 8,
      scale: 1.04,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

  }

  function initAOS() {
    if (!window.AOS) return;
    window.AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 65,
      disable: reduceMotion
    });
  }

  function initFooter() {
    const year = $("#footerYear");
    if (year) year.textContent = new Date().getFullYear();
  }

  function initGlobalKeys() {
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      const drawer = $("#wishlistDrawer");
      if (drawer?.classList.contains("is-open")) closeWishlist();
    });
  }

  /* Seamless infinite marquees: clone one group until the track is always
     wider than the viewport, then slide by exactly one group's width. */
  function initMarquees() {
    const tracks = $$("[data-marquee]");
    if (!tracks.length) return;

    const setup = (track) => {
      const groups = $$(":scope > *", track);
      const base = groups[0];
      if (!base) return;
      // drop earlier clones so a resize starts clean
      groups.slice(1).forEach((node) => node.remove());
      track.style.removeProperty("--marquee-shift");

      const shift = base.getBoundingClientRect().width;
      if (!shift) return;
      const needed = Math.ceil(window.innerWidth / shift) + 1;

      for (let i = 1; i < needed; i += 1) {
        const clone = base.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        $$("img", clone).forEach((img) => img.setAttribute("alt", ""));
        track.appendChild(clone);
      }

      const speed = Number(track.dataset.speed) || 60;
      track.style.setProperty("--marquee-shift", `${shift}px`);
      track.style.setProperty("--marquee-duration", `${(shift / speed).toFixed(2)}s`);
      track.classList.add("is-marquee");
    };

    const run = () => tracks.forEach(setup);
    const ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    ready.then(run);

    let lastWidth = window.innerWidth;
    let timer = 0;
    window.addEventListener("resize", () => {
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      clearTimeout(timer);
      timer = setTimeout(run, 200);
    });
  }

  function init() {
    initPreloader();
    initHeader();
    initMobileMenu();
    initHeroSearch();
    initDestinationFilters();
    initHotelFilters();
    initWishlist();
    renderDestinations();
    renderHotels();
    renderOffers();
    initOfferActions();
    initTestimonials();
    initEstimator();
    initNewsletter();
    initCounters();
    initFooter();
    initMarquees();
    initGlobalKeys();
    initAOS();
    initScrollEffects();
    updateRangeFill($("#priceRange"));
    updateRangeFill($("#estimateNights"));
    updateRangeFill($("#estimateGuests"));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

