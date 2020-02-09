const router = require('express').Router();
const products = require('../model/product');

router.get('/', (req, res) => {
  products.find((err, products) => {
    res.send({ products: products });
  });
});
router.get('/:productId', (req, res) => {
  let productId = req.params.productId;
  products.findById(productId, (err, products) => {
    res.send({ products: products });
  });
});
router.post('/', (req, res) => {
  let newProduct = new products({
    producto: req.body.producto,
    categoria: req.body.categoria,
    precio: req.body.precio
  });

  newProduct.save(() => {
    console.log('datos guardados');
  });
  res.send({ mensaje: 'recibido' });
});
router.put('/:productId', (req, res) => {
  let productId = req.params.productId;
  let update = req.body;

  products.findByIdAndUpdate(productId, update, (err, productsUpdate) => {
    if (err) res.status(500).send(`error al actualizar ${err}`);
    res.status(200).send({
      mensaje: 'su producto a sido actualizado',
      products: productsUpdate
    });
  });
});
router.delete('/:productId', (req, res) => {
  let productId = req.params.productId;

  products.findById(productId, (err, productsDelete) => {
    productsDelete.remove(() => {
      res.send({
        mensaje: 'su producto a sido borrado',
        products: productsDelete
      });
    });
  });
});

module.exports = router;
