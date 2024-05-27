const express = require('express');
const { getAll, getById, update, delete: deleteUser, save } = require('../../controllers/userController');

const router = express.Router();

router.get('/all', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', deleteUser);
router.post('/', save);

module.exports = router;
