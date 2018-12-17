import * as React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { LoginForm } from './LoginForm';

@observer 
export class UserInfo extends React.Component{
    @observable userInfoData = {};


    
};