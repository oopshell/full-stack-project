const getLogger = require('../common/logger');
const logger = getLogger(__filename);

const getAllStudents = (req, res) => {
    logger.info('Find all students');
    // res.send("Read");
    res.formatResponse([]);
    // throw new Error('unknown error test');
};

const addStudent = (req, res) => {
    logger.info('Add students');
    res.send("create");
};

const getStudentById = (req, res) => {
    res.send("Read id");
};

const updateStudentById = (req, res) => {
    res.send("update");
};

const deleteStudentById = (req, res) => {
    res.send("delete");
};

module.exports = {
    getAllStudents,
    addStudent,
    getStudentById,
    updateStudentById,
    deleteStudentById,
}
