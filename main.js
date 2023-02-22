const defaultColor = {
    'N. Virginia': '#e6194b',
    Ohio: '#3cb44b',
    'N. California': '#e58e00',
    Oregon: '#4363d8',
    'Cape Town': '#16ab3e',
    'Hong Kong': '#008080',
    Mumbai: '#8a7299',
    Seoul: '#9a6324',
    Singapore: '#ccc8a0',
    Sydney: '#800000',
    Tokyo: '#669975',
    Central: '#f58231',
    Frankfurt: '#911eb4',
    Ireland: '#31a8a8',
    London: '#f032e6',
    Milan: '#a30f88',
    Paris: '#83ac08',
    Stockholm: '#c89898',
    Bahrain: '#808000',
    'São Paulo': '#b2977b'
}

const region = document.querySelector('[data-testid="awsc-nav-regions-menu-button"]>span').innerText;
chrome.storage.local.get(region, (results)=>{
    let color = results[region];
    if(color===undefined){
        color = defaultColor[region]
    }
    if(color===undefined){
        return;
    }
    document.querySelector("#awsc-top-level-nav").style.backgroundColor=color;
})
