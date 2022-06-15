import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import buycake, { addcake } from '../Redux/Cake/cakeActionCreator'

function CakeContainer() {
    const numberOfCakes = useSelector(state=> state.cake.numberOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
        <div>Cake count - {numberOfCakes} </div>
        <button onClick={()=>dispatch(buycake())}>BuyCake</button>
        <button onClick={()=>dispatch(addcake())}>Add Cake to the Shop</button>
    </div>
  )
}

export default CakeContainer