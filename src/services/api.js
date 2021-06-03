import axios from 'axios'

export default function api(){
    return axios.get('https://s3-sa-east-1.amazonaws.com/config.instacarro.com/recruitment/auctions.json')
    .then(res => {
        return res.data.sort((a, b) => {
            return parseInt(a.remainingTime) - parseInt(b.remainingTime)
        })
    })
}
