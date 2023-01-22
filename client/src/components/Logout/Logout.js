import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import {useAuth} from "../AuthenticateAdmin/AuthenticateAdmin"

export const Logout = () => {
  const navigate = useNavigate()
  const auth = useAuth()

  localStorage.removeItem("customerId")
  auth.logout()

  useEffect(()=>{
    navigate('/')
  })
}
