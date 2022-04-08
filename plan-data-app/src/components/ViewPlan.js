import { useEffect, useState } from "react";
import axios from "axios";
const url = "http://localhost:4001/planData";
const ViewPlan = () => {
  const [planData, setPlanData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [messages] = useState({
    MANDATORY: "ALL fields are required",
    ERROR: "Something went wrong",
    PLAN_ERR: " Plan Value must not be less than 200 ",
    DATA_ERR: "Data value must be greater than 20",
    SUCCESS_MESSAGE: "Successfully Deleted",
  });

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const datas = res.data;
        console.log(datas);
        if (res.status === 200) {
          setPlanData(datas);
        } else {
          setErrorMessage(messages.ERROR);
        }
      })
      .catch((error) => {
        setErrorMessage(messages.ERROR);
      });
  }, []);
  const remove = (id, e) => {
    e.preventDefault();
    axios.delete(`${url}/${id}`).then((res) => {
        if(res.status===200){
            const posts = planData.filter((data)=>data.id !== id)
            setPlanData(posts)
            setSuccessMessage(messages.SUCCESS_MESSAGE)
        }
    }).catch(error =>{
        setErrorMessage(messages.ERROR)
    });
  };
  const data = planData.map((data) => {
    return (
      <div className="card" style={{ width: "18rem" }} key={data.id}>
        <div className="card-body">
          <h5 className="card-title">PlanTitle : {data.planType}</h5>
          <h6 className="card-subtitle mb-2 text-muted">addOns</h6>
          <p className="card-text">{data.addOns}</p>
          <h6 className="card-link">Data (GB): {data.data}</h6>
          <h6 className="card-link">Calls: {data.calls}</h6>
          <button
            className="btn btn-primary"
            onClick={(e) => {
              remove(data.id, e);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });
  return (
    <>
      {errorMessage.trim() !=="" && <div className="alert alert-danger" role="alert">{errorMessage} </div>}
      {successMessage.trim() !=="" && <div className="alert alert-success" role="alert">
       {successMessage}
      </div>}
      {data}
    </>
  );
};
export default ViewPlan;
