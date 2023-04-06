import { useState } from 'react'
import ToggleBtn from './components/ToggleBtn/ToggleBtn'
import PlanCard from './components/PlanCard/PlanCard'
import data from './data'

function App() {

  const [basic, professional, master] = data
  const [timelapse, setTimelapse] = useState('annually')

  const changeLapse = () => {
    timelapse === 'annually' ? setTimelapse('monthly') : setTimelapse('annually')
  }

  return (
    <div className='App'>
      <h1 className='App__title'>Our Pricing</h1>
      <ToggleBtn timelapse={timelapse} changeLapse={changeLapse}/>
      <div className="App__cards">
      <PlanCard 
      id={basic.id}
      timelapse={timelapse === 'annually' ? basic.annually : basic.monthly}
      storage={basic.storage}
      accounts={basic.accounts}
      gb={basic.gb}
      />
      <PlanCard 
      id={professional.id}
      timelapse={timelapse === 'annually' ? professional.annually : professional.monthly}
      storage={professional.storage}
      accounts={professional.accounts}
      gb={professional.gb}
      gradient={true}
      />
      <PlanCard 
      id={master.id}
      timelapse={timelapse === 'annually' ? master.annually : master.monthly}
      storage={master.storage}
      accounts={master.accounts}
      gb={master.gb}
      />
      </div>
    </div>
  )
}

export default App
