const EMAILJS_CONFIG = {
  PUBLIC_KEY: "",
  SERVICE_ID: "",
  TEMPLATE_ID: ""
};

const typedWords = [
  "MERN Stack Developer",
  "Frontend Engineer",
  "API Builder",
  "Problem Solver"
];

const skillGroups = [
  {
    title: "Frontend",
    items: [
      { label: "HTML5", icon: "H5", color: "#f97316" },
      { label: "CSS3", icon: "C3", color: "#3b82f6" },
      { label: "JavaScript", icon: "JS", color: "#facc15" },
      { label: "TypeScript", icon: "TS", color: "#60a5fa" },
      { label: "React", icon: "RE", color: "#60a5fa" },
      { label: "Redux", icon: "RX", color: "#8b5cf6" },
      { label: "Next.js", icon: "NX", color: "#111827" },
      { label: "Tailwind", icon: "TW", color: "#06b6d4" }
    ]
  },
  {
    title: "Backend",
    items: [
      { label: "Node.js", icon: "N", color: "#22c55e" },
      { label: "Express", icon: "EX", color: "#34d399" },
      { label: "MongoDB", icon: "MD", color: "#10b981" },
      { label: "Mongoose", icon: "MG", color: "#34d399" },
      { label: "Rest APIs", icon: "API", color: "#a78bfa" },
      { label: "JWT", icon: "JWT", color: "#f472b6" },
      { label: "Socket.io", icon: "SO", color: "#f59e0b" },
      { label: "Auth", icon: "AU", color: "#fb7185" }
    ]
  },
  {
    title: "Tools",
    items: [
      { label: "Git", icon: "G", color: "#f87171" },
      { label: "GitHub", icon: "GH", color: "#111827" },
      { label: "VS Code", icon: "V", color: "#38bdf8" },
      { label: "Figma", icon: "F", color: "#f9a8d4" },
      { label: "Postman", icon: "P", color: "#fb7185" },
      { label: "Vercel", icon: "VC", color: "#22c55e" },
      { label: "Netlify", icon: "NT", color: "#38bdf8" },
      { label: "Docker", icon: "DK", color: "#60a5fa" }
    ]
  }
];

const jobs = [
  {
    type: "train",
    role: "MERN Stack Trainee",
    company: "Excellence Delivered (ExD)",
    period: "2025 — Present",
    bullets: [
      "Building modern web interfaces and full-stack features with React, Node.js, Express, and MongoDB.",
      "Practicing complete project workflows from planning and UI design to API integration and deployment.",
      "Strengthening backend logic, authentication flows, and performance-minded frontend practices."
    ],
    tags: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    type: "intern",
    role: "Frontend & Full-Stack Intern",
    company: "Freelance / Project-Based Work",
    period: "2024 — 2025",
    bullets: [
      "Delivered responsive landing pages and interactive UI components for client-facing work.",
      "Collaborated on website improvements, portfolio pages, and user-focused UI refinements.",
      "Created reusable frontend patterns and polished user experiences across multiple projects."
    ],
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"]
  }
];

const projects = [
  {
    title: "Nexora Chat App",
    desc: "A real-time chat experience with responsive conversations, user presence, and smooth message flows.",
    gradient: ["#0ea5e9", "#8b5cf6"],
    emoji: "💬",
    tag: "Realtime",
    link: "https://github.com/the-minor27"
  },
  {
    title: "Airline Reservation System",
    desc: "A reservation workflow for flights, booking details, and passenger information with a clean booking interface.",
    gradient: ["#10b981", "#14b8a6"],
    emoji: "✈️",
    tag: "Travel",
    link: "https://github.com/the-minor27"
  },
  {
    title: "E-Commerce Platform",
    desc: "A full storefront experience with product listings, shopping cart logic, and polished customer journeys.",
    gradient: ["#f59e0b", "#ef4444"],
    emoji: "🛍️",
    tag: "Storefront",
    link: "https://github.com/the-minor27"
  },
  {
    title: "Personal Portfolio Website",
    desc: "A modern personal brand website focused on storytelling, clean structure, and impactful visual hierarchy.",
    gradient: ["#6366f1", "#ec4899"],
    emoji: "🌐",
    tag: "Portfolio",
    link: "https://github.com/the-minor27"
  },
  {
    title: "Auth Based Setup",
    desc: "A secure authentication flow covering login, signup, protected routes, and session-based access control.",
    gradient: ["#f97316", "#8b5cf6"],
    emoji: "🔐",
    tag: "Security",
    link: "https://github.com/the-minor27"
  },
  {
    title: "Hospital Management System",
    desc: "A healthcare administration dashboard designed for patient records, scheduling, and operational visibility.",
    gradient: ["#22c55e", "#0ea5e9"],
    emoji: "🏥",
    tag: "Healthcare",
    link: "https://github.com/the-minor27"
  }
];

