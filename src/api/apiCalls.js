import axios from 'axios'

export default class apiCalls{
    static async GetAllUsers(){
        const res = await axios.get('https://findyourwayapi.azurewebsites.net/api/Users')
        .catch(e=> console.log(e))
        return res.data
    }

    static async GetCompanyMilestones(id){
        const res = await axios.get(`https://findyourwayapi.azurewebsites.net/api/Milestones/${id}`, id)
        .catch(e=> console.log(e))
        return res.data
    }
    
    static async GetCompanyProducts(id){
        const res = await axios.get(`https://findyourwayapi.azurewebsites.net/api/Products/${id}`, id)
        .catch(e=> console.log(e))
        return res.data
    }

    static async AddDecision(toAdd){
        const res = await axios.post('https://localhost:7139/api/Decisions', toAdd)
        .catch(e=> console.log(e))
        console.log(res)
        return res.data
    }

}