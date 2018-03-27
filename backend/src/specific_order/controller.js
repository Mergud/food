class SpecificOrderController {
    get(req, res) {
        console.log('got request for specific order');
        res.json([]);
    };
    add(req, res) {
        const data = req.body;
        data.id = Date.now();
        console.log('got request for adding new specific order', data);
        res.json(data);
    };
    update(req, res) {
        const data = req.body;
        console.log('got request for updating specific order', data);
        res.json(data);
    };
}
module.exports = new SpecificOrderController;