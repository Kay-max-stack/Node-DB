const myDB_Model = require('../models/nodeDB');

const displayAllEntries = (req,res) => {
  myDB_Model.find().sort({createdAt: -1})
  .then((result) => {
    res.render('index', {values: result});
  })
  .catch((err) => {
    console.log(err);
  }); 
};
const displaySingleElementDetails = (req,res) => {
  const id = req.params.id;
  myDB_Model.findById(id)
  .then((result) => {
    res.render('details',{value:result});
  })
  .catch((err) => {
    console.log(err);
  });
};
const getAboutPage = (req,res) => {
  res.render('about');
};
const getCreatePage = (req,res) => {
  res.render('create');
};
const createNewPost = (req, res) => {
  const createNewDB_Element = new myDB_Model(req.body);
  console.log(req.body);
  createNewDB_Element.save()
  .then(() => {
    res.redirect('/home');
  })
  .catch((err) => {
    console.log(err);
  });
};
const deletePost = (req,res) => {
  const id = req.params.id;
  myDB_Model.findByIdAndDelete(id)
  .then(() => {
    res.json({redirect: '/home'});
  })
  .catch((err) => {
    console.log(err);
  });
};


module.exports = {
  displayAllEntries,
  displaySingleElementDetails,
  getAboutPage,
  getCreatePage,
  createNewPost,
  deletePost
};
