import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { readOne, update } from "../../datasource/api-services";
import ServiceForm from "./ServiceForm";
import ServiceModel from "../../datasource/serviceModel";

const EditService = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState(new ServiceModel());
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    readOne(id)
      .then((res) => {
        if (res?.success && res?.data) {
          setService(res.data);
        } else {
          setErrorMsg(res?.message || "Failed to load service.");
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg(err.message);
      });
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setService((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    update(service, id)
      .then((res) => {
        if (res?.success) {
          navigate("/services/list");
        } else {
          setErrorMsg(res?.message || "Failed to update service.");
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMsg(err.message);
      });
  };

  return (
    <section className="form-page">
      <div className="form-card">
        <h1 className="form-title">Edit Service</h1>
        <p className="form-subtitle">
          Update an existing service in your portfolio.
        </p>

        {errorMsg && <p className="project-error">{errorMsg}</p>}

        <ServiceForm
          service={service}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};

export default EditService;