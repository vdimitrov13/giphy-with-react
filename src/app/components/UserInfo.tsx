import * as React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
@observer
export class UserInfo extends React.Component {
    @observable userInfoData = {};



};