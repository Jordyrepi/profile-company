import React from 'react'
import CardTeam from './components/CardTeam';
import IntroTeam from './components/IntroTeam';

const Teams = async () => {
  const response = await fetch(
    "https://randomuser.me/api/?results=6&nat=in&gender=female"
  );
  const { results } = await response.json();

  console.log(results);

  return (
    // import HeroTeam from './components/HeroTeam';
    <div className='bg-[#0A3A40]'>
      <IntroTeam />
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  shadow-xl gap-5 lg:mx-32'>
        {results.map((team, index) => {
          return <CardTeam key={index} team={team} class />
        })}
      </div>
    </div>
  )
}

export default Teams