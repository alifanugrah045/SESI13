import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/comments";

const CommentPage = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(API);
      //   console.log('response', response)
      setData(response.data);
    } catch (e) {
      console.log("eror", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

    const navigate =useNavigate();

  console.log("data", data);

  return (
    <div>
      <div className="container">
        <h3>Comment</h3>
        <button onClick={() => navigate('/')} type="button" class="btn btn-success mt-3 mb-3">Back Home</button>
        <div className="row">
          {data.map((post) => (
            <div className="card m-2" key={post.id} style={{ width: 300 }}>
              <div className="card-body">
                <h5 className="card-title">{post.name}</h5>
                <h6 className="card-subtitle">{post.email}</h6>
                <p className="card-text">{post.body}</p>
                <button href="#" className="btn btn-primary">
                  Go somewhere
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentPage;
