import KalimantanSource from "../../data/kalimantanAPI";
// import riwayatinit from "../../utils/riwayatPage/initiator/riwayatInit";

const RiwayatPage = {
    async render() {
        return `
            <h1>Riwayat Transaksi</h1>
                 <section class="riwayat-transaksi card-container">
                    </section>
            <riwayat-page></riwayat-page>
        `
    },

    async afterRender() {
        const header = document.querySelector('header')
        header.removeAttribute('hidden')
        const footer = document.querySelector('footer')
        footer.removeAttribute('hidden')
        const linkBoot = document.querySelector('.linkBoot')
        linkBoot.removeAttribute('href')
        const data = await KalimantanSource.dataRiwayat()
        if(data === undefined) {
            Swal.fire({
                icon: 'info',
                title: 'Perhatian !',
                text: `Masih Belum Ada Transaksi`,
              });
              return
        } else {
            const riwayatCardInit = document.createElement('riwayat-page')
            riwayatCardInit._getData(data.result)
        }

        const cardId = document.querySelector('.card-container')
        cardId.addEventListener('click', async (event) => {
            if(event.target.getAttribute('data-id')) {
                Swal.fire({
                    title: 'Anda Yakin Ingin Membayar ?',
                    text: "Seteleh Pembayaran, Uang Anda Tidak bisa Kembali !",
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Lanjut Bayar!',
                    cancelButtonText: 'No, Batal!',
                    reverseButtons: true
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        const token = await KalimantanSource.tokenPembayaran(event.target.getAttribute('data-id'))
                        window.snap.pay(token.token)
                        return
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                        Swal.fire(
                            'Cancelled',
                            'Data Anda Aman :)',
                            'error'
                        )
                    }
                }) 

                return
            } else if(event.target.getAttribute('data-hapus')) {
                Swal.fire({
                    title: 'Anda Yakin ?',
                    text: "Anda Tidak Dapat kembali !",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, Hapus Data!',
                    cancelButtonText: 'No, Batal!',
                    reverseButtons: true
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        const hapus = await KalimantanSource.hapusPembayaran(event.target.getAttribute('data-hapus'))
                        Swal.fire(
                            'Deleted!',
                            'Data Berhasil Dihapus.',
                            'success'
                        )
                        return
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                        Swal.fire(
                            'Cancelled',
                            'Data Anda Aman :)',
                            'error'
                        )
                    }
                })
  
                return 
            } else {
                return
            }
        })

        const logout = document.querySelector('.logout-all')

        if (logout === null) {
            return
        } else {
            logout.addEventListener('click', (event) => {
                event.stopPropagation()
                KalimantanSource.logoutUser()
            })
        }

     
    }
}

export default RiwayatPage