export default function handler(req, res) {
  console.log("METHOD RECEBIDO:", req.method);

  return res.status(200).json({
    method: req.method,
    ok: true
  });
}