import React from 'react';
import ReactDOM from 'react-dom';
import ant from 'antd-mobile'
import { List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import './sign-in.scss'


class SignIn extends React.Component {
    render() {
        const { getFieldProps } = this.props.form;
        return <div className='sign-in'>
            <h1>MEMORIES</h1>
            <InputItem
                // value="not editable"
                editable={true}
            >Username</InputItem>
            <WhiteSpace />
            <InputItem
                {...getFieldProps('password')}
                type="password"
                placeholder="****"
            >Password</InputItem>
            <WhiteSpace />
            <Button type="ghost">Sign in</Button>
        </div>
    }
}

const SignUpWrapper = createForm({
    validateFields: {
        email: function () {

        }
    }
})(SignIn);

export default SignUpWrapper;