import React from 'react';
import { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { HomeCard } from '../components/homeCard';
import { StandardLayout, FlexLayout } from '../layouts';

const HomePage: FC<RouteComponentProps> = () => {
  return (
    <>
      <HomeCard
        title="Vous êtes musicien"
        description="Vous cherchez un groupe"
        url="/ads"
        urlDescription="Par ici"
      />
      <HomeCard
        title="Vous êtes un groupe"
        description="Vous cherchez un/des musicien(s)"
        url="/ads"
        urlDescription="Par ici"
      />
    </>
  );
};

export default HomePage;
