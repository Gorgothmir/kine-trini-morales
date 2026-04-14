<script>
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");

  // SCROLL EFFECT
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // MENU MOBILE
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // SCROLL SUAVE
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
</script>

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

const cards = document.querySelectorAll('.review-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(30px)";
  observer.observe(card);
});