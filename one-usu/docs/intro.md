---
sidebar_position: 3
---

# Toast Message

This is a description about the Toast Message Component

## Getting Started

Toast are used for confirmations, alerts, and acknowledgments that require minimal user interaction. These event-driven messages appear by default at the bottom-right of the screen, overlapping the content. Other positions like top-right, or bottom-left are allowed depending on where the particular use case action is taking place. A toast should be placed with a 16px padding around it (See example bellow). If the user does not close them, the toast message is closed automatically after 5 seconds.
### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
