import axios from 'axios'
//axios默认配置
axios.defaults.baseURL = 'api';
export const getDate = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
}
export const getBannerDate = () => {
    return axios({
        // 不加配置
        //url:"/api/banner"
        url: "/banner",
        method: "get"
    })
}