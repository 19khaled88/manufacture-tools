import React, { useEffect, useState } from 'react'

const useRegister = (user) => {
  const [userToken, setUserToken] = useState('')

  useEffect(() => {
    const email = user?.user?.email
    const currentUser = { email: email }
    if (email) {
      fetch(`https://enigmatic-ravine-64460.herokuapp.com/user/${email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const token = data.token
          localStorage.setItem('webToken', token)
          setUserToken(token)
        })
    }
  }, [user])

  return [userToken]
}

export default useRegister
