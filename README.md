# Learning CI with GitHub Actions (Node.js App)

Hi! 👋  
This repository is a **Node.js backend project** that I randomly picked up (just for learning purposes) and tried implementing **CI (Continuous Integration)** using **GitHub Actions** for the first time.

## 🧠 Why I Did This

I wanted to learn how to:
- Set up a basic GitHub Actions workflow
- Automatically run steps like `npm install` after each push
- Understand how CI works in real-time projects

## 🔧 What I’ve Implemented

✅ **CI (Continuous Integration)** is done!  
Every time I push code to the `main` branch:
- GitHub Actions runs automatically
- It installs dependencies using `npm install`
- (Optional) It can run tests, but this project doesn't have any test cases yet.

📂 Workflow file location: `.github/workflows/ci.yml`

### GitHub Actions Workflow

```yaml

name: Node.js CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Placeholder test
        run: echo "No tests defined"
```

## ❓Did I Do CD (Continuous Deployment)?
❌ Not yet.
CD (automatically deploying code to a server or platform like EC2, Vercel, etc.) is not done here.

But I plan to:

Connect this to a server or platform in the next step

Deploy the app automatically once CI passes

## 🏁 How to Run Locally

```
git clone https://github.com/your-username/ci-cd-using-github-action.git
cd ci-cd-using-github-action
npm install
node server.js
```

## 🧑‍💻 Author
Neha Bharti
Just experimenting and learning DevOps! 💡


---

Let me know if you'd like me to help you **implement CD** as your next step — for example, deploying automatically to an EC2 server after CI passes.





