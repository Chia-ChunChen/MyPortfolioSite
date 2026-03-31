import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { readOne, update } from "../../datasource/api-references";
import ReferenceForm from "./ReferenceForm";

const EditReference = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [reference, setReference] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    readOne(id)
      .then((res) => {
        if (res?.success) {
          setReference(res.data);
        } else {
          setErrorMsg(res?.message || "Failed to load contact.");
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReference((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    update(reference, id)
      .then((res) => {
        if (res?.success) {
          navigate("/references/list");
        } else {
          setErrorMsg(res?.message || "Failed to update contact.");
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  return (
    <section className="form-page">
      <div className="form-card">
        <h1 className="form-title">Edit Contact</h1>
        <p className="form-subtitle">Update contact information below.</p>

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

export default EditReference;