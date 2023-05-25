const multerModel = require("../models/multerModel")

const fileController = async (req, res) => {

    try {
        // console.log(req.files);
        // console.log("req.files.pic1",req.files.pic1[0].filename);
        let data = new multerModel(req.body)
        if (req.files && req.files.pic1)
            data.pic1 = req.files.pic1[0].filename
        if (req.files && req.files.pic2)
            data.pic2 = req.files.pic2[0].filename

            await data.save()
            res.send(data)
    }

    catch (error) {
        res.send({
            message: "Fail",
            error: error.message
        })
    }

}

module.exports = fileController