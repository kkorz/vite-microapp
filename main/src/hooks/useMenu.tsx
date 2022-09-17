import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const useMenu = () => {
  const menuConfig = [
    {
      label: 'Welcome',
      key: '/welcome',
      icon: <UserOutlined />,
    },
    {
      label: 'Solidjs',
      key: '/solidjs',
      icon: <UserOutlined />,
    },
    {
      label: 'Umi',
      key: 'umi',
      icon: <VideoCameraOutlined />,
      children: [
        {
          label: 'Umi4',
          key: '/umi/umi4',
          icon: <UploadOutlined />,
        },
      ],
    },
    {
      label: 'Vue',
      key: 'vue',
      icon: <UploadOutlined />,
      children: [
        {
          label: 'Vue2',
          key: '/vue/vue2',
          icon: <UploadOutlined />,
        },
        {
          label: 'Vue3',
          key: '/vue/vue3',
          icon: <UploadOutlined />,
        },
      ],
    },
  ];
  return { menuConfig };
};

export default useMenu;
