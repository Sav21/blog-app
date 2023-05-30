import AddPost from "../components/AddPost";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  console.log(id);
  return <AddPost index={id} />;
};

export default Edit;
