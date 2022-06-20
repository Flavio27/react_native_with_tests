import React from 'react'
import { RecoilRoot } from 'recoil'
import AppRoutes from './src/Routes/AppRoutes'

export default function App() {
  return (
    <RecoilRoot>
      <AppRoutes/>
    </RecoilRoot>
  )
}
