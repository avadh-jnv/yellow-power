export default function handler(req,res){

    const videos=[
    
    {
    id:1,
    title:"Epic Adventure",
    channel:"Yellow Power"
    },
    
    {
    id:2,
    title:"Gaming Highlights",
    channel:"Yellow Power"
    },
    
    {
    id:3,
    title:"Tech Review",
    channel:"Yellow Power"
    }
    
    ]
    
    res.status(200).json(videos)
    
    }