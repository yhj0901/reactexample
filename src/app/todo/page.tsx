import dynamic from 'next/dynamic';

const TodoComponent = dynamic(() => import('@/presenter/component/todo/Todo'));

const TodoPage = () => {
  return <TodoComponent />;
};

export default TodoPage;
