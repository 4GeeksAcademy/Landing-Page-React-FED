import React from "react";
import NavBar from "./NavBar";
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer';

//create your first component
const Home = () => {
	const navbarLinks = ['Home', 'About', 'Services', 'Contact'];
	const cards = [
		{title: 'Card1', content: 'Lorem ipsom dolor sit amet'},
		{title: 'Card2', content: 'Consectetur adipiscing elit'},
		{title: 'Card3', content: 'Nulla nec ex vel est vestibulum cursus'},
		{title: 'Card4', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'},
	]
	return (
		<div className="Home">
			<NavBar links = {navbarLinks}/>
			<Jumbotron />
			<div className = "card-container">
				{cards.map((card, index)=>
					<Card key={index} title={card.title} content={card.content} />
				)}
			</div>
			<Footer />
		</div>	
	);
};



export default Home;
