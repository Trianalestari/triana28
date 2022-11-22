function hapusMenu() {
    Swal.fire({
        title: 'Are you sure?',
               text: "Yakin ingin menghapus",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Ya, hapus!'
    }).then((result) => {
        if (result.value) {
            document.location.href = url;
        }
    })
}

function hapusrole(url) {

    Swal.fire({
        title: 'Are you sure?',
               text: "Yakin ingin menghapus",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Ya, hapus!'
    }).then((result) => {
        if (result.value) {
            document.location.href = url;
        }
    })
}

function hapussubMenu(url) {

    Swal.fire({
        title: 'Are you sure?',
               text: "Yakin ingin menghapus",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Ya, hapus!'
    }).then((result) => {
        if (result.value) {
            document.location.href = url;
        }
    })
}
