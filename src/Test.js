import React from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';
import Search from './search/Search';
// const Test = () => {

//     const [users, setUsers] =  React.useState([])
//     React.useEffect(()=>{
//         fetch("https://hello.loca.lt/v1/auth/register", {
//             method : 'POST',
//             body: JSON.stringify({
//                 name:"Praeek Vishwakarma",
//                 email: "ABC@GAMIL.COM",
//                 password: "123456789"
//             })
//         })
//         .then(response => response.json())
//         .then(json => console.log(json))
//     },[])

//   return (
//     <div>Test</div>
//   )
// }

const Test = () =>{
    const { error, isPending, data: blogs } = useFetch('https://hello.loca.lt/v1/product/search?searchKey=Titan')

    return (
      <div className="home">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { blogs && <BlogList blogs={blogs} /> }
      </div>
    );
}

export default Test