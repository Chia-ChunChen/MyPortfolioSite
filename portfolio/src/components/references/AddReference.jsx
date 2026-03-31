import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { create } from "../../datasource/api-references";
import ReferenceForm from "./ReferenceForm";
import ReferenceModel from "../../datasource/referenceModel";

const AddReference = () => {
  const navigate = useNavigate();
  const [reference, setReference] = useState(new ReferenceModel());
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReference((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    create(reference)
      .then((res) => {
        if (res?.success) {
          navigate("/references/list");
        } else {
          setErrorMsg(res?.message || "Failed to add contact.");
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  return (
    <section className="form-page">
      <div className="form-card">
        <h1 className="form-title">Add Contact</h1>
        <p className="form-subtitle">
          Create a new contact or reference record.
        </p>

        {errorMsg && <p className="project-error">{errorMsg}</p>}

        <ReferenceForm
          reference={reference}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};

export default AddReference;