
const blogs = [
  {
    id: 1,
    title: "Getting Started with Modern Web Development",
    description: "Learn the fundamentals of building modern web applications with HTML5, CSS3, and JavaScript. Perfect for beginners looking to start their coding journey.",
    tags: ["Web Dev", "JavaScript", "Tutorial"],
    authorName: "Harsh Pathak",
    authorAvatar: "https://i.pravatar.cc/150?img=1",
    date: "2026-02-10",
    readTime: "8 min read",
    likes: 342,
    seed: "webdev101",
    contentHTML: `
      <h2>Introduction to Modern Web Development</h2>
      <p>Welcome to the exciting world of modern web development! In this comprehensive guide, we'll explore the essential technologies that power today's web applications.</p>
      
      <h3>The Foundation: HTML5</h3>
      <p>HTML5 is the backbone of web development. It provides semantic elements that make your code more readable and accessible. Here's a simple example:</p>
      <pre><code>&lt;article&gt;
  &lt;header&gt;
    &lt;h1&gt;My Blog Post&lt;/h1&gt;
  &lt;/header&gt;
  &lt;p&gt;Content goes here...&lt;/p&gt;
&lt;/article&gt;</code></pre>
      
      <h3>Styling with CSS3</h3>
      <p>CSS3 brings powerful styling capabilities including flexbox, grid, animations, and transitions. These tools allow you to create beautiful, responsive designs.</p>
      
      <h3>Interactive JavaScript</h3>
      <p>JavaScript makes your websites interactive. From handling user input to creating dynamic content, it's an essential skill for any web developer.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Write semantic HTML for better accessibility</li>
        <li>Use CSS variables for maintainable styles</li>
        <li>Keep JavaScript modular and reusable</li>
        <li>Test across different browsers and devices</li>
      </ul>
      
      <p>Remember, practice is key to becoming a proficient web developer. Start building projects and learn by doing!</p>
    `
  },
  {
    id: 2,
    title: "The Art of CSS Animations and Transitions",
    description: "Master CSS animations to create smooth, performant animations that enhance user experience without sacrificing performance.",
    tags: ["CSS", "Animation", "Design"],
    authorName: "Sarah Chen",
    authorAvatar: "https://i.pravatar.cc/150?img=5",
    date: "2026-02-08",
    readTime: "6 min read",
    likes: 287,
    seed: "cssanim",
    contentHTML: `
      <h2>Why Animations Matter</h2>
      <p>Animations are more than just eye candy—they guide users, provide feedback, and create a polished experience that feels premium and responsive.</p>
      
      <h3>CSS Transitions</h3>
      <p>Transitions are the simplest way to add motion. They smoothly animate property changes:</p>
      <pre><code>.button {
  transition: transform 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
}</code></pre>
      
      <h3>Keyframe Animations</h3>
      <p>For more complex animations, use <code>@keyframes</code>:</p>
      <pre><code>@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}</code></pre>
      
      <h2>Performance Tips</h2>
      <p>Always animate properties that don't trigger layout recalculations. Stick to <code>transform</code> and <code>opacity</code> for the best performance.</p>
      
      <blockquote>
        "Animation is about creating illusions of life. And you can't create it by just making things move."
      </blockquote>
    `
  },
  {
    id: 3,
    title: "JavaScript ES6+: Modern Features You Should Know",
    description: "Explore the powerful features introduced in ES6 and beyond, including arrow functions, destructuring, and async/await.",
    tags: ["JavaScript", "ES6", "Tutorial"],
    authorName: "Anubhav",
    authorAvatar: "https://i.pravatar.cc/150?img=12",
    date: "2026-02-06",
    readTime: "10 min read",
    likes: 521,
    seed: "es6features",
    contentHTML: `
      <h2>Modern JavaScript Features</h2>
      <p>ES6 (ECMAScript 2015) revolutionized JavaScript, introducing features that make code cleaner, more expressive, and easier to maintain.</p>
      
      <h3>Arrow Functions</h3>
      <p>Arrow functions provide a concise syntax and lexical <code>this</code> binding:</p>
      <pre><code>// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;</code></pre>
      
      <h3>Destructuring</h3>
      <p>Extract values from objects and arrays with elegant syntax:</p>
      <pre><code>const user = { name: 'John', age: 30 };
const { name, age } = user;

const colors = ['red', 'green', 'blue'];
const [primary, secondary] = colors;</code></pre>
      
      <h3>Template Literals</h3>
      <p>Create strings with embedded expressions:</p>
      <pre><code>const greeting = \`Hello, \${name}! You are \${age} years old.\`;</code></pre>
      
      <h3>Async/Await</h3>
      <p>Handle asynchronous operations with cleaner syntax:</p>
      <pre><code>async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>These features are just the beginning. Modern JavaScript continues to evolve, bringing new capabilities that make development more enjoyable and productive.</p>
    `
  },
  {
    id: 4,
    title: "Responsive Design Best Practices in 2026",
    description: "Learn how to create websites that look stunning on any device using modern CSS techniques and mobile-first approaches.",
    tags: ["CSS", "Responsive", "Design"],
    authorName: "Emma Rodriguez",
    authorAvatar: "https://i.pravatar.cc/150?img=9",
    date: "2026-02-05",
    readTime: "7 min read",
    likes: 398,
    seed: "responsive2026",
    contentHTML: `
      <h2>The Mobile-First Era</h2>
      <p>With over 60% of web traffic coming from mobile devices, responsive design is no longer optional—it's essential.</p>
      
      <h3>CSS Grid and Flexbox</h3>
      <p>Modern layout tools make responsive design easier than ever:</p>
      <pre><code>.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}</code></pre>
      
      <h3>Media Queries</h3>
      <p>Target specific screen sizes with precision:</p>
      <pre><code>@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}</code></pre>
      
      <h3>Container Queries</h3>
      <p>The new kid on the block—style components based on their container size, not the viewport:</p>
      <pre><code>@container (min-width: 400px) {
  .card {
    display: flex;
  }
}</code></pre>
      
      <h2>Key Principles</h2>
      <ul>
        <li>Start with mobile design first</li>
        <li>Use relative units (rem, em, %) instead of pixels</li>
        <li>Test on real devices, not just browser tools</li>
        <li>Optimize images for different screen sizes</li>
        <li>Consider touch targets on mobile devices</li>
      </ul>
    `
  },
  {
    id: 5,
    title: "Building a Design System from Scratch",
    description: "Create a scalable, maintainable design system that ensures consistency across your entire application.",
    tags: ["Design", "CSS", "Development"],
    authorName: "David Kim",
    authorAvatar: "https://i.pravatar.cc/150?img=7",
    date: "2026-02-03",
    readTime: "12 min read",
    likes: 674,
    seed: "designsystem",
    contentHTML: `
      <h2>What is a Design System?</h2>
      <p>A design system is a collection of reusable components, guided by clear standards, that can be assembled to build applications efficiently and consistently.</p>
      
      <h3>Design Tokens</h3>
      <p>Start with design tokens—the DNA of your design system:</p>
      <pre><code>:root {
  /* Colors */
  --color-primary: #667eea;
  --color-secondary: #764ba2;
  
  /* Spacing */
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  
  /* Typography */
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Inter', sans-serif;
}</code></pre>
      
      <h3>Component Library</h3>
      <p>Build reusable components that consume your design tokens. This ensures consistency and makes updates easy.</p>
      
      <h3>Documentation</h3>
      <p>Document everything. Your future self and teammates will thank you. Include:</p>
      <ul>
        <li>Component usage examples</li>
        <li>Accessibility guidelines</li>
        <li>Design principles</li>
        <li>Code standards</li>
      </ul>
      
      <h2>Benefits</h2>
      <p>A well-crafted design system accelerates development, ensures consistency, improves accessibility, and scales with your organization.</p>
    `
  },
  {
    id: 6,
    title: "Mastering Git and GitHub Workflows",
    description: "Level up your version control skills with advanced Git techniques and collaborative GitHub workflows.",
    tags: ["Git", "Development", "Tutorial"],
    authorName: "Rachel Foster",
    authorAvatar: "https://i.pravatar.cc/150?img=16",
    date: "2026-02-01",
    readTime: "9 min read",
    likes: 445,
    seed: "gitworkflows",
    contentHTML: `
      <h2>Version Control Essentials</h2>
      <p>Git is the backbone of modern software development. Mastering it will make you a more effective developer and collaborator.</p>
      
      <h3>Essential Commands</h3>
      <pre><code># Create a new branch
git checkout -b feature/new-feature

# Stage and commit changes
git add .
git commit -m "Add new feature"

# Push to remote
git push origin feature/new-feature</code></pre>
      
      <h3>Branching Strategies</h3>
      <p>Use meaningful branch names and follow a consistent pattern:</p>
      <ul>
        <li><code>main</code> - Production-ready code</li>
        <li><code>develop</code> - Integration branch</li>
        <li><code>feature/*</code> - New features</li>
        <li><code>bugfix/*</code> - Bug fixes</li>
        <li><code>hotfix/*</code> - Emergency fixes</li>
      </ul>
      
      <h3>Pull Requests</h3>
      <p>Write clear PR descriptions that explain:</p>
      <ul>
        <li>What changed and why</li>
        <li>How to test the changes</li>
        <li>Any breaking changes</li>
        <li>Screenshots for UI changes</li>
      </ul>
      
      <h2>Pro Tips</h2>
      <blockquote>
        Commit early, commit often. Small, focused commits make code review easier and history clearer.
      </blockquote>
    `
  },
  {
    id: 7,
    title: "Web Performance Optimization Guide",
    description: "Boost your website's speed and performance with these proven techniques and optimization strategies.",
    tags: ["Performance", "Web Dev", "Optimization"],
    authorName: "James Park",
    authorAvatar: "https://i.pravatar.cc/150?img=14",
    date: "2026-01-30",
    readTime: "11 min read",
    likes: 589,
    seed: "webperf",
    contentHTML: `
      <h2>Why Performance Matters</h2>
      <p>Fast websites lead to better user experience, higher conversion rates, and improved SEO rankings. Every millisecond counts.</p>
      
      <h3>Core Web Vitals</h3>
      <p>Focus on Google's Core Web Vitals:</p>
      <ul>
        <li><strong>LCP (Largest Contentful Paint)</strong> - Loading performance</li>
        <li><strong>FID (First Input Delay)</strong> - Interactivity</li>
        <li><strong>CLS (Cumulative Layout Shift)</strong> - Visual stability</li>
      </ul>
      
      <h3>Optimization Techniques</h3>
      <p><strong>1. Optimize Images</strong></p>
      <pre><code><!-- Use modern formats -->
&lt;picture&gt;
  &lt;source srcset="image.webp" type="image/webp"&gt;
  &lt;img src="image.jpg" alt="Description"&gt;
&lt;/picture&gt;</code></pre>
      
      <p><strong>2. Lazy Loading</strong></p>
      <pre><code>&lt;img src="image.jpg" loading="lazy" alt="Description"&gt;</code></pre>
      
      <p><strong>3. Code Splitting</strong></p>
      <p>Load only what's needed, when it's needed. Defer non-critical JavaScript.</p>
      
      <h3>Caching Strategies</h3>
      <p>Implement proper caching headers to reduce server load and improve load times for returning visitors.</p>
      
      <h2>Measuring Performance</h2>
      <p>Use tools like Lighthouse, WebPageTest, and Chrome DevTools to identify bottlenecks and track improvements.</p>
    `
  },
  {
    id: 8,
    title: "Accessibility in Modern Web Design",
    description: "Build inclusive websites that work for everyone, regardless of their abilities or the devices they use.",
    tags: ["Accessibility", "Design", "Web Dev"],
    authorName: "Sofia Martinez",
    authorAvatar: "https://i.pravatar.cc/150?img=10",
    date: "2026-01-28",
    readTime: "8 min read",
    likes: 432,
    seed: "a11y",
    contentHTML: `
      <h2>Accessibility is Essential</h2>
      <p>Building accessible websites isn't just the right thing to do—it's also required by law in many jurisdictions and improves the experience for all users.</p>
      
      <h3>Semantic HTML</h3>
      <p>Use the right elements for the job:</p>
      <pre><code>&lt;header&gt;
  &lt;nav&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;article&gt;
    &lt;h1&gt;Article Title&lt;/h1&gt;
  &lt;/article&gt;
&lt;/main&gt;</code></pre>
      
      <h3>ARIA Labels</h3>
      <p>When semantic HTML isn't enough, use ARIA attributes:</p>
      <pre><code>&lt;button aria-label="Close dialog"&gt;
  &lt;i class="icon-close"&gt;&lt;/i&gt;
&lt;/button&gt;</code></pre>
      
      <h3>Keyboard Navigation</h3>
      <p>Ensure all interactive elements are keyboard accessible. Test your site using only the Tab, Enter, and Escape keys.</p>
      
      <h3>Color Contrast</h3>
      <p>Maintain a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. Use tools like the WebAIM Contrast Checker.</p>
      
      <h2>Testing</h2>
      <ul>
        <li>Use screen readers (NVDA, JAWS, VoiceOver)</li>
        <li>Run automated audits with axe or Lighthouse</li>
        <li>Test with keyboard only</li>
        <li>Involve users with disabilities in testing</li>
      </ul>
    `
  },
  {
    id: 9,
    title: "State Management in Vanilla JavaScript",
    description: "Learn how to manage application state effectively without relying on frameworks or libraries.",
    tags: ["JavaScript", "Architecture", "Tutorial"],
    authorName: "Kevin O'Brien",
    authorAvatar: "https://i.pravatar.cc/150?img=13",
    date: "2026-01-25",
    readTime: "10 min read",
    likes: 512,
    seed: "statemgmt",
    contentHTML: `
      <h2>Understanding State</h2>
      <p>State is the data that drives your application's UI. Managing it effectively is crucial for building maintainable applications.</p>
      
      <h3>Simple State Object</h3>
      <pre><code>const state = {
  user: null,
  posts: [],
  isLoading: false
};

function setState(newState) {
  Object.assign(state, newState);
  render();
}</code></pre>
      
      <h3>Observer Pattern</h3>
      <p>Implement a simple pub/sub system:</p>
      <pre><code>class Store {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }
  
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }
  
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach(listener => listener(this.state));
  }
  
  getState() {
    return this.state;
  }
}</code></pre>
      
      <h3>Usage</h3>
      <pre><code>const store = new Store({ count: 0 });

store.subscribe(state => {
  document.getElementById('count').textContent = state.count;
});

function increment() {
  const { count } = store.getState();
  store.setState({ count: count + 1 });
}</code></pre>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Keep state minimal and normalized</li>
        <li>Avoid deeply nested state</li>
        <li>Make state updates immutable</li>
        <li>Separate state logic from UI rendering</li>
      </ul>
    `
  },
  {
    id: 10,
    title: "CSS Grid: The Ultimate Layout Tool",
    description: "Unlock the full potential of CSS Grid to create complex, responsive layouts with ease.",
    tags: ["CSS", "Grid", "Layout"],
    authorName: "Nina Patel",
    authorAvatar: "https://i.pravatar.cc/150?img=20",
    date: "2026-01-22",
    readTime: "9 min read",
    likes: 467,
    seed: "cssgrid",
    contentHTML: `
      <h2>CSS Grid Basics</h2>
      <p>CSS Grid is a two-dimensional layout system that changed the game for web layouts. It's powerful, flexible, and surprisingly easy to learn.</p>
      
      <h3>Creating a Grid</h3>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}</code></pre>
      
      <h3>Grid Areas</h3>
      <p>Create named areas for a semantic layout:</p>
      <pre><code>.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 250px 1fr;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }</code></pre>
      
      <h3>Responsive Grids</h3>
      <p>Use <code>auto-fit</code> and <code>minmax</code> for responsive layouts without media queries:</p>
      <pre><code>.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}</code></pre>
      
      <h3>Alignment</h3>
      <p>Grid provides powerful alignment control:</p>
      <ul>
        <li><code>justify-items</code> - Horizontal alignment of items</li>
        <li><code>align-items</code> - Vertical alignment of items</li>
        <li><code>justify-content</code> - Horizontal alignment of grid</li>
        <li><code>align-content</code> - Vertical alignment of grid</li>
      </ul>
      
      <h2>When to Use Grid vs Flexbox</h2>
      <p>Use Grid for two-dimensional layouts, Flexbox for one-dimensional. Often, you'll use both together!</p>
    `
  },
  {
    id: 11,
    title: "API Design Best Practices",
    description: "Design clean, intuitive REST APIs that developers will love to use and maintain.",
    tags: ["API", "Backend", "Development"],
    authorName: "Marcus Lee",
    authorAvatar: "https://i.pravatar.cc/150?img=15",
    date: "2026-01-20",
    readTime: "11 min read",
    likes: 623,
    seed: "apidesign",
    contentHTML: `
      <h2>RESTful API Principles</h2>
      <p>A well-designed API is intuitive, consistent, and makes developers productive. Follow these principles to create APIs people love.</p>
      
      <h3>Resource Naming</h3>
      <p>Use nouns for resources, not verbs:</p>
      <pre><code>// Good
GET /api/users
GET /api/users/123
POST /api/users

// Bad
GET /api/getUsers
POST /api/createUser</code></pre>
      
      <h3>HTTP Methods</h3>
      <ul>
        <li><strong>GET</strong> - Retrieve resources</li>
        <li><strong>POST</strong> - Create new resources</li>
        <li><strong>PUT/PATCH</strong> - Update resources</li>
        <li><strong>DELETE</strong> - Delete resources</li>
      </ul>
      
      <h3>Status Codes</h3>
      <p>Use appropriate HTTP status codes:</p>
      <ul>
        <li><code>200 OK</code> - Success</li>
        <li><code>201 Created</code> - Resource created</li>
        <li><code>400 Bad Request</code> - Invalid input</li>
        <li><code>401 Unauthorized</code> - Authentication required</li>
        <li><code>404 Not Found</code> - Resource doesn't exist</li>
        <li><code>500 Internal Server Error</code> - Server error</li>
      </ul>
      
      <h3>Versioning</h3>
      <p>Plan for the future with API versioning:</p>
      <pre><code>GET /api/v1/users
GET /api/v2/users</code></pre>
      
      <h3>Error Responses</h3>
      <p>Provide helpful error messages:</p>
      <pre><code>{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email address is required",
    "field": "email"
  }
}</code></pre>
      
      <h2>Documentation</h2>
      <p>Document your API thoroughly. Use tools like Swagger/OpenAPI for interactive documentation.</p>
    `
  },
  {
    id: 12,
    title: "Dark Mode Implementation Guide",
    description: "Implement a smooth, user-friendly dark mode that respects system preferences and user choice.",
    tags: ["CSS", "JavaScript", "Design"],
    authorName: "Laura Bennett",
    authorAvatar: "https://i.pravatar.cc/150?img=8",
    date: "2026-01-18",
    readTime: "7 min read",
    likes: 534,
    seed: "darkmode",
    contentHTML: `
      <h2>Why Dark Mode?</h2>
      <p>Dark mode reduces eye strain in low-light conditions, saves battery on OLED screens, and many users simply prefer it.</p>
      
      <h3>CSS Variables Approach</h3>
      <pre><code>:root {
  --bg-primary: #ffffff;
  --text-primary: #000000;
}

[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
}</code></pre>
      
      <h3>JavaScript Toggle</h3>
      <pre><code>function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);</code></pre>
      
      <h3>Respect System Preferences</h3>
      <pre><code>// Check system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');

// Listen for changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('theme')) {
    const newTheme = e.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
  }
});</code></pre>
      
      <h3>Smooth Transitions</h3>
      <pre><code>* {
  transition: background-color 0.3s ease, color 0.3s ease;
}</code></pre>
      
      <h2>Design Tips</h2>
      <ul>
        <li>Use true blacks sparingly—dark grays are easier on the eyes</li>
        <li>Reduce color saturation in dark mode</li>
        <li>Ensure sufficient contrast for accessibility</li>
        <li>Test with images and media</li>
      </ul>
    `
  },
  {
    id: 13,
    title: "Microinteractions: Small Details, Big Impact",
    description: "Learn how tiny animations and feedback mechanisms can dramatically improve user experience.",
    tags: ["Design", "UX", "Animation"],
    authorName: "Chris Anderson",
    authorAvatar: "https://i.pravatar.cc/150?img=11",
    date: "2026-01-15",
    readTime: "6 min read",
    likes: 389,
    seed: "microinteract",
    contentHTML: `
      <h2>What Are Microinteractions?</h2>
      <p>Microinteractions are small, functional animations that guide users, provide feedback, and add delight to everyday interactions.</p>
      
      <h3>Button Hover Effects</h3>
      <pre><code>.button {
  transition: all 0.2s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.button:active {
  transform: translateY(0);
}</code></pre>
      
      <h3>Loading States</h3>
      <p>Show users that something is happening:</p>
      <pre><code>@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  animation: spin 1s linear infinite;
}</code></pre>
      
      <h3>Toast Notifications</h3>
      <p>Provide feedback for user actions with slide-in toasts:</p>
      <pre><code>@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.toast {
  animation: slideIn 0.3s ease-out;
}</code></pre>
      
      <h2>Principles</h2>
      <ul>
        <li>Keep it subtle—don't distract from content</li>
        <li>Provide purpose—every animation should communicate something</li>
        <li>Be consistent—use similar patterns throughout</li>
        <li>Respect reduced motion preferences</li>
      </ul>
      
      <h3>Accessibility Consideration</h3>
      <pre><code>@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}</code></pre>
    `
  },
  {
    id: 14,
    title: "TypeScript for JavaScript Developers",
    description: "Gradually adopt TypeScript in your projects to catch bugs early and improve code quality.",
    tags: ["TypeScript", "JavaScript", "Tutorial"],
    authorName: "Jennifer Wu",
    authorAvatar: "https://i.pravatar.cc/150?img=18",
    date: "2026-01-12",
    readTime: "10 min read",
    likes: 701,
    seed: "typescript",
    contentHTML: `
      <h2>Why TypeScript?</h2>
      <p>TypeScript adds static typing to JavaScript, catching errors at compile time rather than runtime. It improves code quality, makes refactoring safer, and provides better IDE support.</p>
      
      <h3>Basic Types</h3>
      <pre><code>// Primitives
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array&lt;string&gt; = ["Alice", "Bob"];

// Objects
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}

const user: User = {
  id: 1,
  name: "John Doe"
};</code></pre>
      
      <h3>Functions</h3>
      <pre><code>function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

// Arrow function
const add = (a: number, b: number): number => a + b;

// Optional parameters
function buildName(firstName: string, lastName?: string): string {
  return lastName ? \`\${firstName} \${lastName}\` : firstName;
}</code></pre>
      
      <h3>Generics</h3>
      <pre><code>function identity&lt;T&gt;(arg: T): T {
  return arg;
}

let output = identity&lt;string&gt;("hello");

// Generic interfaces
interface Response&lt;T&gt; {
  data: T;
  status: number;
  message: string;
}</code></pre>
      
      <h3>Union Types</h3>
      <pre><code>type Status = "pending" | "approved" | "rejected";

function setStatus(status: Status): void {
  // TypeScript ensures only valid status values
}</code></pre>
      
      <h2>Migration Strategy</h2>
      <ol>
        <li>Rename .js files to .ts gradually</li>
        <li>Start with any types, then add proper types incrementally</li>
        <li>Enable strict mode when ready</li>
        <li>Use TypeScript for all new code</li>
      </ol>
    `
  }
];

