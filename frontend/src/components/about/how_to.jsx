import React from "react";
import '../../stylesheets/root.scss';
import { Link } from 'react-router-dom';


const HowToPlay = props => {

  const auth = props.auth
  const user = props.currentUser

  return(
    <div className="how-to-container">
      <header>
        <h1 id='pagetitle'>HOW TO PLAY</h1>
      </header>
      {auth ? <>
          <section className="how-to-div" id='fav-gif-how'>
            <h2>SET YOUR FAVORITE GIF</h2>
            <p>
            Click your display name below to go to your user profile. Once there, you can search for and set your favorite GIF, which will show up
            when you start a new game!
            </p>
            <Link to={`/profile/${user.id}`}><button>{user.displayName}'s Profile</button></Link>
          </section>
          <section className="how-to-div" id='create-how'>
            <h2>CREATE A GAME</h2>
            <p>
              Click the button below to create a game. You can set the game name,
              max number of players, winning score, round time limit, and create
              a unique game key (or use our randomly generated token)
            </p>
            <Link to='/create'><button>Create Game</button></Link>
          </section>
        </>
        : <>
          <section className="how-to-div" id='signup-how'>
            <h2>SIGN UP</h2>
            <p>
              To create or join a game, you'll need to sign up for an account
              (or log in if you have an existing account).
              <br />
              <br />
              Click the button below to sign up.
              You can create an anonymous account by clicking "Generate Anonymous Login" on
              the signup page.
            </p>
            <Link to='/signup'><button>Sign Up</button></Link>
          </section>
          <section className="how-to-div" id='create-how'>
            <h2>CREATE A GAME</h2>
            <p>
              Once you sign up / log in, you will be able to create a game using
              the create button on the splash page. You will be able to set the game name,
              max number of players, winning score, round time limit, and create
              a unique game key (or use our randomly generated token)
            </p>
          </section>
        </>
      }
      <section className="how-to-div" id='invite-how'>
        <h2>INVITE FRIENDS</h2>
        <p>
          After creating a game, your game ID will show up in the lobby. Send this
          to your friends so they can join your game! All players will need to sign
          up for an account to play.
        </p>
        <img src="https://user-images.githubusercontent.com/13125699/146319412-a4affac6-c2ba-4a5b-90cf-590ffd9aa867.png" alt="Game Setup" />
      </section>
      <section className="how-to-div" id='gameplay-how'>
        <h2>GAMEPLAY</h2>
        <p>
          During the game, you'll be given a hand of 5 cards. You'll also have a
          shared category in the center of the screen. Choose the best (funniest
          or most accurate) GIF from your hand to match the prompt! 
        </p>
        <img src="https://user-images.githubusercontent.com/13125699/146319633-60558dda-0620-4c3b-a00b-3141308f2a30.png" alt="Gameplay" />
        <p>
          <br />
          One player will be assigned the judge for each round. That player will need
          to choose the best GIF at the end of the round, from all GIFs submitted.
          The player who submitted that GIF will receive a point for the round.
          <br />
          <br />
          The game ends when one player receives the winning score for the round
          (which you set when you created the game!)
          <br />
          <br />
          Good luck, and may the best meme win!
        </p>
      </section>
    </div>
  )
}

export default HowToPlay