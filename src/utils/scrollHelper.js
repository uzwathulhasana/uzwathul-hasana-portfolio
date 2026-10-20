/**
 * Smoothly scrolls the window to the target section by element ID.
 * Accounts for fixed floating navbar height (75px).
 *
 * @param {string} id - The ID of the target section (e.g. 'hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact')
 */
export function scrollToSection(id) {
  if (!id) return;

  if (id === 'hero' || id === 'home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    return;
  }

  const element = document.getElementById(id);
  if (element) {
    const yOffset = -75;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: Math.max(0, y),
      behavior: 'smooth',
    });
  }
}
