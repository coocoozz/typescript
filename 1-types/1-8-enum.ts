{
  // Enum
  // Javascript
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // Typescript
  enum Days {
    Monday, // Monday = 1, 문자열 할당의 경우 모든 변수에 값을 다 할당 해야 한다
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Days.Sunday);
}
