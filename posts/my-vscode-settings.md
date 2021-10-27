---
id: '4'
type: 'post'
title: 'Мои настройки VS Code'
date: '27 October 2021 12:00 UTC'
poster: '51632649583_06569137f7_b.jpg'
mainColor: '0, 196, 255'
category: 'Программирование'
categoryColor: '00C4FF'
categoryLink: 'programming'
description: 'Плагины, шрифты и темы'
---

<h3>Настройки vscode</h3>

<pre>
<code class="language-css">
{
  "window.zoomLevel": 0.5,
  "editor.snippetSuggestions": "top",

  // Настройки Prettier
  "prettier.tabWidth": 2,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "all",
  "prettier.semi": true,
  "prettier.jsxBracketSameLine": true,
  "prettier.printWidth": 100,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // Настройки ESLint
  "eslint.packageManager": "yarn",
  "eslint.format.enable": true,
  "eslint.alwaysShowStatus": true,
  "editor.formatOnSave": true,

  "emmet.triggerExpansionOnTab": true,

  "editor.tabSize": 2,
  "editor.fontSize": 17,
  "editor.lineHeight": 24,
  "editor.wordWrap": "off",
  "editor.renderWhitespace": "selection",
  "editor.minimap.enabled": false,
  "editor.fontFamily": "'JetBrains Mono', Consolas, 'Courier New', monospace",
  // Если шрифт поддерживает стрелочки и т.п. знаки, то включить их (лигатуры)
  "editor.fontLigatures": true,
  // Тип курсора
  "editor.cursorStyle": "line",
  // Тип анимации курсора
  "editor.cursorBlinking": "phase",
  // Плавная анимация
  "editor.cursorSmoothCaretAnimation": true,
  "editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
  },
  "workbench.sideBar.location": "right",
  "workbench.iconTheme": "material-icon-theme",

  "terminal.integrated.rendererType": "dom",
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  "terminal.integrated.cursorBlinking": true,
  "terminal.integrated.cursorStyle": "underline",
  "terminal.integrated.fontFamily": "'JetBrains Mono', Consolas, 'Courier New', monospace",
  "terminal.integrated.fontSize": 12,
  "terminal.integrated.lineHeight": 1.2,

  "git.enableSmartCommit": true,
  "git.autofetch": true,
  "gitlens.advanced.messages": {
  "suppressShowKeyBindingsNotice": true
  },

  "javascript.updateImportsOnFileMove.enabled": "never",
  "explorer.confirmDragAndDrop": false,
  "html.format.endWithNewline": true,
  "files.associations": {
  "_.tpl": "html",
  "_.svelte": "html"
  },

  "diffEditor.ignoreTrimWhitespace": false,
  "editor.detectIndentation": false,
  "workbench.colorCustomizations": {},
  "workbench.startupEditor": "welcomePage",
  "breadcrumbs.enabled": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "tabnine.experimentalAutoImports": true,
  "workbench.colorTheme": "GitHub Dark Dimmed"
}
</code>
</pre>
<br/>
<h3>Плагины</h3>
<ul>
  <li class="main-list__item">Auto Close Tag</li>
  <li class="main-list__item">Auto Import</li>
  <li class="main-list__item">Auto Rename Tag</li>
  <li class="main-list__item">ES7 React/Redux/GraphQL</li>
  <li class="main-list__item">ESLint</li>
  <li class="main-list__item">GitHub Theme</li>
  <li class="main-list__item">GitLens</li>
  <li class="main-list__item">Import Cost</li>
  <li class="main-list__item">Material Icon Theme</li>
  <li class="main-list__item">Prettier</li>
  <li class="main-list__item">Vetur</li>
  <li class="main-list__item">Vue VSCode Snippets</li>
</ul>
<br/>
<h3>Шрифт</h3>
<p>JetBrains Mono</p>
