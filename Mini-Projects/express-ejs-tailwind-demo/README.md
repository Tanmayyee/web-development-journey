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

  <img width="1887" height="908" alt="Screenshot 2026-07-23 190211" src="https://github.com/user-attachments/assets/e3c808f6-5b06-4b8f-b25d-3406e87f334a" />

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
