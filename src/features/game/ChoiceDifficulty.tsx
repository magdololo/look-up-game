import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/NativeSelect';
import {Typography, useMediaQuery} from "@mui/material";
import {useContext} from "react";
import {GameContext} from "./Game";
import {useTranslation} from "react-i18next";

interface SelectChangeEvent{
 target: (EventTarget & HTMLSelectElement) | (EventTarget & {value: string, name: string})
}
const ChoiceDifficulty =()=>{
    const { t } = useTranslation()
    const {numberOfSymbols, setNumberOfSymbols} = useContext(GameContext)
    const mobile = useMediaQuery('(max-width:800px)');
    const handleChange = (event: SelectChangeEvent) => {
        setNumberOfSymbols(parseInt(event.target.value));
    };

return (
    <>
        <Box sx={{ width: '100%', maxWidth: 'max-content' , margin: mobile ? "20px auto" : "40px auto"}}>
            <Typography variant= {mobile ? "h6" : "h4"} gutterBottom>
                {t("number_icons_on_the_card")}
            </Typography>
        </Box>
        <Box sx={{ width: "200px" , margin: "0 auto"}}>
            <FormControl fullWidth>
                <Select
                    sx={{paddingLeft: "88px", fontSize: mobile ? "20px" : "34px"}}
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
                </Select>
            </FormControl>
        </Box>
    </>
)

}
export default ChoiceDifficulty;