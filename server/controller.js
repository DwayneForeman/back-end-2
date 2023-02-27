const housesDB = [
  {
    id: 1,
    address: "1600 Pennsylvania Avenue NW",
    price: 290000,
    imageURL:
      "https://www.washingtonian.com/wp-content/uploads/2020/07/Official-White-House-Photo-by-Andrea-Hanks-1.jpg",
  },
  {
    id: 2,
    address: "London SW1A 1AA",
    price: 454615,
    imageURL:
      "https://cdn.londonandpartners.com/asset/buckingham-palace-buckingham-palace-photographer-andrew-holt-ba2d2924f687e5713154dbf611c103e1.jpg",
  },
  {
    id: 3,
    address: "Taj Road",
    price: 169000,
    imageURL:
      "https://robbreport.com/wp-content/uploads/2013/06/831971.jpg?w=943",
  },
];

let houseID = 4;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(housesDB);
  },

  deleteHouse: (req, res) => {
    let id = +req.params.houseID;
    // We are creating a variable to capture what the user submits
    //How do we that? We do that by tapping into req(the users quest), then tapping into the paras(parameter of their request), then tapping into houseID (WE SET houseID to be the the actual id of their request so eventually we can tap into it like we're doing now)
    //it will automatically send in a string therefore, we need to convert into a number by adding the plus sign + in front of the req(request)

    for (let i = 0; i < housesDB.length; i++) {
      if (id === housesDB[i].id) {
        housesDB.splice(i, 1);
      }
    }
    res.status(200).send(housesDB);
  },

  createHouse: (req, res) => {
    let { address, price, imageURL } = req.body;

    let newHouse = {
      address: address,
      price: price,
      imageURL: imageURL,
      id: houseID,
    };

    housesDB.push(newHouse);
    res.status(200).send(housesDB);
  },

  updateHouse: (req, res) => {
    let updateID = +req.params.houseID;
    let type = req.body.type;
    let newPrice;

    for (let i = 0; i < housesDB.length; i++) {
      if (updateID === housesDB[i].id) {
        if (type === "plus") {
          newPrice = housesDB[i].price + 10000;
        } else if (type === "minus") {
          newPrice = housesDB[i].price - 1000;
        }
        housesDB[i].price = newPrice;
      }
    }
    res.status(200).send(housesDB);
  },
};
