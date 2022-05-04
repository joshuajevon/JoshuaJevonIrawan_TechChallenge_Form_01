const formulir= document.getElementById('formulir')
const nama= document.getElementById('nama')
const email= document.getElementById('email')
const password= document.getElementById('password')
const alamat= document.getElementById('alamat')
const nomor= document.getElementById('nomor')
const kelamin= document.getElementById('kelamin')

formulir.addEventListener('submit',f=>{
    f.preventDefault()
    cek()
})

function cek(){
  const inputNama= nama.value.trim()
  const inputEmail= email.value.trim()
  const inputPassword= password.value.trim()
  const inputAlamat= alamat.value.trim()
  const inputNomor= nomor.value.trim()
  const inputKelamin= kelamin.value.trim()

  //nama
  if (inputNama=== '')
  {
    salah(nama,'Nama harus diisi')
  }
  else
  {
    benar(nama)
  }

  //email
  if (inputEmail=== '')
  {
    salah(email,'Email harus diisi')
  }
  else if (!cekEmail(inputEmail)){
    salah(email,'Harus masukkan email yang valid')
  }
  else{
    benar(email)
  }

  //password
  if (inputPassword=== '')
  {
    salah(password,'Password harus diisi')
  }
  else if(inputPassword.length <= 6)
  {
    salah(password,'Password harus lebih dari 6 karakter')
  }
  else
  {
    benar(password)
  }

  //alamat  
  if (inputAlamat=== '')
  {
    salah(alamat,'Alamat harus diisi')
  }
  else
  {
    benar(alamat)
  }

  //nomor
  if (inputNomor=== '')
  {
    salah(nomor,'Nomor harus diisi')
  }
  else if(inputNomor.length <= 10)
  {
    salah(nomor,'Nomor harus lebih dari 10 angka')
  }
  else
  {
    benar(nomor)
  }

  //jenis kelamin
  if (inputKelamin=== '')
  {
    salah(kelamin,'Jenis kelamin harus diisi')
  }
  else
  {
    benar(kelamin)
  }
};

function benar(komponen){
  const panel= komponen.parentElement
  const tampilan= panel.querySelector('.validation')
  tampilan.innerText= " "
}

function salah(komponen,pesan){
    const panel= komponen.parentElement
    const tampilan= panel.querySelector('.validation')
    tampilan.innerText= pesan
}

function cekEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



