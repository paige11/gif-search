export const makeGifDisplayObjects = data => {
  return data.map(gif => {
    return {
      id: gif.id,
      fixedWidthUrl: gif.images.fixed_width.url,
      description: gif.title,
      url: gif.images.original.url
    }
  });
}
