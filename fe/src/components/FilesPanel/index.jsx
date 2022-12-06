import React from "react";
import { ReactComponent as FolderLogo } from "../../folder.svg";
import "./index.css";

function FilesPanel(props) {
  const { childrenFile, currentFolder, handleFileChange } = props;

  return (
    <div className="panel">
      <div className="title">This is file: {currentFolder}</div>
      {Object.keys(childrenFile).map((key) => {
        if (childrenFile[key].type === "dir") {
          return (
            <div className="folder" key={key}>
              <FolderLogo className="icon" style={{ width: 16, height: 16 }} />
              <button
                className="textBtn"
                onClick={() => {
                  handleFileChange(key);
                }}
              >
                {key}
              </button>
            </div>
          );
        } else {
          return (
            <div className="text" key={key}>
              {key}
            </div>
          );
        }
      })}
    </div>
  );
}

export default FilesPanel;
