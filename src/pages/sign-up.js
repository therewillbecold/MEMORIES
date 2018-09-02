import React from 'react';
import ReactDOM from 'react-dom';
import { List, InputItem, WhiteSpace,Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import './sign-up.scss';


class SignUp extends React.Component {
    render() {
        const { getFieldProps } = this.props.form;
        return <div className='sign-up'>
            <h1>MEMORIES</h1>
            <WhiteSpace />
            <List>
                <InputItem
                    {...getFieldProps('email')}
                    type="email"
                    placeholder="example@gmail.com"
                >E-mail</InputItem>
                <InputItem
                    {...getFieldProps('username')}
                    type="username"
                    placeholder='TaylorHill '
                >Username</InputItem>
                <InputItem
                    {...getFieldProps('password')}
                    type="password"
                    placeholder="****"
                >Password</InputItem>
                <InputItem
                    {...getFieldProps('password')}
                    type="confirmPassword"
                    placeholder="****"
                >Confirm password</InputItem>
            </List>
            <WhiteSpace />
            <Button type="ghost">Sign up </Button>
        </div>
    }
}

const SignUpWrapper = createForm({
    validateFields: {
        email: function () {

        }
    }
})(SignUp);

export default SignUpWrapper