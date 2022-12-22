import React, { Component } from 'react';
import MainLayout from '../../layout/Main';
import RegisterPageContainer from './containers/RegisterPage';

interface IRegisterProps {}

export default class RegisterPage extends Component<IRegisterProps> {
    render(): JSX.Element {
        return(
            <MainLayout>
                <RegisterPageContainer />
            </MainLayout>
        )
    }
}