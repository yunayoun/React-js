import React from 'react'
import Movie from '../components/Movie';
import {dummy} from '../movieDummy'
//데이터를 받아서 맵으로 정리해서 리턴해줘그리고 movie 프롭스로 받아서 사용

export default function Movies() {
  return (
    <div>
    <div className="movies-container">
      {dummy.results.map((item) => {
        return (
          <Movie
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
          />
        );
      })}
    </div>
  </div>
  )
}
