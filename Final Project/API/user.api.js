export const userAPI = {

    post: (user) => {
        fetch("http://localhost:3000/user", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        })
    },

    getUser: async(email) => {
        let req = await fetch(`http://localhost:3000/user?email=${email}`)
        let res = await req.json()
        return res

    },
    get: async() => {
        let req = await fetch("http://localhost:3000/user");
        let res = await req.json();
        console.log(res);
        return res;
    },



    Patch: async(id, user) => {

        let req = await fetch(`http://localhost:3000/user/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        })
    },

    Delete: async(id) => {
        let req = await fetch(`http://localhost:3000/user/${id}`, {
            method: "DELETE",
        })
    }
}


export const ProductApi = {

    post: (Products) => {
        fetch("http://localhost:3000/products", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(Products)
        })
    },


    get: async() => {
        let req = await fetch("http://localhost:3000/products");
        let res = await req.json();
        console.log(res);
        return res;
    },

    getproduct: async(id) => {
        let req = await fetch(`http://localhost:3000/products?id=${id}`)
        let res = await req.json()
        return res
    },


    Patch: async(id, products) => {

        let req = await fetch(`http://localhost:3000/products/${id}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(products)
        })
    },

    Delete: async(id) => {
        let req = await fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE",
        })
    }
}