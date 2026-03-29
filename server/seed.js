require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Blog = require('./models/Blog');

const seedBlogs = [
  {
    title: 'Getting Started with Modern Web Development',
    description:
      'Learn the fundamentals of building modern web applications with HTML5, CSS3, and JavaScript. Perfect for beginners looking to start their coding journey.',
    content: `<h2>Introduction to Modern Web Development</h2>
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

<p>Remember, practice is key to becoming a proficient web developer. Start building projects and learn by doing!</p>`,
    author: 'Harsh Pathak',
    tags: ['Web Dev', 'JavaScript', 'Tutorial'],
    seed: 'webdev101',
    readTime: '8 min read',
    likes: 342,
  },
  {
    title: 'The Art of CSS Animations and Transitions',
    description:
      'Master CSS animations to create smooth, performant animations that enhance user experience without sacrificing performance.',
    content: `<h2>Why Animations Matter</h2>
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
<p>For more complex animations, use @keyframes:</p>
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
<p>Always animate properties that don't trigger layout recalculations. Stick to transform and opacity for the best performance.</p>

<blockquote>"Animation is about creating illusions of life. And you can't create it by just making things move."</blockquote>`,
    author: 'Sarah Chen',
    tags: ['CSS', 'Animation', 'Design'],
    seed: 'cssanim',
    readTime: '6 min read',
    likes: 287,
  },
  {
    title: 'JavaScript ES6+: Modern Features You Should Know',
    description:
      'Explore the powerful features introduced in ES6 and beyond, including arrow functions, destructuring, and async/await.',
    content: `<h2>Modern JavaScript Features</h2>
<p>ES6 (ECMAScript 2015) revolutionized JavaScript, introducing features that make code cleaner, more expressive, and easier to maintain.</p>

<h3>Arrow Functions</h3>
<p>Arrow functions provide a concise syntax and lexical this binding:</p>
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
<p>These features are just the beginning. Modern JavaScript continues to evolve, bringing new capabilities that make development more enjoyable and productive.</p>`,
    author: 'Anubhav',
    tags: ['JavaScript', 'ES6', 'Tutorial'],
    seed: 'es6features',
    readTime: '10 min read',
    likes: 521,
  },
  {
    title: 'Responsive Design Best Practices in 2026',
    description:
      'Learn how to create websites that look stunning on any device using modern CSS techniques and mobile-first approaches.',
    content: `<h2>The Mobile-First Era</h2>
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
<p>The new kid on the block—style components based on their container size:</p>
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
</ul>`,
    author: 'Emma Rodriguez',
    tags: ['CSS', 'Responsive', 'Design'],
    seed: 'responsive2026',
    readTime: '7 min read',
    likes: 398,
  },
  {
    title: 'Building a Design System from Scratch',
    description:
      'Create a scalable, maintainable design system that ensures consistency across your entire application.',
    content: `<h2>What is a Design System?</h2>
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
<p>A well-crafted design system accelerates development, ensures consistency, improves accessibility, and scales with your organization.</p>`,
    author: 'David Kim',
    tags: ['Design', 'CSS', 'Development'],
    seed: 'designsystem',
    readTime: '12 min read',
    likes: 674,
  },
  {
    title: 'Mastering Git and GitHub Workflows',
    description:
      'Level up your version control skills with advanced Git techniques and collaborative GitHub workflows.',
    content: `<h2>Version Control Essentials</h2>
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
<p>Write clear PR descriptions that explain what changed and why, how to test the changes, any breaking changes, and screenshots for UI changes.</p>

<h2>Pro Tips</h2>
<blockquote>Commit early, commit often. Small, focused commits make code review easier and history clearer.</blockquote>`,
    author: 'Rachel Foster',
    tags: ['Git', 'Development', 'Tutorial'],
    seed: 'gitworkflows',
    readTime: '9 min read',
    likes: 445,
  },
  {
    title: 'Web Performance Optimization Guide',
    description:
      'Boost your website speed and performance with these proven techniques and optimization strategies.',
    content: `<h2>Why Performance Matters</h2>
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
<pre><code>&lt;picture&gt;
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
<p>Use tools like Lighthouse, WebPageTest, and Chrome DevTools to identify bottlenecks and track improvements.</p>`,
    author: 'James Park',
    tags: ['Performance', 'Web Dev', 'Optimization'],
    seed: 'webperf',
    readTime: '11 min read',
    likes: 589,
  },
  {
    title: 'Accessibility in Modern Web Design',
    description:
      'Build inclusive websites that work for everyone, regardless of their abilities or the devices they use.',
    content: `<h2>Accessibility is Essential</h2>
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
<p>Maintain a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.</p>

<h2>Testing</h2>
<ul>
  <li>Use screen readers (NVDA, JAWS, VoiceOver)</li>
  <li>Run automated audits with axe or Lighthouse</li>
  <li>Test with keyboard only</li>
  <li>Involve users with disabilities in testing</li>
</ul>`,
    author: 'Sofia Martinez',
    tags: ['Accessibility', 'Design', 'Web Dev'],
    seed: 'a11y',
    readTime: '8 min read',
    likes: 432,
  },
  {
    title: 'State Management in Vanilla JavaScript',
    description:
      'Learn how to manage application state effectively without relying on frameworks or libraries.',
    content: `<h2>Understanding State</h2>
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
}</code></pre>

<h2>Best Practices</h2>
<ul>
  <li>Keep state minimal and normalized</li>
  <li>Avoid deeply nested state</li>
  <li>Make state updates immutable</li>
  <li>Separate state logic from UI rendering</li>
</ul>`,
    author: "Kevin O'Brien",
    tags: ['JavaScript', 'Architecture', 'Tutorial'],
    seed: 'statemgmt',
    readTime: '10 min read',
    likes: 512,
  },
  {
    title: 'CSS Grid: The Ultimate Layout Tool',
    description:
      'Unlock the full potential of CSS Grid to create complex, responsive layouts with ease.',
    content: `<h2>CSS Grid Basics</h2>
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
<p>Use auto-fit and minmax for responsive layouts without media queries:</p>
<pre><code>.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}</code></pre>

<h2>When to Use Grid vs Flexbox</h2>
<p>Use Grid for two-dimensional layouts, Flexbox for one-dimensional. Often, you'll use both together!</p>`,
    author: 'Nina Patel',
    tags: ['CSS', 'Grid', 'Layout'],
    seed: 'cssgrid',
    readTime: '9 min read',
    likes: 467,
  },
  {
    title: 'API Design Best Practices',
    description:
      'Design clean, intuitive REST APIs that developers will love to use and maintain.',
    content: `<h2>RESTful API Principles</h2>
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
<ul>
  <li><code>200 OK</code> - Success</li>
  <li><code>201 Created</code> - Resource created</li>
  <li><code>400 Bad Request</code> - Invalid input</li>
  <li><code>404 Not Found</code> - Resource doesn't exist</li>
  <li><code>500 Internal Server Error</code> - Server error</li>
</ul>

<h3>Error Responses</h3>
<p>Provide helpful error messages:</p>
<pre><code>{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email address is required",
    "field": "email"
  }
}</code></pre>`,
    author: 'Marcus Lee',
    tags: ['API', 'Backend', 'Development'],
    seed: 'apidesign',
    readTime: '11 min read',
    likes: 623,
  },
  {
    title: 'Dark Mode Implementation Guide',
    description:
      'Implement a smooth, user-friendly dark mode that respects system preferences and user choice.',
    content: `<h2>Why Dark Mode?</h2>
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
}</code></pre>

<h3>Respect System Preferences</h3>
<pre><code>const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;</code></pre>

<h2>Design Tips</h2>
<ul>
  <li>Use true blacks sparingly—dark grays are easier on the eyes</li>
  <li>Reduce color saturation in dark mode</li>
  <li>Ensure sufficient contrast for accessibility</li>
  <li>Test with images and media</li>
</ul>`,
    author: 'Laura Bennett',
    tags: ['CSS', 'JavaScript', 'Design'],
    seed: 'darkmode',
    readTime: '7 min read',
    likes: 534,
  },
  {
    title: 'Microinteractions: Small Details, Big Impact',
    description:
      'Learn how tiny animations and feedback mechanisms can dramatically improve user experience.',
    content: `<h2>What Are Microinteractions?</h2>
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
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}</code></pre>

<h2>Principles</h2>
<ul>
  <li>Keep it subtle—don't distract from content</li>
  <li>Provide purpose—every animation should communicate something</li>
  <li>Be consistent—use similar patterns throughout</li>
  <li>Respect reduced motion preferences</li>
</ul>`,
    author: 'Chris Anderson',
    tags: ['Design', 'UX', 'Animation'],
    seed: 'microinteract',
    readTime: '6 min read',
    likes: 389,
  },
  {
    title: 'TypeScript for JavaScript Developers',
    description:
      'Gradually adopt TypeScript in your projects to catch bugs early and improve code quality.',
    content: `<h2>Why TypeScript?</h2>
<p>TypeScript adds static typing to JavaScript, catching errors at compile time rather than runtime. It improves code quality, makes refactoring safer, and provides better IDE support.</p>

<h3>Basic Types</h3>
<pre><code>// Primitives
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];

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

// Optional parameters
function buildName(firstName: string, lastName?: string): string {
  return lastName ? \`\${firstName} \${lastName}\` : firstName;
}</code></pre>

<h3>Generics</h3>
<pre><code>function identity&lt;T&gt;(arg: T): T {
  return arg;
}

// Generic interfaces
interface Response&lt;T&gt; {
  data: T;
  status: number;
  message: string;
}</code></pre>

<h2>Migration Strategy</h2>
<ol>
  <li>Rename .js files to .ts gradually</li>
  <li>Start with any types, then add proper types incrementally</li>
  <li>Enable strict mode when ready</li>
  <li>Use TypeScript for all new code</li>
</ol>`,
    author: 'Jennifer Wu',
    tags: ['TypeScript', 'JavaScript', 'Tutorial'],
    seed: 'typescript',
    readTime: '10 min read',
    likes: 701,
  },
];

const seedDB = async () => {
  try {
    await connectDB();

    // Check if blogs already exist
    const count = await Blog.countDocuments();
    if (count > 0) {
      console.log(`ℹ️  Database already has ${count} blogs. Skipping seed.`);
      console.log('   To force re-seed, drop the "blogs" collection first.');
      process.exit(0);
    }

    await Blog.insertMany(seedBlogs);
    console.log(`✅ Successfully seeded ${seedBlogs.length} blog posts!`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error.message);
    process.exit(1);
  }
};

seedDB();
