const arr = ["https://dumbways.id", "https://finance.detik.com", "https://support.hostinger.co.id", "https://jdih.kominfo.go.id", "https://mamikos.com"]

const subDomain = (arr) => {
  	let newArray = []
    arr.forEach(a => {
        const cek = a.split('.')
        if( cek.length > 2 ) {
            newArray.push(a)
        }
    })
  console.log(newArray)
}
subDomain(arr)