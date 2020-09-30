/* 抽象数据类型线性表的定义 ：见《数据结构》 P19*/
export interface List<T> {
  ListLength(): number; // 返回线性表中元素的个数
  ListEmpty(): boolean; // 若为空表则为 true，否则返回 false

  ClearList(): boolean;
  GetElem(index: number): T;
  LocateELem(element: T, compare: () => boolean): number;
  PriorElem(currentElemetn: T): T[];
  NextElem(currentElemetn: T): T[];
  ListInsert(index: number, element: T): boolean;
  ListDelete(index: number, element: T): boolean;
  ListTraverse(visit: () => boolean): boolean;
}
