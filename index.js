document.getElementById('submit').addEventListener('click', renderColorScheme)

function renderColorScheme() {
    const baseColor = document.getElementById('colorInput').value.slice(1)
    const colorMode = document.getElementById('colors').value
    const mainEl = document.getElementById('main')
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=${colorMode}`)
        .then(res => res.json())
        .then(data => mainEl.innerHTML = ` <section id="colorSchemeSection">
                                                <div class="colorItem">
                                                    <div class="showColor" style="background-color: ${data.colors[0].hex.value}"></div>
                                                    <p>${data.colors[0].hex.value}</p>
                                                </div>
                                                <div class="colorItem">
                                                    <div class="showColor" style="background-color: ${data.colors[1].hex.value}"></div>
                                                    <p>${data.colors[1].hex.value}</p>
                                                </div>
                                                <div class="colorItem" >
                                                    <div class="showColor" style="background-color: ${data.colors[2].hex.value}"></div>
                                                    <p>${data.colors[2].hex.value}</p>
                                                </div>
                                                <div class="colorItem">
                                                    <div class="showColor" style="background-color: ${data.colors[3].hex.value}"></div>
                                                    <p>${data.colors[3].hex.value}</p>
                                                </div>
                                                <div class="colorItem">
                                                    <div class="showColor" style="background-color: ${data.colors[4].hex.value}"></div>
                                                    <p>${data.colors[4].hex.value}</p>
                                                </div>
                                            </section>`)
}

