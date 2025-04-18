<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SÝNDA Manifesto</title>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 4rem;
      font-family: 'EB Garamond', serif;
      background-color: #f5f4f2;
      color: #2b2b2b;
      line-height: 1.8;
      transition: opacity 1s ease, background-color 1.5s ease, padding 1s ease, margin 1s ease;
      cursor: none;
      overflow-x: hidden;
    }
    body.fade-out {
      opacity: 0;
    }
    body.second-page {
      background-color: #000000;
      padding: 0;
      margin: 0;
      opacity: 0; /* Start with opacity 0 for fade-in effect */
      transition: opacity 1s ease;
    }
    
    body.second-page.fade-in {
      opacity: 1; /* Transition to opacity 1 */
    }
    .cursor {
      position: fixed;
      top: 0;
      left: 0;
      width: 24px; /* Increased from 12px to make more visible */
      height: 24px; /* Increased from 12px to make more visible */
      background-color: rgba(0, 0, 0, 0.7); /* Changed from solid black to semi-transparent */
      border-radius: 50%;
      pointer-events: none;
      transform: translate(-50%, -50%);
      z-index: 9999;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
    }
    h1 {
      font-size: 2.5rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 3rem;
      text-align: center;
    }
    p {
      margin-bottom: 2rem;
      font-size: 1.15rem;
    }
    .button-wrapper {
      text-align: center;
      margin-top: 4rem;
    }
    .button-wrapper button {
      background-color: transparent;
      border: 1px solid #2b2b2b;
      color: #2b2b2b;
      padding: 0.75rem 2rem;
      font-size: 1rem;
      font-family: 'EB Garamond', serif;
      cursor: none;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    .button-wrapper button:hover {
      background-color: #2b2b2b;
      color: #f5f4f2;
    }
    
    .cosmos-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0;
      transition: opacity 1s ease;
    }
    
    .cosmos-container.show {
      z-index: 1;
      opacity: 1;
    }
    
    .cosmos-iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  </style>
</head>
<body>
  <audio autoplay loop hidden>
    <source src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_63f6507b07.mp3?filename=wind-nature-ambient-110186.mp3" type="audio/mpeg">
  </audio>
  <div class="cursor" id="custom-cursor"></div>
  <div class="container" id="manifesto-container">
    <h1>SÝNDA: A Manifesto</h1>
    <p>Sýnda believes in the pause between ideas.<br>
    In light that bends gently.<br>
    In materials that remember being touched.</p>
    <p>It is not minimal.<br>
    It is <em>intentional</em>.<br>
    Empty space is not absence—it is invitation.</p>
    <p>It is created for the quietly expressive.<br>
    For those who crave silence, not because it is empty,<br>
    but because it is full of resonance.</p>
    <p>Its objects do not shout.<br>
    They do not demand attention.<br>
    They live with you.<br>
    They breathe with you.</p>
    <p>Sýnda exists for late light and long thoughts.<br>
    For walking barefoot across cold floors.<br>
    For building rooms where memories are welcome<br>
    but not required.</p>
    <p>It is the future, seen through a soft lens.<br>
    It is form, forged in feeling.<br>
    It is what happens when stillness becomes sacred.</p>
    <p>Sýnda is not for everyone.<br>
    It is for those who know to listen.</p>
    <div class="button-wrapper">
      <button onclick="fadeToMoodboard()">Enter</button>
    </div>
  </div>
  
  <!-- Cosmos iframe container -->
  <div class="cosmos-container" id="cosmos-container">
    <iframe class="cosmos-iframe" src="about:blank" id="cosmos-iframe"></iframe>
  </div>
  
  <script>
    // Custom cursor functionality
    const cursor = document.getElementById('custom-cursor');
    
    document.addEventListener('mousemove', e => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    });
    
    // Function to fade to cosmos page
    function fadeToMoodboard() {
      // Start transitioning the background color before hiding content
      document.body.style.backgroundColor = "#000000";
      document.body.classList.add('fade-out');
      
      setTimeout(() => {
        // Hide main content
        document.getElementById('manifesto-container').style.display = 'none';
        
        // Hide custom cursor in second page
        document.getElementById('custom-cursor').style.display = 'none';
        
        // Make background black and adjust padding/margin
        document.body.classList.add('second-page');
        
        // Load cosmos iframe
        const iframe = document.getElementById('cosmos-iframe');
        iframe.src = 'https://www.cosmos.so/mira/synda/canvas';
        
        // Show cosmos container
        document.getElementById('cosmos-container').classList.add('show');
        
        // Fade body back in
        setTimeout(() => {
          document.body.classList.remove('fade-out');
          
          // Add fade-in class after a brief delay
          setTimeout(() => {
            document.body.classList.add('fade-in');
          }, 100);
        }, 500);
      }, 1000);
    }
  </script>
</body>
</html>
