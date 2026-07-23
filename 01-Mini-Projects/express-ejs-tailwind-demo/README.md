# Express EJS Tailwind Demo

A simple demo project built to practice **Express.js**, **EJS**, **dynamic routing**, and **Tailwind CSS**. This project renders different subreddit pages using server-side templates and demonstrates reusable layouts with EJS partials.

## Features

- Express.js server
- EJS templating
- Dynamic routes (`/r/:subreddit`)
- Server-side rendering
- Reusable EJS partials (Navbar, Head, Footer)
- Tailwind CSS styling
- Responsive navigation bar
- Static asset serving
- Custom 404 page for unknown subreddits
<p align="center">
  <img
    src="https://github.com/user-attachments/assets/e3c808f6-5b06-4b8f-b25d-3406e87f334a"
    alt="Home Page"
    width="80%"
  />
</p>

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/5d5a0ee8-240b-4539-b3d5-b3769b997143"
    alt="Subreddit Page"
    width="48%"
  />
  <img
    src="https://github.com/user-attachments/assets/ba59b4d4-d0f8-4d59-9280-a42cbc4835ab"
    alt="404 Page"
    width="48%"
  />
</p>

## Tech Stack

- Node.js
- Express.js
- EJS
- Tailwind CSS
- JavaScript

## Project Structure

```text
.
├── public/
│   └── output.css
├── src/
│   └── input.css
├── views/
│   ├── partials/
│   ├── home.ejs
│   ├── random.ejs
│   ├── subreddit.ejs
│   └── notfound.ejs
├── data.json
├── index.js
├── package.json
└── README.md
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/random` | Displays a random number |
| `/r/:subreddit` | Displays subreddit data dynamically |
| Unknown subreddit | Shows a custom Not Found page |

### Example

```text
/r/soccer
/r/chickens
/r/mightyharvest
```

## Concepts Practiced

- Express routing
- Route parameters
- Rendering EJS templates
- Passing data from Express to EJS
- Conditional rendering
- Loops in EJS
- Template partials
- Static files with Express
- Responsive UI using Tailwind CSS

## Installation

Clone the repository

```bash
git clone https://github.com/your-username/express-ejs-tailwind-demo.git
```

Move into the project

```bash
cd express-ejs-tailwind-demo
```

Install dependencies

```bash
npm install
```

Run the server

```bash
node index.js
```

Open your browser

```
http://localhost:1300
```

## Purpose

This project was created as part of my web development learning journey to understand how Express.js works with EJS templates and Tailwind CSS while building dynamic server-rendered pages.

## Future Improvements

- Search functionality
- Better mobile UI
- Dark mode
- Real Reddit API integration
- Database support (MongoDB)
- User authentication

---

Made with ❤️ while learning Full Stack Web Development.
