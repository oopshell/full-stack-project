
module.exports.index = (req, res) => {
    res.send("Read all articles");
};

module.exports.show = (req, res) => {
    res.send("Read one article");
};

module.exports.store = (req, res) => {
    res.send("Create articles");
};

module.exports.update = (req, res) => {
    res.send("Update articles");
};

module.exports.updates = (req, res) => {
    res.send("Update more than one articles");
};

module.exports.destroy = (req, res) => {
    res.send("Delete articles");
};
