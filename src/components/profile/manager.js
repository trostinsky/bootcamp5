import React, {Component, Fragment} from 'react';
import Profile from './profile';
import Small from "./profile.small";
import Nano from "./profile.nano";
import withImage from './withImage';

const ProfileEnchanced = withImage(Profile);
const SmallEnchanced = withImage(Small);
const NanoEnchanced = withImage(Nano);

const Manager = () => (
    <Fragment>
        <ProfileEnchanced/>
        <SmallEnchanced/>
        <NanoEnchanced/>
    </Fragment>
);

export default Manager;