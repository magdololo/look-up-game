import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import {Typography} from "@mui/material";

interface SelectChangeEvent{
 target: (EventTarget & HTMLSelectElement) | (EventTarget & {value: string, name: string})
}
interface  ChoiceDifficultyProps {
    numberOfSymbols: number
    setNumberOfSymbols: (numberOfSymbols:number) => void;
}
const ChoiceDifficulty =({numberOfSymbols, setNumberOfSymbols}: ChoiceDifficultyProps)=>{
    const handleChange = (event: SelectChangeEvent) => {
        setNumberOfSymbols(parseInt(event.target.value));
    };

return (
    <>
        <Box sx={{ width: '100%', maxWidth: 500 , margin: "40px auto" , color: "#424242"}}>
            <Typography variant="h4" gutterBottom>
                Liczba ikonek na karcie
            </Typography>
        </Box>
        <Box sx={{ width: "200px" , margin: "0 auto"}}>
            <FormControl fullWidth>
                <NativeSelect
                    sx={{paddingLeft: "88px", fontSize: "34px"}}
                    defaultValue={3}
                    inputProps={{
                        name: 'numberOfIcons',
                        id: 'uncontrolled-native',
                    }}
                    value={numberOfSymbols}
                    onChange={handleChange}
                >
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={6}>6</option>
                    <option value={8}>8</option>
                </NativeSelect>
            </FormControl>
        </Box>
    </>
)

}
export default ChoiceDifficulty;