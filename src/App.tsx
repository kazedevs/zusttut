import { Box, Container, Typography } from '@mui/material'
import './App.css'

import AddHabitForm from './components/AddHabitForm'
import HabitList from './components/HabitList'

function App() {

  // const store = useHabitStore()
  // console.log(store)

  return (
    <Container>
      <Box>
        <Typography variant="h2" component="h1" gutterBottom align='center'>Habit Tracker</Typography>
        <AddHabitForm />
        <HabitList/>
      </Box>
    </Container>
  )
}

export default App
