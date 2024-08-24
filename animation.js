document.addEventListener("DOMContentLoaded", function () {
  const aboutSkillsSection = document.querySelector(".about-skills");

  function onScroll() {
    const sectionPosition = aboutSkillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
      aboutSkillsSection.classList.add("visible");
      window.removeEventListener("scroll", onScroll); // Remover el listener después de activar
    }
  }

  window.addEventListener("scroll", onScroll);
});
