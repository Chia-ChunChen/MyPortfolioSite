import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { list, remove } from "../../datasource/api-services";
import ListServiceItem from "./ListServiceItem";

const ListService = () => {
  const [services, setServices] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const loadServices = () => {
    list()
      .then((res) => {
        if (res?.success) {
          setServices(res.data || []);
        } else {
          setErrorMsg(res?.message || "Failed to load services.");
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  useEffect(() => {
    loadServices();
  }, []);

  const deleteService = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (!confirmDelete) return;

    remove(id)
      .then((res) => {
        if (res?.success) {
          setServices((prev) => prev.filter((service) => service.id !== id));
        } else {
          setErrorMsg(res?.message || "Failed to delete service.");
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
            <h1 className="project-title">Service Management</h1>
          </div>

          <Link to="/services/add" className="add-project-btn">
            + Add Service
          </Link>
        </div>

        {errorMsg && <p className="project-error">{errorMsg}</p>}

        {services.length === 0 ? (
          <div className="empty-state">
            <h3>No services found</h3>
            <p>Start by adding your first service.</p>
          </div>
        ) : (
          <div className="project-table-wrapper">
            <table className="project-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <ListServiceItem
                    key={service.id}
                    service={service}
                    deleteService={deleteService}
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

export default ListService;