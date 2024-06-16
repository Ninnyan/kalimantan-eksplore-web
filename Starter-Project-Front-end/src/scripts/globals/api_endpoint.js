import CONFIG from "./config";


const API_ENDPOINT = {
    REGISTERADMNIN: `${CONFIG.BASE_URL}/auth-private/admin/register`,
    LOGINADMIN: `${CONFIG.BASE_URL}/auth-private/admin/login`,
    REGISTERUSER: `${CONFIG.BASE_URL}/auth/user/register`,
    LOGINUSER: `${CONFIG.BASE_URL}/auth/user/login`,
    DATAALLWISATA: `${CONFIG.BASE_URL}/wisata/province`,
    RIWAYATORDER: `${CONFIG.BASE_URL}/order/get-riwayat`,
    TOKENPEMBAYARAN: `${CONFIG.BASE_URL}/payment/pay`,
    HAPUSPEMBAYARAN: `${CONFIG.BASE_URL}/order/delete-order`,
    DETAILWISATA: `${CONFIG.BASE_URL}/wisata/detail`,
    GETPHOTO: `${CONFIG.BASE_URL}/photos/photo`,
    GETMAP: `${CONFIG.BASE_URL}/map/get-map`,
    ORDERUSER: `${CONFIG.BASE_URL}/order/add-order`,
    LOGOUTUSER: `${CONFIG.BASE_URL}/user/logout`,
    ACTIVITYLOGIN: `${CONFIG.BASE_URL}/activity/get-activity`,
    STOKTIKET: `${CONFIG.BASE_URL}/stock-tiket/get-data`,
    EDITSTOKTIKET: `${CONFIG.BASE_URL}/stock-tiket/edit-stock-tiket`,
    GETPROFILE: `${CONFIG.BASE_URL}/admin/get-data-admin`,
    EDITPROFILE: `${CONFIG.BASE_URL}/admin/update-admin`,
    LOGOUTADMIN: `${CONFIG.BASE_URL}/admin/logout`,
    ADDDATAWISATA: `${CONFIG.BASE_URL}/places/add-destinasi`,
    EDITDATAWISATA: `${CONFIG.BASE_URL}/places/edit-destinasi`,
    DELETEWISATA: `${CONFIG.BASE_URL}/places/delete-destinasi`,
    GETTOTALTIKET: `${CONFIG.BASE_URL}/order/get-total-tiket`,
    GETTOTALPAY: `${CONFIG.BASE_URL}/payment/get-total-pay`,
    // HOME: `${CONFIG.BASE_URL}nearbysearch/json`,
    // DETAIL: `${CONFIG.BASE_URL}details/json`,

}

export default API_ENDPOINT