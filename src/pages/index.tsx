import React, { useEffect, useState } from 'react';
import TemplateOne from './components/templateOne';
import { axiosPost } from '@/apiConfig/request';
import { post } from '@/apiConfig/axiox';
import { RouteComponentProps } from 'react-router-dom';

export interface TProps extends RouteComponentProps {
  name?: string;
}

import { MailOutlined } from '@ant-design/icons';

export default (props: TProps) => {
  const [data, setresData] = useState([]);
  useEffect(() => {
    // axios.post('/api/users/create')
    const res = axiosPost({
      url: '/api/users/create',
      data: { ad: 1 },
    });
    console.log();

    // .then((res)=>{
    //   console.log(res,'popp');

    // })
    post('/users/create', {}).then(res => {
      console.log(res, 'asdasdsada');
      setresData(res);
    });
  }, []);
  const menuData = [
    {
      title: 'Navigation One',
      icon: <MailOutlined />,
      key: '1',
      children: [
        {
          title: 'Option 1',
          key: '1-1',
          children: [
            {
              title: 'Option 11',
              key: '1-1-1',
            },
            {
              title: 'Option 12',
              key: '1-1-2',
            },
          ],
        },
        {
          title: 'Option 2',
          key: '1-2',
        },
        {
          title: 'Option 3',
          key: '1-3',
        },
      ],
    },
    {
      title: 'Navigation two',
      key: '2',
      children: [
        {
          title: 'Option 1',
          key: '2-1',
        },
        {
          title: 'Option 2',
          key: '2-2',
        },
        {
          title: 'Option 3',
          key: '2-3',
        },
      ],
    },
    {
      title: 'Navigation THree',
      key: '3',
      children: [
        {
          title: 'Option 1',
          key: '3-1',
        },
        {
          title: 'Option 2',
          key: '3-2',
        },
        {
          title: 'Option 3',
          key: '3-3',
        },
      ],
    },
  ];
  return (
    <div>
      <TemplateOne menuData={menuData}>
        <div
          style={{
            width: '50%',
            height: '60px',
            backgroundColor: 'pink',
            float: 'left',
          }}
          onClick={() => props.history.push('/testPage')}
        >
          sadsssadss
        </div>
        <div
          style={{
            width: '50%',
            height: '60px',
            backgroundColor: 'black',
            float: 'left',
          }}
        >
          sadsssadss
        </div>
        <div
          style={{
            width: '50%',
            height: '60px',
            backgroundColor: 'green',
            float: 'left',
          }}
        >
          sadsssadss
        </div>
        <div>
          {data.map((i, d) => (
            <div key={d}>{i}</div>
          ))}
        </div>
      </TemplateOne>
    </div>
  );
};
