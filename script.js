// === ANIMASI SCROLL ===
    const sections = document.querySelectorAll("section");

    // Fungsi untuk memunculkan section saat discroll
    function checkScroll() {
      sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          sec.classList.add("show");
        }
      });
    }

    // Event scroll
    window.addEventListener("scroll", checkScroll);
    checkScroll();