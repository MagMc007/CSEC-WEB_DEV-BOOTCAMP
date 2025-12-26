exports.home = (req, res) => {
  res.json({ message: "Hello there! Welcome to the Express MVC API" });
};

exports.about = (req, res) => {
  res.json({ message: "This is the About route" });
};

exports.contact = (req, res) => {
  res.json({ message: "This is the Contact route" });
};

exports.getTime = (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.json({ time: currentTime });
};

exports.echoData = (req, res) => {
  const data = req.body;

  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ error: "No JSON data provided" });
  }

  res.json({
    message: "Data received successfully",
    data: data
  });
};
