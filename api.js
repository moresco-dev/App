const API = 'http://192.168.5.109:3000/tasks'
const APIUSERS = 'http://192.168.5.109:3000/usrs'
import AsyncStorage from '@react-native-async-storage/async-storage';


export const getTasks = async () => {
  const res = await fetch(API)
  return await res.json()
}

export const getTask = async (id) => {
  const token = await AsyncStorage.getItem('@token')
  //const res = await fetch(API + '/' + id, {method: "POST",}) //interpolación clasica
  const res = await fetch(`${API}/${id}`,//forma literal (usando ${expresiones})
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": token
      },
    }) 
  
  return await res.json()
}




export const saveTask = async (newTask) => {
  const token = await AsyncStorage.getItem('@token')

  const res = await fetch(API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": token
    },
    body: JSON.stringify(newTask)
  })
}

export const updateTask = async (id, task) => {
  const token = await AsyncStorage.getItem('@token')

  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": token
    },
    body: JSON.stringify(task)
  })
}

export const deleteTask = async (id) => {
  const token = await AsyncStorage.getItem('@token')

  await fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": token
    },
  })
}


export const getUser = async (user) => {
  const response = await fetch(`${APIUSERS}/login`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    ;
  const data = await response.json();
  await AsyncStorage.setItem('@token', data.token)
  return (data)
}


export const getDataSeved = async (dataName) => {
  return await AsyncStorage.getItem(dataName)
}

