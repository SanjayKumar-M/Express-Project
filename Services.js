import Express from "express";
const Service = Express()

const services = [
    {
        id: 1,
        ser: "Blockchain"
    },
    {
        id: 2,
        ser: "CyberSecurity"
    },
    {
        id: 3,
        ser: "Cloud"
    },
    {
        id: 4,
        ser: "Digital Marketing"
    },

]
Service.get('/:id', (req, res) => {
    const { id } = req.params;
    const detail = services.find((item) => item.id == id)
    if (detail) {
        res.send(`The service we provide is ${detail.ser}`)
    }
    else {
        res.send("Invalid Services")
    }


})
export default Service