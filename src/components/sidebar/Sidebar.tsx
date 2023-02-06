import { createContext, useContext, useEffect, useState } from 'react';
import './sidebar.css'
import { AppContext } from '../../App';

type SidebarSection = {
  name:string;
  data:string[];
  showDelete:boolean;
}


const Sidebar = () => {

  const appContext = useContext(AppContext) as {favoriteIngredients:string[],favoriteMeals:string[],addFavoriteMeal:(arg:string)=>{},addFavoriteIngredient:(arg:string)=>{},isDark:boolean};
  const {favoriteIngredients,favoriteMeals,isDark} = appContext;


  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = ()=>{
    setShowSidebar(showSidebar=>!showSidebar);
  }

  const SidebarSection = ({name,data,showDelete}:SidebarSection) => {

  
  
    const appContext = useContext(AppContext) as {favoriteIngredients:string[],favoriteMeals:string[],addFavoriteMeal:(arg:string)=>{},addFavoriteIngredient:(arg:string)=>{},deleteMeal:(arg:string)=>{}};
    const {deleteMeal} = appContext;
    
    return (
      <div className={`sidebarSection${showSidebar?'':'Hidden'}${isDark?'Dark':''}`}>
        <p className={`sectionName${isDark?'Dark':''}`}>{name}</p>
        <div className="sectionItems">
        {
          data.map((item,id)=>{
            
            return (
              <div className="itemWrap" key={id}>
                <p key={id} className="item">{item}</p>
                {showDelete && <button onClick={()=>{deleteMeal(item)}} className='deleteItem'>X</button>}
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }




  const ingredients:string[] = [];
  return (
    <div className={`sidebar${showSidebar?'':'Hidden'}${isDark?'Dark':''}`}>
      <div className="toggleDiv">
        <button className='toggleDivButton' onClick={toggleSidebar}>{showSidebar?'<-':'->'}</button>
      </div>
      <SidebarSection name={"Meal"} data={favoriteMeals} showDelete={true}/> 
      <SidebarSection name={"Ingredient"} data={favoriteIngredients} showDelete={false}/>
    </div>
  )















  
}









export default Sidebar