const express = require('express')
const app = express()
const cors = require('cors')
const requests = require('requests')
const axios = require('axios')
const bodyparser = require('body-parser')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.listen(8000,()=>{
    console.log('Server running at port 8000')
})

app.post('/products',async(req,res)=>{
    console.log("called",req.body)
    API = `http://20.244.56.144/test/companies/${req.body.company}/categories/${req.body.type}/products?top=${req.body.n}&minPrice=${req.body.min}&maxPrice=${req.body.max}`
    // if the min, n, max fields are empty, it will run the deafult n, min, max for the API.
    const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE0NTUxOTc2LCJpYXQiOjE3MTQ1NTE2NzYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImViZTdmNjcxLTE5MmMtNGUxMi05YmM2LTk5NDZiMDgxNDg3OCIsInN1YiI6InZ0dTE5MjkyQHZlbHRlY2guZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiVmVsdGVjaCIsImNsaWVudElEIjoiZWJlN2Y2NzEtMTkyYy00ZTEyLTliYzYtOTk0NmIwODE0ODc4IiwiY2xpZW50U2VjcmV0Ijoid0lJa25Uc29UVGhDbVdUSyIsIm93bmVyTmFtZSI6IkRhdnVsdXJpIFlhc2h3YW50IFJhbyIsIm93bmVyRW1haWwiOiJ2dHUxOTI5MkB2ZWx0ZWNoLmVkdS5pbiIsInJvbGxObyI6IjE5MjkyIn0.jE5dxGN4GpECkpp42oRWPPa27TurhmrESWGB-CP4xeM'
    const headers = {
        Authorization: `Bearer ${bearerToken}`
    }
    const result = await axios.get(API, { headers });
    res.send(result.data)
})
