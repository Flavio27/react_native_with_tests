import { selector } from 'recoil'

import { postNameState } from './atoms'

export const upperPostName = selector({
  key: 'upperPostNameState',
  get: ({ get }) => {
    const postName = get(postNameState)
    const newPostName = postName.toUpperCase()
    return newPostName
  },
})
