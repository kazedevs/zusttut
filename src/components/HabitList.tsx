import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import useHabitStore from "../store/store";

const HabitList = () => {
    const {habits, removeHabit, toggleHabit} = useHabitStore();
    const today = new Date().toISOString().split('T')[0];
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, mt: 4}}>
            {habits.map((habit) => (
                <Paper key={habit.id} elevation={2}>
                    <Grid container alignItems="center">
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Typography variant="h6">
                                {habit.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {habit.frequency}
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Box sx={{display: 'flex', gap: 1, justifyContent: "flex-end"}}>
                                <Button variant="outlined" 
                                color= {
                                    habit.completedDates.includes(today) ? "success" : "primary"
                                }
                                onClick={() => toggleHabit(habit.id, today)}>
                                    {habit.completedDates.includes(today) ? "completed" : 'Mark Complete'}
                                </Button>
                                <Button variant="outlined" color="error" onClick={() => removeHabit(habit.id)}>Delete</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </Box>
    )
}


export default HabitList;