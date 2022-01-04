const API_KEY='d2e74c3dd9f338993551eddc09f2f689';

const request={
    fetchTrending:`trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`discover/movie?api_key=${API_KEY}&with_genres=28`
}

export default request;