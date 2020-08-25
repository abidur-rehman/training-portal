import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { updateProfile, updatePassword, resetMessage, formError } from '../../redux/profile/profile.actions';

import {
  ProfileContainer, ProfileTitle, ErrorMessageContainer, MessageContainer, NameDiv, ProfileTitleContainer,
  ProfileFormContainer, PassFormContainer, ProfleDataContainer
} from './profile.component.styles';

const Profile = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const { firstname: fnameC, lastname: lnameC, email: emailC } = currentUser;
  const [fields, setFields] = useState({
    firstname: fnameC, lastname: lnameC, email: emailC
  });
  const [change, setChange] = useState({
    profile: false, pass: false
  });
  const [pass, setPass] = useState({
    password: '', newPassword: '', repNewPassword: ''
  });
  const message = useSelector(state => state.profile.message);
  const error = useSelector(state => state.profile.error);
  const dispatch = useDispatch();
  const { password, newPassword, repNewPassword } = pass;

  useEffect(() => {
    return () => {
      dispatch(resetMessage());
    }
  }, [dispatch])

  const submitFields = event => {
    event.preventDefault();
    dispatch(updateProfile(fields.firstname, fields.lastname, fields.email, emailC));
    setChange({ ...change, profile: false });
  };

  const submitPass = event => {
    event.preventDefault();

    if (newPassword !== repNewPassword) {
      dispatch(formError('Password must match'));
      return;
    }
    if (password === newPassword) {
      dispatch(formError('New password should not be same as current password'));
      return;
    }
    dispatch(updatePassword(fields.email, password, newPassword));
    setChange({ ...change, pass: false });
  };

  const handleFieldChange = event => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
    setChange({ ...change, profile: true });
  };

  const handlePassChange = event => {
    const { name, value } = event.target;
    setPass({ ...pass, [name]: value });
    setChange({ ...change, pass: true });
  };

  const handleFocus = event => {
    dispatch(resetMessage());
  };

  return (
    <>
      <ProfleDataContainer>
        <NameDiv>{fnameC} {lnameC}</NameDiv>
        <NameDiv>{emailC}</NameDiv>
        <ProfileTitleContainer>
          <ProfileTitle>Edit Profile</ProfileTitle>
        </ProfileTitleContainer>
      </ProfleDataContainer>
      <ProfileContainer>
        <ProfileFormContainer>
          <form className='update-profile-form' onSubmit={submitFields}>
            <FormInput
              type='text'
              name='firstname'
              value={fields.firstname}
              maxLength={12}
              minLength={5}
              onChange={handleFieldChange}
              onFocus={handleFocus}
              label='First Name'
              required
            />
            <FormInput
              type='text'
              name='lastname'
              value={fields.lastname}
              maxLength={12}
              minLength={5}
              onChange={handleFieldChange}
              onFocus={handleFocus}
              label='Last Name'
              required
            />
            <FormInput
              type='email'
              name='email'
              value={fields.email}
              onChange={handleFieldChange}
              onFocus={handleFocus}
              label='Email'
              required
            />
            <CustomButton disabled={!change.profile} type='submit'>Update Profile</CustomButton>
          </form>
        </ProfileFormContainer>
        <PassFormContainer>
          <form className='update-pass-form' onSubmit={submitPass}>
            <FormInput
              type='password'
              name='password'
              value={password}
              maxLength={12}
              minLength={5}
              onChange={handlePassChange}
              onFocus={handleFocus}
              label='Current Password'
              required
            />
            <FormInput
              type='password'
              name='newPassword'
              value={newPassword}
              maxLength={12}
              minLength={6}
              onChange={handlePassChange}
              onFocus={handleFocus}
              label='New Password'
              required
            />
            <FormInput
              type='password'
              name='repNewPassword'
              maxLength={12}
              minLength={6}
              value={repNewPassword}
              onChange={handlePassChange}
              onFocus={handleFocus}
              label='Repeat new Password'
              required
            />
            <CustomButton disabled={!change.pass} type='submit'>Update Password</CustomButton>
          </form>
        </PassFormContainer>
      </ProfileContainer>
      <ErrorMessageContainer>{error ? error.text : ''}</ErrorMessageContainer>
      <MessageContainer>{message ? message.text : ''}</MessageContainer>
    </>
  );
}

export default Profile;
