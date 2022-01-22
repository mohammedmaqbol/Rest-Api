const { v4: uuidv4 } = require('uuid');
let students = [
    
];

//Get All Student
exports.getStudents = (req, res)=>{
    res.json(students);
};

// GET One Student 
exports.getStudent = (req, res)=>{
    const id       =  req.params.id;
    const student  =  students.find((student) =>  student.id ===  id);
    res.json(student);
};

// Delete Student 
exports.deleteStudent =  (req, res)=>{
    const id  = req.params.id;
    students  = students.find((student)=> student.id !== id);
    res.send(`Student With Id ${id} Has Been Deleted`);
};

// Create Student
exports.createStudent = (req, res)=>{
    const student = req.body;
    const studentsWithId = {...student, id : uuidv4()};
    students.push(studentsWithId);
    res.send(`Student with Name ${req.body.name} Has Been Added`);
};

// Update  Student
exports.updateStudent = (req, res)=>{
    const id  = req.params.id;
    const {name , grade} = req.body;
    const student = students.find((student)=>student.id ===id);
    if(name, grade){
        student.name   = name ;
        student.grade = grade;
    }
    res.send(`Student With Id ${id} Has Been Updated`)
}

//module.exports  = getStudent;