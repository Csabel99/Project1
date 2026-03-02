import './App.css';
import GameCard from './components/GameCard';
import haloImg from "./assets/haloinfinite.jpg";
import smashImg from "./assets/smashbros.jpg";
import dbzImg from "./assets/dragonball.jpg";
import fortniteImg from "./assets/fortnite.jpg";
import gearsImg from "./assets/gears.jpg";
import valorantImg from "./assets/valorant.jpg";
import rocketImg from "./assets/rocketleague.jpg";
import apexImg from "./assets/apexlegends.jpg";
import minecraftImg from "./assets/minecraft.jpg";
import leagueImg from "./assets/leaguelegends.jpg";

const App = () => {

  return (
    <div className="App">
      <h1>Gaming Events</h1>
      <h2>Weekly meetups and tournaments!! </h2>


    <div className="grid">
      <GameCard 
        title="Finish the Fight!!" 
        game="Halo Infinite" date="April 7" 
        location="Queens" 
        rules="4 vs 4, best of 3"
        image={haloImg}
      />

    <GameCard
      title="It's on like Donkey Kong 👊"
      game="Super Smash Bros Ultimate"
      date="April 20"
      location="Brooklyn"
      rules="Double elimination, no items, 3-stock, 7 minutes."
      image={smashImg}
        />

    <GameCard
      title="Breaking My Limits"
      game="Dragonball Fighter Z"
      date="May 7"
      location="Brooklyn"
      rules="Best of 3, tournament rules, no macro controllers."
      image={dbzImg}
    />

    <GameCard
      title="Duo's 🦙"
      game="Fortnite"
      date="May 14"
      location="Queens"
      rules="Duos only, points system, 3 matches."
      image={fortniteImg}
        />

    <GameCard
      title="Brother to the End"
      game="Gears of War 3"
      date="May 20"
      location="Discord"
      rules="Team deathmatch, best of 5 rounds."
      image={gearsImg}
        />

    <GameCard
      title="Valorant Scrims"
      game="Valorant"
      date="May 12"
      location="Discord"
      rules="Custom games, callouts required, respectful comms."
      image={valorantImg}
        />

    <GameCard
      title="Rocket League 2v2"
      game="Rocket League"
      date="May 18"
      location="Online"
      rules="2v2, best of 5, standard mutators."
      image={rocketImg}
        />
        
    <GameCard
      title="Apex Ranked Night"
      game="Apex Legends"
      date="May 21"
      location="Online"
      rules="Ranked macthes with squads, stay with team."
      image={apexImg}
      />

    <GameCard
      title="Minecraft Build Battle"
      game="Minecraft"
      date="May 25"
      location="Server Invite"
      rules="Theme announced live, 30 minutes build time."
      image={minecraftImg}
      />

    <GameCard
      title="League Clash Practice"
      game="League of Legends"
      date="May 30"
      location="Discord"
      rules="5v5, draft pick, best of 1 practice games."
      image={leagueImg}
      />
      </div>
    </div>
  )
}

export default App