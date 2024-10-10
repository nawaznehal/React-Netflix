import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
      <Main/>
      {/* // inorder for us to specifically slide a row we need row ID, we add row id to each row and call them when we use slide */}

      <Row rowID='1' title='UpComing' fetchURL={requests.requestUpcoming} />
      <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
      <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
      <Row rowID='4' title='TopRated' fetchURL={requests.requestTopRated} />
      <Row rowID='5' title='Horror' fetchURL={requests.requestHorror} />
    </div>
  )
}

export default Home
