import React from 'react';
import { useState,useEffect} from 'react';
import MovieCard from '../components/MovieCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Search from '../components/search';


const API_IMG = "https://image.tmdb.org/t/p/w500";

function Movies() {
  const popular_kids =  "https://api.themoviedb.org/3/discover/movie?api_key=0eaae2146624836f2825bc2d4154ad6e&certification_country=US&certification.lte=G&sort_by=popularity.desc";
  const new_release = "https://api.themoviedb.org/3/discover/movie?api_key=0eaae2146624836f2825bc2d4154ad6e&primary_release_date.gte=2022-08-15&primary_release_date.lte=2022-09-01";
  const [movieList,setMovieList] = useState([]);
  const [newmovieList,setNewmovieList] = useState([]);
  const [input, setInput] = useState('');


  useEffect(
      ()=>{
        fetch(new_release)
        .then((res)=> res.json())
        .then((data)=>{setNewmovieList(data.results)
            console.log(data.results)})
        .catch((Error)=> console.log(Error));
      },[] );

  useEffect(
      ()=>{
        fetch(popular_kids)
        .then((res)=> res.json())
        .then((data)=>{setMovieList(data.results)
            console.log(data.results)})
        .catch((Error)=> console.log(Error));
      },[] )

    const handleSubmit = (e) =>{
      e.preventDefault();
      async function fetchData () {
         const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=0eaae2146624836f2825bc2d4154ad6e&query=${input}&page=2`)
        .then((res)=> res.json())
        .then((data)=>{ 
        setMovieList(data.results);
        console.log(data.results)})
        };
        fetchData();
        setInput('')
     };

  const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 5 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        }
      };

  return (
    <div style={{backgroundColor:'#120241'}}>
      <div className="head w-100 d-flex justify-content-between">
        <h3 style={{textAlign:'left',marginLeft:'5px',marginTop:'10px'}}>Trending</h3>
        <Search onSubmit={handleSubmit} onChange={(e)=>{setInput(e.target.value)}}  value={input} />
      </div>
     <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        //autoPlay={this.props.deviceType !== "mobile" ? true : false}
        //autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        style={{ width: '90%'}}
      >
      { movieList.map((movieReq)=>{
         return <MovieCard key={movieReq.id} {...movieReq}/>
      })}
    </Carousel>
    <h3 style={{textAlign:'left',marginLeft:'5px'}}>New Release</h3>
     <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          //autoPlay={this.props.deviceType !== "mobile" ? true : false}
          //autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          style={{ width: '90%'}}
        >
      { newmovieList.map((movieReq)=>{
         return <MovieCard key={movieReq.id} {...movieReq}/>
      })}
    </Carousel>
  </div>)
}

export default Movies;