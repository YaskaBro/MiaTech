import { useFetch } from "./hooks/useFetch";

const API_URL = "https://jsonplaceholder.typicode.com/todos"

const App = () => {
    const { data: posts, error, loading, reload } = useFetch(API_URL, { method: "GET" })
    
    return (
        <>
            <div>
                {
                    posts && posts.map((post) =>(
                        <ul key={post.id}>
                            <li>user id: ({post.userId}) id del post: ({post.id}) titolo: "{post.title}"</li>
                        </ul>
                    ))
                }
            </div>
        </>
    )
}

export default App