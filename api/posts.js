const router = require('express').Router();
const axios = require('axios/index');

router.get('/posts', (req, res) => {
  axios
    .get('http://jsonplaceholder.typicode.com/posts')
    .then(response => res.send(response.data))
    .catch(err => res.send(err));
});

module.exports = router;
