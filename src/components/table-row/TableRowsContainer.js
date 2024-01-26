import "./TableRowsContainer.css";
import { Link } from "react-router-dom";
const TableRowsContainer = () => {
  const tableData = [
    {
      slNo: "01",
      link: "www.google.com",
      prefix: "prefixsample",
      addtag: "Select Tags",
      selectedTags: ["TAG 1", "TAG2", "TAG3", "TAG4"],
    },
    {
      slNo: "02",
      link: "www.google.com",
      prefix: "prefixsample",
      addtag: "Select Tags",
      selectedTags: ["TAG 1", "TAG2"],
    },
    {
      slNo: "03",
      link: "www.google.com",
      prefix: "prefixsample",
      addtag: "Select Tags",
      selectedTags: ["TAG 1", "TAG2", "TAG3", "TAG4"],
    },
    {
      slNo: "04",
      link: "www.google.com",
      prefix: "prefixsample",
      addtag: "Select Tags",
      selectedTags: ["TAG 1"],
    },
    {
      slNo: "05",
      link: "www.google.com",
      prefix: "prefixsample",
      addtag: "Select Tags",
      selectedTags: ["TAG 1", "TAG2", "TAG3"],
    },
  ];
  return (
    <table className="table-container">
      <tr className="table-header">
        <th className="col-no">Sl No.</th>
        <th>Links</th>
        <th>Prefix</th>
        <th>Addtags</th>
        <th>Selected Tags</th>
      </tr>

      {tableData.map((row) => (
        <tr key={row.slNo} className="table-row">
          <td className="table-column col-no">{row.slNo}</td>
          <td className="table-column">
            <Link to={row.link} className="col-link" style={{textDecoration: "underline"}}>
              {row.link}
            </Link>
          </td>
          <td className="table-column">{row.prefix}</td>
          <td className="table-column dropdown-tag">
            {row.addtag}
            <img src="./controls.png" className="dropdown-icon" alt="dropdown"/>
          </td>
          <td className="table-column tags selected-tags">
            <div className="tag-container">
              {row.selectedTags.map((tag) => (
                <p className="tag" key={tag}>
                  {tag} <img src="./cross.png" alt="cross" />
                </p>
              ))}
            </div>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default TableRowsContainer;
