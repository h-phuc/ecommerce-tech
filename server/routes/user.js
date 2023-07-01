const router = require('express').Router();

const userCtrl = require('../controllers/user');
const { verifyAccessToken } = require('../middlewares/verifyToken');

router.post('/register', userCtrl.register);
router.post('/login', userCtrl.login);
router.get('/current', verifyAccessToken, userCtrl.getUser);
router.post('/refreshtoken', userCtrl.refreshAccessToken);
router.get('/logout', userCtrl.logout);
router.get('/forgotpassword', userCtrl.forgotPassword);
router.put('/resetpassword', userCtrl.resetPassword);

module.exports = router;
