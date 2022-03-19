import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/components/item/item';
import { TvShowsService } from 'src/app/services/tvshows.service';
import { mapMovieToItem, Movie } from '../../models/movie';
import { mapTvShowToItem, TvShow } from '../../models/tv';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Item[] = [];
  upcomingMovies: Item[] = [];
  topRatedMovies: Item[] = [];
  popularTvShows: Item[] = [];

  constructor(private moviesService: MoviesService, private tvShowsService: TvShowsService) {}

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies.map((movie) => mapMovieToItem(movie));
    });
    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies.map((movie) => mapMovieToItem(movie));
    });
    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies.map((movie) => mapMovieToItem(movie));
    });
    this.tvShowsService.getTvs('popular').subscribe((tvShows) => {
      this.popularTvShows = tvShows.map((tvshow) => mapTvShowToItem(tvshow));
    });
  }
}