// ========================================
// State Management
// ========================================

const state = {
  currentTheme: localStorage.getItem('theme') || 'dark',
  likedPosts: JSON.parse(localStorage.getItem('likedPosts') || '[]'),
  bookmarkedPosts: JSON.parse(localStorage.getItem('bookmarkedPosts') || '[]'),
  filters: {
    search: '',
    tags: [],
    sort: 'newest'
  },
  viewMode: 'grid'
};

// ========================================
// Theme Management
// ========================================

function initTheme() {
  document.documentElement.setAttribute('data-theme', state.currentTheme);
  updateThemeIcon();
}

function toggleTheme() {
  state.currentTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.currentTheme);
  localStorage.setItem('theme', state.currentTheme);
  updateThemeIcon();
  showToast(`Switched to ${state.currentTheme} mode`);
}

function updateThemeIcon() {
  const icon = document.querySelector('.theme-toggle i');
  if (icon) {
    icon.className = state.currentTheme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
  }
}

// ========================================
// Blog Rendering
// ========================================

function renderBlogs(containerId, blogsArray, showSkeleton = false) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (showSkeleton) {
    container.innerHTML = Array(6).fill(0).map(() => `
      <div class="col">
        <div class="skeleton skeleton-card"></div>
      </div>
    `).join('');

    setTimeout(() => {
      renderBlogsActual(container, blogsArray);
    }, 1000);
  } else {
    renderBlogsActual(container, blogsArray);
  }
}

