import axios from 'axios'

export default () => {
    return axios.get('https://s3-sa-east-1.amazonaws.com/config.instacarro.com/recruitment/auctions.json')
    .then(res => {
        return res.data
    })
}
