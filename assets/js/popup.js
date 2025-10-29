function setGreeting() {
							const input = document.getElementById('usernameInput');
							const greeting = document.getElementById('greeting');
							const name = (input?.value || '').trim();
							greeting.textContent = name ? `Welcome to my portfolio, ${name}! Here you can explore my journey at University, discover my professional experiences and explore the projects I have been working on that showcase my creativity and growth.
							Feel free to reach out through the ‘Contact Me’ page — I’d love to hear from you.`

														: 'Welcome to my portfolio!';
							}
							document.getElementById('setGreetingBtn').addEventListener('click',
							setGreeting);

							document.getElementById('clearGreetingBtn').addEventListener('click', () => {
							document.getElementById('usernameInput').value = ''; /* This clears the input */
    						document.getElementById('greeting').textContent = 'To find out more about this portfolio, please enter your name!'; // resets greeting
    
});