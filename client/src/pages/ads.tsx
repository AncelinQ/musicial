import { FC, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Ad } from '../components/ad';
import { IAd } from '../components/types/types';
import { Ads } from '../data/data';

const AdPage: FC<RouteComponentProps> = ({}) => {
  const [ads, setAd] = useState(Ads);
  return (
    <div>
      {ads.map((ad, index) => (
        <Ad key={index} ad={ad} />
      ))}
    </div>
  );
};

export default AdPage;
