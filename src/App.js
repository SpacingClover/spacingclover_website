import './App.css';
import './classes.css';
import './effects.css';
import './elements.css';
import React from 'react';
import { Route, Link, HashRouter, BrowserRouter, Outlet } from '../node_modules/react-router-dom/index.js';
import { Routes } from '../node_modules/react-router/index.js';

const Layout = () => {
	return (
		<>
			<div onresize="onresize();">

				<div class="gutter" id="lgutter"></div>

				<div id="container">

					<p class="header-text" id="title">
						<span class="green text-clip oscillateX">SPACINGCLOVER</span>
					</p>

					<div id="tabs-bar">
						<Link class="header-text tab-button green text-clip oscillateX" to="/">HOME</Link>
						<Link class="header-text tab-button green text-clip oscillateX" to="/games">GAMES</Link>
						<Link class="header-text tab-button green text-clip oscillateX" to="/videos">VIDEOS</Link>
						<Link class="header-text tab-button green text-clip oscillateX" to="/contact">CONTACT</Link>
					</div>

					<div class="neon" id="page">

						<Outlet />

					</div>

				</div>

				<div class="gutter" id="rgutter"></div>

				<canvas id="background"></canvas>
			</div>

			<footer>
				<p id="legal">(C) spacingclover 2025, all rights reserved</p>
			</footer>
		</>
	);
}

const Homepage = () => {
	return (
		<>
			<p>I am an indie game developer who has historically worked on very small demos, and is now working on a larger project, Sign of the Beetle. My skills involve game design, math, programming, and 3d modelling.</p>
			<br></br>
			<p>I'm a big fan of puzzle games, and if you want my recomondations:</p>
			<ul>
				<li>Portal</li>
				<li>Outer Wilds</li>
				<li>The Witness</li>
				<li>Chants of Senaar</li>
				<li>The Talos Principle</li>
				<li>Narbacular Drop</li>
			</ul>
			<br></br>
			<p>My web design philosophy is very stuck in pre-2015 conventions, and even though this uses technology from far after that era, I love the centered-page-with-navbar style. I'm also a fan of the antiminimalist aesthetic, not just for the chaos factor but I love the freedom of css and I want to use it to it's full potential.</p>
			<p>This website is still under construction, and all this will probably be moved to the Contact section, but for the moment I am unsure what else to put on the home page!</p>
		</>
	);
}

const Games = () => {
	return (
		<>
			<h2>Released:</h2>
			<div class="list-container" style={{ boxShadow: "none" }}></div>
			<h2>In Development:</h2>
			<div class="list-container">
				<Link class="game-preview" to="signofthebeetle">Sign of the Beetle</Link>
			</div>
			<h2>Small, older projects:</h2>
			<div class="list-container">
				<Link class="game-preview" to="sanddungeon">Sand Dungeon</Link>
				<Link class="game-preview" to="magicboardgame">Magic Board Game</Link>
				<Link class="game-preview" to="canyondiner">Rock Climbing</Link>
			</div>
		</>
	);
}

const Contact = () => {
	return (
		<>
			For business inquiries, technical support (related to my games!), or press stuff, email me at
			<div class="tooltip">
				<span class="tooltiptext">Click to copy</span>
				<a onclick="copyText('spacingclover@gmail.com')">spacingclover@gmail.com</a>
			</div>
		</>
	);
}

const Videos = () => {
	return (
		<>
			Mf i dont have videos
		</>
	);
}

const SignOfTheBeetle = () => {
	return (
		<>
			<div class="hsection">
				<div class="col left">
					<h1 style={{ fontFamily: "Cristola" }} >Sign of the Beetle</h1>
					<p>Sign of the Beetle is a 3D puzzle-platformer where you play as a beetle who can only collide with shadows.</p>
					<p>X chapters of manipulating shadows to cross gaps, get to items, and progress on your journey</p>
					<p>The game is without dialogue, and conveys it's story entirely through it's poems at the end of each chapter</p>
					<p>A collaboration between <span class="rainbow text-clip oscillateX">SPACINGCLOVER</span>, Rhishuu, and Mother-of-skeletons.</p>
					<br /><br /><br />
					<a href="https://store.steampowered.com" target="_blank"> {">>"} Buy Sign of the Beetle on Steam {"<<"} </a>
				</div>
				<div class="col right">
					<img src="img/sotb.png" />
				</div>
			</div>
		</>
	);
}
				
const SandDungeon = () => {
	return (
		<>
			<img src="img/sand.jpg" style={{ float: "right", display: "inline" }} />
			<h1>Sand Dungeon</h1>
			<p>You must escape through the 6 rooms of this sand-filled dungeon by standing on various buttons that can:</p>
			<ul>
				<li>Raise the level of sand in the room</li>
				<li>Lower the level of sand in the room</li>
				<li>Hold open the exit door</li>
			</ul>
			<p>Combine this with spikes, ladders, and fences and you have a short, interesting puzzle experience.</p>
			<a href="https://spacingclover.itch.io/sand-dungeon" target="_blank"> {">>"} Play Sand Dungeon on Itch.io {"<<"} </a>
			<br />
			<p>This was the first game I ever made in Godot. It was initially made in Roblox, until during bugfixing I ran into what I percieved to be technical limitations of Roblox. Of course, I was just an inexperienced programmer.</p>
		</>
	);
}

const MagicBoardGame = () => {
	return (
		<>
			<img src="img/boards.png" style={{ float: "right", display: "inline", height: 200 + 'px' }} />
			<img src="img/maze.png" style={{ float: "right", display: "inline", height: 200 + 'px' }} />
			<h1>Magic Board Game</h1>
			<p>This puzzle demo is a fairly short escape puzzle involving a game board whos pieces move larger parts of the game world!</p>
			<a href="https://spacingclover.itch.io/magic-board-game" target="_blank"> {">>"} Play Magic Board Game Puzzle Demo on Itch.io {"<<"} </a>
			<p>I was planning to make a pvp game with this, but that part didn't go very far. But I got this neat demo out of it, and some fun videos from development.</p>
		</>
	);
}

const CanyonDiner = () => {
	return (
		<>
			<img src="img/climber.jpg" style={{ float: "right", display: "inline", height: 200 + 'px' }} />
			<h1>Climbing Demo</h1>
			<p>Here is a tech demo of a rock climbing character controller, I wouldn't call it a full demo as it isnt terribly gamified, but its a neat sleek character controller.</p>
			<a href="https://spacingclover.itch.io/climbing-demo" target="_blank"> {">>"} Play the Climbing Demo on Itch.io {"<<"} </a>
			<p>This is one that I'm likely to revisit because the scope isn't actually very large, and I feel more confident managing npcs nowadays.</p>
			<img src="img/bull.jpg" style={{ float: "right", display: "inline", height: 200 + 'px' }} />
		</>
	);
}

export default function App() {
	return (
		<BrowserRouter>
			<Routes>

				<Route path="/" element={<Layout />}>

					<Route index element={<Homepage />} />

					<Route path="/games" element={<Games />} />

					<Route path="/games/signofthebeetle" element={<SignOfTheBeetle />} />
					<Route path="/games/magicboardgame" element={<MagicBoardGame />} />
					<Route path="/games/sanddungeon" element={<SandDungeon />} />
					<Route path="/games/canyondiner" element={<CanyonDiner />} />

					<Route path="/videos" element={<Videos />} />

					<Route path="/contact" element={<Contact />} />

				</Route>

			</Routes>
		</BrowserRouter>
	);
}