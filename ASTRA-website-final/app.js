/* ============================================================================
   ASTRA — single-file WebGL club site
   Sections: config · cursor · scramble · tiles · loader/boot · scene · scroll
   ========================================================================== */
(function(){
"use strict";
 
/* ---------------------------------------------------------------- config */
var REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var TOUCH  = window.matchMedia("(hover: none)").matches || ("ontouchstart" in window);
var SMALL  = window.matchMedia("(max-width: 900px)").matches;
var body   = document.body;
 
var LOGO_SRC = "assets/logo2.png";
var IMG_VALORANT = "assets/valorant1.jpg";
var IMG_FREEFIRE = "assets/freefire.png";
var IMG_BGMI = "assets/bgmi1.jpg";
var IMG_LAN = "assets/lan.jpg";
var IMG_ABOUT = "assets/about_us.jpeg";
var IMG_CORE = "assets/core.jpeg";
var HEROLOGO_SRC = "assets/club_logo.jpeg";

var PROJECTS = [
  { 
    name:"VALORANT", 
    tag:"5V5 TACTICAL · ESPORTS", 
    a:"#d24dff", 
    b:"#7c3aed", 
    img:IMG_VALORANT, 
    da:"#ffb347", 
    desc: `
<h2>PRECISION. STRATEGY. TEAMWORK.</h2>

<p>
VALORANT is a tactical 5v5 shooter where aim, strategy, communication, and teamwork decide every round. Players must master their roles, use abilities effectively, read their opponents, and perform under pressure.
</p>

<h3>WHAT MAKES IT COMPETITIVE?</h3>

<ul>
  <li><strong>Team Coordination</strong> — Communicate and execute strategies together.</li>
  <li><strong>Strategic Gameplay</strong> — Plan attacks, defenses, rotations, and utility usage.</li>
  <li><strong>Individual Skill</strong> — Aim, movement, reaction time, and game sense matter.</li>
  <li><strong>Adaptability</strong> — Adjust your strategy to counter every opponent.</li>
  <li><strong>Clutch Moments</strong> — Stay composed when the pressure is highest.</li>
</ul>

<p>
ASTRA gives VIT Pune players a platform to compete, challenge new opponents, and prove themselves in organized tournaments.
</p>

<p><strong>Bring your squad. Master your role. Outplay your opponents.</strong></p>
`
  },

  { 
    name:"BGMI", 
    tag:"BATTLE ROYALE · MOBILE ESPORTS", 
    a:"#8b5cff", 
    b:"#c77dff", 
    img:IMG_BGMI, 
    da:"#ff9d2d", 
    desc: `
<h2>SURVIVE. ADAPT. DOMINATE.</h2>

<p>
BGMI combines survival, strategy, teamwork, and quick decision-making. From the first drop to the final circle, squads must manage resources, control positioning, rotate intelligently, and decide when to fight or survive.
</p>

<h3>WHAT DOES IT TAKE TO WIN?</h3>

<ul>
  <li><strong>Smart Rotations</strong> — Position your squad for the advantage.</li>
  <li><strong>Team Communication</strong> — Share information and make decisions together.</li>
  <li><strong>Resource Management</strong> — Make every weapon, item, and resource count.</li>
  <li><strong>Game Sense</strong> — Know when to engage, reposition, or survive.</li>
  <li><strong>Endgame Control</strong> — Stay focused when the final circle closes in.</li>
</ul>

<p>
ASTRA brings BGMI squads from VIT Pune together to compete, adapt, and prove who can handle the pressure of the battleground.
</p>

<p><strong>Drop in. Find your squad. Survive the competition.</strong></p>
`
  },

  { 
    name:"FREE FIRE", 
    tag:"BATTLE ROYALE · MOBILE", 
    a:"#6a5cff", 
    b:"#b14dff", 
    img:IMG_FREEFIRE, 
    da:"#ff8c42", 
    desc: `
<h2>SPEED. SKILL. SURVIVAL.</h2>

<p>
Free Fire delivers fast-paced battle royale action where quick reactions, smart positioning, and decisive gameplay are essential. Every encounter can change the match, making timing and decision-making just as important as mechanical skill.
</p>

<h3>THE BATTLE DEMANDS</h3>

<ul>
  <li><strong>Fast Reactions</strong> — React quickly when opponents appear.</li>
  <li><strong>Smart Positioning</strong> — Use the environment to gain an advantage.</li>
  <li><strong>Decision-Making</strong> — Know when to attack and when to reposition.</li>
  <li><strong>Team Coordination</strong> — Work together to control fights.</li>
  <li><strong>Survival Instinct</strong> — Stay composed when the pressure rises.</li>
</ul>

<p>
ASTRA gives Free Fire players across VIT Pune a competitive platform to test their skills, challenge fellow students, and experience tournament gaming.
</p>

<p><strong>Enter fast. Fight smart. Finish stronger.</strong></p>
`
  },

  { 
    name:"LAN ARENA", 
    tag:"ON-CAMPUS · VIT PUNE", 
    a:"#b14dff", 
    b:"#7c3aed", 
    img:IMG_LAN, 
    da:"#ff8c42", 
    desc: `
<h2>GAMING IS BETTER TOGETHER.</h2>

<p>
ASTRA LAN Arena brings VIT Pune gamers together in one physical space for an immersive and high-energy gaming experience. Experience the excitement of playing beside your teammates, competing face-to-face, and sharing every clutch moment with the community.
</p>

<h3>WHAT TO EXPECT</h3>

<ul>
  <li><strong>Competitive Matches</strong> — Challenge other players and teams.</li>
  <li><strong>Real-Time Competition</strong> — Experience the intensity of face-to-face gaming.</li>
  <li><strong>Community & Connections</strong> — Meet gamers, find squads, and build friendships.</li>
  <li><strong>Unforgettable Moments</strong> — Experience comebacks, clutches, and rivalries together.</li>
</ul>

<p>
LAN parties are about more than winning. They bring the gaming community together, create new connections, and turn every match into a shared experience.
</p>

<p><strong>One campus. One arena. Countless battles.</strong></p>
`
  },

  { name:"CORE", tag:"MEET OUR TEAM", 
    a:"#7d4dff", b:"#c04dff", 
    da:"#ffc24a", db:"#ff7e2e", 
    img:IMG_CORE,
    desc: `
<h2>THE PEOPLE BEHIND ASTRA</h2>

<p>
ASTRA is powered by students passionate about gaming, esports, creativity, technology, and game development. Our core team works behind the scenes to organize tournaments, LAN parties, workshops, and build the ASTRA community.
</p>

<h3>MEET THE TEAM</h3>
<table padding="10" cellspacing="20" style="width:100%;text-align:center">
<tr>
  <td>
    <img src="assets/ayush_photo.jpeg" alt="Core Member 1" style="width:200px;height:250px;border-radius: 15%;border:2px solid black;">
    <h4>Ayush Rathod</h4>
    <p>President</p>
  </td>
  <td>
    <img src="assets/pravarchu_photo.jpg" alt="Core Member 2" style="width:200px;height:250px; border-radius: 15%;border:2px solid black;">
    <h4>Pravarchu Thool</h4>
    <p>Vice President</p>
  </td>
  <td>
    <img src="assets/aryan_photo.jpeg" alt="Core Member 3" style="width:200px;height:250px; border-radius: 15%;border:2px solid black;">
    <h4>Aryan Shah</h4>
    <p>Secretary</p>
  </td>
  <td>
    <img src="assets/prasheeta_photo.jpeg" alt="Core Member 4" style="width:200px;height:250px; border-radius: 15%;border:2px solid black;">
    <h4>Prasheeta Bang</h4>
    <p>PRO</p>
  </td>
  <td>
    <img src="assets/shivam_photo.jpeg" alt="Core Member 5" style="width:200px;height:250px; border-radius: 15%;border:2px solid black;">
    <h4>Shivam Pawar</h4>
    <p>Event Co-ordinator</p>
  </td>
    <td>
    <img src="assets/sarang_photo.jpeg" alt="Core Member 6" style="width:200px;height:250px; border-radius: 15%;border:2px solid black;">
    <h4>Sarang Kharbade</h4>
    <p>Treasurer</p>
  </td>
  </tr>
</table>
</div>

<p>
Different skills. Different perspectives. One vision.
</p>

<p><strong>COME BUILD WITH US.</strong></p>
` },
{ name: "ABOUT ASTRA", tag:"OUR MISSION",
  a:"#7d4dff", b:"#c04dff", 
  da:"#ffc24a", db:"#ff7e2e", 
  img:IMG_ABOUT,
  desc: `
<h2>ABOUT ASTRA</h2>

<p>
ASTRA is VIT Pune's gaming community built around competition, esports, and the passion to play. We bring students together through gaming tournaments, LAN parties, and competitive experiences that turn individual players into teams and teams into contenders.
</p>

<p>
Our goal is to create a space where gamers can compete, improve their skills, discover new teammates, and experience the excitement of organized gaming. Whether you are a competitive player aiming for the top or someone stepping into esports for the first time, ASTRA gives you a place to enter the arena.
</p>

<h3>WHAT WE STAND FOR</h3>

<ul>
  <li><strong>Competition</strong> — Push yourself against new opponents and test your limits.</li>
  <li><strong>Community</strong> — Meet fellow gamers, build squads, and create lasting connections.</li>
  <li><strong>Experience</strong> — Take part in tournaments, LAN parties, and memorable gaming events.</li>
  <li><strong>Growth</strong> — Learn, improve, and become a better player with every match.</li>
</ul>

<p>
ASTRA is not just about winning games. It is about creating a competitive culture at VIT Pune where players can challenge themselves, celebrate each other's achievements, and build a community around the games they love.
</p>

<p><strong>COMPETE. CREATE. CONQUER.</strong></p>
`
}
];
 
var GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567/\\{}[]<>*#%$&+=_—".split("");
 
/* ---------------------------------------------------------------- cursor */
(function cursor(){
  if (TOUCH) return;
  var dot = document.getElementById("cur-dot");
  var glow = document.getElementById("cur-glow");
  var mx=innerWidth/2, my=innerHeight/2, gx=mx, gy=my, seen=false;
  window.addEventListener("pointermove", function(e){
    mx=e.clientX; my=e.clientY;
    dot.style.transform="translate("+mx+"px,"+my+"px)";
    if(!seen){seen=true;gx=mx;gy=my;}
  }, {passive:true});
  window.addEventListener("mouseout", function(e){ if(!e.relatedTarget) body.classList.add("cur-hidden"); });
  window.addEventListener("mouseover", function(){ body.classList.remove("cur-hidden"); });
  (function loop(){
    gx += (mx-gx)*0.18; gy += (my-gy)*0.18;
    glow.style.transform="translate("+gx+"px,"+gy+"px)";
    requestAnimationFrame(loop);
  })();
  document.addEventListener("pointerover", function(e){
    if (e.target.closest("[data-hover],a,button,.tile")) body.classList.add("cur-hover");
  });
  document.addEventListener("pointerout", function(e){
    if (e.target.closest("[data-hover],a,button,.tile")) body.classList.remove("cur-hover");
  });
})();
 
/* ------------------------------------------------------------- scramble */
function TextScramble(el){
  this.el = el;
  this.chars = GLYPHS;
  this.frameReq = null;
  this.frame = 0;
  this.queue = [];
  this.resolve = null;
}
TextScramble.prototype.setText = function(newText){
  this.el.textContent = newText;   // scramble effect removed — text set directly
  return Promise.resolve();
};
TextScramble.prototype.update = function(){
  var out = "", done = 0;
  for (var i=0;i<this.queue.length;i++){
    var q = this.queue[i];
    if (this.frame >= q.end){ done++; out += q.to; }
    else if (this.frame >= q.start){
      if (!q.ch || Math.random() < 0.28){ q.ch = this.chars[Math.floor(Math.random()*this.chars.length)]; }
      out += '<span style="opacity:.55;color:#c77dff;-webkit-text-fill-color:#c77dff">'+q.ch+'</span>';
    } else { out += q.from; }
  }
  this.el.innerHTML = out;
  if (done === this.queue.length){ if(this.resolve) this.resolve(); }
  else { this.frame++; var self=this; this.frameReq = requestAnimationFrame(function(){ self.update(); }); }
};
 
/* ------------------------------------------------------------- tiles */
/* ---- theme system: gaming (violet) <-> game development (warm sunrise) ---- */
var THEME = { warm: document.body.classList.contains("dev") };
var GRAD_TILES = [];
function gradBg(a,b){
  return "radial-gradient(60% 80% at 30% 20%, "+a+"55, transparent 60%),radial-gradient(70% 90% at 80% 80%, "+b+"55, transparent 60%),conic-gradient(from 200deg at 50% 50%, "+a+"22, "+b+"22, "+a+"22),#08080a";
}
function setTilesPalette(warm){
  for (var i=0;i<GRAD_TILES.length;i++){
    var g = GRAD_TILES[i];
    g.bg.style.background = gradBg(warm ? g.da : g.a, warm ? g.db : g.b);
  }
}
function toggleMode(){
  if (toggleMode._busy) return;
  // Where do we go? Use the button's data-target if set, otherwise auto-detect:
  // if this IS the game-dev page, go back to gaming; otherwise go to game-dev.
  var mb = document.getElementById("modeBtn");
  var onDev = document.body.classList.contains("dev") || /game-?dev/i.test(location.pathname);
  var target = (mb && mb.getAttribute("data-target")) || (onDev ? "index.html" : "game-dev.html");
  target += (target.indexOf("?") > -1 ? "&" : "?") + "skip=1";
  var goingDev = /game-?dev/i.test(target);
  var wipe = document.getElementById("pageWipe");
  var c1 = goingDev ? "#ff8a2b" : "#a855f7";
  var c2 = goingDev ? "#ff5230" : "#c93dff";
  if (wipe) wipe.style.background = "linear-gradient(120deg,"+c1+","+c2+")";
  if (!window.gsap || REDUCE || !wipe){ location.href = target; return; }   // just go if no animation
  toggleMode._busy = true;
  gsap.timeline({ onComplete:function(){ location.href = target; } })
    .set(wipe, { transformOrigin:"left center", scaleX:0, opacity:1 })
    .to(wipe, { scaleX:1, duration:0.45, ease:"power3.inOut" });
}
 
(function buildTiles(){
  var grid = document.getElementById("grid");
  PROJECTS.forEach(function(p, i){
    var t = document.createElement("a");
    t.className = "tile"; t.setAttribute("data-hover","");
    t.setAttribute("href", p.href || ("detail.html?title=" + encodeURIComponent(p.name) + "&tag=" + encodeURIComponent(p.tag||"") + (THEME.warm ? "&theme=dev" : "")));
    var idx = ("0"+(i+1)).slice(-2);
    var bgStyle, bgInner = "";
    if (p.marquee){
      bgStyle = "background:#08080a;animation:none";
      bgInner = '<marquee class="bg-mq" behavior="slide" direction="'+(p.mqDir||"left")+'" scrollamount="'+(p.mqSpeed||3)+'"><img class="bg-mq-img" src="'+p.img+'" alt=""></marquee>';
    } else if (p.img){
      bgStyle = "background:#08080a url('"+p.img+"') "+(p.pos||"50% 50%")+" / "+(p.fit||"cover")+";background-size:"+(p.fit||"cover")+";animation:none";
    } else {
      bgStyle = "background:"+gradBg(THEME.warm ? (p.da||p.a) : p.a, THEME.warm ? (p.db||p.b) : p.b);
    }
    t.innerHTML =
      '<div class="bg" style="'+bgStyle+'">'+bgInner+'</div>'+
      '<div class="grain"></div>'+
      '<div class="veil"></div>'+
      '<div class="rim"></div>'+
      '<div class="meta">'+
        '<div class="idx">'+idx+' / ASTRA</div>'+
        '<div class="ttl">'+p.name+'</div>'+
        '<div class="tag">'+p.tag+'</div>'+
      '</div>';
 
    // per-tile parallax tilt + scramble reveal
    var rim = t.querySelector(".rim");
    if (!p.img){ GRAD_TILES.push({ bg:t.querySelector(".bg"), a:p.a, b:p.b, da:p.da||p.a, db:p.db||p.b }); }
    var raf=null, tx=0, ty=0, cx=0, cy=0;
 
    function onMove(e){
      var r = t.getBoundingClientRect();
      var px = (e.clientX - r.left)/r.width - 0.5;
      var py = (e.clientY - r.top)/r.height - 0.5;
      tx = px * 12; ty = -py * 12;
      if(!raf) raf = requestAnimationFrame(apply);
    }
    function apply(){
      cx += (tx-cx)*0.12; cy += (ty-cy)*0.12;
      t.style.transform = "perspective(900px) rotateY("+cx+"deg) rotateX("+cy+"deg) translateZ(0)";
      if (Math.abs(cx-tx)>0.05 || Math.abs(cy-ty)>0.05){ raf = requestAnimationFrame(apply); } else { raf=null; }
    }
    if (!TOUCH){
      t.addEventListener("pointermove", onMove);
      t.addEventListener("pointerenter", function(){
        var acc = (THEME.warm && p.da) ? p.da : p.a;
        rim.style.boxShadow = "inset 0 0 0 1px "+acc+"cc, 0 0 34px -6px "+acc+"66";
      });
      t.addEventListener("pointerleave", function(){
        tx=0; ty=0; if(!raf) raf=requestAnimationFrame(apply);
        rim.style.boxShadow = "inset 0 0 0 1px transparent";
      });
    }
    grid.appendChild(t);
  });
})();
/* ---- expandable detail panels: click a tile to zoom it fullscreen ---- */
(function tileDetails(){
  var grid = document.getElementById("grid");
  if (!grid) return;

var css = document.createElement("style");
css.textContent = ""
  + "#cur-dot,#cur-glow{z-index:400}"
  + ".tm-modal{position:fixed;inset:0;z-index:300;display:none}"
  + ".tm-modal.open{display:block}"
  + ".tm-backdrop{position:absolute;inset:0;background:rgba(4,3,8,.72);opacity:0;transition:opacity .45s cubic-bezier(.22,.61,.36,1)}"
  + ".tm-modal.show .tm-backdrop{opacity:1}"

  + ".tm-card{position:fixed;overflow:hidden;border:1px solid rgba(255,255,255,.12);box-shadow:0 40px 120px -40px #000;"
  +   "transition:top .55s cubic-bezier(.22,.61,.36,1),left .55s cubic-bezier(.22,.61,.36,1),width .55s cubic-bezier(.22,.61,.36,1),height .55s cubic-bezier(.22,.61,.36,1),border-radius .55s cubic-bezier(.22,.61,.36,1);"
  +   "will-change:top,left,width,height}"

  + ".tm-bg{position:absolute;inset:-8px;background:#08080a;background-size:cover;background-position:50% 100%;filter:blur(2px);transform:scale(1.04);z-index:0}"
  + ".tm-veil{position:absolute;inset:0;background:linear-gradient(180deg,rgba(5,5,5,.15),rgba(5,5,5,.85));z-index:1}"

  + ".tm-content{position:absolute;inset:0;z-index:2;padding:clamp(26px,5vw,72px);pointer-events:auto;overflow-x:auto;overflow-y:auto;box-sizing:border-box}"
  + ".tm-content::-webkit-scrollbar{display:none}"
  + ".tm-content{-ms-overflow-style:none;scrollbar-width:none}"

  + ".tm-idx{font-family:'Space Mono',monospace;font-size:12px;letter-spacing:.2em;color:rgba(255,255,255,.65)}"
  + ".tm-ttl{font-family:'Syne',sans-serif;font-weight:800;text-transform:uppercase;line-height:.9;letter-spacing:-.01em;font-size:clamp(34px,8vw,104px);margin-top:6px}"
  + ".tm-tag{font-family:'Space Mono',monospace;font-size:12px;letter-spacing:.16em;color:#c9c9d2;margin-top:10px}"

  + ".tm-desc{max-width:60ch;color:#cdccd6;line-height:1.85;font-size:clamp(14px,1.5vw,18px);margin-top:18px;opacity:0;transform:translateY(14px);transition:opacity .5s .28s cubic-bezier(.22,.61,.36,1),transform .5s .28s cubic-bezier(.22,.61,.36,1);pointer-events:auto}"
  + ".tm-modal.show .tm-desc{opacity:1;transform:none}"

  + ".tm-close{position:sticky;top:18px;margin-left:auto;margin-right:18px;z-index:10;width:56px;height:56px;border-radius:50%;border:1px solid rgba(255,255,255,.22);background:rgba(0,0,0,.45);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);color:#fff;font-size:24px;line-height:1;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;transition:opacity .4s .2s,border-color .3s,transform .3s}"
  + ".tm-close:hover{border-color:#fff;transform:scale(1.06)}"
  + ".tm-modal.show .tm-close{opacity:1}";

document.head.appendChild(css);

  var modal = document.createElement("div"); modal.className = "tm-modal";
  modal.innerHTML =
    '<div class="tm-backdrop"></div>'
    + '<div class="tm-card">'
    +   '<div class="tm-bg"></div><div class="tm-veil"></div>'
    +   '<button class="tm-close" type="button" aria-label="Close">&times;</button>'
    +   '<div class="tm-content">'
    +     '<div class="tm-idx"></div><div class="tm-ttl"></div><div class="tm-tag"></div><div class="tm-desc"></div>'
    +   '</div>'
    + '</div>';
  document.body.appendChild(modal);

  var card = modal.querySelector(".tm-card");
  var bg   = modal.querySelector(".tm-bg");
  var eIdx = modal.querySelector(".tm-idx");
  var eTtl = modal.querySelector(".tm-ttl");
  var eTag = modal.querySelector(".tm-tag");
  var eDesc= modal.querySelector(".tm-desc");
  var lastRect = null, busy = false;
  var warm = (typeof THEME !== "undefined") && THEME.warm;

  function place(r){ card.style.top=r.top+"px"; card.style.left=r.left+"px"; card.style.width=r.width+"px"; card.style.height=r.height+"px"; card.style.borderRadius="22px"; }
  function full(){ card.style.top="0px"; card.style.left="0px"; card.style.width="100vw"; card.style.height="100vh"; card.style.borderRadius="0px"; }

  function open(p, tile){
    if (busy) return;
    lastRect = tile.getBoundingClientRect();
    var i = [].indexOf.call(grid.children, tile);
    if (p.img){ bg.style.backgroundImage = "url('"+p.img+"')"; }
    else { bg.style.backgroundImage = ""; bg.style.background = gradBg(warm ? (p.da||p.a) : p.a, warm ? (p.db||p.b) : p.b); }
    eIdx.textContent = ("0"+(i+1)).slice(-2) + " / ASTRA";
    eTtl.textContent = p.name;
    eTag.textContent = p.tag;
    eDesc.innerHTML = p.desc || "More details coming soon.";
    place(lastRect);
    modal.classList.add("open");
    void card.offsetWidth;
    requestAnimationFrame(function(){ modal.classList.add("show"); full(); });
    document.documentElement.style.overflow = "hidden";
  }
  function close(){
    if (!modal.classList.contains("open") || busy) return;
    busy = true;
    modal.classList.remove("show");
    if (lastRect) place(lastRect);
    setTimeout(function(){ modal.classList.remove("open"); document.documentElement.style.overflow = ""; busy = false; }, 560);
  }

  grid.addEventListener("click", function(e){
    var tile = e.target.closest(".tile");
    if (!tile || !grid.contains(tile)) return;
    var i = [].indexOf.call(grid.children, tile);
    if (i < 0 || i >= PROJECTS.length) return;
    e.preventDefault();
    open(PROJECTS[i], tile);
  });
  document.querySelectorAll("[data-card]").forEach(function(link){
  link.addEventListener("click", function(e){
    e.preventDefault();

    var name = link.getAttribute("data-card");

    var index = PROJECTS.findIndex(function(project){
      return project.name === name;
    });

    if(index === -1) return;

    var tile = grid.children[index];

    if(tile){
      open(PROJECTS[index], tile);
    }
  });
});
  modal.querySelector(".tm-close").addEventListener("click", close);
  modal.querySelector(".tm-backdrop").addEventListener("click", close);
  card.addEventListener("click", function(e){ if (!e.target.closest(".tm-content") || e.target === card) close(); });
  window.addEventListener("keydown", function(e){ if (e.key === "Escape") close(); });
  window.addEventListener("resize", function(){ if (modal.classList.contains("show")) full(); });
})();
 
/* ----------------------------------------------------- nav + smooth scroll */
(function nav(){
  var toggle = document.getElementById("navtoggle");
  var side = document.getElementById("sidenav");
  var mb = document.getElementById("modeBtn");
  if (mb) mb.addEventListener("click", toggleMode);
  toggle.addEventListener("click", function(){
    body.classList.toggle("nav-open");
    side.classList.toggle("open");
  });
  document.querySelectorAll("[data-scroll]").forEach(function(a){
    a.addEventListener("click", function(e){
      var id = a.getAttribute("href");
      if (id && id.charAt(0)==="#"){
        var target = document.querySelector(id);
        if (target){
          e.preventDefault();
          body.classList.remove("nav-open"); side.classList.remove("open");
          target.scrollIntoView({behavior: REDUCE ? "auto" : "smooth"});
        }
      }
    });
  });
})();
 
/* --------------------------------------------------------- loader / boot */
var loadbar = document.getElementById("loadbar");
var loadpct = document.getElementById("loadpct");
var loadstate = document.getElementById("loadstate");
var _pct = 0;
function setPct(p, label){
  _pct = Math.max(_pct, p);
  loadbar.style.width = _pct + "%";
  loadpct.textContent = Math.round(_pct) + "%";
  if (label) loadstate.textContent = label;
}
function loadScript(src){
  return new Promise(function(res, rej){
    var s = document.createElement("script");
    s.src = src; s.async = true;
    s.onload = res; s.onerror = function(){ rej(new Error("failed "+src)); };
    document.head.appendChild(s);
  });
}
 
function heroIntro(){ /* headline text is static now — edit it directly in the HTML */ }
 
function boot(){
  var _logo = document.getElementById("logoImg"); if (_logo) _logo.src = LOGO_SRC;
  setPct(8, "LOADING ENGINE");
  var CDN = {
    gsap:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",
    st:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js",
    three:"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
  };
  loadScript(CDN.gsap).then(function(){ setPct(30,"LOADING ENGINE"); return loadScript(CDN.st); })
    .then(function(){ setPct(48,"LOADING PARTICLES"); return loadScript(CDN.three); })
    .then(function(){
      setPct(70,"BUILDING FIGURE");
      return (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
    })
    .then(function(){
      setPct(84,"IGNITING");
      var ok = false;
      try { ok = initScene(); } catch(err){ console.warn("scene failed", err); ok=false; }
      if (!ok){ body.classList.add("no-webgl"); }
      setupScroll(!!window.gsap && ok);
      finish();
    })
    .catch(function(err){
      console.warn("boot error", err);
      body.classList.add("no-webgl");
      setupScroll(false);
      finish();
    });
}
if (/[?&]skip=1/.test(location.search)){
    var _sl = document.getElementById("loader"); if (_sl) _sl.style.display = "none";
    document.body.classList.add("loaded");
  }
function finish(){
  var t0 = performance.now();
  (function ramp(){
    var e = Math.min(1, (performance.now()-t0)/500);
    setPct(_pct + (100-_pct)*e);
    if (e < 1){ requestAnimationFrame(ramp); }
    else { setPct(100,"READY"); setTimeout(reveal, 220); }
  })();
}
function reveal(){
  if (/[?&]skip=1/.test(location.search)){
    document.body.classList.add("loaded");
    var l = document.getElementById("loader"); if (l) l.style.display = "none";
    try { if (history.replaceState) history.replaceState(null, "", location.pathname); } catch(e){}
    heroIntro();
    return;
  }
  scatterLogo(function(){
    body.classList.add("loaded");
    setTimeout(function(){ var l=document.getElementById("loader"); if(l) l.style.display="none"; }, 850);
    heroIntro();
  });
}
function scatterLogo(done){
  var img  = document.getElementById("logoImg");
  var host = document.getElementById("logoSlices");
  var bar  = document.querySelector("#loader .bar");
  var meta = document.querySelector("#loader .meta");
  var r = img ? img.getBoundingClientRect() : null;
  if (!window.gsap || REDUCE || !img || !host || !r || !r.width || !r.height){ done(); return; }
  var W=r.width, H=r.height;
  var N=Math.max(9, Math.min(18, Math.round(H/12)));
  var sh=H/N, slices=[], frag=document.createDocumentFragment();
  for (var i=0;i<N;i++){
    var d=document.createElement("div"); d.className="logo-slice";
    d.style.top=(i*sh)+"px"; d.style.width=W+"px";
    d.style.height=((i===N-1)?(H-(N-1)*sh):(sh+0.6))+"px";
    d.style.backgroundImage="url('"+LOGO_SRC+"')";
    d.style.backgroundSize=W+"px "+H+"px";
    d.style.backgroundPosition="0px "+(-(i*sh))+"px";
    frag.appendChild(d); slices.push(d);
  }
  host.appendChild(frag);
  img.style.visibility="hidden";
  var tl=gsap.timeline({onComplete:done});
  var fade=[bar,meta].filter(Boolean);
  if (fade.length) tl.to(fade, {opacity:0, duration:0.25, ease:"power1.out"}, 0);
  tl.to(slices, {
    x:function(i){ return ((i%2)?1:-1)*(innerWidth*0.62+140); },
    rotation:function(i){ return ((i%2)?1:-1)*1.5; },
    opacity:0, duration:0.72, ease:"power3.in",
    stagger:{each:0.03, from:"center"}
  }, 0.05);
}
 
/* --------------------------------------------------------------- scene */
var SCENE = null;
function initScene(){
  if (!window.THREE) return false;
  var canvas = document.getElementById("webgl");
  var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  if (!gl) return false;
 
  var renderer = new THREE.WebGLRenderer({ canvas:canvas, antialias:false, alpha:true, powerPreference:"high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 2));
  renderer.setSize(innerWidth, innerHeight);
  renderer.setClearColor(0x000000, 0);
 
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(48, innerWidth/innerHeight, 1, 3000);
  camera.position.set(0, 4, 360);
 
  /* ---- sample a standing human silhouette from an offscreen canvas ---- */
  var pool = buildFigurePool();          // array of {x,y,z}
  var COUNT = SMALL ? 6500 : 18000;
  if (REDUCE) COUNT = SMALL ? 4000 : 11000;
 
  var positions = new Float32Array(COUNT*3);
  var colors    = new Float32Array(COUNT*3);
  var sizes     = new Float32Array(COUNT);
  var home = new Float32Array(COUNT*3);
  var vel  = new Float32Array(COUNT*3);
 
  var cjit = new Float32Array(COUNT);
  for (var i=0;i<COUNT;i++){
    var p = pool[i % pool.length];
    var jx = (Math.random()-0.5)*2.2;
    var jy = (Math.random()-0.5)*2.2;
    var jz = (Math.random()-0.5)*2.2;
    var hx = p.x+jx, hy = p.y+jy, hz = p.z+jz;
    home[i*3]=hx; home[i*3+1]=hy; home[i*3+2]=hz;
    // start scattered so it "assembles" on first load
    positions[i*3]   = hx + (Math.random()-0.5)*440;
    positions[i*3+1] = hy + (Math.random()-0.5)*440;
    positions[i*3+2] = hz + (Math.random()-0.5)*440;
    cjit[i] = Math.random()*0.02;
    sizes[i] = (Math.random()<0.06 ? 2.6 : 1.0) * (0.7 + Math.random()*0.9);
  }
  // paint the ember figure: electric-violet (gaming) or warm sunrise (game-dev)
  function paintFigure(warm){
    var c = new THREE.Color();
    for (var k=0;k<COUNT;k++){
      var hyy = home[k*3+1], hxx = home[k*3];
      var hN = (hyy + 110) / 220;
      var cr = 1 - Math.min(1, Math.abs(hxx)/46);
      var L = 0.42 + hN*0.16 + cr*0.18;
      if (warm){ c.setHSL(0.045 + hN*0.06 + cjit[k], 0.95, L); }
      else { c.setHSL(0.78 - hN*0.06 + cjit[k], 0.95, L); }
      colors[k*3]=c.r; colors[k*3+1]=c.g; colors[k*3+2]=c.b;
    }
    if (geo.attributes.aColor) geo.attributes.aColor.needsUpdate = true;
  }
 
  var geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions,3));
  geo.setAttribute("aColor",   new THREE.BufferAttribute(colors,3));
  geo.setAttribute("aSize",    new THREE.BufferAttribute(sizes,1));
  paintFigure(THEME.warm);
 
  var mat = new THREE.ShaderMaterial({
    uniforms:{
      uSize:{value: SMALL?2.2:2.6},
      uPix:{value: Math.min(window.devicePixelRatio||1,2)},
      uOpacity:{value: 1.0}
    },
    vertexShader:[
      "attribute float aSize; attribute vec3 aColor;",
      "uniform float uSize; uniform float uPix;",
      "varying vec3 vColor;",
      "void main(){",
      "  vColor = aColor;",
      "  vec4 mv = modelViewMatrix * vec4(position,1.0);",
      "  gl_PointSize = aSize * uSize * uPix * (300.0 / -mv.z);",
      "  gl_Position = projectionMatrix * mv;",
      "}"
    ].join("\n"),
    fragmentShader:[
      "precision mediump float;",
      "varying vec3 vColor; uniform float uOpacity;",
      "void main(){",
      "  vec2 uv = gl_PointCoord - 0.5;",
      "  float d = length(uv);",
      "  float a = smoothstep(0.5, 0.0, d);",
      "  float core = smoothstep(0.22, 0.0, d);",
      "  vec3 c = vColor + core*0.7;",
      "  gl_FragColor = vec4(c, a*uOpacity);",
      "}"
    ].join("\n"),
    transparent:true, depthTest:false, depthWrite:false, blending:THREE.AdditiveBlending
  });
 
  var points = new THREE.Points(geo, mat);
  scene.add(points);
 
  /* ---- glass orb (fresnel shell + inner swirl) to the right ---- */
  var orb = buildOrb();
  orb.setPalette(THEME.warm);
  orb.group.position.set(112, -6, 20);
  scene.add(orb.group);
 
  /* ---- pointer -> world plane at z=0 ---- */
  var mouse = new THREE.Vector2(-999,-999);
  var world = new THREE.Vector3(9999,9999,0);
  var pointerActive = false;
  var burst = { t:0, x:0, y:0 };
 
  function projectPointer(cx, cy){
    var ndc = new THREE.Vector3((cx/innerWidth)*2-1, -(cy/innerHeight)*2+1, 0.5);
    ndc.unproject(camera);
    var dir = ndc.sub(camera.position).normalize();
    var t = (0 - camera.position.z)/dir.z;
    world.copy(camera.position).add(dir.multiplyScalar(t));
  }
  window.addEventListener("pointermove", function(e){
    if (e.clientY > innerHeight*1.05) { pointerActive=false; return; }
    pointerActive = true; projectPointer(e.clientX, e.clientY);
  }, {passive:true});
  window.addEventListener("pointerdown", function(e){
    if (e.target.closest("a,button,.tile,.sidenav")) return;
    if (window.scrollY > innerHeight*0.75) return;
    projectPointer(e.clientX, e.clientY);
    burst.t = 1; burst.x = world.x; burst.y = world.y;
  });
 
  /* ---- state driven by scroll ---- */
  var state = { dispersion:0, opacity:1 };
  var pos = positions;
  var clock = new THREE.Clock();
  var explodeTimer = 0;
 
  var R = 40, R2 = R*R;            // mouse influence radius (world)
  var SPRING = 0.010, DAMP = 0.90;
 
  function frame(){
    var dt = clock.getDelta();
    var f = Math.min(dt*60, 2);    // frame factor, clamped for tab-switches
    if (dt > 0.06) f = 1;          // skip big jumps
 
    var disp = state.dispersion;
    var springK = SPRING * (1 - disp*0.92);
    var mStr = REDUCE ? 0 : (1 - disp) * 46;
    var idleExplode = 0;
 
    // subtle auto explode/reassemble loop only while formed & motion allowed
    if (!REDUCE && disp < 0.15){
      explodeTimer += dt;
      if (explodeTimer > 9){ explodeTimer = 0; idleExplode = 1; }
    }
 
    for (var i=0;i<COUNT;i++){
      var ix=i*3, iy=ix+1, iz=ix+2;
      var x=pos[ix], y=pos[iy], z=pos[iz];
      var hx=home[ix], hy=home[iy], hz=home[iz];
 
      var ax=(hx-x)*springK, ay=(hy-y)*springK, az=(hz-z)*springK;
 
      // dispersion outward drift
      if (disp > 0.001){
        ax += (x)*0.0006*disp + (Math.random()-0.5)*disp*0.9;
        ay += (y)*0.0006*disp + (Math.random()-0.5)*disp*0.9 + disp*0.15;
        az += (z)*0.0006*disp;
      }
 
      // pointer repel + swirl
      if (pointerActive && mStr>0){
        var dx=x-world.x, dy=y-world.y;
        var d2=dx*dx+dy*dy;
        if (d2 < R2){
          var d=Math.sqrt(d2)+0.001;
          var force=(1 - d2/R2)*mStr/d;
          ax += dx*force*0.04; ay += dy*force*0.04;
          ax += -dy*force*0.012; ay += dx*force*0.012;  // swirl
        }
      }
      // click burst
      if (burst.t > 0.01){
        var bx=x-burst.x, by=y-burst.y;
        var bd2=bx*bx+by*by;
        if (bd2 < 90*90){
          var bd=Math.sqrt(bd2)+0.001;
          var bf=(1-bd2/(90*90))*burst.t*70/bd;
          ax += bx*bf*0.05; ay += by*bf*0.05;
        }
      }
      if (idleExplode){
        ax += (Math.random()-0.5)*10; ay += (Math.random()-0.5)*10; az += (Math.random()-0.5)*10;
      }
 
      var vx=vel[ix]+ax*f, vy=vel[iy]+ay*f, vz=vel[iz]+az*f;
      vx*=DAMP; vy*=DAMP; vz*=DAMP;
      vel[ix]=vx; vel[iy]=vy; vel[iz]=vz;
      pos[ix]=x+vx*f; pos[iy]=y+vy*f; pos[iz]=z+vz*f;
    }
    if (burst.t>0) burst.t *= 0.86;
    geo.attributes.position.needsUpdate = true;
 
    // gentle idle rotation of the whole field + orb spin
    if (!REDUCE){ points.rotation.y = Math.sin(clock.elapsedTime*0.15)*0.05; }
    orb.update(dt, REDUCE);
 
    mat.uniforms.uOpacity.value = state.opacity;
    orb.group.visible = state.opacity > 0.06;
 
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
 
  window.addEventListener("resize", function(){
    camera.aspect = innerWidth/innerHeight; camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    mat.uniforms.uPix.value = Math.min(window.devicePixelRatio||1,2);
  }, {passive:true});
 
  canvas.addEventListener("webglcontextlost", function(e){ e.preventDefault(); body.classList.add("no-webgl"); });
 
  SCENE = { state:state, setPalette:function(warm){ paintFigure(warm); orb.setPalette(warm); } };
  return true;
}
 
/* ---- draw a standing human, sample opaque pixels into world points ---- */
function buildFigurePool(){
  var W=220, H=440;
  var cv = document.createElement("canvas"); cv.width=W; cv.height=H;
  var c = cv.getContext("2d");
  c.fillStyle="#fff"; c.strokeStyle="#fff"; c.lineCap="round"; c.lineJoin="round";
 
  // head
  c.beginPath(); c.arc(110, 58, 30, 0, Math.PI*2); c.fill();
  // torso (tapered trunk)
  c.beginPath();
  c.moveTo(52,104);
  c.bezierCurveTo(52,88, 74,86, 90,86);
  c.lineTo(130,86);
  c.bezierCurveTo(146,86, 168,88, 168,104);
  c.bezierCurveTo(160,150, 152,196, 150,246);
  c.bezierCurveTo(150,262, 138,264, 128,262);
  c.lineTo(92,262);
  c.bezierCurveTo(82,264, 70,262, 70,246);
  c.bezierCurveTo(68,196, 60,150, 52,104);
  c.closePath(); c.fill();
  // arms
  c.lineWidth=23;
  c.beginPath(); c.moveTo(60,110); c.lineTo(36,236); c.stroke();     // left
  c.beginPath(); c.moveTo(160,110); c.lineTo(184,236); c.stroke();   // right
  // legs
  c.lineWidth=30;
  c.beginPath(); c.moveTo(93,256); c.lineTo(84,416); c.stroke();     // left
  c.beginPath(); c.moveTo(127,256); c.lineTo(136,416); c.stroke();   // right
 
  var data = c.getImageData(0,0,W,H).data;
  var pool = [];
  var HH = 210, WW = HH*(W/H), DEPTH = 26;
  var step = 2;
  for (var y=0; y<H; y+=step){
    for (var x=0; x<W; x+=step){
      var idx = (y*W+x)*4 + 3;
      if (data[idx] > 128){
        var nx = (x/W - 0.5);
        var ny = (0.5 - y/H);
        pool.push({ x:nx*WW, y:ny*HH, z:(Math.random()-0.5)*DEPTH });
      }
    }
  }
  if (pool.length === 0) pool.push({x:0,y:0,z:0});
  return pool;
}
 
/* ---- glass orb: fresnel shell + inner swirling points ---- */
function buildOrb(){
  var group = new THREE.Group();
  var R = 34;
 
  var shellMat = new THREE.ShaderMaterial({
    uniforms:{ uTime:{value:0}, uCool:{value:new THREE.Vector3(0.5,0.35,1.0)}, uWarm:{value:new THREE.Vector3(0.85,0.35,1.0)} },
    transparent:true, depthWrite:false, side:THREE.FrontSide, blending:THREE.AdditiveBlending,
    vertexShader:[
      "varying vec3 vN; varying vec3 vV;",
      "void main(){",
      "  vN = normalize(normalMatrix * normal);",
      "  vec4 mv = modelViewMatrix * vec4(position,1.0);",
      "  vV = normalize(-mv.xyz);",
      "  gl_Position = projectionMatrix * mv;",
      "}"
    ].join("\n"),
    fragmentShader:[
      "precision mediump float;",
      "varying vec3 vN; varying vec3 vV; uniform float uTime; uniform vec3 uCool; uniform vec3 uWarm;",
      "void main(){",
      "  float fres = pow(1.0 - max(dot(vN,vV),0.0), 2.4);",
      "  vec3 col = mix(uCool, uWarm, 0.35 + 0.3*sin(uTime*0.5));",
      "  gl_FragColor = vec4(col*fres, fres*0.9);",
      "}"
    ].join("\n")
  });
  var shell = new THREE.Mesh(new THREE.SphereGeometry(R, 48, 48), shellMat);
  group.add(shell);
 
  // inner swirl
  var N = 380;
  var pos = new Float32Array(N*3), sz=new Float32Array(N);
  for (var i=0;i<N;i++){
    var r = R*0.82*Math.cbrt(Math.random());
    var th = Math.random()*Math.PI*2, ph = Math.acos(2*Math.random()-1);
    pos[i*3]=r*Math.sin(ph)*Math.cos(th);
    pos[i*3+1]=r*Math.sin(ph)*Math.sin(th);
    pos[i*3+2]=r*Math.cos(ph);
    sz[i]=0.5+Math.random()*1.4;
  }
  var g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos,3));
  g.setAttribute("aSize", new THREE.BufferAttribute(sz,1));
  var innerMat = new THREE.ShaderMaterial({
    uniforms:{ uPix:{value:Math.min(window.devicePixelRatio||1,2)}, uColor:{value:new THREE.Vector3(0.82,0.6,1.0)} },
    transparent:true, depthTest:false, depthWrite:false, blending:THREE.AdditiveBlending,
    vertexShader:[
      "attribute float aSize; uniform float uPix;",
      "void main(){ vec4 mv=modelViewMatrix*vec4(position,1.0);",
      "gl_PointSize=aSize*3.0*uPix*(300.0/-mv.z); gl_Position=projectionMatrix*mv; }"
    ].join("\n"),
    fragmentShader:[
      "precision mediump float;",
      "uniform vec3 uColor;",
      "void main(){ vec2 uv=gl_PointCoord-0.5; float d=length(uv);",
      "float a=smoothstep(0.5,0.0,d); gl_FragColor=vec4(uColor,a); }"
    ].join("\n")
  });
  var inner = new THREE.Points(g, innerMat);
  group.add(inner);
 
  var t=0;
  return {
    group:group,
    update:function(dt, reduce){
      t += dt;
      shellMat.uniforms.uTime.value = t;
      if (!reduce){ inner.rotation.y += dt*0.4; inner.rotation.x += dt*0.15; group.rotation.y = Math.sin(t*0.3)*0.2; }
    },
    setPalette:function(warm){
      if (warm){ shellMat.uniforms.uCool.value.set(1.0,0.55,0.2); shellMat.uniforms.uWarm.value.set(1.0,0.82,0.4); innerMat.uniforms.uColor.value.set(1.0,0.82,0.5); }
      else { shellMat.uniforms.uCool.value.set(0.5,0.35,1.0); shellMat.uniforms.uWarm.value.set(0.85,0.35,1.0); innerMat.uniforms.uColor.value.set(0.82,0.6,1.0); }
    }
  };
}
 
/* ------------------------------------------------------------- scroll */
function setupScroll(hasGsapScene){
  var side = document.getElementById("sidenav");
 
  if (window.gsap && window.ScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);
 
    // hero: figure disassembles + canvas fades as you leave
    if (hasGsapScene && SCENE){
      ScrollTrigger.create({
        trigger:"#hero", start:"top top", end:"bottom top", scrub:0.6,
        onUpdate:function(self){
          SCENE.state.dispersion = self.progress;
          SCENE.state.opacity = 1 - self.progress*0.86;
        }
      });
      // contact: bring a faint field back for continuity
      ScrollTrigger.create({
        trigger:"#contact", start:"top 80%", end:"top 20%", scrub:0.6,
        onUpdate:function(self){
          SCENE.state.opacity = 0.14 + self.progress*0.30;
          SCENE.state.dispersion = 1 - self.progress*0.35;
        }
      });
    }
 
    // hide side-nav once past hero (desktop)
    ScrollTrigger.create({
      trigger:"#hero", start:"bottom 70%",
      onEnter:function(){ if(!SMALL) side.classList.add("hide-on-scroll"); },
      onLeaveBack:function(){ side.classList.remove("hide-on-scroll"); }
    });
 
 
    // subtle tile rise-in
    gsap.utils.toArray(".tile").forEach(function(t, i){
      gsap.from(t, {
        y:40, opacity:0, duration:0.9, ease:"power3.out",
        scrollTrigger:{ trigger:t, start:"top 88%" }, delay:(i%2)*0.06
      });
    });
  }
}
 
/* ------------------------------------------------------------- go */
if (document.readyState === "complete" || document.readyState === "interactive"){ boot(); }
else { window.addEventListener("DOMContentLoaded", boot); }
 
})();
 




