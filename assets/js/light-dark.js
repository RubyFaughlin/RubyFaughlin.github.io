// --- JavaScript Feature for Switching between Light and Dark Mode ---

<button id="theme-toggle">Switch to Dark Mode</button>
<script>
 const btn = document.getElementById('theme-toggle');
 const body = document.body;


 btn.addEventListener('click', () => {
   body.classList.toggle('dark');


   if (body.classList.contains('dark')) {
   btn.textContent = "Switch to Light Mode";
 } else {
   btn.textContent = "Switch to Dark Mode";
 }
});
</script>
