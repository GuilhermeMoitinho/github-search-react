import { Outlet } from 'react-router-dom'
import classes from './App.module.css'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <div className={classes.app}>
          <h1>GitHub Search</h1>
          <Outlet />
      </div>
    </>
  )
}

export default App
