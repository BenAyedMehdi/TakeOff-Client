import axios from 'axios'

export default class apiCalls{
    
    static async GetAllPackages(){
        const res = await axios.get('https://findyourwayapi.azurewebsites.net/api/Packages')
        .catch(e=> console.log(e))
        return res.data
    }

    static async GetAllFields(){
        const res = await axios.get('https://findyourwayapi.azurewebsites.net/api/Fields')
        .catch(e=> console.log(e))
        return res.data
    }

    static async GetAllCategories(){
        const res = await axios.get('https://findyourwayapi.azurewebsites.net/api/Categories')
        .catch(e=> console.log(e))
        return res.data
    }

    static async GetAllUsers(){
        const res = await axios.get('https://findyourwayapi.azurewebsites.net/api/Users')
        .catch(e=> console.log(e))
        return res.data
    }

    static async GetAllCompanies(){
        const res = await axios.get('https://findyourwayapi.azurewebsites.net/api/Companies')
        .catch(e=> console.log(e))
        return res.data
    }

    static async GetAllProducts(){
        const res = await axios.get('https://findyourwayapi.azurewebsites.net/api/Products')
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