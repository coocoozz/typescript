{
  // Intersection Types: AND!!
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.score, person.employId, person.work());
  }

  internWork({
    name: 'kwanghwan',
    score: 11,
    employId: 111,
    work: () => {},
  });
}
