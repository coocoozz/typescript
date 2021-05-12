{
  type Video = {
    title: string;
    author: string;
  };
  // 아래와 같이 Video 타입의 변경에 따라 같이 수정해주어야 할 타입들이 있을경우 비효율적....
  type VideoOptionalBad = {
    title?: string;
    author?: string;
  };
  type VideoReadOnlyBad = {
    readonly title: string;
    readonly author: string;
  };

  // Optional example
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };
  type VideoOptionalGood = Optional<Video>;
  const videoOp: VideoOptionalGood = {};

  // Readonly example
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  type VideoReadOnlyGood = ReadOnly<Video>;
  const videoRo: VideoReadOnlyGood = {
    title: 'kk',
    author: 'lkl',
  };

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
  const test: Nullable<Video> = {
    title: null,
    author: null,
  };
}
