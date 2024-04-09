import dynamic from 'next/dynamic';

const CheckBoxComponent = dynamic(
  () => import('@/presenter/component/checkBox/CheckBox')
);

const CheckBoxPage = () => {
  return <CheckBoxComponent options={['전용수', '이문', '양희준', '박현정']} />;
};

export default CheckBoxPage;
