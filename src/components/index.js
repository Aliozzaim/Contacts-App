import React, { useState } from 'react'

function List({ contacts }) {
  const [filterText, setFilterText] = useState('');

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
    );
  })

  return (
    <div >
      <input placeholder='Filter Contact' value={filterText} onChange={(e) => setFilterText(e.target.value)} />
      <ul className='list'>
        <div className='nav'><p>Name</p> <p className='p'>Contacts Numbers</p></div>
      
        {        
          filtered.map((contact, i) => (
         
            <li key={i}>
      
              
              <span>{contact.fullname}</span>
              <span>{contact.phone_number}</span>
            </li>
          ))
        }
      </ul>

      <p>Total Contacts ({filtered.length})</p>
    </div>
  )
}

export default List




// function List(contacts) {

//   return (
//     <div>
//       <input value={setFilter}  placeholder='Filter Contact' />
//       <ul>{
//       contacts.map((data , i)=>(
//           <li key={i}>{data.Fullname}</li>
        

//           ))
        
//         }

//       </ul>
//     </div>
//   )
// }

// export default List