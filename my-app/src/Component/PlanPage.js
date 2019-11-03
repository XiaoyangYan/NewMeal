import React from "react";
import './css/Loading.min.css';
import './css/PlanPage.css';


class PlanPage extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                }
        }

        render() {
                return (
                        <>
                        <div class="planImage"></div>
                        <div class="content">
                                <div id="saved">
                                        <div id="savedTitle">Saved Recipes</div>
                                        <div> RECIPES GO HERE</div>
                                </div>
                                <nav class="planner">

                                        <nav class="drop-down-menu first">
                                                <input type="checkbox" class="activate" id="accordion-1" name="accordion-1"></input>
                                                <label for="accordion-1" class="menu-title">Monday</label>
                                                <div class="drop-down">
                                                        <a href="#">Breakfast</a>
                                                        <div class="cardFill"></div>
                                                        <a href="#">Lunch</a>
                                                        <div class="cardFill"></div>                                                        
                                                        <a class="last" href="#">Dinner</a>
                                                        <div class="cardFill"></div>
                                                </div>
                                        </nav>
                                        <nav class="drop-down-menu">
                                                <input type="checkbox" class="activate" id="accordion-2" name="accordion-2"></input>
                                                <label for="accordion-2" class="menu-title">Tuesday</label>
                                                <div class="drop-down">
                                                        <a href="#">Breakfast</a>
                                                        <div class="cardFill"></div>
                                                        <a href="#">Lunch</a>
                                                        <div class="cardFill"></div>                                                        
                                                        <a class="last" href="#">Dinner</a>
                                                        <div class="cardFill"></div>
                                                </div>
                                        </nav>
                                        <nav class="drop-down-menu">
                                                <input type="checkbox" class="activate" id="accordion-3" name="accordion-3"></input>
                                                <label for="accordion-3" class="menu-title">Wednesday</label>
                                                <div class="drop-down">
                                                        <a href="#">Breakfast</a>
                                                        <div class="cardFill"></div>
                                                        <a href="#">Lunch</a>
                                                        <div class="cardFill"></div>                                                        
                                                        <a class="last" href="#">Dinner</a>
                                                        <div class="cardFill"></div>
                                                </div>
                                        </nav>
                                        <nav class="drop-down-menu">
                                                <input type="checkbox" class="activate" id="accordion-4" name="accordion-4"></input>
                                                <label for="accordion-4" class="menu-title">Thursday</label>
                                                <div class="drop-down">
                                                        <a href="#">Breakfast</a>
                                                        <div class="cardFill"></div>
                                                        <a href="#">Lunch</a>
                                                        <div class="cardFill"></div>                                                        
                                                        <a class="last" href="#">Dinner</a>
                                                        <div class="cardFill"></div>
                                                </div>
                                        </nav>
                                        <nav class="drop-down-menu">
                                                <input type="checkbox" class="activate" id="accordion-5" name="accordion-5"></input>
                                                <label for="accordion-5" class="menu-title">Friday</label>
                                                <div class="drop-down">
                                                        <a href="#">Breakfast</a>
                                                        <div class="cardFill"></div>
                                                        <a href="#">Lunch</a>
                                                        <div class="cardFill"></div>                                                        
                                                        <a class="last" href="#">Dinner</a>
                                                        <div class="cardFill"></div>
                                                </div>
                                        </nav>
                                </nav>
                        </div>
                        </>
                        
                );

        }
}

export default PlanPage;