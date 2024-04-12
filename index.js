const express = require("express");
const mongoDb = require("./database")

const app = express();
app.use(express.json());
const PORT =3000;

mongoDb.connectToDatabase();



// List all products
app.get('/getData', async (req, res) => {
    const findData = await products.find({}).lean();
    return res.status(200).send({ data: findData });
});

// List product by id
app.get("/getData/:id", async (req, res) => {
    const { id } = req.params;
    const findproduct = await products.findOne({ _id: id}).lean();
    if (!findproduct) { 
        return res.status(404).send({ message: "product not found"})
    }
    return res.status(200).send({ data: findproduct });
});

// Remove product by id
app.delete('/remove_product/:id', async (req, res) => {
    const { id } = req.params;
    const findproduct = await products.findOne({ _id: id}).lean();
    if (!findproduct) { 
        return res.status(404).send({ message: "product not found"})
    }
    await products.deleteOne({_id: id });
    return res.status(200).send({ message:"Product deleted successfully" })
});


app.listen(PORT, () => {console.log(`port connetced ${PORT}`)})