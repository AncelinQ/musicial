import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RouteComponentProps } from 'react-router';

type LoginFormValues = {
  email: string;
  password: string;
};

type SignUpFormValues = LoginFormValues & {
  firstName: string;
  lastName: string;
  confirmPassword: string;
  age: number;
  gender: number;
  city: string;
  description?: string;
  picture?: string;
  experience?: number;
  goal?: number;
  styles?: string[];
  instruments?: string[];
  artistRef?: string[];
  songRef?: string[];
  websiteLink?: string[];
  audioLink?: string[];
  videoLink?: string[];
  socialLink?: string[];
  createBand?: boolean;
};

const LoginPage: FC<RouteComponentProps> = () => {
  const [loginPasswordType, setLoginPasswordType] = useState('text');
  const [loginEyeIcon, setLoginEyeIcon] = useState<IconProp>('eye');
  const [loginShowPassword, setLoginShowPassword] = useState(true);
  const [loginColor, setLoginColor] = useState('#57BA7A');
  const [signUpPasswordType, setSignUpPasswordType] = useState('text');
  const [signUpEyeIcon, setSignUpEyeIcon] = useState<IconProp>('eye');
  const [signUpShowPassword, setSignUpShowPassword] = useState(true);
  const [signUpColor, setSignUpColor] = useState('#57BA7A');
  const [confirmationPasswordType, setConfirmationPasswordType] =
    useState('text');
  const [confirmationEyeIcon, setConfirmationEyeIcon] =
    useState<IconProp>('eye');
  const [confirmationShowPassword, setConfirmationShowPassword] =
    useState(true);
  const [confirmationColor, setConfirmationColor] = useState('#57BA7A');

  const [formStep, setFormStep] = useState(0);

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    watch: watchLogin,
    formState: { errors: errorsLogin }
  } = useForm<LoginFormValues>();

  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    watch: watchSignUp,
    formState: { errors: errorsSignUp }
  } = useForm<SignUpFormValues>();

  const onLoginSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log(data);
  };

  const onSignUpSubmit: SubmitHandler<SignUpFormValues> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    loginPasswordType === 'text'
      ? (setLoginPasswordType('password'),
        setLoginEyeIcon('eye-slash'),
        setLoginColor('black'))
      : (setLoginPasswordType('text'),
        setLoginEyeIcon('eye'),
        setLoginColor('#57BA7A'));
  }, [loginShowPassword]);

  useEffect(() => {
    signUpPasswordType === 'text'
      ? (setSignUpPasswordType('password'),
        setSignUpEyeIcon('eye-slash'),
        setSignUpColor('black'))
      : (setSignUpPasswordType('text'),
        setSignUpEyeIcon('eye'),
        setSignUpColor('#57BA7A'));
  }, [signUpShowPassword]);

  useEffect(() => {
    confirmationPasswordType === 'text'
      ? (setConfirmationPasswordType('password'),
        setConfirmationEyeIcon('eye-slash'),
        setConfirmationColor('black'))
      : (setConfirmationPasswordType('text'),
        setConfirmationEyeIcon('eye'),
        setConfirmationColor('#57BA7A'));
  }, [confirmationShowPassword]);

  return (
    <div className="container">
      <h1 className="title is-1 has-text-centered">Connexion</h1>
      <div className="columns">
        <div className="column">
          <h3 className="title is-3 has-text-centered">Vous avez un compte</h3>
          <form onSubmit={handleSubmitLogin(onLoginSubmit)} method="get">
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  {...registerLogin('email')}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon="envelope" />
                </span>
                {errorsLogin.email && (
                  <span className="icon is-small is-right">
                    <FontAwesomeIcon icon="exclamation-triangle" />
                  </span>
                )}
              </div>
              {errorsLogin.email && (
                <p className="help is-danger">Email introuvable</p>
              )}
            </div>
            <div className="field">
              <label className="label">
                Mot de passe{' '}
                <FontAwesomeIcon
                  icon={loginEyeIcon}
                  color={loginColor}
                  onClick={() => setLoginShowPassword(!loginShowPassword)}
                />
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                  id="loginPassword"
                  className="input"
                  type={loginPasswordType}
                  placeholder="Mot de passe"
                  {...registerLogin('password')}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon="lock" />
                </span>
                {errorsLogin.password && (
                  <span className="icon is-small is-right">
                    <FontAwesomeIcon icon="exclamation-triangle" />
                  </span>
                )}
              </div>
              {errorsLogin.password && (
                <p className="help is-danger">Mot de passe incorrect</p>
              )}
            </div>
            <div className="control">
              <button className="button is-link">Connexion</button>
            </div>
          </form>
        </div>
        <div className="column">
          <h3 className="title is-3 has-text-centered">
            Vous n'avez pas de compte
          </h3>
          <form onSubmit={handleSubmitSignUp(onSignUpSubmit)} method="post">
            <div className="field">
              <label className="label">Prénom</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Prénom"
                  {...registerSignUp('firstName')}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Nom</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Nom"
                  {...registerSignUp('lastName')}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  {...registerLogin('email')}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon="envelope" />
                </span>
                {errorsLogin.email && (
                  <span className="icon is-small is-right">
                    <FontAwesomeIcon icon="exclamation-triangle" />
                  </span>
                )}
              </div>
              {errorsLogin.email && (
                <p className="help is-danger">Email invalide</p>
              )}
            </div>
            <div className="field">
              <label className="label">
                Mot de passe{' '}
                <FontAwesomeIcon
                  icon={signUpEyeIcon}
                  color={signUpColor}
                  onClick={() => setSignUpShowPassword(!signUpShowPassword)}
                />
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                  id="loginPassword"
                  className="input"
                  type={signUpPasswordType}
                  placeholder="Mot de passe"
                  {...registerSignUp('password')}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon="lock" />
                </span>
                {errorsSignUp.password && (
                  <span className="icon is-small is-right">
                    <FontAwesomeIcon icon="exclamation-triangle" />
                  </span>
                )}
              </div>
              {errorsSignUp.password && (
                <p className="help is-danger">
                  Le mot de passe doit contenir des lettres, chiffres et
                  caractères spéciaux
                </p>
              )}
            </div>
            <div className="field">
              <label className="label">
                Confirmation du mot de passe{' '}
                <FontAwesomeIcon
                  icon={confirmationEyeIcon}
                  color={confirmationColor}
                  onClick={() =>
                    setConfirmationShowPassword(!confirmationShowPassword)
                  }
                />
              </label>
              <div className="control has-icons-left has-icons-right">
                <input
                  id="loginPassword"
                  className="input"
                  type={confirmationPasswordType}
                  placeholder="Mot de passe"
                  {...registerSignUp('confirmPassword')}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon="lock" />
                </span>
                {errorsSignUp.password && (
                  <span className="icon is-small is-right">
                    <FontAwesomeIcon icon="exclamation-triangle" />
                  </span>
                )}
              </div>
              {errorsSignUp.password && (
                <p className="help is-danger">
                  Les mots de passe sont différents
                </p>
              )}
            </div>
            <div className="field">
              <label className="label">Ville</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  id="city"
                  className="input"
                  type="text"
                  placeholder="Ville"
                  {...registerSignUp('city')}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon="map-marker-alt" />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Je suis</label>
              <div className="control">
                <div className="select">
                  <select {...registerSignUp('gender')}>
                    <option value={1}>Un homme</option>
                    <option value={2}>Une femme</option>
                    <option value={3}>Je ne veux pas le dire</option>
                    <option value={4}>Personnaliser</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Expérience</label>
              <div className="control">
                <div className="select">
                  <select {...registerSignUp('experience')}>
                    <option value={1}>Débutant</option>
                    <option value={2}>Confirmé</option>
                    <option value={3}>Expert</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Objectifs</label>
              <div className="control">
                <div className="select">
                  <select {...registerSignUp('goal')}>
                    <option value={1}>Amateur</option>
                    <option value={2}>Semi-Pro</option>
                    <option value={3}>Pro</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Textarea"
                ></textarea>
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

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
              <div className="control">
                <button className="button is-text">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
