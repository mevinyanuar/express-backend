const express = require("express");
const router = express.Router();
const namaData = require("./data/userdata");

router.get("/", (req, res) => {
  res.send({
    data: namaData
  });
});

router.post("/", (req, res) => {
  namaData.push(req.body);

  res.send({
    data: namaData
  });
});

router.delete("/:id", (req, res) => {
    const idNamadata = namaData.findIndex(element => element.id == req.params.id)
    if(idNamadata === -1){
        res.send({
            data: 'tidak ada'
        })
    }else{
        namaData.splice(idNamadata, 1)
        res.send({
            data: namaData
        })
    }
//   namaData.splice(req.params.index, 1);
//   res.send(namaData);
});

module.exports = router;
