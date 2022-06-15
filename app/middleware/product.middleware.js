let validator = require('validatorjs');

function checkProduct(req, res, next) {

  let rules = {
      productName: 'min:3|max:10',   
      price: 'required:true',
      qty: 'min: 10'
  };

  let validation = new validator(req.body, rules);

  // console.log(validation.passes())
  // console.log("Error on: ", validation.errors.all())
  if (validation.passes()) { 
    // res.status(422).send("1 item valid")
    next()
  }

  else{
    res.status(422).send("Data diinput tidak sesuai spesifikasi")
  }
}

module.exports = {
    checkProduct
}



// function insertproduct(req, res) {
//       let form = req.body
//       if (form.productName.length < 3 ) {
//           return res.status(204).send({ message: 'namaProduct harus lebih dari 3 huruf' })
//       }
//       if (form.productName.length > 10 ) {
//           return res.status(204).send({ message: 'namaProduct harus lebih dari 3 huruf' })
//       }
//       else models.product.create(form)
//       return res.send({ message: 'Data has been created', data: form })
//   }
