import React from 'react'
import { FC } from 'react'
import { HomeCard } from '../components/homeCard'
import { StandardLayout, FlexLayout } from '../layouts'

const HomePage: FC = () => {
  return (
    <>
      <HomeCard
        title='Vous êtes musicien'
        description='Vous cherchez un groupe'
        url='#'
        urlDescription='Par ici'
      />
      <HomeCard
        title='Vous êtes un groupe'
        description='Vous cherchez un/des musicien(s)'
        url='#'
        urlDescription='Par ici'
      />
    </>
  )
}

export default HomePage
