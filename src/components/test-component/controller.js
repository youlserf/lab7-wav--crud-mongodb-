import Student from "../../models/student";
 
export const findAll = async (req, res) => {
 try {
   const students = await Student.find();
 
   res.json({
     ok: true,
     data: students,
   });
 } catch (error) {
   res.json({
     ok: false,
     data: error.message,
   });
 }
};

export const read = async (req, res) => {
  try {
    const id = req.params.id
    console.log(req.params.id)
    Student.findOne({_id:id}, 
      function(err, data) {
          if(err){
              console.log(err);
          }
          else{
              res.send(data);
          }
      });  
  
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};


export const create = async (req, res) => {
  try {
    const { body } = req;
    const student = new Student(body);
    student.save();
  
    res.json({
      ok: true,
      data: student,
    });
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const { body } = req;
    const id = req.params.id
    Student.findByIdAndUpdate(id, 
      body
    , function(err, data) {
          if(err){
              console.log(err);
          }
          else{
              res.send(data);
              console.log("Data updated!");
          }
      });  
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const id = req.params.id
    Student.deleteOne({ _id: id }
    , function(err, data) {
          if(err){
              console.log(err);
          }
          else{
              res.send(data);
              console.log("Data updated!");
          }
      });  
  } catch (error) {
    res.json({
      ok: false,
      data: error.message,
    });
  }
};