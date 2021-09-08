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
            <h2 className="header">Please Click on Title Name below Image to open the specified project</h2>
            <h3 className="header">Every single project is compatable with both android and desktop view</h3>
            <p className="exception">Except This One</p>
        </div>

        <div className="main-container">
            <div className="container">
                <div className="projects">
                    <img className="images" src={tinder}></img>
                    <a className="name" href="https://tinder-apppp.herokuapp.com/%20deployed%20to%20Heroku" target="_blank"> Tinder </a>
                </div>

                <div className="projects">
                    <img className="images" src={parking}></img>   
                    <a className="name" href="https://parking-lot-appp.herokuapp.com/%20deployed%20to%20Heroku" target="_blank"> Parking Lot </a>
                </div>

                <div className="projects">   
                    <img className="images" src={bank}></img>
                    <a className="name" href="https://bank-appp.herokuapp.com/%20deployed%20to%20Heroku" target="_blank"> Banking App </a>
                </div>
            </div>

            <div className="container">
                <div className="projects">   
                    <img className="images" src={calcultor}></img>
                    <a className="name" href="https://react-calculato.herokuapp.com/%20deployed%20to%20Heroku" target="_blank"> Android Calculator </a>
                </div>

                <div className="projects">
                    <img className="images" src={quiz}></img>   
                    <a className="name" href="https://r-quiz.herokuapp.com/%20deployed%20to%20Heroku" target="_blank"> Quiz </a>
                </div>

                <div className="projects">
                    <img className="images" src={toDoList}></img>
                    <a className="name" href="https://r-to-do-list.herokuapp.com/%20deployed%20to%20Heroku" target="_blank"> To Do List </a>
                </div>
            </div>

            <div className="container-flex">
                <div className="projects">
                    <img className="images" src={tipCalculator}></img>
                    <a className="name" href="https://tip-calculatorr.herokuapp.com/%20deployed%20to%20Heroku" target="_blank"> Tip Calculator </a>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
