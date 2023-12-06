import React from 'react';
import styles from './Auth.module.scss'
import {Controller, useForm} from "react-hook-form";
import {IUserLogin, IUserRegistration} from "../../../types/IUser";
import {useDispatch, useSelector} from "react-redux";
import {loginAsync} from "../../../store/actions/authActions";
import {RootState} from "../../../store/store";

const Login = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);
    const {control, handleSubmit, setValue, setError, clearErrors, formState: {errors}} = useForm<IUserRegistration>();
    const onSubmit = (data: IUserRegistration | IUserLogin) => {
        dispatch(loginAsync(data as IUserLogin));
    }
    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
                <div className={styles.fieldBlock}>
                    <label htmlFor='username'>Username</label>
                    <Controller
                        name='username'
                        control={control}
                        rules={{
                            required: 'Username is required',
                            minLength: {
                                value: 3,
                                message: 'At least 3 maximum 20 characters'
                            },
                            maxLength: {
                                value: 20,
                                message: 'At least 3 maximum 20 characters'
                            }
                        }}
                        render={({field}) => (
                            <input
                                id='username' {...field}
                                onChange={e => {
                                    if (/[^a-zяа-яА-яA-Z0-9_.-]/.test(e.target.value)) {
                                        setError('username', {
                                            type: 'manual',
                                            message: 'Possible only letters, numbers and . - _ '
                                        });
                                    } else {
                                        clearErrors('username');
                                        setValue('username', e.target.value.replace(/[^a-zяа-яА-яA-Z0-9_.-]/g, '').trim())
                                    }
                                }}
                                type='text'/>
                        )}
                    />
                    {
                        errors.username &&
                        <span>{errors.username.message}</span>
                    }
                </div>
                <div className={styles.fieldBlock}>
                    <label htmlFor='password'>Password</label>
                    <Controller
                        name='password'
                        control={control}
                        rules={{
                            required: 'Password is required',
                            minLength: {
                                value: 5,
                                message: 'At least 5 maximum 20 characters'
                            },
                            maxLength: {
                                value: 20,
                                message: 'At least 5 maximum 20 characters'
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
                <button type='submit' disabled={!user.isReceiveResponse}>Login</button>
            </form>
        </div>
    );
};

export default Login;
