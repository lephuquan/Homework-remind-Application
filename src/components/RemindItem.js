import {getCurrentDate} from '../librarys/CurrentTime.js'
import {formatTime} from '../librarys/FormatTime.js'

function RemindItem({deleteItem, content, date}){

    const styleItem = () => {
        if (formatTime(getCurrentDate()) === formatTime(date)) { 
            return {backgroundColor: '#FFA07A'} 
        }
      };

    return(
        <div  className="remindItem"  style={styleItem()}>
                <div className="remindcontent">
                    <h4>{content}</h4>
                    <p>{date}</p>
                </div>
                <div className="buttonDelete">
                    <button onClick={deleteItem}></button>
                </div>
        </div>
    );
}
export default RemindItem;