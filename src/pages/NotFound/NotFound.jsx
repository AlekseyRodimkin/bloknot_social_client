import React from 'react'
import { Navigate } from 'react-router-dom'

//main page if not found page
const NotFound = () => {
	return <Navigate to='/' />
}

export default NotFound
