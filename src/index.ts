import express ,{Express, Request, Response} from 'express'

const app:Express = express()

app.get('/', (req:Request, res:Response)=>{
    return res.send('Text')
})

app.listen(4321, ()=>{
    console.log('Running in port 4321')
})