const pricing = [
  {
    name: "Starter",
    price: "$150",
    note: "project",
    popular: false,
    features: ["Landing page", "Responsive layout", "Basic contact form", "Up to 3 revisions"]
  },
  {
    name: "Business",
    price: "$350",
    note: "project",
    popular: true,
    features: ["Custom frontend design", "API integration", "User auth flow", "Priority support"]
  },
  {
    name: "Full Stack",
    price: "$650+",
    note: "quote",
    popular: false,
    features: ["Full-stack build", "Database setup", "Deployment support", "Scalable architecture"]
  }
];

const state = {
  filter: "all",
  theme: localStorage.getItem("portfolio-theme") || "light"
};

const mq = document.getElementById("mq");
const sk = document.getElementById("sk");
const jobsEl = document.getElementById("jobs");
const pj = document.getElementById("pj");
const pr = document.getElementById("pr");
const typo = document.getElementById("ty");
const bar = document.getElementById("bar");
const upButton = document.getElementById("up");
const themeToggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  const activeTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", activeTheme);
  state.theme = activeTheme;
  localStorage.setItem("portfolio-theme", activeTheme);

  if (themeToggle) {
    themeToggle.textContent = activeTheme === "dark" ? "☀️" : "🌙";
    themeToggle.setAttribute("aria-pressed", String(activeTheme === "dark"));
  }
}

function initTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("portfolio-theme");
  applyTheme(savedTheme || (prefersDark ? "dark" : "light"));
}

function buildMarquee() {
  if (!mq) return;

  const allSkills = [...skillGroups.flatMap(group => group.items), ...skillGroups.flatMap(group => group.items)];
  const html = allSkills
    .map((item) => `<span class="b" style="--c:${item.color}"><i>${item.icon}</i>${item.label}</span>`)
    .join("");

  mq.innerHTML = `<div>${html}</div>`;
}

function buildSkills() {
  if (!sk) return;

  const groups = skillGroups
    .map((group) => `
      <div>
        <h3>${group.title}</h3>
        <div class="badges">
          ${group.items.map((item) => `<span class="b" style="--c:${item.color}"><i>${item.icon}</i>${item.label}</span>`).join("")}
        </div>
      </div>
    `)
    .join("");

  sk.innerHTML = groups;
}

function createJobCard(job) {
  return `
    <article class="card job">
      <small>${job.company}</small>
      <h3>${job.role}</h3>
      <small>${job.period}</small>
      <ul>
        ${job.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
      </ul>
      <div class="chips">
        ${job.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderJobs() {
  if (!jobsEl) return;

  const filtered = state.filter === "all" ? jobs : jobs.filter((job) => job.type === state.filter);
  jobsEl.innerHTML = filtered.map(createJobCard).join("");
}

function renderProjects() {
  if (!pj) return;

  pj.innerHTML = projects.map((project) => `
    <article class="card pj">
      <div class="top" style="background:linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]});">
        <div class="thumb-badge">${project.tag}</div>
        <div class="thumb-icon">${project.emoji}</div>
      </div>
      <div class="in">
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <a class="v" href="${project.link}" target="_blank" rel="noopener">View project →</a>
      </div>
    </article>
  `).join("");
}

function renderPricing() {
  if (!pr) return;

  pr.innerHTML = pricing.map((plan) => `
    <article class="card plan ${plan.popular ? "pop" : ""}">
      ${plan.popular ? '<span class="ribbon">Popular</span>' : ""}
      <h3>${plan.name}</h3>
      <div class="p">${plan.price}<small>/${plan.note}</small></div>
      <ul>
        ${plan.features.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
      <a class="btn" href="#contact">Book a call</a>
    </article>
  `).join("");
}

function animateStats() {
  const stats = document.querySelectorAll("[data-n]");
  stats.forEach((stat) => {
    const target = Number(stat.dataset.n || 0);
    const suffix = stat.dataset.s || "";
    let current = 0;
    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      current = Math.ceil(progress * target);
      stat.textContent = `${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  });
}

