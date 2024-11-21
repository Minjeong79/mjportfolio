import { create } from 'zustand';

interface Store {
  count: number;
  numitem: (i:number) => number;
}

interface StoreModalType {
  value: boolean;
  num: number;
  innum: (i:number,t:boolean) => [number, boolean];
}


export const useStore = create<Store>((set) => ({
  count: 0,
  numitem: (i) => {
    set((state) => ({ count: i })); // 상태 업데이트: count에 i를 더함
    return i; // i 값만 반환
  },
}));

export const useStoreModal = create<StoreModalType>((set) => ({
  num: 0,
  value: false,
  innum: (i,t) => {
    set((state) => ({ num: i , value:t}));
    return [i,t]; 
  },
  
}));

