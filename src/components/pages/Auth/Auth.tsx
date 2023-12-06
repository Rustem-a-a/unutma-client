import React from 'react';
import styles from './Auth.module.scss'
import {Controller, useForm} from "react-hook-form";
import {IUserLogin, IUserRegistration} from "../../../types/IUser";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginAsync, registrationAsync} from "../../../store/actions/authActions";
import {RootState} from "../../../store/store";

const Auth = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);
    const {control, handleSubmit, setValue, formState: {errors}} = useForm<IUserRegistration>();
    const onSubmit = (data: IUserRegistration | IUserLogin) => {
        if (currentPath === '/registration') {
            dispatch(registrationAsync(data as IUserRegistration));
        }
        if (currentPath === '/login') {
            dispatch(loginAsync(data as IUserLogin));
        }
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {currentPath === '/registration'
                    ? <h1>Registration</h1>
                    : <h1>Login</h1>
                }
                <div className={styles.fieldBlock}>
                    <label htmlFor='username'>Username</label>
                    <Controller
                        name='username'
                        control={control}
                        rules={{
                            required: 'Username name is required',
                            minLength: {
                                value: 5,
                                message: 'Username must have at least 5 characters long'
                            }
                        }}
                        render={({field}) => (
                            <input
                                id='username' {...field}
                                onChange={e => {
                                    setValue('username', e.target.value.trim())
                                }}
                                type='text'/>
                        )}
                    />
                    {
                        errors.username &&
                        <span>{errors.username.message}</span>
                    }
                </div>
                {currentPath === '/registration' &&
                    <div className={styles.fieldBlock}>
                        <label htmlFor='email'>Email</label>
                        <Controller
                            name='email'
                            control={control}
                            rules={{
                                required: 'Email name is required',
                                pattern: {
                                    value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email address"
                                }
                            }}
                            render={({field}) => (
                                <input
                                    id='email' {...field}
                                    type='text'
                                    onChange={e => {
                                        setValue('email', e.target.value.trim())
                                    }}/>
                            )}
                        />
                        {
                            errors.email &&
                            <span>{errors.email.message}</span>
                        }
                    </div>}

                <div className={styles.fieldBlock}>
                    <label htmlFor='password'>Password</label>
                    <Controller
                        name='password'
                        control={control}
                        rules={{
                            required: 'Password is required',
                            minLength: {
                                value: 5,
                                message: 'Password must have at least 5 characters long'
                            }
                        }}
                        render={({field}) => (
                            <input id='password' {...field} type='password' onChange={e => {
                                setValue('password', e.target.value.trim())
                            }}/>
                        )}
                    />
                    {
                        errors.password &&
                        <span>{errors.password.message}</span>
                    }
                </div>
                {currentPath === '/registration'
                    ? <button type='submit' disabled={!user.isReceiveResponse}>Registration</button>
                    : <button type='submit' disabled={!user.isReceiveResponse}>Login</button>}
            </form>
        </div>
    );
};

export default Auth;
