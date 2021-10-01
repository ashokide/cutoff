document.getElementById('getResult').addEventListener('click', () => {
    let pmark = document.getElementById('pmark').value
    let cmark = document.getElementById('cmark').value
    let mmark = document.getElementById('mmark').value
    if (pmark == '' || cmark == '' || mmark == '') {
        document.getElementById('cutoff').innerText = `All Fields Required`
    }
    else if (pmark > 100 || cmark > 100 || mmark > 100) {
        document.getElementById('cutoff').innerText = `Mark Should Lies From 0 to 100`
    }
    else {
        let result = Number(pmark) + Number(cmark) + Number(mmark)
        document.getElementById('cutoff').innerText = `Your CGPA is ${(result / 3.0).toFixed(2)}%`
    }
})