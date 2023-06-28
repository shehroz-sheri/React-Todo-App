import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Divider, message } from 'antd';
import { useAuthContext } from '../../../contexts/AuthContext';

const { TextArea } = Input;

const initialState = {
  title: '',
  description: '',
  date: '',
  id: '',
  dateCreated: '',
  status: ''
}

export default function Hero() {
  const [messageApi, contextHolder] = message.useMessage();
  const { dispatch } = useAuthContext()
  const [isProcessing, setIsProcessing] = useState(false)
  const [state, setState] = useState(initialState)
  const [todos, setTodos] = useState([])
  const handleChange = (e) => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || []

    setTodos(todos)
  }, [])



  const handleAddTodo = e => {
    e.preventDefault()
    const { title, description, date } = state

    if (title.length < 3) {
      return messageApi.open({
        type: 'error',
        content: 'Add Title',
      });
    }
    if (description.length < 5) {
      return messageApi.open({
        type: 'error',
        content: 'Add Description',
      });
    }
    if (!date) {
      return messageApi.open({
        type: 'error',
        content: 'Add Date',
      });
    }
    let todo = { ...state }
    todo.id = Math.round(Math.random() * 10000).toString(32);
    todo.dateCreated = new Date();
    todo.status = "active"
    let todos = JSON.parse(localStorage.getItem("todos") || "[]");
    todos.push(todo)
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      localStorage.setItem("todos", JSON.stringify(todos))
      dispatch({ type: "SET_LOGGED_IN", payload: { todos } })
      setState(initialState)
      messageApi.open({
        type: 'success',
        content: 'Todo added Successfully',
      });
    }, 1000)
  }

  return (
    <>
    {/* <Link to="/about" className="nav-link">Show Todos</Link> */}
      {contextHolder}
      <div className="loginPage mt-2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 m-auto">

              <div className="card p-4 mt-4">
                <Form className='text-center'
                  // layout='horizontal'
                >
                  <h2 className='text-center'>Add Todo</h2>
                  <Divider />
                  <Form.Item
                    label="Title"
                  >
                    <Input placeholder='Add Title' value={state.title} name='title' onChange={handleChange} />
                  </Form.Item>
                  <Form.Item label="Date">
                    <input className='w-100' type="date" value={state.date} name='date' onChange={handleChange} />
                  </Form.Item>
                  <Form.Item
                    label="Description"
                  >

                    <TextArea rows={2} placeholder="Add Description" value={state.description} name='description' onChange={handleChange} />

                  </Form.Item>
                  

                  <Button type="success" htmlType="submit" loading={isProcessing} onClick={handleAddTodo} className='px-4 btn btn-success py-0'>
                    Add Todo
                  </Button>
                </Form>


              </div>
            </div>
          </div>
        </div>
      </div >

    </>
  )
}
