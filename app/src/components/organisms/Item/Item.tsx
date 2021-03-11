import React, { FC } from 'react';
import { PostInterface } from '@src/interfaces/post.interface';

interface Props {
  props: PostInterface
}

export const Item:FC<Props> = ({ props }): JSX.Element => {
  return (
    <div>
      <p>{ props.id }</p>
      <p>{ props.title }</p>
      <p>{ props.body }</p>
    </div>
  )
}