import React,{useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { fetchUsers } from '../Redux/Users/userActionCreator'
function UserContainer() {
    const dispatch = useDispatch()
    const userDetails = useSelector((state)=> state.users.data)
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
  return (
    <div>
        userContainer
        {
            console.log(userDetails)
        }
        {
        userDetails && userDetails.map(user=> <div key={user.id}>{user.name}</div>)
        }
        </div>
  )
}

export default UserContainer