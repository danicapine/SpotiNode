const express = require('express');
const router = express.Router();
const con = require('../controller/HpController'); 
router.get('/', con.index);
router.get('/chappell', con.chappell);
router.get('/niki', con.niki);
router.get('/taylor', con.taylor);
router.get('/laufey', con.laufey);
router.get('/harry', con.harry);
router.get('/bea', con.bea);
router.get('/tomorrow', con.tomorrow);
router.get('/w2e', con.w2e);
router.get('/rise', con.rise);
router.get('/ttpd', con.ttpd);
router.get('/aug', con.aug);
router.get('/sobs', con.sobs);
router.get('/rnb', con.rnb);
router.get('/ghibli', con.ghibli);
router.get('/supercut', con.supercut);
router.get('/waiting', con.waiting);
router.get('/list', con.list);
module.exports = router;