import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../../datasource/api-services";
import ServiceForm from "./ServiceForm";
import ServiceModel from "../../datasource/serviceModel";

const AddService = () => {
  const navigate = useNavigate();
  const [service, setService] = useState(new ServiceModel());
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setService((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    create(service)
      .then((res) => {
        if (res?.success) {
          navigate("/services/list");
        } else {
          setErrorMsg(res?.message || "Failed to add service.");
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  return (
    <section className="form-page">
      <div className="form-card">
        <h1 className="form-title">Add Service</h1>
        <p className="form-subtitle">
          Create a new service for your portfolio.
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

export default AddService;