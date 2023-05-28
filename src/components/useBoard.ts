// import { useMemo } from 'react';
// export const useBoard = ({
//   stockedBlocks,
//   floatingBlocks,
// }: {
//   userInputs: (0 | 1 | 2 | 3)[][];
//   bombMap: number[][];
// }) => {
//   const board = useMemo(() => {
//     const board: number[][] = [
//       [-1, -1, -1, -1, -1, -1, -1, -1, -1],
//       [-1, -1, -1, -1, -1, -1, -1, -1, -1],
//       [-1, -1, -1, -1, -1, -1, -1, -1, -1],
//       [-1, -1, -1, -1, -1, -1, -1, -1, -1],
//       [-1, -1, -1, -1, -1, -1, -1, -1, -1],
//       [-1, -1, -1, -1, -1, -1, -1, -1, -1],
//       [-1, -1, -1, -1, -1, -1, -1, -1, -1],
//       [-1, -1, -1, -1, -1, -1, -1, -1, -1],
//       [-1, -1, -1, -1, -1, -1, -1, -1, -1],
//     ];
//   }, [stockedBlocks,floatingBlock]);
//   return board;
// };