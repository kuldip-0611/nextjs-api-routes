export default function apiRoutes(req,res) {
    if(req.method==="GET"){
        res.status(200).json({"name":'home api routes'})
    }
    


} 