import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'
import useHabbitStore from '../store/Store';

const AddHabbit = () => {
    const [name, setName] = useState("");
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");
    const {habits,addHabit}=useHabbitStore();

    console.log(habits);

    const handleChange=(e:  React.ChangeEvent<HTMLInputElement>)=>{
      setName(e.target.value)
    }  
    const handleSubmit=(e:React.FormEvent)=>{
      console.log("pressed");
      
          e.preventDefault();
          if(name.trim()){
             addHabit(name,frequency)
             setName("")
          }
    }
    
    return (
     <form onSubmit={handleSubmit}>
      <Box sx={{display:"flex", flexDirection:"column", gap:2 }}>
         <TextField
          fullWidth
          label="Add Habbit"
          onChange={handleChange}
        />
        <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
   
    // value={age}
    label="Frequenct"
    onChange={(e)=>setFrequency(e.target.value as "daily"|"weekly")}
  >
    <MenuItem value="daily">Daily</MenuItem>
    <MenuItem value="weekly">Weekly</MenuItem>
  </Select>
</FormControl>
<Button variant="contained" type='submit' >Add Habbit</Button>
    </Box>
     </form>
  )
}

export default AddHabbit