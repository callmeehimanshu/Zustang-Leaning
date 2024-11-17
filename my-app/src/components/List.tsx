import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import useHabbitStore from '../store/Store'

const List = () => {
    const {habits,removeHabit}=useHabbitStore();
    const date=new Date().toISOString().split("T")[0];

  return (
    <Box sx={{display:"flex", flexDirection:"column",gap:2, mt:4}}>
         {habits.map((habit)=>(
            <Paper key={habit.id} sx={{p:2}}>
            <Grid alignItems="center">
               <Grid container xs={12}sm={6} >
               <Typography variant="h5">{habit.name}</Typography><br />
                <Typography variant="body2" >{habit.frequency}</Typography>
               </Grid>
               <Grid xs={12}sm={6}>
                <Box sx={{display:"flex",justifyContent:"flex-end",gap:1}}>
                    <Button>{habit.completedDates.includes(date)?"completed":"Mark"}</Button>
                    <Button 
                    onClick={()=>removeHabit(habit.id)}
                    > {habit.completedDates.includes(date)?"success":"primary"}</Button>
                </Box>
               </Grid>
            </Grid>
            </Paper>
         ))}
    </Box>
  )
}

export default List