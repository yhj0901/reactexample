import { atom, selector } from 'recoil';

enum localStorageType {
  radioButtonState = 'radioButtonState',
  checkBoxState = 'checkBoxState',
  todoState = 'todoState',
}

export const radioButtonState = atom<string>({
  key: 'radioButtonState',
  default: '',
  effects: [
    ({ setSelf, onSet }) => {
      // next.js에서는 client-side를 랜더하기 전 server-side 렌더를 수행하기 때문에
      // window 객체가 없을수 있기 때문에 window 객체가 있는지 확인
      const savedData =
        typeof window !== 'undefined'
          ? localStorage.getItem(localStorageType.radioButtonState)
          : null;
      // setSelf: atom의 값을 변경하는 함수
      if (savedData) setSelf(JSON.parse(savedData));

      // atom이 변화가 감지될 때 작동, Storage에 저장
      // setSelf에 의해서는 작동하지 않음
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(localStorageType.radioButtonState)
          : localStorage.setItem(
              localStorageType.radioButtonState,
              JSON.stringify(newValue)
            );
      });
    },
  ],
});

export const checkBoxState = atom({
  key: 'checkBoxState',
  default: [] as string[],
  effects: [
    ({ setSelf, onSet }) => {
      const savedData =
        typeof window !== 'undefined'
          ? localStorage.getItem(localStorageType.checkBoxState)
          : null;
      if (savedData) setSelf(JSON.parse(savedData));

      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(localStorageType.checkBoxState)
          : localStorage.setItem(
              localStorageType.checkBoxState,
              JSON.stringify(newValue)
            );
      });
    },
  ],
});

/**
 * 투두리스트의 개인, 직장, 학교에 대한 선택 사항을 저장하는 atom
 */
export const todoState = atom({
  key: 'todoState',
  default: [] as string[],
  effects: [
    ({ setSelf, onSet }) => {
      const savedData =
        typeof window !== 'undefined'
          ? localStorage.getItem(localStorageType.todoState)
          : null;
      if (savedData) setSelf(JSON.parse(savedData));

      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(localStorageType.todoState)
          : localStorage.setItem(
              localStorageType.todoState,
              JSON.stringify(newValue)
            );
      });
    },
  ],
});

/**
 * 투두리스트의 선택된 값들을 문자열로 변환
 */
export const todoStateText = selector({
  key: 'todoStateText',
  get: ({ get }) => {
    const selected = get(todoState);
    console.log(selected);
    return selected;
  },
});
