import React from "react";
import './css/Loading.min.css';
import './css/PlanPage.css';
import { addRecipe, removeFromCalendar } from "../actions";
import { connect } from "react-redux";
import Card from "./Card";
import ReactModal from 'react-modal';
import Data from "../API/Data";
import RecipeSearch from "./RecipeSearch";
class PlanPage extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        loadingFood: false,
                        food: null,
                        meal: null,
                        day: null,
                        recipeSearchInput: "",
                        isRecipeModalOpen: false,
                }
        }

        searchRecipe = (e) => {
                if (!this.state.recipeSearchInput){
                        return;
                }
                e.preventDefault();
                this.setState(() => ({loadingFood: true}));
                Data.getRecipeFromPlanning(this.state.recipeSearchInput).then((res) => res.data).then(({hits}) =>hits.map(({recipe}) => recipe)).then((food) => 
                this.setState(() => ({food, loadingFood: false})));
        }

        onInputChange = (e) =>{
                e.preventDefault();
                this.setState({recipeSearchInput: e.target.value});
        }

        openRecipeModal = ({meal, day}) =>{
                this.setState(() =>( {
                        isRecipeModalOpen: true,
                        meal,
                        day,
                        recipeSearchInput:'',
                }));
        }
        closeRecipeModal = () => {
		this.setState(() => ({
			isRecipeModalOpen: false,
			meal: null,
			day: null,
			food: null,
			recipeSearchInput: '',
		}));
        };
        componentDidMount() {
                ReactModal.setAppElement('#root');
        }
        render() {
                const { calendar, selectRecipe, remove } = this.props;
                const mealOrder = ['breakfast', 'lunch', 'dinner'];
                const {  loadingFood, food, day, meal } = this.state;
                console.log(food);
                return (
                        <section className="planner-section">
                                <div className="planImage"></div>
                                <div className="search-for-recipe"></div>
                                <div className="planner-content">
                                        <div className="planner-list">
                                                {calendar.map(({day, meals}, index) => (
                                                        <ul className="drop-down-menu" key={day}>
                                                                <input type="checkbox" className="activate" id={`accordion-${index+1}`} name={`accordion-${index+1}`}></input>
                                                                <label htmlFor={`accordion-${index+1}`} className="menu-title">{day}</label>
                                                                <div className="drop-down">
                                                                        {mealOrder.map((meal) => (
                                                                                <li key={meal} className='meal'>
                                                                                        <div className="sub-planning-label">{meal}</div>
                                                                                        { meals[meal] ? 
                                                                                                <div className="recipe-planning-item">
                                                                                                        <Card  backgroundImage={meals[meal].image}  calories={meals[meal].calories} props={this.props}
                                                                                                        title={meals[meal].label} source={meals[meal].source} ingredientsLength={meals[meal].ingredients.length} /> 
                                                                                                        <button onClick={() => remove({meal,day})}>Clear</button>
                                                                                                </div>
                                                                                                : <button onClick={() => this.openRecipeModal({meal, day})} className="open-recipe-button">
                                                                                                        <i className="fa fa-calendar" style={{width:30,height:30}}/>
                                                                                                </button>
                                                                                        }
                                                                               </li>
                                                                        ))}
                                                                </div>
                                                        </ul>
                                                ))}
                                        </div>
                                </div>
                                <div  className="modal">
                                        <ReactModal label="Recipe Search Modal" isOpen={this.state.isRecipeModalOpen} shouldCloseOnEsc={true}
                                                onClose={this.closeRecipeModal}>
                                                <RecipeSearch
                                                        isLoading={loadingFood}
                                                        selectRecipe={selectRecipe}
                                                        searchRecipe={this.searchRecipe}
                                                        food={food}
                                                        onInputChange={this.onInputChange}
                                                        day={day}
                                                        meal={meal}
                                                        closeRecipeModal={this.closeRecipeModal}
                                                />
                                        </ReactModal>
                                </div>
                                
                        </section>

                );

        }
}

const mapStateToProps = ({ calendar, food }) => {
        const dayOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
        console.log(calendar);
        console.log(food);
        return {
                calendar: dayOrder.map(day => ({
                        day,
                        meals: Object.keys(calendar[day]).reduce((meals, meal) => {
                                meals[meal] = calendar[day][meal] ? food[calendar[day][meal]] : null;
                                console.log(meals[meal])
                                console.log(meal);
                                console.log(calendar[day][meal])
                                return meals;
                        }, {})
                })),
        };
};

const mapDispatchToProps = (dispatch) => ({
        selectRecipe: (data) => dispatch(addRecipe(data)),
        remove: (data) => dispatch(removeFromCalendar(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlanPage);