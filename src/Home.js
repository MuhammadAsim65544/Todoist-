import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data:blogs,error}=useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} tit="All Blogs"/>}
             </div>
     );
}
export default Home; 
