import React, { useState, useEffect } from "react";
import Breadcrumb from './components/Breadcrumb/index';
import FilesPanel from './components/FilesPanel/index';
import './App.css';

function App() {

  const [childrenFile, setChildrenFile] = useState({})
  const [path, setPath] = useState([]);

  const handleClickBreadcrumb = (str) => {
    const index = path.indexOf(str);
    setPath((data) => { return data.slice(0, index + 1) })
  }

  const handlePathChange = async (pathsArr) => {
    const url = `http://127.0.0.1/path/${pathsArr.join("_")}`
    const last = pathsArr[pathsArr.length - 1]
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setChildrenFile(data[last].children || {});
      });
  }


  const handleFileClick = (str) => {
    setPath((data) => { return [...data, str] })
  }

  useEffect(() => {
    setPath(['root'])
  }, [])

  useEffect(() => {
    if (path.length > 0) {
      handlePathChange(path)
    }
  }, [path])

  return (
    <div className="container">
      <Breadcrumb paths={path} handlePathChange={handleClickBreadcrumb} />
      <FilesPanel childrenFile={childrenFile} currentFolder={path[path.length - 1]} handleFileChange={handleFileClick} />
    </div>

  );
}

export default App;
