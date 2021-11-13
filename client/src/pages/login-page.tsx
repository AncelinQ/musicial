import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { FC } from 'react';
import { RouteComponentProps } from 'react-router';

const LoginPage: FC<RouteComponentProps> = () => {
  const [passwordType, setPasswordType] = useState('text');
  const [eyeIcon, setEyeIcon] = useState<IconProp>('eye');
  const [showPassword, setShowPassword] = useState(true);
  const [color, setColor] = useState('#57BA7A');

  useEffect(() => {
    passwordType === 'text'
      ? (setPasswordType('password'),
        setEyeIcon('eye-slash'),
        setColor('black'))
      : (setPasswordType('text'), setEyeIcon('eye'), setColor('#57BA7A'));
  }, [showPassword]);

  return (
    <div className="container">
      <h1 className="title is-1 has-text-centered">Connexion</h1>
      <div className="columns">
        <div className="column">
          <h3 className="title is-3 has-text-centered">Vous avez un compte</h3>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email" />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon="envelope" />
              </span>
              <span className="icon is-small is-right">
                <FontAwesomeIcon icon="exclamation-triangle" />
              </span>
            </div>
            <p className="help is-danger">Email introuvable</p>
          </div>
          <div className="field">
            <label className="label">
              Password{' '}
              <FontAwesomeIcon
                icon={eyeIcon}
                color={color}
                onClick={() => setShowPassword(!showPassword)}
              />
            </label>
            <div className="control has-icons-left has-icons-right">
              <input
                id="loginPassword"
                className="input"
                type={passwordType}
                placeholder="Mot de passe"
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon="lock" />
              </span>
            </div>
            <p className="help is-danger">Mot de passe incorrect</p>
          </div>
          <div className="control">
            <button className="button is-link">Connexion</button>
          </div>
        </div>
        <div className="column">
          <h3 className="title is-3 has-text-centered">
            Vous n'avez pas de compte
          </h3>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Text input" />
            </div>
          </div>
          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-success"
                type="text"
                placeholder="Text input"
                value="bulma"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
            <p className="help is-success">This username is available</p>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-danger"
                type="email"
                placeholder="Email input"
                value="hello@"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-danger">This email is invalid</p>
          </div>

          <div className="field">
            <label className="label">Subject</label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Select dropdown</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" />I agree to the{' '}
                <a href="#">terms and conditions</a>
              </label>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="radio">
                <input type="radio" name="question" />
                Yes
              </label>
              <label className="radio">
                <input type="radio" name="question" />
                No
              </label>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button className="button is-text">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
