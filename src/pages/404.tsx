import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button style={{backgroundColor:"blue"}} onClick={() => history.push('/user/login')}>
        Back Home
      </Button>
    }
  />
);

export default NoFoundPage;
