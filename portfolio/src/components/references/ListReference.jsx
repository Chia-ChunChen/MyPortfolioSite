import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list, remove } from "../../datasource/api-references";
import ListReferenceItem from "./ListReferenceItem";

const ListReference = () => {
  const [references, setReferences] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const loadReferences = () => {
    list()
      .then((res) => {
        if (res?.success) {
          setReferences(res.data || []);
        } else {
          setErrorMsg(res?.message || "Failed to load contacts.");
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  useEffect(() => {
    loadReferences();
  }, []);

  const deleteReference = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmDelete) return;

    remove(id)
      .then((res) => {
        if (res?.success) {
          setReferences((prev) => prev.filter((reference) => reference.id !== id));
        } else {
          setErrorMsg(res?.message || "Failed to delete contact.");
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  return (
    <section className="project-page">
      <div className="project-card">
        <div className="project-header">
          <div>
            <h1 className="project-title">Reference Management</h1>
          </div>

          <Link to="/references/add" className="add-project-btn">
            + Add Contact
          </Link>
        </div>

        {errorMsg && <p className="project-error">{errorMsg}</p>}

        {references.length === 0 ? (
          <div className="empty-state">
            <h3>No contacts found</h3>
            <p>Start by adding your first contact.</p>
          </div>
        ) : (
          <div className="project-table-wrapper">
            <table className="project-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Position</th>
                  <th>Company</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {references.map((reference) => (
                  <ListReferenceItem
                    key={reference.id}
                    reference={reference}
                    deleteReference={deleteReference}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default ListReference;