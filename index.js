const app = require("express")()
const axios = require("axios")


app.all("/get", async(req, res) => {
    if(!req.query["url"]) return res.json({error: true, response: "No URL param."})
   let e = false;
 let resp = await axios.get(req.query["url"]).catch(rejected => e = String(rejected))
   if(e) {
    res.json({error: true, response: e})
   } else {
    res.json({error: true, response: resp?.data})
   }
})

app.listen(process.env.PORT || 80)

console.log(`Listening on port ${process.env.PORT || 80}`)