import React from 'react';
import styles from './Auth.module.scss'
import {Controller, useForm} from "react-hook-form";
import {IUserLogin, IUserRegistration} from "../../../types/IUser";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {registrationAsync} from "../../../store/actions/authActions";
import {RootState} from "../../../store/store";

const Registration = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);
    const {control, handleSubmit, setValue, setError, clearErrors, formState: {errors}} = useForm<IUserRegistration>();
    const onSubmit = (data: IUserRegistration | IUserLogin) => {
        dispatch(registrationAsync(data as IUserRegistration));
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Registration</h1>
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
                    <label htmlFor='email'>Email</label>
                    <Controller
                        name='email'
                        control={control}
                        rules={{
                            required: 'Email is required',
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
                <button type='submit' disabled={!user.isReceiveResponse}>Registration</button>
            </form>
        </div>
    );
};

export default Registration;
