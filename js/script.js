
const EMAILJS_CONFIG = {
  PUBLIC_KEY:  "YOUR_EMAILJS_PUBLIC_KEY",
  SERVICE_ID:  "YOUR_EMAILJS_SERVICE_ID",
  TEMPLATE_ID: "YOUR_EMAILJS_TEMPLATE_ID",
};

document.addEventListener("DOMContentLoaded", () => {

  const boot = document.getElementById("boot-screen");
  setTimeout(() => boot.classList.add("hidden"), 2100);

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const root = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("aq-theme");
  if (savedTheme) root.setAttribute("data-theme", savedTheme);
  else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    root.setAttribute("data-theme", "light");
  }
  themeToggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("aq-theme", next);
  });

  const tabs = document.querySelectorAll(".tab");
  const fileItems = document.querySelectorAll(".file-item");
  const panes = document.querySelectorAll(".pane");
  const tabIndicator = document.getElementById("tabIndicator");

  function moveIndicator(tabEl) {
    if (!tabEl || !tabIndicator) return;
    tabIndicator.style.width = tabEl.offsetWidth + "px";
    tabIndicator.style.transform = `translateX(${tabEl.offsetLeft - 4}px)`;
  }

  function showPane(target) {
    panes.forEach(p => p.classList.toggle("active", p.id === target));
    tabs.forEach(t => t.classList.toggle("active", t.dataset.target === target));
    fileItems.forEach(f => f.classList.toggle("active", f.dataset.target === target));
    const activeTab = document.querySelector(`.tab[data-target="${target}"]`);
    moveIndicator(activeTab);
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeSidebar();
    triggerReveal();
  }

  document.querySelectorAll("[data-target]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      showPane(el.dataset.target);
    });
  });

  window.addEventListener("resize", () => {
    const active = document.querySelector(".tab.active");
    moveIndicator(active);
  });
  setTimeout(() => moveIndicator(document.querySelector(".tab.active")), 150);

  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const menuToggle = document.getElementById("menuToggle");

  function closeSidebar() { document.body.classList.remove("sidebar-open"); }
  menuToggle.addEventListener("click", () => document.body.classList.toggle("sidebar-open"));
  overlay.addEventListener("click", closeSidebar);

  const glow = document.getElementById("cursorGlow");
  window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });

  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("in-view");
    });
  }, { threshold: 0.15 });

  function triggerReveal() {
    document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
  }
  triggerReveal();

  const typedTextEl = document.getElementById("typedText");
  const phrases = [
    "full‑stack web apps.",
    "with the MERN stack.",
    "clean, responsive UIs.",
    "REST APIs that scale.",
    "things people enjoy using."
  ];
  let phraseIdx = 0, charIdx = 0, deleting = false;

  function typeLoop() {
    const current = phrases[phraseIdx];
    if (!deleting) {
      charIdx++;
      typedTextEl.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1500);
        return;
      }
    } else {
      charIdx--;
      typedTextEl.textContent = current.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }
    setTimeout(typeLoop, deleting ? 35 : 65);
  }
  typeLoop();

  const cmdTyping = document.getElementById("cmdTyping");
  const commands = ["open contact.tsx", "hire --role=intern", "git commit -m \"let's talk\""];
  let cmdIdx = 0, cmdChar = 0, cmdDeleting = false;

  function cmdLoop() {
    const current = commands[cmdIdx];
    if (!cmdDeleting) {
      cmdChar++;
      cmdTyping.textContent = current.slice(0, cmdChar);
      if (cmdChar === current.length) {
        cmdDeleting = true;
        setTimeout(cmdLoop, 1400);
        return;
      }
    } else {
      cmdChar--;
      cmdTyping.textContent = current.slice(0, cmdChar);
      if (cmdChar === 0) {
        cmdDeleting = false;
        cmdIdx = (cmdIdx + 1) % commands.length;
      }
    }
    setTimeout(cmdLoop, cmdDeleting ? 25 : 55);
  }
  setTimeout(cmdLoop, 2400);

  const scrollTopBtn = document.getElementById("scrollTop");
  window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("show", window.scrollY > 400);
  });
  scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");
  const submitBtn = document.getElementById("formSubmitBtn");
  const submitText = document.getElementById("formSubmitText");

  let emailjsReady = false;
  try {
    if (window.emailjs && EMAILJS_CONFIG.PUBLIC_KEY && !EMAILJS_CONFIG.PUBLIC_KEY.startsWith("YOUR_")) {
      emailjs.init({ publicKey: EMAILJS_CONFIG.PUBLIC_KEY });
      emailjsReady = true;
    }
  } catch (err) { console.warn("EmailJS init skipped:", err); }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) return;

    submitBtn.disabled = true;
    submitText.textContent = "Sending...";
    statusEl.textContent = "";
    statusEl.className = "form-status";

    if (emailjsReady) {
      try {
        await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
          from_name: name,
          reply_to: email,
          message: message,
          to_email: "iabdulhere@gmail.com",
        });
        statusEl.textContent = "Message sent — thanks! I'll reply within a day.";
        statusEl.classList.add("ok");
        form.reset();
      } catch (err) {
        console.error(err);
        statusEl.textContent = "Something went wrong sending that. Try the email link above instead.";
        statusEl.classList.add("err");
      }
    } else {
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:iabdulhere@gmail.com?subject=${subject}&body=${body}`;
      statusEl.textContent = "Opening your email client... (Set up EmailJS in js/script.js to send in-page.)";
      statusEl.classList.add("ok");
    }

    submitBtn.disabled = false;
    submitText.textContent = "Send Message";
  });

});
