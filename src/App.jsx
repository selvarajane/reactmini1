import './App.css'
import PersonalBio from './components/PersonalBio'
import GreetingApp from './components/GreetingApp'
import SimpleCounter from './components/SimpleCounter'
import HobbiesList from './components/HobbiesList'

function App() {
  const hobbies = [
    'Reading',
    'Coding',
    'Gaming',
    'Music',
    'Traveling'
  ];

  return (
    <>
      <h1>react mini 1</h1>
      
      <PersonalBio 
        name="selva"
        age={25}
        bio="I'm a passionate developer who loves creating amazing web applications using React and modern JavaScript."
      />
      
      <GreetingApp name="selva" />
      
      <SimpleCounter />
      
      <HobbiesList hobbies={hobbies} />
    </>
  )
}

export default App
