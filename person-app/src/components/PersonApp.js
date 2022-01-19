import React, { useState } from 'react'
import PersonDetail from './PersonDetail'
import PersonList from './PersonList'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function PersonApp() {
    
   const[person,setPerson]= useState([
       {
           id:1,
           name:'KL Rahul',
           age:29,
           image:'https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/KL-Rahul-KXIP_1200.jpg?itok=hPOowNe9'
           
       },
       {
           id:2,
        name:'Mayank Agarwal',
        age:30,
        image:'https://pbs.twimg.com/profile_images/1138009974070661120/0PBG8hZQ_400x400.jpg'
        
    },
    {
        id:3,
        name:'Manish Pandey',
        age:32,
        image:'https://cricketaddictor.com/wp-content/uploads/2021/03/Manish-Pandey-2.jpg'
        
    }
   ])
   const[cardValue,setcardValue]=useState(null)
    return (
        <Router>
            <div>
            <div>
                <Link to='/personlist'>PersonList</Link>
                {/* {cardValue?<Link to='/persondetail'>persondetail</Link>:''} */}
            </div>
            
            <Route exact path='/personlist' component={PersonList}>
            <PersonList person={person} setPerson={setPerson} cardValue={cardValue} setcardValue={setcardValue}/>
            </Route><br></br><br></br><br></br>
           {cardValue?
            <PersonDetail person={person} setPerson={setPerson} cardValue={cardValue} setcardValue={setcardValue}/>
           :''}
            
        </div>
        </Router>
    )
}

export default PersonApp
