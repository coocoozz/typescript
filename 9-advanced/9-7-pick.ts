{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id: id,
      title: 'a',
      url: 'http:////',
      data: 'ddddd',
    };
  }

  type VideoMetadata = Pick<Video, 'id' | 'title'>;
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    };
  }
}
