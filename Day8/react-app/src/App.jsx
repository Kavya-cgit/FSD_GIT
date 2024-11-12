import './App.css'

const App = ({namee,email,mob}) => {
  return (
    <div id="disp">
      <h1>Student Details</h1>
      <h2>Name:{namee}</h2>
      <h2>Email ID: {email}</h2>
      <h2>Mobile No.: {mob}</h2>
    </div>

  )
}

export default App;