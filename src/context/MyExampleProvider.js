import React,  {useState} from 'react';
import MyExampleContext from './MyExampleContext';

const MyExampleProvider = ({children}) => {
    const [value1, setValue1] = useState(8);
    const [value2, setValue2] = useState(9);
    

    return (

        <div>
            <MyExampleContext.Provider
            value={{
                myValue1 : value1,
                myValue2 : value2,
                updateValue1: setValue1,
                updateValue2: setValue2
                }}>
                {children} 
            </MyExampleContext.Provider>
        </div>
    );

}

export default MyExampleProvider;
