import { FC } from 'react';
import { IUser, IAd } from '../types/types';

interface UserAdProps {
  user: IUser;
  ad: IAd;
}

const UserAd: FC<UserAdProps> = ({ user, ad }) => {
  return (
    <>
      <div className="column">
        <div className="container has-text-centered">
          <div className="card">
            <div className="card-header has-background-primary">
              <h2 className="card-header-title is-centered title is-2 has-text-white	">
                {user.firstName} {user.lastName}
              </h2>
            </div>
            <div className="card-content">
              <div className="content">
                <p></p>
                <a className="button is-primary" href={}></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAd;
