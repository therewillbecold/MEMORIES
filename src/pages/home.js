import React from 'react';
import ReactDOM from 'react-dom';
import {  InputItem, WhiteSpace, Button , } from 'antd-mobile';
import { createForm } from 'rc-form';
import './home.scss';


class Home extends React.Component {
    render() {
        return <div className='home'>
            <h1>MEMORIES</h1>
            <div className="space"></div>
            <WhiteSpace />
            <InputItem
                editable={false}
                value = 'Username'
            ></InputItem>
            <WhiteSpace />
            <InputItem
                editable={false}
                type="password"
                value='****'
            ></InputItem>
            <span className="pw">forget?</span>
            <WhiteSpace />
            <Button type="primary">log in</Button>

            <p className='err'>Sorry. your password was incorrect. Please double-check your password.</p>

            <div className="box">
            again!!!
            </div>
           <div className="text">
           Has it happened a lot ?
           <p>MEMORIES</p>
           <p>now</p>
           </div>
        </div>
    }
}

const SignUpWrapper = createForm({
    validateFields: {
        email: function () {

        }
    }
})(Home);
export default SignUpWrapper