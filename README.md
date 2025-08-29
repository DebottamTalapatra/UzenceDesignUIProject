# 🚀 A React + TypeScript project with Vite, Tailwind CSS, and Storybook integration.

## 📝 Description

This project demonstrates reusable React components (`InputField`, `DataTable`) built with **TypeScript** and styled using **Tailwind CSS**.

**Approach:**

- 🛠 Created a Vite + React + TypeScript project.
- 🔧 Converted all React components to **TypeScript (`.tsx`)** with proper type annotations.
- ♻️ Made components **generic and reusable**, e.g., `DataTable<T>` works with any type extending `{ id?: string | number }`.
- 📚 Configured Storybook to render components and support interactive props.
- 🎨 Integrated Tailwind CSS globally and ensured it works in Storybook.
- ✅ Added Vitest + Storybook integration for testing stories.

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone <repository_url>
cd <project_folder>
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```


### 4️⃣ Run Storybook

```bash
npm run storybook
```


### 5️⃣ Build the project

```bash
npm run build
```


### 🛠 Technologies Used

- ⚛️ React 18 + TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 📖 Storybook

