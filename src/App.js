import bank from "./component/images/bank.png"
import calcultor from "./component/images/calculator.png"
import parking from "./component/images/parking-lot.png"
import quiz from "./component/images/Quiz.png"
import tinder from "./component/images/tinder.png"
import tipCalculator from "./component/images/tip-calculator.png"
import toDoList from "./component/images/to-do-list.png"

import './App.css';

function App() {
  return (
    <div className="App">
        <div>
            <img className="images" src={tinder}></img>
            <a href="https://tinder-apppp.herokuapp.com/%20deployed%20to%20Heroku" target="_blank"> Tinder </a>
        </div>

        <div>
            <img className="images" src={parking}></img>   
            <a href="https://parking-lot-appp.herokuapp.com/%20deployed%20to%20Heroku" target="_blank"> Parking Lot </a>
        </div>

        <div>   
            <img className="images" src={bank}></img>
            <a href="https://bank-appp.herokuapp.com/%20deployed%20to%20Heroku" target="_blank"> Banking App </a>
        </div>

        <div>   
            <img className="images" src={calcultor}></img>
            <a href="https://react-calculato.herokuapp.com/%20deployed%20to%20Heroku" target="_blank"> Android Calculator </a>
        </div>

        <div>
            <img className="images" src={quiz}></img>   
            <a href="https://r-quiz.herokuapp.com/%20deployed%20to%20Heroku" target="_blank"> Quiz </a>
        </div>

        <div>
            <img className="images" src={toDoList}></img>
            <a href="https://r-to-do-list.herokuapp.com/%20deployed%20to%20Heroku" target="_blank"> To Do List </a>
        </div>

        <div>
            <img className="images" src={tipCalculator}></img>
            <a href="https://tip-calculatorr.herokuapp.com/%20deployed%20to%20Heroku" target="_blank"> Tip Calculator </a>
        </div>

    </div>
  );
}

export default App;
