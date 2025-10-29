/* JavaScript Feature for Light/Dark Mode */
const btn = document.getElementById('theme-toggle');
  const body = document.body;

  btn.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); /* switch dark mode on/off */

    const textElements = document.querySelectorAll(
      '#main h1, #main h2, #main h3, #main h4, #main h5, #main h6, #main p, #main a, #main strong, #main .button.large, theme-toggle'
    );

    if (body.classList.contains('dark-mode')) {
      btn.textContent = "Switch to Light Mode";
      textElements.forEach(el => el.style.color = '#fff'); /* white text */
	  
    } else {
      btn.textContent = "Switch to Dark Mode";
      textElements.forEach(el => el.style.color = ''); /* reset to default (white mode) */
	  
    }
  });


