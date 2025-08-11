const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({
    success: false,
    message: 'Server Error'
  });
};

module.exports = errorHandler;
