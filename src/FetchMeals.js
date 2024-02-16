import axios from "axios";

//const MyURL = "http://localhost:4000"
const MyURL = "https://mealplan-h9xs.onrender.com"
const saveMealsEndpoint = "/saveMeals";
const editMealEndpoint = "/editMeal";
const deleteMealEndpoint = "/deleteMeal";

const getAllMeals = (setMeal)=>{
    axios.get(`${MyURL}`)
    .then(({data}) => {console.log(data);
        setMeal(data)
    })  
}

// ДОБАВЛЕНИЕ ЕДЫ
//если мы добавляем еду, то и вся остальная еда должна отобразиться
// setMeal - вся наша еда
const addMeal = (title, setTitle, setMeal) =>{
    axios.post( `${MyURL}${saveMealsEndpoint}` , { title }) //saveMeals , title - из router
    .then((data) =>{
        console.log(data);
        setTitle(""); 
        getAllMeals(setMeal) //отображаем всю остальную еду -> добавляем на button ADD
    })
}

//РЕДАКТИРОВАНИЕ ЕДЫ
//mealId - id конкретного элемента
//title - работаем с текстом
//setTitle - возможность менять текст/название
//setMeal - возмоэность менять meal
//setEditing - когда мы хотим что-то менять. Изначально стоит на false
//когда мы переходим на страницу, то по умолчанию ты не можешь менять
//а можешь менять тогда, когда кликнешь на кнопку реадктирования
// для этого надо setEditing
//обрати внимание, что это post запрос. В MealRouter стоял put там, где editMeal
//и поэтому была ошибка 404

const editMeal = (mealId, title, setTitle, setMeal, setEditing) =>{
    axios.post( `${MyURL}${editMealEndpoint}`, { _id: mealId, title }) //editMeal , title - из router
    .then((data) =>{
        console.log(data);
        setTitle(""); 
        setEditing(false);
        getAllMeals(setMeal) //отображаем всю остальную еду 
    })
}

const deleteMeal = (_id, setMeal)=>{
    axios.post(`${MyURL}${deleteMealEndpoint}`, {_id }) //editMeal , title - из router
    .then((data) =>{
        console.log(data);
        getAllMeals(setMeal) //отображаем всю остальную еду 
    })

}

export {getAllMeals, addMeal , editMeal, deleteMeal};