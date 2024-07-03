import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

//main page if not found page
const NotFound = () => {
	const { user } = useSelector(store => store.user)

	if (!user.login.length) {
		return <Navigate to='/login' />
	}
	return <Navigate to='/' />
}

export default NotFound
