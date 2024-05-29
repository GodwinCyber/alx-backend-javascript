## 0x00. ES6 Basics

# JavaScript ES6

<title>Project: 0x00. ES6 Basics </title>

# Concepts
<p><i>For this project, we expect you to look at these concepts:</i></p>
<p>Reading:</p>

<ul>
<li><a href="/rltoken/d0GP590l7m32KsLrm_L83A" title="Modern JS" target="_blank">Modern JS</a></li>
<li><a href="/rltoken/8__nCEF90j673yWewdKe4A" title="JavaScript Fundamentals" target="_blank">JavaScript Fundamentals</a></li>
<li><a href="/rltoken/Z3LGQrtEuxxFEUw8E2LaUA" title="Module patterns" target="_blank">Module patterns</a></li>
<li><a href="/rltoken/fAnI7g4Vy3mShm9J3fkZig" title="var, let and const" target="_blank">var, let and const</a></li>
<li><a href="/rltoken/TiU5VUjQ4KD0oA4OCs3Zlg" title="Javascript Tutorial" target="_blank">Javascript Tutorial</a></li>
<li><a href="/rltoken/X_YgjEN6_0d85_neoa1kTw" title="JavaScript object basics" target="_blank">JavaScript object basics</a></li>
<li><a href="/rltoken/4LU54FWEMd-0YK5K8N8Xrw" title="Object-oriented JavaScript" target="_blank">Object-oriented JavaScript</a> <strong>read all examples!</strong></li>
<li><a href="/rltoken/M-t1bDqKDRCW6fmfxUOFmQ" title="Object prototypes" target="_blank">Object prototypes</a></li>
<li><a href="/rltoken/XPe-Uhv1TCNzfK4YokWtqw" title="Inheritance in JavaScript" target="_blank">Inheritance in JavaScript</a></li>
<li><a href="/rltoken/PJuWX_vg8gV8GZ857IVJ0w" title="Closures" target="_blank">Closures</a></li>
<li><a href="/rltoken/p-2tz1dmmOLuCPULMZ3wYg" title="this/self" target="_blank">this/self</a></li>
</ul>

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="/rltoken/NW1dFLFExQ12_hD8yvkV3A" title="ECMAScript 6 - ECMAScript 2015" target="_blank">ECMAScript 6 - ECMAScript 2015</a></li>
<li><a href="/rltoken/sroRUsUvOZV28V99MHDenw" title="Statements and declarations" target="_blank">Statements and declarations</a></li>
<li><a href="/rltoken/N2WLylppCtkkX3YFFtyUHw" title="Arrow functions" target="_blank">Arrow functions</a></li>
<li><a href="/rltoken/kbw9gMO6sdeOKAY23SYVgA" title="Default parameters" target="_blank">Default parameters</a></li>
<li><a href="/rltoken/erZfCvacuGVk9z1CQlJvYQ" title="Rest parameter" target="_blank">Rest parameter</a></li>
<li><a href="/rltoken/Zuj9PCdUdRu1-imi2DS87w" title="Javascript ES6 — Iterables and Iterators" target="_blank">Javascript ES6 — Iterables and Iterators</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/KDGvEqVWIsvOQfCcwDNHNg" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>What ES6 is</li>
<li>New features introduced in ES6</li>
<li>The difference between a constant and a variable</li>
<li>Block-scoped variables</li>
<li>Arrow functions and function parameters default to them</li>
<li>Rest and spread function parameters</li>
<li>String templating in ES6</li>
<li>Object creation and their properties in ES6</li>
<li>Iterators and for-of loops</li>
</ul>

<h2>Requirements</h2>

<h3>General</h3>

<ul>
<li>All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x</li>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should use the <code>js</code> extension</li>
<li>Your code will be tested using the <a href="/rltoken/ECZpKsJ3fm1qRA7lDyhd_Q" title="Jest Testing Framework" target="_blank">Jest Testing Framework</a></li>
<li>Your code will be analyzed using the linter <a href="/rltoken/Ttd9w5jERwTErJW3DDbVoQ" title="ESLint" target="_blank">ESLint</a> along with specific rules that we&rsquo;ll provide</li>
<li>All of your functions must be exported</li>
</ul>

<h2>Setup</h2>

<h3>Install NodeJS 12.11.x</h3>

<p>(in your home directory): </p>

<pre><code>curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
</code></pre>

<pre><code>$ nodejs -v
v12.11.1
$ npm -v
6.11.3
</code></pre>

<h3>Install Jest, Babel, and ESLint</h3>

<p>in your project directory, install Jest, Babel and ESList by using the supplied <code>package.json</code> and run <code>npm install</code>.</p>

<h2>Configuration files</h2>

<p>Add the files below to your project directory</p>

<h3><code>package.json</code></h3>

<details>
<summary>Click here to show/hide file contents</summary>
<pre>
<code>
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
</code>
</pre>
</details>

<h3><code>babel.config.js</code></h3>

<details>
<summary>Click here to show/hide file contents</summary>
<pre>
<code>
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
</code>
</pre>
</details>
<h3><code>.eslintrc.js</code></h3>

<details>
<summary>Click here to show/hide file contents</summary>
<pre>
<code>
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
</code>
</pre>
</details>

<h3>Finally&hellip;</h3>

<p>Don&rsquo;t forget to run <code>npm install</code> from the terminal of your project folder to install all necessary project dependencies.</p>
