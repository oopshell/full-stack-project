const getAllStudents = (req, res) => {
    res.send("Read");
};

const addStudent = (req, res) => {
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
