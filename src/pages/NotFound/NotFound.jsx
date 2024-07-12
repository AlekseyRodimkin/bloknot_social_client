import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userSelector } from '../../redux/reselect'

//if not found page
const NotFound = () => {
	const { user } = useSelector(userSelector)

	if (!user.login.length) {
		return <Navigate to='/login' />
	}
	return <Navigate to='/' />
}

export default NotFound
