import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { HomeCard } from '../components/home';
import { StandardLayout, FlexLayout } from '../layouts';
import { useForm, SubmitHandler } from 'react-hook-form';

const HomePage: FC<RouteComponentProps> = () => {
  return (
    <>
      <HomeCard
        title="Vous êtes musicien"
        description="Vous cherchez un groupe"
        url="/bands"
        urlDescription="Par ici"
      />
      <HomeCard
        title="Vous êtes un groupe"
        description="Vous cherchez un/des musicien(s)"
        url="/musicians"
        urlDescription="Par ici"
      />
    </>
  );
};

export default HomePage;
