



import './App.css';
import MyNav from './components/MyNav';
// import WarningSign from './components/WarningSign';
// import Badge from './components/Badge';
// import SingleBook from './components/SingleBook';
import fantasy from './fantasy.json';
import BookList from './components/BookList';

function App() {
  return (
    <div className='App'>
     <MyNav />
     {/* <WarningSign  title="This is alert!" color="danger" />
     <Badge  title="New" color="primary" />
      <SingleBook book={fantasy[0]} /> */}
      <BookList books={fantasy} />
     </div>
 
  );
}

export default App; 
