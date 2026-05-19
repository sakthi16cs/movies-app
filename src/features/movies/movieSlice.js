import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

// Helpers for localStorage
const loadFavorites = () => {
  try {
    const serialized = localStorage.getItem("favorites");
    if (serialized === null) return [];
    return JSON.parse(serialized);
  } catch (err) {
    return [];
  }
};

const saveFavorites = (favorites) => {
  try {
    const serialized = JSON.stringify(favorites);
    localStorage.setItem("favorites", serialized);
  } catch (err) {
    // ignore
  }
};

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (params = {}) => {
    const term = params.term || "Action";
    const year = params.year ? `&y=${params.year}` : "";
    const page = params.page ? `&page=${params.page}` : "&page=1";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie${year}${page}`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (params = {}) => {
    const term = params.term || "Action";
    const year = params.year ? `&y=${params.year}` : "2026";
    const page = params.page ? `&page=${params.page}` : "&page=1";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series${year}${page}`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
  favorites: loadFavorites(),
  loading: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
    toggleFavorite: (state, action) => {
      const movie = action.payload;
      const index = state.favorites.findIndex((f) => f.imdbID === movie.imdbID);
      if (index >= 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(movie);
      }
      saveFavorites(state.favorites);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.movies = payload;
      })
      .addCase(fetchAsyncMovies.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchAsyncShows.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.shows = payload;
      })
      .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, { payload }) => {
        state.selectMovieOrShow = payload;
      });
  },
});

export const { removeSelectedMovieOrShow, toggleFavorite } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export const getFavorites = (state) => state.movies.favorites;
export const getLoading = (state) => state.movies.loading;
export default movieSlice.reducer;
