import LargeText from "../text/LargeText"
import { articles } from "../../data"

const Article = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 my-12">
      <div className="flex justify-between justify-items-center items-center">
        <LargeText text="Our Newest Article"/>
        <p>See All Article</p>
      </div>

        <div className="grid md:grid-cols-2 gap-4">
          {articles.map((article) => (
            <div>
              <img src={article.image} alt=""  className="rounded-lg h-[75%] w-full"/>
              <p className="py-4">{article.name}</p>
              <p className="pb-4">{article.date}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Article