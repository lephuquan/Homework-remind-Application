import { useState } from 'react';
import remindStore from '../store/RemindStore.js'
import validator from 'validator'


function LeftPage(){

    const [errorMessage, setErrorMessage] = useState('');
    const [valueInput, setValueInput]  = useState('');
    const [dateInput, setDateInput] = useState('');

    const handleAddRemind = (e) =>{
        if(valueInput === ''){
            setErrorMessage('Nội dung không được bỏ trống!');
        }else if(dateInput ===''){
            setErrorMessage('Ngày nhắc nhở không được bỏ trống!')
        }else{
            if (!validator.isDate(dateInput)) {
                setErrorMessage('Enter Valid Date!');
            }else {
                remindStore.addRemind({content: valueInput, date: dateInput});
                setErrorMessage('');
              }
        }  
    e.preventDefault();// ngăn ngừa hành động mặc định
    }
    
    return(
        <div className="leftPage">

            <label htmlFor="contentInput">Nội dung:</label> 
            <input 
                id='content'
                type={'text'} 
                placeholder={'Mời nhập nội dung của ngày'} 
                name="content" 
                value={valueInput}
                onChange={(e)=> setValueInput(e.target.value)}></input>
            <br/>
            <label  htmlFor="contentInput">Ngày nhăc:</label> 
            <input  
                id='remindDay'
                type={'date'}
                placeholder={'YYYY/MM/DD'} 
                name="date"
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}></input> 

            <button onClick={handleAddRemind} >Lưu ngày</button>
            {errorMessage && <div className="error">* {errorMessage} </div>}
        </div>
    );
}

export default LeftPage;