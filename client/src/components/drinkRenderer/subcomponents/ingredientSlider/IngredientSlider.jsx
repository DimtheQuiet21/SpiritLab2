import { useState, useEffect } from "react";
import {
    Box,
    Typography,
    MenuItem,
    FormControl,
    Select
} from "@mui/material";
import ReactSlider from "react-slider";
import './ingredientSlider.css';

const IngredientSlider = ( { ingredient, amount } ) => {

    const [sliderValue, setSliderValue] = useState(0);
    const [quantity, setQuantity] = useState('');
    const [unitOfMeasure, setUnitOfMeasure] = useState('');
    const [alternateMeasure, setAlternateMeasure] = useState('');

    //Gets initial values from amount prop and sets state
    useEffect(() => {

        const newUnit = amount.match(/[a-zA-Z]+/);
        const newQty = Number(amount.match(/[0-9_.-]+/));

        // Set unitOfMeasure + sliderValue
        if (newUnit == 'oz') {
            setUnitOfMeasure('oz');
            setSliderValue(newQty*2)
        } else if (newUnit == 'ml') {
            setUnitOfMeasure('ml');
            setSliderValue((newQty/30)*2)
        } else if (newUnit == null) {
            setUnitOfMeasure('');
            setSliderValue(newQty);
        } else {
            setUnitOfMeasure('');
            setAlternateMeasure(newUnit);
        }

        if (newQty == 0) {
            setSliderValue(1)
        }

      }, [amount]);

    //Updates quantity displays on slider/unit updates
    useEffect(() => {
        handleQuantity(sliderValue);
    }, [sliderValue, unitOfMeasure])

    const handleUnitChange = (event) => {
        setUnitOfMeasure(event.target.value);
    };

    const handleQuantity = (value) => {
        if (unitOfMeasure == 'oz') {
            setQuantity(value*0.5);
        } else if (unitOfMeasure == 'ml') {
            setQuantity((value*30)*0.5);
        } else if (!value && value != 0) {
            setQuantity(1);
        } else {
            setQuantity(value);
        }
    }

    return (
    <>
    <Box className="sliderCard">
        <Box>
        </Box>
        <Box className="sliderContainer">
            <ReactSlider
            className="customSlider"
            thumbClassName="customSliderThumb"
            trackClassName="customSliderTrack"
            // markClassName="customSliderMark"
            marks={1}
            min={0}
            max={24}
            defaultValue={0}
            value={sliderValue}
            onChange={(value) => {setSliderValue(value); handleQuantity(value)}}
            />
        </Box>

        <Box className="valueContainer">
            <Typography className="sliderValue">{quantity}</Typography>
        </Box>
        {!unitOfMeasure == '' ? (
            <Box className='unitBox'>
                <FormControl size="small">
                <Select
                    value={unitOfMeasure}
                    onChange={handleUnitChange}
                >
                    <MenuItem value={'oz'}>oz</MenuItem>
                    <MenuItem value={'ml'}>ml</MenuItem>
                </Select>
                </FormControl>
            </Box>
        ):(
            <Box className='unitBox'>
                <Typography>{alternateMeasure}</Typography>
            </Box> 
        )}
    </Box>
    </>

    );
};

export default IngredientSlider;