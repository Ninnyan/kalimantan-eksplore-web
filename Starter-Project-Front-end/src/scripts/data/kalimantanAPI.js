import API_ENDPOINT from "../globals/api_endpoint";

class KalimantanSource {
    static async registerAdmin(data) {
        try {
            const option = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }
            const response = await fetch(API_ENDPOINT.REGISTERADMNIN, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  return
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: `${result.message}`,
                  });
                window.location.href = '/#/login-admin'
                return
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }

    static async loginAdmin(data) {
        try {
            const option = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }
            const response = await fetch(API_ENDPOINT.LOGINADMIN, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                localStorage.removeItem('idAdmin');
                localStorage.removeItem('tokenAdmin');
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `Password dan Email Salah !`,
                  });
                  return
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: `Login Berhasil `,
                  });
                localStorage.setItem('tokenAdmin', result.data.token)
                localStorage.setItem('idAdmin', result.data.id_admin)
                window.location.href = '/#/admin-dashboard'
                return result
            }

        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }

    static async registerUser(data) {
        try {
            const option = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }
            const response = await fetch(API_ENDPOINT.REGISTERUSER, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  return 
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: `${result.message}`,
                  });
                window.location.href = '/#/login-user'
                return result
            }
        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }

    static async loginUser(data) {
        try {
            const option = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }
            const response = await fetch(API_ENDPOINT.LOGINUSER, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                localStorage.removeItem('idUser');
                localStorage.removeItem('idWisata');
                localStorage.removeItem('idOrder');
                localStorage.removeItem('token');
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `Password dan Email Salah !`,
                  });
                  
                  return
            } else {
                let dropdownMenu = document.querySelector('.dropdown-menu');
                const dataMenu = `  <a href="#" class="logout-all"><span class="material-symbols-outlined"> logout </span>Keluar</a>`
                dropdownMenu.innerHTML = ''
                dropdownMenu.innerHTML = dataMenu
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: `Login Berhasil`,
                  });
                localStorage.setItem('token', result.data.token)
                localStorage.setItem('idUser', result.data.id_user)
                window.location.href = '/#/home'
                return result
            }

        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }
    
    static async logoutUser() {
        const token = localStorage.getItem('token')
        try {
            const option = {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            const response = await fetch(API_ENDPOINT.LOGOUTUSER, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  
                  return
            } else {
                localStorage.removeItem('idUser');
                localStorage.removeItem('idWisata');
                localStorage.removeItem('idOrder');
                localStorage.removeItem('token');
                let dropdownMenu = document.querySelector('.dropdown-menu');
                const dataMenu = `  <a href="/#/login-user" class="login-all"><span class="material-symbols-outlined"> login </span>Masuk</a>
                <a href="/#/registrasi-user" class="daftar-all"><span class="material-symbols-outlined"> person_edit </span>Daftar</a>`
                dropdownMenu.innerHTML = ''
                dropdownMenu.append(dataMenu)
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: `${result.message}`,
                  });
                window.location.href = '/#/login-user'
                return result
            }

        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }


    static async logoutAdmin() {
        const tokenAdmin = localStorage.getItem('tokenAdmin')
        try {
            const option = {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${tokenAdmin}`
                }
            }
            const response = await fetch(API_ENDPOINT.LOGOUTADMIN, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  
                  return
            } else {
                localStorage.removeItem('idAdmin');
                localStorage.removeItem('idWisata');
                localStorage.removeItem('tokenAdmin');
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: `${result.message}`,
                  });
                window.location.href = '/#/login-admin'
                return result
            }

        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }
    


    static async dataAllWisata() {
        try {
            const option = {
                method: 'GET',
            }
            const response = await fetch(`${API_ENDPOINT.DATAALLWISATA}`, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  return
            } else {
                localStorage.setItem('idWisata', result.result.id_wisata)
                return result
            }
            
        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }

    static async dataPhoto(idWisata, reference) {
        try {
            const option = {
                method: 'GET',
            }
            const response = await fetch(`${API_ENDPOINT.GETPHOTO}?idWisata=${idWisata}&photoReference=${reference}`, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  return
            } else {
                return result.url
            }
        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }

    static async dataRiwayat() {
        try {
            const token = localStorage.getItem('token')
            const idUser = localStorage.getItem('idUser')
            const option = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            const response = await fetch(`${API_ENDPOINT.RIWAYATORDER}?idUser=${idUser}`, option)
            const result = await response.json()
            if(result.status === 'Fail' || result === undefined) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  return
            } else {
                return result
            }
        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }

    static async tokenPembayaran(orderId) {
        try {
            const token = localStorage.getItem('token')
            const idUser = localStorage.getItem('idUser')
            const option = {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            }
            const response = await fetch(`${API_ENDPOINT.TOKENPEMBAYARAN}?idOrder=${orderId}&idUser=${idUser}`, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  return
            } else {
                return result
            }
        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }

    static async hapusPembayaran(orderId) {
        try {
            const token = localStorage.getItem('token')
            const idUser = localStorage.getItem('idUser')
            const option = {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            }
            const response = await fetch(`${API_ENDPOINT.HAPUSPEMBAYARAN}?idOrder=${orderId}`, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  return
            } else {
                Swal.fire(
                    'Deleted!',
                    'Data Berhasil Dihapus.',
                    'success'
                )
                return result
            }
        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }

    static async detailWisata(idWisata) {
        try {
            const option = {
                method: 'GET',
            }
            const response = await fetch(`${API_ENDPOINT.DETAILWISATA}?idWisata=${idWisata}`, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  return
            } else {
                return result
            }
        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }

    static async getMap(placeId) {
        try {
            const option = {
                method: 'GET',
            }
            const response = await fetch(`${API_ENDPOINT.GETMAP}?place_id=${placeId}`, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  return
            } else {
                return result
            }
        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }

    static async orderUser(qty, idWisata) {
        const token = localStorage.getItem('token')
        const idUser = localStorage.getItem('idUser')
        try {
            const option = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({qty})
            }
            const response = await fetch(`${API_ENDPOINT.ORDERUSER}?idWisata=${idWisata}&idUser=${idUser}`, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'info',
                    title: 'Perhatian !',
                    text: `${result.message}, silahkan login terlebih dahulu !`,
                  });
                  return
            } else {
                Swal.fire(
                    'Pesanan Berhasil!',
                    'Silahkan Cek riwayat Transaksi untuk melakukan pembayaran !!',
                    'success'
                )
                return result
            }
        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }

    static async getActivityUser() {
        const tokenAdmin = localStorage.getItem('tokenAdmin')
        try {
            const option = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${tokenAdmin}`
                },
            }
            const response = await fetch(`${API_ENDPOINT.ACTIVITYLOGIN}`, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  return
            } else {
                return result
            }
        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }

    static async getStokTiket() {
        const idAdmin = localStorage.getItem('idAdmin')
        const tokenAdmin = localStorage.getItem('tokenAdmin')
        try {
            const option = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${tokenAdmin}`
                },
            }
            const response = await fetch(`${API_ENDPOINT.STOKTIKET}?idAdmin=${idAdmin}`, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  return
            } else {
                return result
            }
        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }

    static async editStokTiket(idWisata, stock_tiket) {
        const idAdmin = localStorage.getItem('idAdmin')
        const tokenAdmin = localStorage.getItem('tokenAdmin')
        try {
            const option = {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${tokenAdmin}`
                },
                body: JSON.stringify({stock_tiket})
            }
            const response = await fetch(`${API_ENDPOINT.EDITSTOKTIKET}?idWisata=${idWisata}`, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  return
            } else {
                return result
            }
        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }

    static async getProfileAdmin() {
        const idAdmin = localStorage.getItem('idAdmin')
        const tokenAdmin = localStorage.getItem('tokenAdmin')
        try {
            const option = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${tokenAdmin}`
                },
            }
            const response = await fetch(`${API_ENDPOINT.GETPROFILE}?idAdmin=${idAdmin}`, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  return
            } else {
                return result
            }
        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }

    static async editProfileAdmin(data) {
        const idAdmin = localStorage.getItem('idAdmin')
        const tokenAdmin = localStorage.getItem('tokenAdmin')
        try {
            const option = {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${tokenAdmin}`
                },
                body: JSON.stringify(data)
            }
            const response = await fetch(`${API_ENDPOINT.EDITPROFILE}?idAdmin=${idAdmin}`, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  return
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil Edit!',
                    text: `Berhasil Edit Profile !`,
                  });
                return result
            }
        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    
    }
    static async addDataWisata(formData) {
        const idAdmin = localStorage.getItem('idAdmin')
        const tokenAdmin = localStorage.getItem('tokenAdmin')
        try {
            const option = {
                method: 'POST',
                headers: {
                    // 'content-type': 'multipart/form-formData',
                    'Authorization': `Bearer ${tokenAdmin}`
                },
                body: formData
            }
            const response = await fetch(`${API_ENDPOINT.ADDDATAWISATA}`, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  return
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil Edit!',
                    text: `Berhasil Edit Profile !`,
                  });
                return result
            }
        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }

    static async editDataWisata(formData, idWisata) {
        const tokenAdmin = localStorage.getItem('tokenAdmin')
        try {
            const option = {
                method: 'PUT',
                headers: {
                    // 'content-type': 'multipart/form-formData',
                    'Authorization': `Bearer ${tokenAdmin}`
                },
                body: formData
            }
            const response = await fetch(`${API_ENDPOINT.EDITDATAWISATA}?idWisata=${idWisata}`, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  return
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil Edit!',
                    text: `Berhasil Edit Profile !`,
                  });
                return result
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }

    static async deleteDataWisata(idWisata) {
        const tokenAdmin = localStorage.getItem('tokenAdmin')
        try {
            const option = {
                method: 'DELETE',
                headers: {
                    // 'content-type': 'multipart/form-formData',
                    'Authorization': `Bearer ${tokenAdmin}`
                },
            }
            const response = await fetch(`${API_ENDPOINT.DELETEWISATA}?idWisata=${idWisata}`, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  return
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil Edit!',
                    text: `Berhasil Edit Profile !`,
                  });
                return result
            }
        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }
    static async getTotalTiket() {
        const tokenAdmin = localStorage.getItem('tokenAdmin')
        try {
            const option = {
                method: 'GET',
                headers: {
                    // 'content-type': 'multipart/form-formData',
                    'Authorization': `Bearer ${tokenAdmin}`
                },
            }
            const response = await fetch(`${API_ENDPOINT.GETTOTALTIKET}`, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  return
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil!',
                    text: `Berhasil Memuat !`,
                  });
                return result
            }
        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }
    static async getTotalPay(idWisata) {
        const tokenAdmin = localStorage.getItem('tokenAdmin')
        try {
            const option = {
                method: 'GET',
                headers: {
                    // 'content-type': 'multipart/form-formData',
                    'Authorization': `Bearer ${tokenAdmin}`
                },
            }
            const response = await fetch(`${API_ENDPOINT.GETTOTALPAY}`, option)
            const result = await response.json()
            if(result.status === 'Fail') {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: `${result.message}`,
                  });
                  return
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil!',
                    text: `Berhasil Memuat !`,
                  });
                return result
            }
        } catch (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `Terjadi Kesalahan pada server`,
              });
            return
        }
    }

}

export default KalimantanSource