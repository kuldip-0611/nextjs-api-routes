const catch_All_Route = (req,res)=>{
    const params = req.query.params;
    res.status(200).json({params : params});

}
export default catch_All_Route