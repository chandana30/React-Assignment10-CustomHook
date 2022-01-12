import React, { useState } from 'react'

const useCounter=(initialValue,val)=>{
    const[count,setcount]=useState(initialValue);


const increment=(value)=>{
    if(!isNaN(value)){
        setcount(count+val+value);
    }else{
        setcount(count+val);
    }
    };
    const decrement=(value)=>{
        console.log(value);
        if(!isNaN(value)){
            setcount(count-val-value);
        }else{
            setcount(count-val);
        }
        };
    const reset=(value)=>{
        if(value){
            setcount(value);
        }else{
            setcount(initialValue);
        }
        };
    return [count,increment,decrement,reset];
    };
export default useCounter;
    


