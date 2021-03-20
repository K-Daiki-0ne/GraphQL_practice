import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useCreatePost } from '@src/hooks/useCreatePost';
import styles from './Form.module.scss';

interface FormData {
  title: string;
  body: string;
}

export const Form: FC = (): JSX.Element => {
  const { register, handleSubmit } = useForm<FormData>();
  const createPost = useCreatePost()

  const onSubmit = handleSubmit(({ title, body }) => {
    createPost({ variables: {
      input: {
        title, 
        body
      }}
    })
  })

  return (
    <div className={styles.form}>
      <h1 className={styles.title} >Post Data Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formContent}>
          <input type="text" name="title" ref={register} className={styles.title}  placeholder='title' />
          <textarea name="body" ref={register} className={styles.body} placeholder='content' />
          
          <input type="submit" className='submit' />
        </div>
      </form>
    </div>
  )
}