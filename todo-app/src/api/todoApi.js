//here we are goin to create function for api calls
import axios from 'axios';

// const apiUrl = 'http://localhost:5000/app/tasks';
const apiUrl="https://todo-mern-be91.onrender.com"

//get all todos
export const getTodo = async () => {
    try {
        const res = await axios.get(`${apiUrl}`);
        return res.data
    } catch (err) {
        console.log(err)
    }
}

//create todos
export const createTodo = async (title) => {
    try {
        const res = await axios.post(`${apiUrl}`, { title, completed: false });
        return res.data
    } catch (err) {
        console.log(err)
    }
}
//for todo update
export const updateTodo = async (id, title) => {
    try {
        if (title) {
            const res = await axios.put(`${apiUrl}/${id}`, { title, completed: false });
            return res.data
        }else{
            alert('empty cannot update')
        }
    } catch (err) {
        console.log(err)
    }
}
//for todo delete
export const deleteTodo = async (id) => {
    try {
        const res = await axios.delete(`${apiUrl}/${id}`);
        return res.data
    } catch (err) {
        console.log(err)
    }
}

