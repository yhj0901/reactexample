import dynamic from 'next/dynamic';

const TodoDayComponent = dynamic(
  () => import('@/presenter/component/todo/view/TodoDay')
);

const TodoDayPage = () => {
  return <TodoDayComponent />;
};

export default TodoDayPage;
