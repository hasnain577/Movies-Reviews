
import Header from './components/Header';
import Movie from './components/Movie';
import Movies from './Movies.json';
import './App.css';


function App() {
  let name = "Heading 2";
  return (
    // New Comment
    <div className="App">
        <Header/>
        <div className='main'>
     
           {
            Movies.map((element)=>{ 
              return( 
              <Movie 
                title={element.Title}
                year={element.Year}
                img={element.Poster}
                />)
             
           })
           }
  
        </div>
    </div>

  
  );
}

export default App;
