import axios from "axios";
const url="wss://api-betatestnet.brine.finance/liveorderbookwire";

export function fetchData(url) {
    axios.get(url).then((resp) => {
        return resp.data;
    });
}
