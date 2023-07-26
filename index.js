const firstel = document.getElementById("first")
const iiel = document.getElementById("2nd")
const firstwel = document.getElementById("worthist")
const iiwel = document.getElementById("worth2nd")
const displayel = document.getElementById("display")
const btnel = document.getElementById("btn")
const btn1el = document.getElementById("btn1")
const hel = document.getElementById("hour1")
const mel = document.getElementById("min1")
const zel = document.getElementById("zone1")
const h2el = document.getElementById("hour2")
const m2el = document.getElementById("min2")
const z2el = document.getElementById("zone2")


const options = {
    method: "get",
    headers: {
        "X-Api-Key": 'WmISf1f+f/yEDTPm9UpNag==hb1oPDM6JW3naBs8'
    },
};
async function currate() {
    firstwel.innerText = `(*__*)`
    iiwel.innerText = `(*__*)`
    hel.innerText = `..`
    mel.innerText = `..`
    zel.innerText = `..`
    h2el.innerText = `..`
    m2el.innerText = `..`
    z2el.innerText = `..`
    btnel.innerText = "calculating...!"
    btnel.disabled = true
    btn1el.classList.add("animation")
    displayel.innerText = ""
    try {
        const result = await fetch(`https://api.api-ninjas.com/v1/worldtime?city=${firstel.value}`, options)
        firstwel.innerText = `(*__-)`
        const response = await result.json()
        if (response.error) {
            console.log(response.error)
            displayel.innerText = `Sorry Cant provide you the time zone of given country`
            setTimeout(() => {
                displayel.innerText = ""
            }, 3000);
        } else {
            console.log(response)
            var h1 = response.hour
            let h = response.hour
            h = h % 12;
            h = h ? h : 12;
            hel.innerText = ` ${h}:`
            mel.innerText = ` ${response.minute}`
            zel.innerText = ` ${response.hour >= 12 ? "PM" : "AM"}`
            firstwel.innerText = ` ${response.date}`
        }
    } catch (error) {
        console.log(error)
        displayel.innerText = `an error ocurred please try again later`
    }
    try {
        const result = await fetch(`https://api.api-ninjas.com/v1/worldtime?city=${iiel.value}`, options)
        iiwel.innerText = `(*__-)`
        const response = await result.json()
        if (response.error) {
            console.log(response.error)
            displayel.innerText = `Sorry Cant provide you the time zone of given country`
            setTimeout(() => {
                displayel.innerText = ""
            }, 3000);
        } else {
            var h2 = response.hour
            console.log(response)
            let h = response.hour
            h = h % 12;
            h = h ? h : 12;
            h2el.innerText = ` ${h}:`
            m2el.innerText = ` ${response.minute}`
            z2el.innerText = ` ${response.hour >= 12 ? "PM" : "AM"}`
            iiwel.innerText = ` ${response.date}`
        }
    } catch (error) {
        console.log(error)
        displayel.innerText = `an error ocurred please try again later`
        setTimeout(() => {
            displayel.innerText = ""
        }, 3000);
    }

    btnel.innerText = "Calculate Diffrence"
    btnel.disabled = false
    btn1el.classList.remove("animation")
    console.log(h1, h2);
    let Diffrence = h1 - h2
    console.log(Diffrence);
    if (h1 <= h2) {
        displayel.innerText = `time diffence between both countries is ${Diffrence + (Diffrence * (-2))} HOURS`
    } else {
        displayel.innerText = `time diffence between both countries is ${Diffrence} HOURS`

    }


}
btnel.addEventListener("click", currate)



