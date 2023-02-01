import React from 'react'
import './sidebar.css'
<<<<<<< HEAD
const Sidebar = () => {
  return (
    <div className='sidebar'>Sidebar</div>
  )
}

=======

type SidebarSectionName = {
  name:string,
  data:string[]
}
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarSection name={"Meal"} data={["Musaka","Przenice","Baklava" ,"Gulas","Jabukovaca","Jabukovaca","Jabukovaca"]} /> 
      <SidebarSection name={"Ingredient"} data={["Jaje","Meso","Krompir","Krasatavac","Voda","Voda","Voda","Voda","Voda","Voda","Rakija"]}/>
    </div>
  )
}
//
//


const SidebarSection:React.FC <SidebarSectionName> = ({name,data}) => {
  return (
    <div className='sidebarSection'>
      <p className="sectionName">{name}</p>
      <div className="sectionItems">
      {
        data.map((item,id)=>{
          return (
            <p key={id} className="item">{item} -</p>
          )
        })
      }
      </div>
    </div>
  )
}




>>>>>>> bozin-dev
export default Sidebar