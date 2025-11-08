import React, { useState } from "react";

const PageSelector = () => {
  const [pages, setPages] = useState([
    { id: 1, name: "All pages", checked: false },
    { id: 2, name: "Page 1", checked: false },
    { id: 3, name: "Page 2", checked: false },
    { id: 4, name: "Page 3", checked: false },
    { id: 5, name: "Page 4", checked: false },
  ]);

  const togglePage = (id) => {
    if (id === 1) {
      const allChecked = !pages[0].checked;
      setPages(pages.map((p) => ({ ...p, checked: allChecked })));
    } else {
      const updated = pages.map((p) =>
        p.id === id ? { ...p, checked: !p.checked } : p
      );
      const allSelected = updated.slice(1).every((p) => p.checked);
      updated[0].checked = allSelected;
      setPages(updated);
    }
  };

  return (
    <div className="selector-card">
      <div className="page-list">
        {pages.map((page) => (
          <label
            key={page.id}
            className={`page-row ${page.checked ? "checked" : ""}`}
          >
            <input
              type="checkbox"
              checked={page.checked}
              onChange={() => togglePage(page.id)}
            />
            <span>{page.name}</span>
          </label>
        ))}
      </div>
      <button
        className="done-btn"
        onClick={() =>
          alert(
            "Selected pages: " +
              pages.filter((p) => p.checked).map((p) => p.name).join(", ")
          )
        }
      >
        Done
      </button>
    </div>
  );
};

export default PageSelector;
