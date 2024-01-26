import { useCallback } from "react";
import "./Upload.css";
import { Navbar } from "../../components/navbar/Navbar";
import { AppBar } from "../../components/app-bar/AppBar";
import TableRowsContainer from "../../components/table-row/TableRowsContainer";

const Upload = () => {
  const onSizemdIconLeftTypePrimaClick = useCallback(() => {
    // Please sync "Uploading" to the project
  }, []);

  return (
    <div className="upload">
      <div className="upload-frame">
        <div className="f-r-a-m-e-a">
          <Navbar />
        </div>
      </div>
      <section className="upload-inner">
        <div className="minus-sign-component-parent">
          <AppBar />
            <div className="input-container">
              <div className="upload-container">
                <img
                  className="label-placeholder-node"
                  loading="eager"
                  alt=""
                  src="/frame-7682.svg"
                />
                <div className="placeholder-text">
                  <span>{`Drop your excel sheet here or `}</span>
                  <span className="browse">browse</span>
                </div>
              </div>
              <button
                className="upload-button"
                onClick={onSizemdIconLeftTypePrimaClick}
              >
                <img className="icon" alt="" src="/icon.svg" />
                <div className="value">Upload</div>
              </button>
            </div>
            <TableRowsContainer/>

        </div>
      </section>
    </div>
  );
};

export default Upload;
