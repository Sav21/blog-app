import { useEffect, useState } from "react";
import { editPosts, getPostById, postPosts } from "../services/postsService";
import { Link, useNavigate } from "react-router-dom";

const AddPost = ({ index }) => {
  const [state, setState] = useState({
    title: "",
    text: "",
  });

  useEffect(() => {
    if (index != undefined) {
      getPostById(index).then(({ data }) => setState(data));
    }
  }, []);
  let navigate = useNavigate();

  let placeholder = "Add";
  if (index != undefined) {
    placeholder = "Edit";
  }

  const handleInputBool = (event) => {
    const name = event.target.name;
    const value = event.target.checked;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAdd = (event, state) => {
    event.preventDefault();

    if (state.title.length < 2 || state.text.length > 300) {
      alert("Title and Text needs to be longer than 2 chars.");
      return;
    }
    if (index == undefined) {
      postPosts(state.title, state.text);
    } else {
      editPosts(state.title, state.text, index);
    }
    resetInput();

    navigate("/posts");
  };

  const resetInput = () => {
    setState({
      title: "",
      text: "",
    });
  };

  return (
    <div className="container mt-5" style={{ width: "300px" }}>
      <form onSubmit={(event) => handleAdd(event, state)}>
        <h1 className="h3 mb-3 fw-normal">Add new post:</h1>

        <div className="form-floating mt-3">
          <input
            name="title"
            value={state.title}
            onChange={handleInputChange}
            type="text"
            className="form-control"
            placeholder="title"
          />
          <label>Title</label>
        </div>
        <div className="form-floating mt-3">
          <input
            name="text"
            value={state.text}
            onChange={handleInputChange}
            type="text"
            className="form-control"
            placeholder="text"
          />
          <label>Text</label>
        </div>
        <button className="w-100 btn btn-primary mt-3" type="submit">
          {placeholder}
        </button>
      </form>
      <button onClick={resetInput} className="w-100 btn btn-primary mt-3">
        Reset
      </button>
    </div>
  );
};

export default AddPost;
