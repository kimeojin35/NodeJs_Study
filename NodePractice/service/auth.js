let db = [];

const createRandom = (req, res) => {
  const { email } = req.Body;
  const rand = String(Math.floor(Math.random * 999999)).padStart(6, "0");

  db.push({
    email,
    rand,
  });

  setTimeout(() => {}, 1000 * 60 * 5);

  return res.status(200).json({
    email,
    rand,
  });
};

const verify = async (req, res) => {
  const { email, rand } = req.body;
};

module.exports = {
  createRandom,
  verify,
};
