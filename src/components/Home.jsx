import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <Link to={'/form'}>
      <Button variant="primary">
        Обратная связь
      </Button>
      </Link>
    </div>
  )
}

export default Home