const express = require('express');
const cors = require('cors')
const fs = require("fs");
const root = require("./const")
var rp = require('request-promise');
const app = express();
app.use(cors())

const removeSubChildren = (obj)=>{
    const resChildren = {}
    Object.keys(obj.children).forEach((key)=>{
        resChildren[key]={type: obj.children[key].type}
    })
    return {type: obj.type, children: resChildren}
}

app.get('/path/:myPath', (req, res) => {
    const {myPath} = req.params;
    const pathArr = myPath.split('_');
    let output =  root.root;
    pathArr.forEach((path)=>{
        if(path!=='root'){
            output = output.children[path];
        }
    })
    output = removeSubChildren(output);
    res.send({[pathArr[pathArr.length-1]]: output})
});


app.listen(80, () => {
    console.log('server starts at http://127.0.0.1')
});