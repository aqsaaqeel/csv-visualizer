import "./AppBar.css"
export const AppBar = () =>{
    return(
        <div className="minus-sign-component">
            <div className="c-s-v-input-node">
              <div className="c-s-v-input-node-inner">
                <div className="upload-csv-wrapper">
                  <h3 className="upload-csv">Upload CSV</h3>
                </div>
              </div>
            </div>
            <div className="masked-vector-node">
              <img
                className="vector-icon"
                loading="eager"
                alt=""
                src="/bell-icon.svg"
              />
              <img
                className="mask-group-icon"
                loading="eager"
                alt=""
                src="/profile-picture.png"
              />
            </div>
          </div>
    )
}