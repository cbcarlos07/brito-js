const router = require('express').Router()
const controller = require('../../controllers/user.controller')
const prefix = '/user'

router.get(`${prefix}/:id`, controller.findId.bind( controller ))
router.patch(`${prefix}`, controller.findAll.bind( controller ))
router.patch(`${prefix}/paginate`, controller.paginate.bind( controller ))
router.put(`${prefix}/:id`, controller.update.bind( controller ))
router.post(`${prefix}`, controller.create.bind( controller ))
router.delete(`${prefix}/:id`, controller.delete.bind( controller ))

module.exports = router