<p><strong>0x01. ES6 Promises</strong><p>
# JavaScript  ES6
<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="/rltoken/j_0FTFbkTg42JMcAbNPOVQ" title="Promise" target="_blank">Promise</a></li>
<li><a href="/rltoken/2Q2LzNFokcUwpA2u3FKG6Q" title="JavaScript Promise: An introduction" target="_blank">JavaScript Promise: An introduction</a></li>
<li><a href="/rltoken/UXb3S2PMBe-SLJ55isMcow" title="Await" target="_blank">Await</a></li>
<li><a href="/rltoken/_K0C7pgEjwaIzU9RpwCb8g" title="Async" target="_blank">Async</a></li>
<li><a href="/rltoken/UTjDgvKk5l892Xslh0vqcQ" title="Throw / Try" target="_blank">Throw / Try</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/Z4xW7_BFaRcrHxfDySjKuQ" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>Promises (how, why, and what)</li>
<li>How to use the <code>then</code>, <code>resolve</code>, <code>catch</code> methods</li>
<li>How to use every method of the Promise object</li>
<li>Throw / Try</li>
<li>The await operator</li>
<li>How to use an <code>async</code> function</li>
</ul>

<h2>Requirements</h2>

<ul>
<li>All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x</li>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should use the <code>js</code> extension</li>
<li>Your code will be tested using <code>Jest</code> and the command <code>npm run test</code></li>
<li>Your code will be verified against lint using ESLint</li>
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

<h2>Configuration  Files</h2>

<p>Add the files below to your project directory</p>

<h3><code>package.json</code></h3>

<details>
<summary>
Click to show/hide file contents</summary>
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
<summary>
Click to show/hide file contents
</summary>
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

<h3><code>utils.js</code></h3>

<p>Use when you get to tasks requiring <code>uploadPhoto</code> and <code>createUser</code>.
<details>
<summary>
Click to show/hide file contents
</summary>
<pre>
<code>
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: &#39;photo-profile-1&#39;,
  });
}</p>

<p>export function createUser() {
  return Promise.resolve({
    firstName: &#39;Guillaume&#39;,
    lastName: &#39;Salva&#39;,
  });
}
</code>
</pre>
</details></p>

<h3><code>.eslintrc.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
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

<h3>and&hellip;</h3>

<p>Don&rsquo;t forget to run <code>$ npm install</code> when you have the <code>package.json</code></p>

<h2>Response Data Format</h2>

<p><code>uploadPhoto</code> returns a response with the format</p>

<pre><code>{
  status: 200,
  body: &#39;photo-profile-1&#39;,
}
</code></pre>

<p><code>createUser</code> returns a response with the format</p>

<pre><code>{
  firstName: &#39;Guillaume&#39;,
  lastName: &#39;Salva&#39;,
}
</code></pre>
