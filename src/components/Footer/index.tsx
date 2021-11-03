import { DefaultFooter } from '@ant-design/pro-layout';
export default () => {
  const defaultMessage = '三峡大学出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '三峡大学启明星工作室',
          title: '三峡大学启明星工作室',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};
