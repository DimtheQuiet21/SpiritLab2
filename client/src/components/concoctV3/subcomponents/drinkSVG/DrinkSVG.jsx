import { useState, useEffect } from "react";

import {
    Box,
    Typography
} from "@mui/material";

import './drinkSVG.css';

const DrinkSVG = ({ drinkData }) => {

    // const [ingredientHeights, setIngredientHeights] = useState([]);

    //console.log(drinkData)
    const receipeVar = {
        matrix:[drinkData.alcohol, drinkData.liquid, drinkData.garnish],
        keys:["alcohol","liquid","garnish"]
    }

    const liqVar = {
        matrix:[drinkData.alcohol, drinkData.liquid],
        keys:["alcohol","liquid"]
    }

    let ingredientHeights = []

    liqVar.matrix.forEach((mat) => {
        mat.map ((e) => {
            //console.log(e.amount)
            const value = () => {
                if (e.sliderValue) {
                    //console.log("This is the sliderValue", e.sliderValue)
                    return (e.sliderValue)
                } else {
                    //console.log("This is the amount", e.amount)
                    const newQty = Number(e.amount.match(/[0-9_.-]+/))
                    const newUnit = e.amount.match(/[a-zA-Z]+/)
                    if (newUnit == 'oz') {
                        return (newQty*2) 
                    } else if (newUnit == 'ml') {
                        return ((newQty/30)*2)
                    } else if (newUnit == null) {
                        return (newQty)
                    }
                }
            }
            //console.log(value())
            const height = value() * 10;
            ingredientHeights.push(height);
        })
    })

    //console.log(ingredientHeights)

    //Color Array
    const colors = [
        '#545E75',
        '#63ADF2',
        '#A7CCED',
        '#304D6D',
        '#82A0BC',
        '#6CCFF6',
        '#33658A',
        '#2CBAF2',
        '#5B96C2',
        '#8CD9F8'
    ]

    // Calculate y-coordinates for each svg 
    
    // const ingredientY = ingredientHeights.map((height, index) => {
    //     const sumOfPreviousHeights = ingredientHeights.slice(0, index).reduce((acc, curr) => acc + curr, 0);
    //     return 190 - sumOfPreviousHeights - height;
    //   });



    // Maps SVG rectangles to get rendered inside beaker 

    // console.log("Setting Drink Heights", ingredientHeights)
    // console.log("These are the y coordinates of ingredients", ingredientY)
    // console.log("These are the colors of ingredients", colors)

    const xInitial=[0];
    let rightVol = 0;

    const drawShape = (input,indexUltra) => {
            
            if (!input) {
                //console.log("There is NO input slider value")
                input = 0; 
            }

            
            //console.log("this is the INPUT slider #",input)

            // const splitString = input.split(' ');
            // const number = parseFloat(splitString[0]);
            // in this SVG 5400 pixelssquared = 9 oz, so 600px squared is 1 oz
            const number = input/20
            rightVol = rightVol + number;
            const volume = rightVol*550

            //console.log(xInitial)
            
            //console.log(input,volume, indexUltra, colors[indexUltra],xInitial[indexUltra]);
            //console.log("This is the index", indexUltra, "Adding up to Volume", volume)

            //We know the volume of water coming in. We need to transform that into a x coordinate to fit the function
            //We take the intergral function, and rearrange it to make x the solvable rather than area.
            const xFinal= [];
            const volValues = [];
            const xValues = [];
            const xMidValues = [];
            const yMidValues = [];
            const startX = 50;
            const startY = 50;
    
    
            const shapeFunction = {

                term1(x,i,j) {
                    return ((-0.000000000451771359401714/j) * Math.pow(x, i)) //7
                },
                term2(x,i,j){
                    return ((0.000000130964251533793/j) * Math.pow(x, i))//6
                },
                term3(x,i,j) {
                    return ((-0.0000141662742818248/j) * Math.pow(x, i))//5
                },
                term4(x,i,j) {
                    return ((0.000678242616998961/j) * Math.pow(x, i))//4
                },
                term5(x,i,j) {
                    return ((-0.0118504403980162/j) * Math.pow(x, i))//3
                },
                term6(x,i,j) {
                    return ((-0.0581443507015448/j) * Math.pow(x, i))//2
                },
                term7(x,i,j) {
                    return ((3.77840982130481/j) * Math.pow(x,i))//1
                },
                term8(x,i,j) {
                    return((3.96246146914869/j) *Math.pow(x,i))//0
                },
    
                volOut(x) {
                    
                    return (this.term1(x,8,8) + this.term2(x,7,7) + this.term3(x,6,6) + this.term4(x,5,5) + this.term5(x,4,4) + this.term6(x,3,3) + this.term7(x,2,2) + this.term8(x,1,1))
                },
    
                yOut(x) {
                    return (this.term1(x,7,1) + this.term2(x,6,1) + this.term3(x,5,1) + this.term4(x,4,1) + this.term5(x,3,1) + this.term6(x,2,1)+ this.term7(x,1,1) + this.term8(x,0,1))
                }
            }
    
            for (let x = 0; x < 100; x += 1) {
                const currentVol = shapeFunction.volOut(x)
                volValues.push(currentVol)
                xValues.push(x)
            }
            //console.log(volValues)
            //This is how we find the place to STOP X and get a Final Y value
            let currentDiff = 10000
            for (let i = 0; i < xValues.length; i ++) {
                let diff = Math.abs(volume-volValues[i])
                
                if (diff < currentDiff) {
                    //console.log("This is the index", xValues[i], "This is the volume", volValues[i], "This is the difference", diff, diff < currentDiff)
                    currentDiff = diff; 
                    xFinal[0]=xValues[i]; 
                    //console.log("The new xFinal", xFinal[0])
                }
            }
            //This sets the stage for the NEXT color. We change the X we start with and BOOM we integrate over a different part of the curve

            xInitial.push(xFinal[0])
            //console.log(xInitial[indexUltra], xFinal[0], currentDiff)

            for (let x = xInitial[indexUltra]; x <  xFinal[0]; x += .1) {
                xMidValues.push(x)
                yMidValues.push(shapeFunction.yOut(x))
            }
    
            // Now we MIRROR the x and Y values to complete the shape
            const invertX = xMidValues.map((e) => e)
            const invertY = yMidValues.map((e) => e)
    
            invertX.reverse()
            invertY.reverse()
    
            const negY = invertY.map(e => {
                return (e = e*(-1))
            })
    
            const yFinalValues = xMidValues.concat(invertX);
            const xFinalValues = yMidValues.concat(negY);
    
            const xFinalShift = xFinalValues.map((e) => (e*0.58 + startX))
            const yFinalShift = yFinalValues.map((e) => 100-(e*1*.55  + startY))
    
            //const yFinal = shapeFunction.yOut(xFinal)
            //console.log("The FINAL x,y coordinates of the volume is", xFinalShift, yFinalShift)
    
            const svgShape = (xData, yData) => {
                //console.log(xData,yData)
                if (xData.length !== yData.length) {
                    throw new Error('xData and yData must be of the same length');
                }

                if (xData.length === 0) {
                    return null
                }
                // Create the path string
                const pathData = xData.map((x, index) => `${index === 0 ? 'M' : 'L'}${x},${yData[index]}`).join(' ') + ' Z';
                
                return (
                    <path d={pathData} fill={colors[indexUltra]} stroke="black" />
                );
            }
            
                
           
            return svgShape(xFinalShift, yFinalShift)

               
    }

    const testDrawing = ingredientHeights.map((e,index) => {return (drawShape(e,index))})

    // console.log(testDrawing)

    // const rectangleMap = 
    // //receipeVar.matrix.flatMap((mat) => {
    // //return ()
    //         ingredientY.map((ingredient, index) => {
    //             //console.log("This is the box",ingredientY[index], ingredientHeights[index], colors[index])
    //             return (
    //             <rect key={`rectangle-${index}`} x="10" y={ingredientY[index]} width="130" height={ingredientHeights[index]} fill={colors[index]} />
    //         )})
    
    

    // // SVG styles
    // const beakerStyle = {
    //     stroke: '#ffffff',
    //     strokeWidth: '2px',
    //     fill: 'none'
    //     };

    

    return (
        <>
            {drinkData ? (
                <>
                        <Box className="resultsContainer" sx={{
                            }}>
                                <Box className="resultsBox">
                                    {receipeVar.matrix.map((mat, matIndex) => 
                                        <div key = {matIndex}>
                                            {mat.map((ingredient, index) => (
                                                <Typography key={index}>
                                                    {ingredient.name}: {ingredient.amount}
                                                </Typography>)
                                                )
                                            }
                                        </div>
                                        )
                                    }
                                </Box>


                                <Box className="resultsBox">
                                    <svg  viewBox="0 0 150 150" preserveAspectRatio="xMidYMid meet" width="100%" fill = "white" stroke = "white">
                                   
                                    {testDrawing}
                                        <path d="M50.34,49.16c3.69,0,8.63-.67,12.47-3.99,4.45-3.86,4.01-8.34,8.03-13.14,2.39-2.85,6.62-6.13,14.66-7.63,1.45-.39,4.26-1.36,6.91-3.81,3.1-2.87,4.24-6.17,4.65-7.63V1.97c0-.09.03-.73.56-1.16.53-.42,1.14-.31,1.27-.28.43.08.72.31.85.42.07.09.53.64.42,1.41-.14.99-1.08,1.4-1.13,1.41v.99l-.13,7.63c0,.13,0,.33,0,.56-.22,4.82-3.79,8.22-4.65,9.04-2.87,2.74-6.07,3.81-8.17,4.52-3.12,1.05-4.51.85-7.05,2.4-.68.42-2.55,1.58-4.09,3.67-1.69,2.3-1.75,4.05-2.82,8.76-1.2,5.27-1.8,7.91-3.1,10.31-1.94,3.57-3.8,4.24-6.48,7.2-2.41,2.67-5.31,7-6.91,14.13-.39,14.81-.23,25.1,0,31.92.03.8.06,1.59.14,2.68.64,8.36,1.42,18.46,8.6,24.15,5.92,4.7,14.13,4.76,15.5,4.24.05-.02.39-.15.85-.14,1.13.03,2.54.94,2.68,2.26.07.68-.22,1.24-.42,1.55h-32.63M50.34,49.16c-3.69,0-8.63-.67-12.47-3.99-4.45-3.86-4.01-8.34-8.03-13.14-2.39-2.85-6.62-6.13-14.66-7.63-1.45-.39-4.26-1.36-6.91-3.81-3.1-2.87-4.24-6.17-4.65-7.63V1.97c0-.09-.03-.73-.56-1.16-.53-.42-1.14-.31-1.27-.28-.43.08-.72.31-.85.42-.07.09-.53.64-.42,1.41.14.99,1.08,1.4,1.13,1.41v.99s.13,7.63.13,7.63c0,.13,0,.33,0,.56.22,4.82,3.79,8.22,4.65,9.04,2.87,2.74,6.07,3.81,8.17,4.52,3.12,1.05,4.51.85,7.05,2.4.68.42,2.55,1.58,4.09,3.67,1.69,2.3,1.75,4.05,2.82,8.76,1.2,5.27,1.8,7.91,3.1,10.31,1.94,3.57,3.8,4.24,6.48,7.2,2.41,2.67,5.31,7,6.91,14.13.39,14.81.23,25.1,0,31.92-.03.8-.06,1.59-.14,2.68-.64,8.36-1.42,18.46-8.6,24.15-5.92,4.7-14.13,4.76-15.5,4.24-.05-.02-.39-.15-.85-.14-1.13.03-2.54.94-2.68,2.26-.07.68.22,1.24.42,1.55h32.63M3.62,1.97h93.44"/>
                                        
                                    </svg>
                                </Box>

                                {/* <Box className="resultsBox">
                                    <svg  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" width="100%" fill = "white" stroke = "white">
                                   
                                    {testDrawing}
                                        
                                    </svg>
                                </Box> */}

                                {/* <Box className="resultsBox">
                                    <svg width="150" height="200">
                                        
                                        <rect x="0" y="0" width="150" height="200" style={beakerStyle} />
                                        
                                        { rectangleMap }
                                    </svg>
                                </Box> */}

                                
                            </Box>
                            
                            
                </>
            
            ):(
                <Typography>Error: No Data</Typography>
            )}
        </>
    )
}

export default DrinkSVG;