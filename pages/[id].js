// the reason this page exists is because we want this page to be dynamic

export const getStaticpaths = async()=>{
// this is for generating an unique path for the users
const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
const userdata = await response.json()
// at this stage userdata is the array extracted from the fake placeholder site 

// for the creation of an unique path

const paths = userdata.map(data=>{

return{

    params:{
        id: data.id.tostring()

        // params is used in other types as well and this is for the creation of a unique url link
    }

}

})
return{
    paths, 
    fallback:false
    // this line of code ensures that when data is not found, the code will link to a page not found page 
}


}

export const getStaticProps = async(context)=>{
    const id = context.params.id
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    // each id can be used for accessing the data of the users and this is the reason why id is used in this manner
    const userdata = await response.json()

    return{
        props: {userinfo:userdata}
    }




}

const UserDetails = ({userinfo}) => {
    return ( 
    
    <>
    <h1>{userinfo.name}</h1>
    <h1>{userinfo.username}</h1>
    <h1>{userinfo.address.street}</h1>
    <h1>{userinfo.phone}</h1>
    <h1>{userinfo.company.name}</h1>

    
    </> );
}
 
export default UserDetails;