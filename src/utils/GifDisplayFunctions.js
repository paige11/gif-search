export const makeGifDisplayObjects = data => {
  return data.map(gif => {
    return {
      id: gif.id,
      fixedHeightUrl: gif.images.fixed_height.url,
      description: gif.title,
      url: gif.images.original.url
    }
  });
}
