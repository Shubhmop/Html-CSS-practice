const LESSONS = [
  {
    title: "Headings & Paragraph Text",
    desc: "HTML has 6 heading levels (h1–h6) and the &lt;p&gt; tag for paragraphs. Use &lt;strong&gt; for bold, &lt;em&gt; for italic. Edit the code and click Run!",
    hint: "Try all 6 heading levels: <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>. Wrap text in <code>&lt;strong&gt;</code> for bold and <code>&lt;em&gt;</code> for italic.",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Georgia, serif; padding: 2rem; color: #222; }
  </style>
</head>
<body>

  <h1>This is a Heading 1</h1>
  <h2>This is a Heading 2</h2>
  <h3>Heading 3 is smaller</h3>

  <p>This is a paragraph. HTML text lives inside the
  <strong>p tag</strong>. You can make text <em>italic</em>
  or <strong>bold</strong>.</p>

  <p>Try changing the text or adding more tags below!</p>

</body>
</html>`
  },
  {
    title: "Links & Images",
    desc: "The &lt;a&gt; tag creates hyperlinks. The &lt;img&gt; tag embeds images using a src attribute. Both are essential building blocks.",
    hint: "Links: <code>&lt;a href=\"url\"&gt;text&lt;/a&gt;</code>. Images: <code>&lt;img src=\"url\" alt=\"description\"&gt;</code>. Add <code>target=\"_blank\"</code> to open in a new tab.",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 2rem; }
    a { color: #0066cc; }
    img { max-width: 100%; border-radius: 8px; }
  </style>
</head>
<body>

  <h2>Links</h2>
  <p>Visit <a href="https://developer.mozilla.org" target="_blank">
    MDN Web Docs
  </a> to learn more HTML.</p>

  <h2>Images</h2>
  <img src="https://picsum.photos/400/200?random=1"
       alt="A random image" width="400">

  <p>Try changing the URL or the width!</p>

</body>
</html>`
  },
  {
    title: "Lists",
    desc: "HTML has ordered lists &lt;ol&gt;, unordered lists &lt;ul&gt;, and definition lists &lt;dl&gt;. Each item goes in an &lt;li&gt; tag.",
    hint: "Unordered: <code>&lt;ul&gt;&lt;li&gt;item&lt;/li&gt;&lt;/ul&gt;</code>. Ordered: <code>&lt;ol&gt;</code>. You can nest lists inside list items!",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 2rem; }
    li { margin: 0.3rem 0; }
  </style>
</head>
<body>

  <h2>Shopping List (unordered)</h2>
  <ul>
    <li>Apples</li>
    <li>Bread</li>
    <li>Milk</li>
  </ul>

  <h2>Steps to make tea (ordered)</h2>
  <ol>
    <li>Boil water</li>
    <li>Add tea bag to cup</li>
    <li>Pour hot water</li>
    <li>Wait 3 minutes</li>
    <li>Enjoy!</li>
  </ol>

</body>
</html>`
  },
  {
    title: "Tables",
    desc: "HTML tables use &lt;table&gt;, &lt;tr&gt; (row), &lt;th&gt; (header cell), and &lt;td&gt; (data cell). Great for displaying structured data.",
    hint: "Use <code>&lt;thead&gt;</code> for the header row and <code>&lt;tbody&gt;</code> for data rows. Add <code>border-collapse: collapse</code> in CSS for clean borders.",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 2rem; }
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ccc; padding: 8px 12px; text-align: left; }
    th { background: #f0f0f0; font-weight: bold; }
    tr:nth-child(even) { background: #fafafa; }
  </style>
</head>
<body>

  <h2>Student Scores</h2>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Subject</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Arjun</td><td>Math</td><td>92</td></tr>
      <tr><td>Priya</td><td>Science</td><td>88</td></tr>
      <tr><td>Rohan</td><td>English</td><td>95</td></tr>
    </tbody>
  </table>

</body>
</html>`
  },
  {
    title: "Forms",
    desc: "Forms collect user input using &lt;input&gt;, &lt;textarea&gt;, &lt;select&gt;, and &lt;button&gt; tags. The &lt;label&gt; tag links text to an input.",
    hint: "Connect a label to an input with <code>for</code> and <code>id</code> attributes. Use <code>type=\"email\"</code> or <code>type=\"number\"</code> for automatic validation.",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 2rem; max-width: 400px; }
    label { display: block; font-size: 0.9rem; margin-bottom: 0.3rem; color: #555; }
    input, select, textarea {
      width: 100%; padding: 0.5rem 0.7rem;
      border: 1px solid #ccc; border-radius: 6px;
      margin-bottom: 1rem; font-size: 1rem;
    }
    button {
      background: #4a90e2; color: white; border: none;
      padding: 0.6rem 1.5rem; border-radius: 6px;
      font-size: 1rem; cursor: pointer;
    }
    button:hover { background: #357abd; }
  </style>
</head>
<body>

  <h2>Contact Form</h2>

  <label for="name">Your Name</label>
  <input type="text" id="name" placeholder="Arjun Sharma">

  <label for="email">Email Address</label>
  <input type="email" id="email" placeholder="you@example.com">

  <label for="topic">Topic</label>
  <select id="topic">
    <option>General Question</option>
    <option>Feedback</option>
    <option>Bug Report</option>
  </select>

  <label for="msg">Message</label>
  <textarea id="msg" rows="4" placeholder="Write your message..."></textarea>

  <button type="button">Send Message</button>

</body>
</html>`
  },
  {
    title: "Colors & Fonts",
    desc: "CSS controls visual style. Change text color with 'color', background with 'background-color', and load custom fonts with Google Fonts.",
    hint: "Colors can be hex (<code>#ff6b6b</code>), rgb (<code>rgb(255,107,107)</code>), or named (<code>tomato</code>). Google Fonts: add a link tag then use the font-family name.",
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Open+Sans&display=swap" rel="stylesheet">
  <style>
    body {
      background-color: #fff9f0;
      font-family: 'Open Sans', sans-serif;
      padding: 2rem;
    }
    h1 {
      font-family: 'Pacifico', cursive;
      color: #e85d4a;
      font-size: 2.5rem;
    }
    .highlight {
      background-color: #ffd166;
      color: #333;
      padding: 4px 8px;
      border-radius: 4px;
    }
    .box {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      padding: 1.5rem;
      border-radius: 12px;
      margin-top: 1rem;
    }
  </style>
</head>
<body>

  <h1>Hello, CSS Colors!</h1>
  <p>This text uses <span class="highlight">highlighted</span> styling.</p>

  <div class="box">
    <p>This box uses a gradient background.</p>
    <p>Try changing the colors!</p>
  </div>

</body>
</html>`
  },
  {
    title: "The Box Model",
    desc: "Every HTML element is a box. The box model has content, padding (inner space), border, and margin (outer space). Understanding this is key to layout.",
    hint: "Use browser DevTools to visualize the box model. <code>margin</code> pushes elements apart, <code>padding</code> creates internal space, <code>border</code> draws an outline.",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; background: #f5f5f5; padding: 2rem; }

    .box {
      width: 200px;
      padding: 20px;        /* inner space */
      border: 4px solid #4a90e2;  /* border */
      margin: 20px;         /* outer space */
      background: white;
      border-radius: 8px;
    }

    .tight {
      padding: 5px;
      margin: 5px;
      border: 2px dashed #e85d4a;
    }

    .spacious {
      padding: 40px;
      margin: 30px;
      border: 6px solid #27ae60;
    }
  </style>
</head>
<body>

  <h2>Box Model Demo</h2>

  <div class="box">
    <p>Normal box: 20px padding, 20px margin</p>
  </div>

  <div class="box tight">
    <p>Tight box: less padding & margin</p>
  </div>

  <div class="box spacious">
    <p>Spacious box: lots of padding & margin</p>
  </div>

</body>
</html>`
  },
  {
    title: "Flexbox Layout",
    desc: "Flexbox makes it easy to align and distribute elements in a row or column. Use 'display: flex' on the parent and control children with gap, justify-content, align-items.",
    hint: "Key properties: <code>justify-content</code> (main axis), <code>align-items</code> (cross axis), <code>flex-wrap: wrap</code> (for responsive wrapping), <code>gap</code> for spacing.",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 2rem; }

    .flex-row {
      display: flex;
      gap: 12px;
      margin-bottom: 2rem;
    }

    .flex-center {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      background: #f0f4ff;
      padding: 2rem;
      border-radius: 10px;
    }

    .flex-space {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff0f5;
      padding: 1rem 1.5rem;
      border-radius: 10px;
    }

    .card {
      background: white;
      border: 1px solid #e0e0e0;
      padding: 1rem;
      border-radius: 8px;
      flex: 1;
      text-align: center;
    }
  </style>
</head>
<body>

  <h2>Row of Cards (flex)</h2>
  <div class="flex-row">
    <div class="card">🍕 Pizza</div>
    <div class="card">🍜 Noodles</div>
    <div class="card">🥗 Salad</div>
  </div>

  <h2>Centered Content</h2>
  <div class="flex-center">
    <div>⬅ Left</div>
    <div>Center ✦</div>
    <div>Right ➡</div>
  </div>

  <br>
  <h2>Space Between</h2>
  <div class="flex-space">
    <span><strong>Logo</strong></span>
    <span>Home &nbsp; About &nbsp; Contact</span>
  </div>

</body>
</html>`
  },
  {
    title: "CSS Grid Layout",
    desc: "CSS Grid is perfect for two-dimensional layouts. Define rows and columns with grid-template-columns, then place elements into cells.",
    hint: "Use <code>grid-template-columns: repeat(3, 1fr)</code> for 3 equal columns. <code>grid-column: span 2</code> makes an item stretch across 2 columns.",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 2rem; }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-bottom: 2rem;
    }

    .cell {
      background: #e8f4fd;
      border: 1px solid #b3d4f5;
      padding: 1.5rem;
      text-align: center;
      border-radius: 8px;
      font-weight: 600;
    }

    .wide { grid-column: span 2; background: #d4f5e8; border-color: #8fd4b4; }
    .tall { grid-row: span 2; background: #fde8f4; border-color: #f4b3d4; }

    .page-grid {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-rows: auto 1fr auto;
      gap: 10px;
      height: 200px;
    }
    .header { grid-column: 1 / -1; background: #333; color: white; padding: 0.6rem 1rem; border-radius: 6px; }
    .sidebar { background: #f0f0f0; padding: 0.8rem; border-radius: 6px; }
    .content { background: #fff; border: 1px solid #ddd; padding: 0.8rem; border-radius: 6px; }
    .footer { grid-column: 1 / -1; background: #555; color: white; padding: 0.5rem 1rem; border-radius: 6px; text-align: center; }
  </style>
</head>
<body>

  <h2>Basic Grid</h2>
  <div class="grid">
    <div class="cell">1</div>
    <div class="cell wide">2 (spans 2 cols)</div>
    <div class="cell tall">3 (spans 2 rows)</div>
    <div class="cell">4</div>
    <div class="cell">5</div>
  </div>

  <h2>Page Layout with Grid</h2>
  <div class="page-grid">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="content">Main Content Area</div>
    <div class="footer">Footer</div>
  </div>

</body>
</html>`
  },
  {
    title: "CSS Animations",
    desc: "CSS can animate elements using @keyframes. Define the start and end states, then apply the animation with animation-name, duration, and timing.",
    hint: "Use <code>animation: name duration timing infinite</code>. Combine with <code>transform: scale()</code> or <code>translateX()</code> for smooth motion.",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 2rem; }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.15); opacity: 0.7; }
    }

    @keyframes slide-in {
      from { transform: translateX(-100px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }

    .box { display: inline-block; width: 60px; height: 60px; border-radius: 10px; margin: 1rem; }
    .bounce { background: #e85d4a; animation: bounce 1s ease infinite; }
    .spin   { background: #4a90e2; animation: spin 2s linear infinite; border-radius: 50%; }
    .pulse  { background: #27ae60; animation: pulse 1.5s ease infinite; }

    .slide {
      background: #f0f4ff;
      border: 1px solid #b3c6f5;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      animation: slide-in 0.8s ease forwards;
      margin-top: 1rem;
      display: inline-block;
    }

    .hover-box {
      background: #fff0d4;
      border: 2px solid #ffd166;
      padding: 1rem 2rem;
      border-radius: 10px;
      display: inline-block;
      transition: transform 0.2s, box-shadow 0.2s;
      cursor: pointer;
      margin-top: 1rem;
    }
    .hover-box:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>

  <h2>Animated Elements</h2>
  <div class="box bounce"></div>
  <div class="box spin"></div>
  <div class="box pulse"></div>

  <h2>Slide In on Load</h2>
  <div class="slide">I slid in when the page loaded!</div>

  <h2>Hover Transition</h2>
  <div class="hover-box">Hover over me!</div>

</body>
</html>`
  },
  {
    title: "Profile Card",
    desc: "Build a complete profile card using HTML structure and CSS styling — a classic mini project that uses flexbox, borders, and typography together.",
    hint: "Structure: a card div containing an avatar, name, role, stats row, and a button. Use <code>border-radius: 50%</code> for circle avatars.",
    code: `<!DOCTYPE html>
<html>
<head>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: 'Nunito', sans-serif;
    }
    .card {
      background: white;
      border-radius: 20px;
      padding: 2rem;
      width: 280px;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0,0,0,0.2);
    }
    .avatar {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background: linear-gradient(135deg, #f093fb, #f5576c);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.2rem;
      margin: 0 auto 1rem;
    }
    .name { font-size: 1.3rem; font-weight: 800; color: #222; }
    .role { color: #888; font-size: 0.9rem; margin-top: 0.2rem; }
    .stats {
      display: flex;
      justify-content: space-around;
      margin: 1.5rem 0;
      padding: 1rem 0;
      border-top: 1px solid #f0f0f0;
      border-bottom: 1px solid #f0f0f0;
    }
    .stat-num { font-size: 1.2rem; font-weight: 800; color: #333; }
    .stat-label { font-size: 0.75rem; color: #aaa; margin-top: 2px; }
    .follow-btn {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      border: none;
      padding: 0.7rem 2rem;
      border-radius: 25px;
      font-size: 0.95rem;
      font-weight: 700;
      cursor: pointer;
      width: 100%;
      transition: opacity 0.2s;
    }
    .follow-btn:hover { opacity: 0.85; }
  </style>
</head>
<body>
  <div class="card">
    <div class="avatar">✦</div>
    <div class="name">Priya Sharma</div>
    <div class="role">UI Designer & Developer</div>
    <div class="stats">
      <div><div class="stat-num">482</div><div class="stat-label">Posts</div></div>
      <div><div class="stat-num">12.4K</div><div class="stat-label">Followers</div></div>
      <div><div class="stat-num">318</div><div class="stat-label">Following</div></div>
    </div>
    <button class="follow-btn">Follow</button>
  </div>
</body>
</html>`
  },
  {
    title: "Navigation Bar",
    desc: "Build a responsive navigation bar — a must-have for any website. Uses flexbox for layout, with a logo on the left and links on the right.",
    hint: "Use <code>position: sticky; top: 0</code> to keep the nav visible while scrolling. Add <code>box-shadow</code> to make it appear elevated from the content.",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: sans-serif; }

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;
      height: 64px;
      background: white;
      box-shadow: 0 2px 12px rgba(0,0,0,0.08);
      position: sticky;
      top: 0;
    }

    .logo {
      font-size: 1.3rem;
      font-weight: 700;
      color: #4a90e2;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 0.5rem;
    }

    .nav-links a {
      text-decoration: none;
      color: #555;
      padding: 0.4rem 0.9rem;
      border-radius: 7px;
      font-size: 0.92rem;
      transition: all 0.2s;
    }

    .nav-links a:hover { background: #f0f4ff; color: #4a90e2; }
    .nav-links .active a { background: #4a90e2; color: white; }

    .hero {
      text-align: center;
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #f5f7ff, #e8f0fe);
    }
    .hero h1 { font-size: 2rem; color: #333; margin-bottom: 0.5rem; }
    .hero p { color: #777; }
  </style>
</head>
<body>

  <nav>
    <div class="logo">MySite</div>
    <ul class="nav-links">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Work</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <div class="hero">
    <h1>Welcome to My Site</h1>
    <p>Scroll down to see the sticky navigation in action!</p>
  </div>

  <div style="height: 600px; display:flex; align-items:center; justify-content:center; color:#aaa;">
    More content here...
  </div>

</body>
</html>`
  },
  {
    title: "Button Styles",
    desc: "CSS buttons can look dramatically different with borders, gradients, and hover effects. Practice creating a variety of button styles from scratch.",
    hint: "Key properties: <code>cursor: pointer</code>, <code>transition</code> for smooth hover, <code>border-radius</code> for pill/square shapes, <code>:hover</code> and <code>:active</code> pseudo-classes.",
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; padding: 2rem; background: #f8f8f8; }
    h3 { color: #555; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; margin: 1.5rem 0 0.7rem; }
    .row { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 0.5rem; }

    button {
      font-family: sans-serif;
      font-size: 0.9rem;
      padding: 0.55rem 1.3rem;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: all 0.2s;
    }

    .solid-blue { background: #4a90e2; color: white; }
    .solid-blue:hover { background: #357abd; transform: translateY(-1px); }

    .solid-green { background: #27ae60; color: white; }
    .solid-green:hover { background: #1e8449; }

    .solid-red { background: #e74c3c; color: white; }
    .solid-red:hover { background: #c0392b; }

    .outline { background: transparent; border: 2px solid #4a90e2; color: #4a90e2; }
    .outline:hover { background: #4a90e2; color: white; }

    .ghost { background: transparent; border: 1px solid #ddd; color: #555; }
    .ghost:hover { background: #f0f0f0; }

    .pill { border-radius: 50px; background: #764ba2; color: white; }
    .pill:hover { background: #6a3d9f; }

    .gradient { background: linear-gradient(135deg, #f093fb, #f5576c); color: white; border-radius: 10px; }
    .gradient:hover { opacity: 0.85; transform: scale(1.03); }

    .shadow { background: white; border: 1px solid #e0e0e0; color: #333; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .shadow:hover { box-shadow: 0 8px 20px rgba(0,0,0,0.15); transform: translateY(-2px); }

    .disabled { background: #ccc; color: #999; cursor: not-allowed; }
  </style>
</head>
<body>
  <h2>Button Showcase</h2>

  <h3>Solid</h3>
  <div class="row">
    <button class="solid-blue">Primary</button>
    <button class="solid-green">Success</button>
    <button class="solid-red">Danger</button>
  </div>

  <h3>Outline & Ghost</h3>
  <div class="row">
    <button class="outline">Outline</button>
    <button class="ghost">Ghost</button>
  </div>

  <h3>Special Styles</h3>
  <div class="row">
    <button class="pill">Pill Shape</button>
    <button class="gradient">Gradient</button>
    <button class="shadow">Elevated</button>
  </div>

  <h3>States</h3>
  <div class="row">
    <button class="solid-blue">Hover me</button>
    <button class="disabled" disabled>Disabled</button>
  </div>
</body>
</html>`
  }
];

let currentLesson = 0;
let completed = new Set();
let hintVisible = false;

function loadLesson(index, btn) {
  currentLesson = index;
  const lesson = LESSONS[index];
  document.getElementById('lesson-title').textContent = lesson.title;
  document.getElementById('lesson-desc').innerHTML = lesson.desc;
  document.getElementById('code-editor').value = lesson.code;
  document.getElementById('hint-text').innerHTML = lesson.hint;
  document.getElementById('status-hint').textContent = 'Press ▶ Run to see your changes';

  document.querySelectorAll('.lesson-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  if (hintVisible) { document.getElementById('hint-panel').classList.remove('visible'); hintVisible = false; }
  runCode();
  updateProgress();
}

function runCode() {
  const code = document.getElementById('code-editor').value;
  const frame = document.getElementById('preview-frame');
  const doc = frame.contentDocument || frame.contentWindow.document;
  doc.open();
  doc.write(code);
  doc.close();
  completed.add(currentLesson);
  updateProgress();
  showNotif('Preview updated!', false);
}

function resetCode() {
  document.getElementById('code-editor').value = LESSONS[currentLesson].code;
  runCode();
}

function toggleHint() {
  hintVisible = !hintVisible;
  document.getElementById('hint-panel').classList.toggle('visible', hintVisible);
}

function showNotif(msg, isError) {
  const n = document.getElementById('notif');
  n.textContent = msg;
  n.className = 'notif' + (isError ? ' error' : '') + ' show';
  clearTimeout(n._t);
  n._t = setTimeout(() => n.classList.remove('show'), 1800);
}

function updateProgress() {
  const track = document.getElementById('progress-track');
  track.innerHTML = LESSONS.map((_, i) => {
    let cls = 'progress-pip';
    if (i === currentLesson) cls += ' active';
    else if (completed.has(i)) cls += ' done';
    return `<div class="${cls}"></div>`;
  }).join('');
}

function setTab(el, tab) {
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  el.classList.add('active');
}

// Keyboard shortcut: Ctrl+Enter / Cmd+Enter to run
document.getElementById('code-editor').addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); runCode(); }
  if (e.key === 'Tab') {
    e.preventDefault();
    const ta = e.target;
    const s = ta.selectionStart;
    ta.value = ta.value.substring(0, s) + '  ' + ta.value.substring(ta.selectionEnd);
    ta.selectionStart = ta.selectionEnd = s + 2;
  }
});

// Init
loadLesson(0, document.querySelector('.lesson-btn'));
