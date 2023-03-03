import { html, render } from "lit-html";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi9NEeZf1Lk-xEO_s-MofPp7ZiAJJ2UEg",
  authDomain: "space-kitty-fp.firebaseapp.com",
  projectId: "space-kitty-fp",
  storageBucket: "space-kitty-fp.appspot.com",
  messagingSenderId: "721235516487",
  appId: "1:721235516487:web:93cb87e4a5be54143e2562"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

async function sendName(name) {
  // Add some data to the messages collection
  try {
    const docRef = await addDoc(collection(db, "scoreboard"), {
      time: Date.now(),
      nickname: name,
      score: 10, //replace with survivalTime score
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

function handleInput(e) {
  if (e.key == "Enter") {
    sendName(e.target.value);
    e.target.value = "";
  }
}

function view() {
  return html`<h1>Nickname</h1>
    <input type="text" @keydown=${handleInput} />`;
}

render(view(), document.body);

/*
function view() {
  return html`<h1>Lorem Ipsum</h1>
    <p>
      Dolor sit amet consectetur adipisicing elit. Maxime quis, iusto iste ea
      eaque rem obcaecati nemo tempore, quas quaerat, recusandae aut alias? Quo,
      <strong>fugiat</strong> consequatur explicabo minus nisi omnis saepe
      laboriosam, consectetur, aperiam impedit perferendis odio ea odit quod!
      Alias, quia! Ea porro recusandae <strong>excepturi</strong>, architecto
      odio?
    </p>
    <p>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Surprise me!</a>
    </p>`;
}

render(view(), document.body);
*/

/*
let kitty, kittyImg, asteroids, asteroidImg, survivalTime, tutorialOver;

function preload() {
  kittyImg = loadImage('https://cdn-icons-png.flaticon.com/64/763/763763.png');
  asteroidImg = loadImage('https://cdn-icons-png.flaticon.com/64/7480/7480279.png');
  kitty = new Sprite(width/2, height/2); //spawns in center
  kitty.addImage(kittyImg);
  asteroids = new Group();
  asteroids.addImage(asteroidImg);
}

function setup() {
  new Canvas(windowWidth, windowHeight);
  survivalTime = 0;
  setInterval(timer,1000);
  createAsteroids();
}

function draw() {
  background(color(11, 11, 70)); // fixes kitty image trail

  fill(255); //white
  textSize(24);
  textAlign(CENTER);
  if (tutorialOver) {
    text('Help space kitty! You can do it!', width / 2, height / 16);
  } else {
    text('Move your mouse to avoid the asteroids!', width / 2, height / 16);
  }

  kitty.position.x = mouseX;
  kitty.position.y = mouseY;

  text('Time: ' + survivalTime + ' seconds', width / 2, height*2 / 16);

  // from p5play.org demos
  for (let a of asteroids) {
		if (a.x < -32) a.x = width + 32;
		if (a.x > width + 32) a.x = -32;
		if (a.y < -32) a.y = height + 32;
		if (a.y > height + 32) a.y = -32;
    a.addSpeed(0.01);
	}

  if (kitty.collides(asteroids)) {
    resetGame();
  }
}

function createAsteroids() {
  for (let i = 0; i < 10; i++) {
    let a = new asteroids.Sprite(random(width), height, 64);
    a.speed = 2;
    a.mass = 2
    a.rotationSpeed = random(-1, 1);
    a.direction = random(360);
  }
}

function resetGame() {
  asteroids.remove();
  survivalTime = 0;
  tutorialOver = true;
  createAsteroids();
}

function timer() {
  survivalTime += 1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
*/