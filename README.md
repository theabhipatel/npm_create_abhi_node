# 🚀 Create Abhi Node CLI

A simple and interactive CLI tool to bootstrap your Node.js + Express + TypeScript project from a ready-made template.  
Just like `create-next-app`, but for your Node.js backend projects.  

---

## ✨ Features

- 📂 Generates a project from [template repo](https://github.com/theabhipatel/template_node_ex_ts)  
- 🎨 Interactive CLI with prompts (project name, etc.)  
- ⚡ Installs dependencies automatically  
- ✅ Ready-to-use setup (just `npm start`)  

---

## 📦 Installation & Usage

You don’t need to install anything globally. Just run:

```bash
npx create-abhi-node
```

### Example Flow

```bash
npx create-abhi-node
```

👉 CLI will ask:

```
🚀 Welcome to Create Abhi Node CLI!

👉 What’s your project name? my-api
```

Then it will:

1. Clone the template into `my-api`  
2. Install dependencies  
3. Show you next steps  

✅ Example output:

```
📦 Project structure created!
📥 Installing dependencies...
✅ Dependencies installed!

Next steps:
   cd my-api
   npm start
```

---

## 🛠️ Template Details

The template used is [theabhipatel/template_node_ex_ts](https://github.com/theabhipatel/template_node_ex_ts).  
It includes:

- Node.js + Express  
- TypeScript setup  
- Pre-configured scripts (`npm run dev`, `npm start`)  

---

## 📖 Commands

After project creation:

```bash
cd my-app
npm run dev   # Start dev server with ts-node-dev
npm start     # Start compiled server
```
