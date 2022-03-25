import RemindItem from "../components/RemindItem";
import { observer } from 'mobx-react';
import remindStore from "../store/RemindStore";
import { getCurrentDate } from '../librarys/CurrentTime.js'
import { formatTime } from '../librarys/FormatTime.js'
import React, { useState, useEffect } from 'react';

function RightPage() {

    useEffect(() => {
        remindStore.getDataFromLocalStorage()
      },[]);
    
    const renderItem = () => {
        return remindStore.remindArray.map((item, index) => {
            const styleItem = () => {
                if (formatTime(getCurrentDate()) === formatTime(item.date)) { 
                    return  {backgroundColor: '#FFA07A'};
                }
              };
            console.log('--------->',styleItem);
            return (
                <RemindItem
                    key={index}
                    {...item}
                    deleteItem={() => remindStore.deleteItem(index)}//initialize a delete variable responsible for deleting remind
                                                                    //passing this variable to the reminderItem component to use
                    style = {styleItem()}
                />
            );
        });
    };

    const remindFunction = () => {
            for (var i = 0; i < remindStore.remindArray.length; i++) {
                if (formatTime(getCurrentDate()) === formatTime(remindStore.remindArray[i].date)) { 
                   alert('Hôm nay' + remindStore.remindArray[i].content +' đó nhé.');
                   return false;
                }
            }
    };

    
    return (
        <div className="rightPage">
            <div className="border-all-item">
                {renderItem()}
                {remindFunction()}
            </div>
        </div>

    );
}
export default observer(RightPage);
