import api from "../Utils/Api";

export async function getUsers() {
    console.log("chamou a api");
    return await api.get('/photos');  
};

export async function getUser(id) {
    return await api.get(`/photos/${id}`);
};

export async function createUser(data) {
    return await api.post('/photos', data);
};

export async function updateUser(id, data) {
    //console.log(JSON.stringify(data));
    return await api.put(`/photos/${id}`, data);
};

export async function deleteUser(id) {
    console.log(`Removido: ${id}`);
    return await api.delete(`/photos/${id}`);
};

export async function heavyLoad() {
    const request = new Promise((resolve, handleError) => {
        setInterval(() => {
            resolve(true);
        }, 3000)
    })
}