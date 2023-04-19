const User = require('../model/User')

const addUser = async (req, res) => {
   try {
      const user_exist = await User.findOne({ sub: req.body.sub })

      if(user_exist) {
         res.status(200).json({msg: 'user already exists'})
         return;
      }

      const new_user = new User(req.body)
      await new_user.save()
      return res.status(200).json(new_user)
   } catch (error) {
      return res.status(500).json(error.message)
   }
}

const getUsers = async (req, res) => {
   try {
      const get_user = await User.find({})
      return res.status(200).json(get_user)
   } catch (error) {
      return res.status(500).json(error.message)
   }
}

module.exports = { addUser, getUsers }