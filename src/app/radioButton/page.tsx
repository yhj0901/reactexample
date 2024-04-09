import dynamic from 'next/dynamic';

const RadioButtonComponent = dynamic(
  () => import('@/presenter/component/radioButton/RadioButton')
);
const RadioButtonPage = () => {
  return (
    <RadioButtonComponent options={['전용수', '이문', '양희준', '박현정']} />
  );
};

export default RadioButtonPage;