function initObserver() {
  const elements = document.querySelectorAll(".rv");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
      }
    });
  }, { threshold: 0.15 });

  elements.forEach((element) => observer.observe(element));
}

function setProgressBar() {
  if (!bar) return;
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? (scrollTop / height) * 100 : 0;
  bar.style.width = `${Math.min(progress, 100)}%`;
}

function updateNavState() {
  const navLinks = document.querySelectorAll("#nv a");
  const sections = [...document.querySelectorAll("main section[id]")];
  const scrollPosition = window.scrollY + 120;

  let activeSection = sections[0]?.id || "top";
  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      activeSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeSection}`;
    link.classList.toggle("on", isActive);
  });
}

function initTypewriter() {
  if (!typo) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const word = typedWords[wordIndex];
    if (!word) return;

    if (!isDeleting) {
      charIndex += 1;
    } else {
      charIndex -= 1;
    }

    typo.textContent = word.slice(0, charIndex);

    let typingDelay = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === word.length) {
      typingDelay = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % typedWords.length;
      typingDelay = 180;
    }

    setTimeout(type, typingDelay);
  };

  type();
}

function initUpButton() {
  if (!upButton) return;
  window.addEventListener("scroll", () => {
    upButton.classList.toggle("s", window.scrollY > 350);
  });

  upButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function attachFilters() {
  const filterButtons = document.querySelectorAll("#tabs button");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.f;
      filterButtons.forEach((btn) => btn.classList.toggle("on", btn === button));
      renderJobs();
    });
  });
}

function validateField(name, value) {
  if (!value.trim()) {
    return `${name} is required.`;
  }

  if (name === "Email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "Please enter a valid email address.";
  }

  return "";
}

function initContactForm() {
  const form = document.getElementById("f");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    const errors = {
      name: validateField("Name", name),
      email: validateField("Email", email),
      message: validateField("Message", message)
    };

    document.getElementById("en").textContent = errors.name || "";
    document.getElementById("ee").textContent = errors.email || "";
    document.getElementById("em").textContent = errors.message || "";

    if (errors.name || errors.email || errors.message) {
      return;
    }

    const submitButton = document.getElementById("sb");
    const status = document.getElementById("st");
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
      const hasEmailJs = typeof window.emailjs !== "undefined" && EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.SERVICE_ID && EMAILJS_CONFIG.TEMPLATE_ID;

      if (hasEmailJs) {
        await window.emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
          from_name: name,
          reply_to: email,
          message
        }, {
          publicKey: EMAILJS_CONFIG.PUBLIC_KEY
        });

        status.textContent = "Your message was sent successfully!";
        status.style.color = "#10b981";
        form.reset();
      } else {
        const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:iabdulhere@gmail.com?subject=${subject}&body=${body}`;
        status.textContent = "Your email client has been opened. Feel free to send the message if it did not auto-fill.";
        status.style.color = "#10b981";
      }
    } catch (error) {
      status.textContent = "Something went wrong. Please try again or email me directly.";
      status.style.color = "#ef4444";
      console.error(error);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    }
  });
}

function initScrollEffects() {
  window.addEventListener("scroll", () => {
    setProgressBar();
    updateNavState();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  buildMarquee();
  buildSkills();
  renderJobs();
  renderProjects();
  renderPricing();
  animateStats();
  initObserver();
  initTypewriter();
  initUpButton();
  attachFilters();
  initContactForm();
  initScrollEffects();
  setProgressBar();
  updateNavState();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = state.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
  }
});
