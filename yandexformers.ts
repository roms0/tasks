function maxgrade(N: number, staff: number[], K: number) {
  // Ваш код
  const grades = Array(26)
    .fill(undefined)
    .map(() => 0);
  for (let i = 0; i < staff.length; i++) {
    //@ts-ignore
    grades[staff[i]] += 1;
  }
  let res = 0;
  for (let i = grades.length - 1; i >= 0; i--) {
    if (K <= 0) break;
    //@ts-expect-error
    res += K >= grades[i] ? i * grades[i] : K * i;
    //@ts-expect-error
    K -= grades[i];
  }
  return res; // x - максимальный уровень Яндексформера
}

maxgrade(8, [1, 1, 1, 1, 25, 25], 3);
