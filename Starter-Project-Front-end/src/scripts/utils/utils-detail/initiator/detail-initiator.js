import KalimantanSource from "../../../data/kalimantanAPI";
import API_ENDPOINT from "../../../globals/api_endpoint";

const detailInitiator = {
    _descriptioninit({mainDescription, descriptionDestination, descriptionButton, data}) {
        descriptionButton.addEventListener('click', () => {
            descriptionDestination.innerHTML = data.deskripsi;

            descriptionButton.setAttribute('hidden', '')
        })
        
    },

    _ticketInit({plusButton, minusButton, total, qty, orderTicket, data}) {
        let totalCounter = 0
        const counter = () => {
            return totalCounter += 1
        }
        const counterM = () => {
            return totalCounter -= 1
        }

        let totalHarga = 0
        plusButton.addEventListener('click', () => {
            minusButton.removeAttribute('disabled')
            total.firstChild.innerHTML = `Rp ${totalHarga += Number(data.harga_tiket)}`
            qty.innerHTML = counter()
        })
        minusButton.addEventListener('click', () => {
            if (qty.innerHTML <= 0 || total.firstChild.innerHTML <= 0) {
                minusButton.setAttribute('disabled', '')
            } else {
                qty.innerHTML = counterM()
                total.firstChild.innerHTML = `Rp ${totalHarga -= Number(data.harga_tiket)}`
            }
        })

        orderTicket.addEventListener('click', () => {
            const totalQty = totalCounter
            if (total.firstChild.innerHTML === 'Rp 0') {
                Swal.fire({
                    icon: 'info',
                    title: 'Information!',
                    text: `Pesanan Masih Kosong Silahkan Tambahkan Jumlah Tiket`,
                  });
                  return
            } else {
                Swal.fire({
                    title: 'Anda Yakin Membeli Tiket ini ?',
                    text: "Silahkan Cek kembali Pesanan !",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Pesan Tiket!',
                    cancelButtonText: 'No, Batal!',
                    reverseButtons: true
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        KalimantanSource.orderUser(totalQty, data.id)
                       
                        return
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                        Swal.fire(
                            'Cancelled',
                            'Please Buy It ! :(',
                            'error'
                        )
                    }
                })
                totalHarga = 0
                totalCounter = 0
                total.firstChild.innerHTML = 'Rp 0'
                qty.innerHTML = 0
                return 
            }
        })
    },

    async _imageInit({image1, image2, image3, containerOpenImage, close, openImage, data}) {
        const dataPhoto1 = await KalimantanSource.dataPhoto(data.id, data.photos_1)
        const dataPhoto2 = await KalimantanSource.dataPhoto(data.id, data.photos_2)
        const dataPhoto3 = await KalimantanSource.dataPhoto(data.id, data.photos_3)
        image1.addEventListener('click', () => {
            containerOpenImage.removeAttribute('hidden')
            openImage.setAttribute('src',`${dataPhoto1}`)
            close.addEventListener('click', () => {
                containerOpenImage.setAttribute('hidden', '')
            })
        })
        image2.addEventListener('click', () => {
            containerOpenImage.removeAttribute('hidden')
            openImage.setAttribute('src',`${dataPhoto2}?`)
            close.addEventListener('click', () => {
                containerOpenImage.setAttribute('hidden', '')
            })
        })
        image3.addEventListener('click', () => {
            containerOpenImage.removeAttribute('hidden')
            openImage.setAttribute('src',`${dataPhoto3}`)
            close.addEventListener('click', () => {
                containerOpenImage.setAttribute('hidden', '')
            })
        })
    },

    async _renderPhoto({photo1, photo2, photo3, data}) {
        const dataPhoto1 = await KalimantanSource.dataPhoto(data.id, data.photos_1)
        const dataPhoto2 = await KalimantanSource.dataPhoto(data.id, data.photos_2)
        const dataPhoto3 = await KalimantanSource.dataPhoto(data.id, data.photos_3)
        photo1.src = dataPhoto1
        photo2.src = dataPhoto2
        photo3.src = dataPhoto3
    }
}

export default detailInitiator