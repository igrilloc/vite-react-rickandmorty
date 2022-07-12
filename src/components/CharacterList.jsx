import React from 'react'
import Character from './Character';



const CharacterList = () => {

  const [characters, setCharacters] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);





  const NavPage = (props) => {
    return (
      <div className='d-flex justify-content-between align-items-center'>
         <button onClick={() => props.setPage(props.page - 1)} className='btn btn-primary btn-sm'>
          Prev
        </button>
        <p className='btn btn-danger btn-sm'>
          {props.page}
        </p>
        <button onClick={() => props.setPage(props.page + 1)} className='btn btn-primary btn-sm'>
          Next
        </button>
      </div>
    )
  };


  React.useEffect(
    () => {
      async function fetchdata () {
        
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await response.json();
        
        setLoading(false);
        setCharacters(data.results);

      }

      fetchdata();

    },
    
    [page]
  
  );



  return (

    <div className='container'>

      <NavPage page={page} setPage={setPage} />

      <div className="row">
        {
          loading
          ? (<h1>Loading...</h1>)
          : (characters.map(
              (character) => {
                return (
                  <div className='col-md-4' key={character.id}>
                    <Character character={character} />
                  </div>
                );
              }
            )
          )
        }
      </div>

    </div>

  )


};



export default CharacterList