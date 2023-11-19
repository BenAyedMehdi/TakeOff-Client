import axios from 'axios'

const url = "https://takeoffapi.azurewebsites.net";

export default class apiCalls{
    
    static async GetAllPackages(){
        const res = await axios.get(`${url}/api/Packages`)
        .catch(e=> console.log(e))
        return res.data
    }

    static async GetAllFields(){
        const res = await axios.get(`${url}/api/Fields`)
        .catch(e=> console.log(e))
        return res.data
    }

    static async GetAllCategories(){
        const res = await axios.get(`${url}/api/Categories`)
        .catch(e=> console.log(e))
        return res.data
    }

    static async GetAllUsers(){
        const res = await axios.get(`${url}/api/Users`)
        .catch(e=> console.log(e))
        return res.data
    }

    static async GetAllCompanies(){
        const endpoint = `${url}/api/Companies`
        console.log(endpoint)
        const res = await axios.get(endpoint)
        .catch(e=> console.log(e))
        return res.data
    }

    static async GetAllProducts(){
        const res = await axios.get(`${url}/api/Products`)
        .catch(e=> console.log(e))
        return res.data
    }
    
    static async GetCompanyById(id){
        const res = await axios.get(`${url}/api/Companies/${id}`, id)
        .catch(e=> console.log(e))
        return res.data
    }

    static async GetCompanyMilestones(id){
        const res = await axios.get(`${url}/api/Milestones/${id}`, id)
        .catch(e=> console.log(e))
        return res.data
    }
    
    static async GetCompanyProducts(id){
        const res = await axios.get(`${url}/api/Products/${id}`, id)
        .catch(e=> console.log(e))
        return res.data
    }

    static async AddProduct(toAdd){
        console.log(toAdd)
        const res = await axios.post(`${url}/api/Products`, toAdd)
        .catch(e=> console.log(e))
        console.log(res)
        return res.data
    }

}