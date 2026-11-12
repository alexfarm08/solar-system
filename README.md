<a href="https://github.com/alexfarm08"><img width="200" height="100" alt="Armstrong_Stacked" src="https://github.com/user-attachments/assets/f899d005-b9a1-419b-a11f-4de111611034" /></a>

# 3D Solar System

An interactive **3D solar system** built with **Three.js** to demonstrate skills in 3D graphics, animation, and modern JavaScript tooling. Explore the planets as they orbit the sun, rendered in real time directly in the browser.

🔗 **[View the live demo](https://alexfarm08.github.io/solar-system/)**

* * *

## Features

- **3D rendering:** Renders the sun and planets in a WebGL scene using [Three.js](https://threejs.org/).
- **Orbital animation:** Planets move continuously in their orbits around the sun.
- **Textured planets:** Image textures give each planet its own look.
- **Interactive camera:** Look around and explore the scene from different angles.
- **Optimized build:** Bundled with Webpack for production deployment on GitHub Pages.

* * *

## Project Structure

| Folder / File       | Description                                                          |
|---------------------|----------------------------------------------------------------------|
| `src/`              | Application source code, including the Three.js scene and animation. |
| `imgs/`             | Image assets and textures used for the planets and background.       |
| `dist/`             | Production build output served by GitHub Pages.                      |
| `webpack.config.js` | Webpack configuration for bundling and building the project.         |
| `package.json`      | Project dependencies and npm scripts.                                |
| `LICENSE`           | MIT license.                                                         |

* * *

## Tech Stack

- **Three.js** – 3D graphics library for building and animating the scene.
- **JavaScript ES6+** – Modern syntax and modular code organization.
- **Webpack** – Module bundling and production builds.
- **HTML & CSS** – Page structure and basic styling.

* * *

## Key Skills Demonstrated

- Building and managing a **3D scene** (scene, camera, renderer, lights).
- Creating **animation loops** for continuous motion.
- Applying **textures and materials** to 3D objects.
- Configuring **Webpack** for development and production builds.
- Deploying a static site with **GitHub Pages**.

* * *

## Case Study

### Objective
For this project there were no specific project requirements. This project was for me to practice using threeJs to make a web page that is 3D and uses 3D assets. 

### Synoposis
The inspiration for this page was inspired by some portfolio pages I saw that used 3D assets in the portfolio page. As a curious and passionate person I was immediately obsessed with the Idea that you could make a 3D web page and that is where I found threeJs and decided to build a 3D solar system on a webpage. 

### Process
The process for this project started with brainstorming an idea of something that was 3d to build that moved. I came across the idea of the solar system because I was able to find free to use 3d assets for this project. Then I researched the distance and movement speeds of each planet and did some rough math to convert those distances into numbers that worked well on a webpage. After that I researched how to get started using threeJS and set up the project files. After finally finishing the page and getting the numbers of distances to a place that made me happy I deployed the webpage on to github pages. 

### Results
The results of this project was a 3D webpage that had a solar system that I built living in a web page and I tried to keep the scale of the distances and sizes of everything.

## Installation & Usage

```bash
# Clone the repository
git clone https://github.com/alexfarm08/solar-system.git

# Navigate into the project
cd solar-system

# Install dependencies
npm install

# Start the development server
npm start

# Create a production build
npm run build
```

* * *

## License

This project is licensed under the [MIT License](LICENSE).
