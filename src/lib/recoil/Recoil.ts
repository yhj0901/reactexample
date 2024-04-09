import { atom, selector } from 'recoil';

export const radioButtonState = atom({
  key: 'radioButtonState',
  default: '',
});

export const checkBoxState = atom({
  key: 'checkBoxState',
  default: [] as string[],
});

export const checkBoxStateText = selector({
  key: 'checkBoxStateText',
  get: ({ get }) => {
    const selected = get(checkBoxState);
    return selected.join(', ');
  },
});

export const todoState = atom({
  key: 'todoState',
  default: [] as string[],
});

export const todoStateText = selector({
  key: 'todoStateText',
  get: ({ get }) => {
    const selected = get(todoState);
    console.log(selected);
    return selected;
  },
});

export const todoList = atom({
  key: 'todoList',
  default: [] as string[],
});

export const todoListText = selector({
  key: 'todoListText',
  get: ({ get }) => {
    const selected = get(todoList);
    return selected;
  },
});
