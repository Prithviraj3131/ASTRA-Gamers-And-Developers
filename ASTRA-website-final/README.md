ASTRA — Gaming & Game Development club site
==========================================

Files
  index.html    page structure (edit copy/sections here)
  styles.css    all styling, colours, layout (theme colours live in :root and body.dev)
  app.js        all behaviour: particle figure, orb, marquees, page-transition/theme toggle
  assets/       logo.jpg, valorant.jpg, freefire.png (swap these to change the images)

Run
  Open index.html in a browser. Three.js and GSAP load from a CDN, so keep an
  internet connection. For best results (some browsers are strict about file://),
  run a tiny local server from this folder:
      python3 -m http.server
  then visit http://localhost:8000

Quick edits
  Colours:        styles.css  ->  :root (gaming/violet)  and  body.dev (game-dev/warm)
  Games/tiles:    app.js      ->  the PROJECTS array
  Marquee speed:  app.js      ->  mqSpeed on the Valorant/Free Fire entries
  Section text:   index.html  ->  #hero, #work, #contact
