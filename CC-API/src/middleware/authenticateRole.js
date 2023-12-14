const authenticateRecruiter = (req, res, next) => {
  if (req.user.role == 'recruiter') {
    next()
  } else {
    return res.sendStatus(401).send({
      error: true,
      message: "Not a recruiter"
    });
  }
}

const authenticateWorker = (req, res, next) => {
  if (req.user.role == 'worker') {
    next()
  } else {
    return res.sendStatus(401).send({
      error: true,
      message: "Not a worker"
    });
  }
}

module.exports = {
  authenticateRecruiter,
  authenticateWorker
}
