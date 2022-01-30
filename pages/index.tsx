import type { NextPage } from 'next';
import { FC } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import {addPost} from '../_action/post';
import { useDispatch } from 'react-redux';
import {logIn} from '../_action/user'



const Home: FC = () => {
  const dispatch = useDispatch();
  const onAddPost = () => {
    console.log();
    dispatch(addPost('test data 1'));
  }
   
  const onLogin = () => {
    dispatch(logIn({id:'wooram', password:'123'}))
  }
  return (
    <div className={styles.container}>
      <br/>
      <button type='button' onClick={onAddPost}>CLICK POST ADD</button>
      <br/>

      <button type='button' onClick={onLogin}>Login</button>
    </div>
  )
}

export default Home
