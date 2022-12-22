const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '63b0eaf9c4679d3fc69b9df5ce616120',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;