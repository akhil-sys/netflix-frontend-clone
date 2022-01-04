import './App.css';
import request from './request';
import Row from './componets/Row';
import Banner from './componets/Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
       <Row title={"Netflix Originals"} fetchUrl={request.fetchNetflixOriginals} isLarge={true}/>
       <Row title={"Trending Now"} fetchUrl={request.fetchTrending}/>
       <Row title={'Top Rated'} fetchUrl={request.fetchTopRated}/>
       <Row title={'Action Movies'} fetchUrl={request.fetchActionMovies}/>
    </div>
  );
}

export default App;
