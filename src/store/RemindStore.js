import {makeAutoObservable} from 'mobx'

class Remind{
    constructor(){
        makeAutoObservable(this);
    };

    remindArray = [];

    getDataFromLocalStorage = ()=>{
        var data = JSON.parse(localStorage.getItem("remind"));
        this.remindArray = data;//assign localstorage data back to array
    }

    addRemind = ({content, date}) =>{
        this.remindArray.push({content, date});
        localStorage.setItem("remind", JSON.stringify(this.remindArray)); 
        console.log('arr',this.remindArray);
    };

    deleteItem = (indexItem) => {
        this.remindArray.splice(indexItem, 1);
        localStorage.setItem("remind", JSON.stringify(this.remindArray)); 
      };
}


const remindStore = new Remind();
export default remindStore;