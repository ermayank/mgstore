import React, { useState } from 'react'
import { Form, Button, Col, FormControl } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  const [keyword, setKeyword] = useState('')
  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 mx-sm-5'
      ></Form.Control>
      <Button type='submit' variant='outline-success'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
