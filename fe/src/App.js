import React, { useState, useEffect } from "react";
import Breadcrumb from './components/Breadcrumb/index';
import FilesPanel from './components/FilesPanel/index';
import { ReactComponent as LoadingLogo } from "./loading.svg";
import './App.css';

function App() {

  const [childrenFile, setChildrenFile] = useState({})
  const [loading, setLoading] = useState(false);
  const [path, setPath] = useState([]);

  const handleClickBreadcrumb = (str) => {
    const index = path.indexOf(str);
    setPath((data) => { return data.slice(0, index + 1) })
  }

  const handlePathChange = async (pathsArr) => {
    const url = `http://127.0.0.1/path/${pathsArr.join("_")}`
    const last = pathsArr[pathsArr.length - 1]
    setLoading(true);
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setChildrenFile(data[last].children || {});
        setLoading(false);
      });
  }


  const handleFileClick = (str) => {
    if (!loading) {
      setPath((data) => { return [...data, str] })
    }

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
      {loading && <div className="loadingMask"><LoadingLogo className="loadingLogo"
        style={{ width: 40, height: 40 }} /></div>}
      <Breadcrumb paths={path} loading={loading} handlePathChange={handleClickBreadcrumb} />
      <FilesPanel childrenFile={childrenFile} loading={loading} currentFolder={path[path.length - 1]} handleFileChange={handleFileClick} />
    </div>

  );
}

export default App;
