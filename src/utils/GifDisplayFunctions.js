export const makeGifDisplayObjects = data => {
  return data.map(gif => {
    return {
      id: gif.id,
      fixedWidthUrl: gif.images.fixed_height.url,
      description: gif.title,
      url: gif.images.original.url
    }
  });
}
 //paige height
