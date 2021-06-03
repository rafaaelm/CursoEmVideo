function contar() {
    let ini = document.getElementById('txt1')
    let fim = document.getElementById('txt2')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivél contar!'
        window.alert('[ERRO] Falta dados')       
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido! Considerando Passo 1')
            p = i
        }
        if (i < f) {
            // Contagem crescente 
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449}`
            }

            }else {
                // Contagem regressiva
                for (let c = i; c >= f; c -= p) {
                    res.innerHTML += `${c} \u{1f449}`
                }
            }
            res.innerHTML += `\u{1f3C1}`

        }
    }