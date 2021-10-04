const cetak_gambar = (num) =>{
    console.log("--- panjang ---")
  if(num%2==0) {
      console.log("parameters must be an odd number!")
      return false
  }
  let i = 1
  for(i; i<=num; i++) {
      if(i%2==1) {
          console.log("* ".repeat(num))
      }else {
          console.log(`* ${"= ".repeat(num-2)}*`)
      }
  }
}

cetak_gambar(7)