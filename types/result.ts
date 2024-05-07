export type Item = {
  id: string,
  volumeInfo: {
    title: string,
    subtitle: string,
    authors: string[],
    imageLinks: {
      smallThumbnail: string,
      thumbnail: string,
    }
  }
}

export type Result = {
  kind: string,
  totalItems: number,
  items?: Item[],
}