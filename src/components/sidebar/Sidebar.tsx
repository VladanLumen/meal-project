import { useEffect, useState } from 'react';
import './sidebar.css'

type SidebarSectionName = {
  name:string,
  data:string[]
}
const Sidebar = () => {

  const [ingredients, setIngredients] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const data = await response.json();
      setIngredients(data.meals);
    };
    const fetchMeals = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
      const data = await response.json();
      setMeals(data.meals);
    };

    fetchIngredients();
    fetchMeals();
  }, []);

  const selectedMeals:string[] = [];
  for(let i=0;i<meals.length;i++){
    selectedMeals.push(meals[i]['strMeal']);
  }
  selectedMeals.push("Mosakue");
  console.info(selectedMeals);

 
  const selectedIngredients = ingredients.slice(0, 6);
  const selectedIngredientsNames:string[] = [];
  for(let i=0;i<selectedIngredients.length;i++){
    selectedIngredientsNames.push(selectedIngredients[i]['strIngredient']);
  }
  console.info(selectedIngredientsNames);


  return (
    <div className='sidebar'>
      <SidebarSection name={"Meal"} data={selectedMeals} /> 
      <SidebarSection name={"Ingredient"} data={selectedIngredientsNames}/>
    </div>
  )
}
//
//


const SidebarSection = ({name,data}:SidebarSectionName) => {
  return (
    <div className='sidebarSection'>
      <p className="sectionName">{name}</p>
      <div className="sectionItems">
      {
        data.map((item,id)=>{
          return (
            <p key={id} className="item">{item}</p>
          )
        })
      }
      </div>
    </div>
  )
}




export default Sidebar