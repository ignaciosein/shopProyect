


const user = {
  getDashboard: (req, res) => {
    var list = ["item1", "item2", "nacho"];
 
    console.log("dasdasdad");

    res.json(list);

 
  },
  getNacho: (req, res) => {
    var list = ["nacho", "", "nacho"];
 
    console.log("dasdasdad");

    res.json(list);

 
  }
};

module.exports = user;
