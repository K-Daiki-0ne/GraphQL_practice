import React, { FC } from 'react';
import { Item } from '@src/components/organisms';
import { PostInterface } from '@src/interfaces/post.interface';


interface Props {
  props: PostInterface[]
}

export const Post:FC<Props> = ({ props }): JSX.Element => {
  return (
    <div className='post'>
      {
        props.map((post: PostInterface, key: number) => {
          return (
            <div key={key}>
              <Item props={post}/>
            </div>
          )
        })
      }
    </div>
  )
}