import Link from "next/link"


export const getStaticProps = async()=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    // mind you this is the process of fetching the data from the website 

    // the second step is to convert thedata into operable format or the json format

    const userdata = await response.json()
    

    // next step is to pass the converted data as props so that it can be used by the function lower to this
    return{
       props:{users: userdata}
        // for some reason using the small brackets was not acceptable for the compiler itself
    }
        

}


const Users = ({users}) => {
    // what ever the form of the props is, the form should not be changed while passing it into the function 
    return ( 
    
    <>
    <div className="container">
        <h1 className="text-center"> Users</h1>

        {
            users.map(user=><li key={user.id}   className="list-unstyled"><Link href={`/${user.id}`}><a>{user.name}</a></Link></li>)

            
            

        }

    </div>
    
    </> 
    
    
    );
}
 
export default Users;