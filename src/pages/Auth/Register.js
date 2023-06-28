import React, { useState } from 'react'
import { Button, DatePicker, Divider, Form, Input, Typography, Space } from 'antd'
import { useAuthContext } from 'contexts/AuthContext'
import { Link } from 'react-router-dom'

const { Title } = Typography

export default function Register() {

    const { dispatch } = useAuthContext()
    const [state, setState] = useState({ fullName: "", email: "", password: "" })
    const [isProcessing, setIsProcessing] = useState(false)

    // const addName = () => {
    //     let first = document.getElementById("first").value;
    //     let second = document.getElementById("second").value;
    //     console.log('first', first)
    //     console.log('second', second)
    //     setState(s => ({ ...s, [e.target.name]: e.target.value }))
    //     fullName = first + " " + second;
    //     handleChange(fullName);
    // }

    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleLogin = e => {
        e.preventDefault()

        let { fullName, email, password } = state

        const user = { fullName, email, password }
        setIsProcessing(true)
        console.log('fullName', fullName);
        setTimeout(() => {
            setIsProcessing(false)
            dispatch({ type: "SET_LOGGED_IN", payload: { user } })
            localStorage.setItem("user", JSON.stringify(user))
        }, 2000)
    }

    return (
        <main className='auth'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card p-3 p-md-4">
                            <Title level={2} className='m-0 text-center'>Register Here</Title>

                            <Divider />

                            <Form layout="vertical">
                                <Form.Item label="Full Name">
                                    <Space>
                                        <Input style={{ width: '100%' }} size={"large"} placeholder='Input your First name' id='first' name='firstName' />
                                        <Input style={{ width: '100%' }} size={"large"} placeholder='Input your Last name' id='second' name='lastName' />
                                    </Space>
                                </Form.Item>
                                <Form.Item label="Email">
                                    <Input placeholder='Input your email' name='email' onChange={handleChange} />
                                </Form.Item>
                                <Form.Item label="Password">
                                    <Input.Password placeholder='Input your password' name='password' onChange={handleChange} />
                                </Form.Item>
                                <Form.Item label="Birth Date">
                                    <DatePicker className='w-100' />
                                </Form.Item>

                                <Button type='primary' htmlType='submit' className='w-100' loading={isProcessing} onClick={handleLogin}>Register</Button>
                                <p className="text-center mt-3 mb-0">New User! <Link to="/auth/login" className="text-center">Register</Link></p>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
