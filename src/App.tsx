import { 
  About, 
  Client,
  Product,
  Video,
  Review, 
  Article,
  Footer,
  Header,
  Carousel
} from "./components"

const App = () => {
  return (
    <div className="">
      <div className="">
        <Header/>
        <Carousel/>
      </div>
      
      <About/>
      <Client/>
      <Product/>
      <Video/>
      <Review/>
      <Article/>
      <Footer/>
    </div>
  )
}

export default App