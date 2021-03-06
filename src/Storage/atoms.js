import { atom } from 'recoil'

export const postNameState = atom({
  key: 'postName',
  default: '',
})

export const postListState = atom({
  key: 'postList',
  default: [],
})

export const selectedPostState = atom({
  key: 'selectedPost',
  default: {},
})