function renderBlogsActual(container, blogsArray) {
  container.innerHTML = blogsArray.map(blog => `
    <div class="col fade-in">
      <div class="blog-card">
        <div class="blog-card-image">
          <img src="https://picsum.photos/seed/${blog.seed}/800/500" alt="${blog.title}">
          <div class="blog-card-overlay"></div>
        </div>
        <div class="blog-card-body">
          <div class="blog-card-tags">
            ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <h3 class="blog-card-title">${blog.title}</h3>
          <p class="blog-card-description">${blog.description}</p>
          <div class="blog-card-footer">
            <div class="blog-card-author">
              <img src="${blog.authorAvatar}" alt="${blog.authorName}" class="author-avatar">
              <div class="author-info">
                <div class="author-name">${blog.authorName}</div>
                <div class="blog-meta">${blog.readTime} • ${formatDate(blog.date)}</div>
              </div>
            </div>
            <div class="blog-card-actions">
              <button class="action-btn ${state.likedPosts.includes(blog.id) ? 'active' : ''}" 
                      onclick="toggleLike(${blog.id})"
                      aria-label="Like post">
                <i class="bi bi-heart${state.likedPosts.includes(blog.id) ? '-fill' : ''}"></i>
              </button>
              <button class="action-btn ${state.bookmarkedPosts.includes(blog.id) ? 'active' : ''}" 
                      onclick="toggleBookmark(${blog.id})"
                      aria-label="Bookmark post">
                <i class="bi bi-bookmark${state.bookmarkedPosts.includes(blog.id) ? '-fill' : ''}"></i>
              </button>
              <a href="blog.html?id=${blog.id}" class="action-btn" aria-label="Read post">
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Trigger fade-in animations
  setTimeout(() => {
    document.querySelectorAll('.fade-in').forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, index * 50);
    });
  }, 10);
}

function renderFeatured() {
  const featuredBlogs = blogs.slice(0, 4);
  renderBlogs('featured-blogs', featuredBlogs);
}

// ========================================
// Filtering & Searching
// ========================================

function applyFilters() {
  let filteredBlogs = [...blogs];

  // Search filter
  if (state.filters.search) {
    const search = state.filters.search.toLowerCase();
    filteredBlogs = filteredBlogs.filter(blog =>
      blog.title.toLowerCase().includes(search) ||
      blog.description.toLowerCase().includes(search) ||
      blog.tags.some(tag => tag.toLowerCase().includes(search))
    );
  }

  // Tag filter
  if (state.filters.tags.length > 0) {
    filteredBlogs = filteredBlogs.filter(blog =>
      state.filters.tags.some(tag => blog.tags.includes(tag))
    );
  }

  // Sort
  switch (state.filters.sort) {
    case 'newest':
      filteredBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    case 'oldest':
      filteredBlogs.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case 'popular':
      filteredBlogs.sort((a, b) => b.likes - a.likes);
      break;
  }

  renderBlogs('blog-results', filteredBlogs);

  // Update results count
  const resultsCount = document.getElementById('results-count');
  if (resultsCount) {
    resultsCount.textContent = `${filteredBlogs.length} ${filteredBlogs.length === 1 ? 'post' : 'posts'} found`;
  }
}

function setupSearch() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.filters.search = e.target.value;
      applyFilters();
    });
  }
}

function setupTagFilters() {
  const allTags = [...new Set(blogs.flatMap(blog => blog.tags))];
  const tagFiltersContainer = document.getElementById('tag-filters');

  if (tagFiltersContainer) {
    tagFiltersContainer.innerHTML = allTags.map(tag => `
      <button class="tag-filter" onclick="toggleTag('${tag}')">${tag}</button>
    `).join('');
  }
}

function toggleTag(tag) {
  const index = state.filters.tags.indexOf(tag);
  if (index > -1) {
    state.filters.tags.splice(index, 1);
  } else {
    state.filters.tags.push(tag);
  }

  // Update UI
  document.querySelectorAll('.tag-filter').forEach(btn => {
    if (btn.textContent === tag) {
      btn.classList.toggle('active');
    }
  });

  applyFilters();
}

function setupSortSelect() {
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.filters.sort = e.target.value;
      applyFilters();
    });
  }
}

// ========================================
// Like & Bookmark
// ========================================

function toggleLike(blogId) {
  const index = state.likedPosts.indexOf(blogId);
  if (index > -1) {
    state.likedPosts.splice(index, 1);
    showToast('Removed from liked posts');
  } else {
    state.likedPosts.push(blogId);
    showToast('Added to liked posts', 'success');
  }

  localStorage.setItem('likedPosts', JSON.stringify(state.likedPosts));

  // Update button UI
  const buttons = document.querySelectorAll(`button[onclick="toggleLike(${blogId})"]`);
  buttons.forEach(btn => {
    const icon = btn.querySelector('i');
    btn.classList.toggle('active');
    icon.className = state.likedPosts.includes(blogId) ? 'bi bi-heart-fill' : 'bi bi-heart';
  });
}

function toggleBookmark(blogId) {
  const index = state.bookmarkedPosts.indexOf(blogId);
  if (index > -1) {
    state.bookmarkedPosts.splice(index, 1);
    showToast('Removed from bookmarks');
  } else {
    state.bookmarkedPosts.push(blogId);
    showToast('Added to bookmarks', 'success');
  }

  localStorage.setItem('bookmarkedPosts', JSON.stringify(state.bookmarkedPosts));

  // Update button UI
  const buttons = document.querySelectorAll(`button[onclick="toggleBookmark(${blogId})"]`);
  buttons.forEach(btn => {
    const icon = btn.querySelector('i');
    btn.classList.toggle('active');
    icon.className = state.bookmarkedPosts.includes(blogId) ? 'bi bi-bookmark-fill' : 'bi bi-bookmark';
  });
}

// ========================================
// Blog Detail Page
// ========================================

function loadBlogDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = parseInt(urlParams.get('id'));
  const blog = blogs.find(b => b.id === blogId);

  if (!blog) {
    document.getElementById('blog-detail-container').innerHTML = `
      <div class="text-center py-5">
        <h2>Blog post not found</h2>
        <a href="explore.html" class="btn-primary mt-3">Browse all posts</a>
      </div>
    `;
    return;
  }

  // Update page title
  document.title = `${blog.title} | MONOTEXT`;

  // Render blog content
  const container = document.getElementById('blog-detail-container');
  container.innerHTML = `
    <div class="blog-detail-header">
      <div class="blog-card-tags mb-3">
        ${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <h1 class="blog-detail-title">${blog.title}</h1>
      <div class="blog-detail-meta">
        <div class="blog-card-author">
          <img src="${blog.authorAvatar}" alt="${blog.authorName}" class="author-avatar">
          <div class="author-info">
            <div class="author-name">${blog.authorName}</div>
            <div class="blog-meta">${formatDate(blog.date)} • ${blog.readTime}</div>
          </div>
        </div>
        <div class="blog-card-actions">
          <button class="action-btn ${state.likedPosts.includes(blog.id) ? 'active' : ''}" 
                  onclick="toggleLike(${blog.id})">
            <i class="bi bi-heart${state.likedPosts.includes(blog.id) ? '-fill' : ''}"></i>
          </button>
          <button class="action-btn ${state.bookmarkedPosts.includes(blog.id) ? 'active' : ''}" 
                  onclick="toggleBookmark(${blog.id})">
            <i class="bi bi-bookmark${state.bookmarkedPosts.includes(blog.id) ? '-fill' : ''}"></i>
          </button>
        </div>
      </div>
    </div>
    
    <img src="https://picsum.photos/seed/${blog.seed}/1200/600" 
         alt="${blog.title}" 
         class="img-fluid rounded-4 mb-4">
    
    <div class="blog-detail-content">
      ${blog.contentHTML}
    </div>
    
    <div class="author-card">
      <img src="${blog.authorAvatar}" alt="${blog.authorName}" class="author-card-avatar">
      <div class="author-card-info">
        <h4>${blog.authorName}</h4>
        <p class="author-card-bio">Passionate developer and technical writer sharing insights about modern web development.</p>
        <div class="author-social">
          <a href="https://x.com/Harshpa01" class="social-link"><i class="bi bi-twitter"></i></a>
          <a href="https://github.com/Harsh-pa-thak/" class="social-link"><i class="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/harsh-pathak-b7b0b0b0/" class="social-link"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>
    
    <div class="share-buttons">
      <button class="share-btn" onclick="sharePost('twitter')">
        <i class="bi bi-twitter"></i> Share on Twitter
      </button>
      <button class="share-btn" onclick="sharePost('linkedin')">
        <i class="bi bi-linkedin"></i> Share on LinkedIn
      </button>
      <button class="share-btn" onclick="copyLink()">
        <i class="bi bi-clipboard"></i> Copy Link
      </button>
    </div>
    
    <div class="mt-5">
      <h3 class="mb-4">Related Posts</h3>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" id="related-posts"></div>
    </div>
  `;

  // Generate TOC
  generateTOC();

  // Setup reading progress
  setupReadingProgress();

  // Render related posts
  const relatedPosts = blogs
    .filter(b => b.id !== blog.id && b.tags.some(tag => blog.tags.includes(tag)))
    .slice(0, 3);
  renderBlogs('related-posts', relatedPosts);
}

function generateTOC() {
  const content = document.querySelector('.blog-detail-content');
  const tocContainer = document.getElementById('toc-list');

  if (!content || !tocContainer) return;

  const headings = content.querySelectorAll('h2, h3');

  if (headings.length === 0) {
    document.querySelector('.toc').style.display = 'none';
    return;
  }

  const tocHTML = Array.from(headings).map((heading, index) => {
    const id = `heading-${index}`;
    heading.id = id;
    const level = heading.tagName === 'H2' ? 'toc-item' : 'toc-item toc-item-sub';
    return `<li class="${level}"><a href="#${id}" class="toc-link">${heading.textContent}</a></li>`;
  }).join('');

  tocContainer.innerHTML = tocHTML;

  // Active TOC link on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.toc-link').forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.toc-link[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { rootMargin: '-100px 0px -66%' });

  headings.forEach(heading => observer.observe(heading));
}

function setupReadingProgress() {
  const progressBar = document.querySelector('.reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    progressBar.style.width = `${Math.min(progress, 100)}%`;
  });
}

function sharePost(platform) {
  const url = window.location.href;
  const title = document.querySelector('.blog-detail-title')?.textContent || 'Check out this blog post';

  let shareUrl = '';
  switch (platform) {
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
      break;
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      break;
  }

  if (shareUrl) {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showToast('Link copied to clipboard!', 'success');
  });
}

// ========================================
// Profile Page
// ========================================

function loadProfile() {
  const author = {
    name: "Harsh Pathak",
    avatar: "https://i.pravatar.cc/150?img=1",
    bio: "Full-stack developer passionate about creating beautiful, accessible web experiences. Sharing knowledge through writing and open source.",
    posts: 12,
    likes: 4532,
    followers: 1847
  };

  // Animate counters
  setTimeout(() => {
    animateCounter('posts-count', author.posts);
    animateCounter('likes-count', author.likes);
    animateCounter('followers-count', author.followers);
  }, 300);

  // Render author's posts
  const authorPosts = blogs.filter(blog => blog.authorName === author.name);
  renderBlogs('author-posts', authorPosts);
}

function animateCounter(id, target) {
  const element = document.getElementById(id);
  if (!element) return;

  const duration = 1500;
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }
  }, 16);
}

// ========================================
// Toast Notifications
// ========================================

function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toast-container') || createToastContainer();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="bi bi-check-circle-fill toast-icon"></i>
    <span class="toast-message">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">
      <i class="bi bi-x"></i>
    </button>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s ease-out reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function createToastContainer() {
  const container = document.createElement('div');
  container.id = 'toast-container';
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
}

// ========================================
// Scroll Reveal Animations
// ========================================

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// ========================================
// Utility Functions
// ========================================

function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function getAllTags() {
  return [...new Set(blogs.flatMap(blog => blog.tags))];
}

// ========================================
// Page Initialization
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme
  initTheme();

  // Initialize scroll reveal
  initScrollReveal();

  // Set active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
