let creekPath = document.querySelectorAll('.st');
let birdViewerCont = document.getElementById('birdViewerCont');
let exitButton = document.getElementById('exitButton');
let greyLayer = document.getElementById('greyLayer');
let opaqueLayer = document.getElementsByClassName('opaqueLayer');
let hoverLayer = document.getElementsByClassName('hoverLayer');
let birdNameText = document.getElementById('birdName');
let birdSciName = document.getElementById('birdSciName');
let birdParagraph = document.getElementById('birdParagraph');
let birdPhoto = document.getElementById('birdPhoto')
let birdLink = document.getElementById('birdLink');
let fishModal = document.getElementById('addFishModalCont');
let waterModal = document.getElementById('addWaterModalCont');
let plantsModal = document.getElementById('addPlantsModalCont');
let floodModal = document.getElementById('reduceFloodModalCont');
let floodVideo = document.getElementById('floodVideo');
let shareModal = document.getElementById('shareEnjoyModalCont');
let svg = document.getElementById('svg');
let button = document.getElementById('svg');
let card = document.getElementsByClassName('card');
let modalExit = document.getElementById('modalExit');

document.addEventListener('click', clickFunction);

let organismArray = [ 
{birdName: 'Cedar Waxwing', sciName: 'Bombycilla cedrorum', paragraph1: 'Cedar Waxwings primarily eat fruit, especially in the Fall and Winter. During the Summer and Spring, they supplement their diet with insects, often caught in mid-air. They feed in flocks and are nomadic rather than territorial. Visit this eBird site to see a', birdURL: 'https://ebird.org/science/status-and-trends/cedwax/abundance-map-weekly', birdLinkText: 'Visit this eBird site to see a dynamic display of their migratory behavior.', img: 'lifePictures/cedarWaxWing.jpeg'}, 
{birdName: 'Western Tiger Swallowtail', sciName: 'Papilio rutulus', paragraph1: 'In one form or another, butterflies can live for up to a year. However, they actually spend only one or two weeks in the form that we would recognize as a butterfly.', birdURL: '', birdLinkText: '', img: 'lifePictures/westernTigerSwallowtail.jpeg'},
{birdName: 'Red Elderberry', sciName: 'Sambucus racemosa', paragraph1: 'Red Elderberry is native to Western Washington.  A variety of birds, including <span class="sh" id="sh19">Band-tailed Pigeons</span>, <span class="sh" id="sh17">Pileated Woodpeckers</span>, and Wood Ducks, as well as many other creatures, will eat these berries. Learn more about the Red Elderberry at the Native Plants of the PNW.', birdURL: 'http://nativeplantspnw.com/red-elderberry-sambucus-racemosa/', birdLinkText: 'Learn more about the Red Elderberry at the Native Plants of the PNW.', img: 'lifePictures/redElderberry.jpg'},
{birdName: 'Tall Oregon Grape', sciName: 'Mahonia aquifolium', paragraph1: 'The Tall Oregon Grape is native to the Western Cascades, Northwestern Rockies and California.  A variety of birds eat these berries and <span class="sh" id="sh10">hummingbirds</span> consume the nectar from their flowers.', birdURL: 'http://nativeplantspnw.com/tall-oregon-grape-mahonia-aquifolium/', birdLinkText: 'Learn more about this grape at the Native Plants of the PNW.', img: 'lifePictures/tallOregonGrape.jpg'},
{birdName: 'Green Heron', sciName: 'Butorides virescens', paragraph1: 'The Green Heron, native to Western Washington, is a fish and frog-eating specialist. They migrate here to breed in the Spring and can occasionally be spotted in late summer while fishing from the lily pads in Duck Bay. Only when fish are allowed to return to Arboretum Creek, will we likely see them here.', birdURL: '', birdLinkText: '', img: 'lifePictures/greenHeronFish.jpg'},
{birdName: 'Fish', sciName: 'Species unknown', paragraph1: 'Having fish in Arboretum Creek is dependent on year-round water flow, shade, insects, and functional access from Union Bay (e.g. Lake Washington). For many decades, a pipe near the mouth of Arboretum Creek has made it inaccessible. Hopefully, by 2029, the Washington State DOT will remove the pipe and enable fish to return to Arboretum Creek.', birdURL: '', birdLinkText: '', img: 'lifePictures/greenHeronFish.jpg'},
{birdName: 'Arboretum Creek', sciName: '', paragraph1: 'Having fish in Arboretum Creek is dependent on year-round water flow, shade, insects and functional access from Union Bay (e.g. Lake Washington). For many decades, a pipe near the mouth of Arboretum Creek has made it inaccessible. Hopefully, by 2029, the Washington State DOT will remove the pipe and enable fish to return to Arboretum Creek.', birdURL: '', birdLinkText: '', img: 'lifePictures/arbCreek.jpg'},
{birdName: 'Eight-spotted Skimmer', sciName: 'Libellula forensis', paragraph1: 'This dragonfly is a Western Washington native. Surprisingly, the largest predator for dragonflies around Union Bay may be our Great Blue Heron which can weigh as much as 5 pounds and is still able to catch dragonflies in mid-air.', birdURL: '', birdLinkText: '', img: 'lifePictures/dragonfly.jpg'},
{birdName: 'Belted Kingfisher', sciName: 'Megaceryle alcyon', paragraph1: 'The Belted Kingfisher is another native fish-eating bird that specializes in head-first dives to catch <span class="sh" id="sh6">small fish</span>. They are commonly seen year-round on Union Bay. Only when fish are allowed to return to Arboretum Creek will we be likely to see them here.', birdURL: '', birdLinkText: '', img: 'lifePictures/beltedKingfisher.jpeg'},
{birdName: 'Rufous Hummingbird', sciName: 'Selasphorus rufus', paragraph1: 'The Rufous Hummingbird primarily eats nectar from flower blossoms, supplemented with insects for protein. They migrate to Mexico in the Winter.', birdURL: 'https://ebird.org/science/status-and-trends/rufhum/abundance-map-weekly', birdLinkText: 'eBird.org dynamically shows the migratory behavior of the Rufous Hummingbird.', img: 'lifePictures/blackTwinberryHumBird.jpg'},
{birdName: 'Black Twinberry', sciName: 'Lonicera involucrata', paragraph1: 'A native to Western Washington. A variety of birds will eat these berries and hummingbirds will consume the nectar from the flowers.', birdURL: 'http://nativeplantspnw.com/black-twinberry-lonicera-involucrata/', birdLinkText: 'Learn more about the Black Twinberry at the Native Plants of the PNW.', img: 'lifePictures/blackTwinberryHumBird.jpg'},
{birdName: 'Indian Plum', sciName: 'Oemleria cerasiformi', paragraph1: 'A native to Western Washington, this is one of the earliest blooming plants. In May, when you see the first yellow leaves on the Indian Plum it is a good time to start watching for the Wilson\’s Warblers. The yellow leaves and the small yellow migratory birds arrive at about the same time and are about the same color and size.', birdURL: 'http://nativeplantspnw.com/indian-plum-oemleria-cerasiformis/', birdLinkText: 'Learn more about the Indian Plum at the Native Plants of the PNW.', img: 'lifePictures/indianPlum.jpeg'},
{birdName: 'Vine Maple', sciName: 'Acer Circinatum', paragraph1: 'The Vine Maple is native to Western Washington and often fills in the understory below our more stately Firs, Hemlocks, and Cedars. This maple is sometimes used by Native Americans for weaving baskets.', birdURL: 'http://nativeplantspnw.com/vine-maple-acer-circinatum/', birdLinkText: 'Learn more about the Vine Maple at the Native Plants of the PNW', img: 'lifePictures/vineMaple.jpg'},
{birdName: 'Orange or Trumpet Honeysuckle', sciName: 'Lonicera ciliosa', paragraph1: 'This Honeysuckle is native to Western Washington and attracts <span class="sh" id="sh10">hummingbirds</span>.', birdURL: 'http://nativeplantspnw.com/trumpet-honeysuckle-lonicera-ciliosa/', birdLinkText: 'Learn more at the Native Plants of the PNW.', img: 'lifePictures/orangeHoneysuckle.jpg'},
{birdName: 'Douglas Aster', sciName: 'Symphyotrichum subspicatum', paragraph1: 'This Pacific Northwest native is a hardy plant that attracts many native pollinators - including <span class="sh" id="st2">Western Tiger Swallowtails</span>. It blooms for much of summer and into the early fall.', birdURL: 'https://blogs.oregonstate.edu/gardenecologylab/2017/11/07/plant-week-doulgas-aster/', birdLinkText: 'Learn more about this plant from the Oregon State garden Ecology Lab.', img: 'lifePictures/aster.jpeg'},
{birdName: 'Townsend\'s Warbler', sciName: 'Setophaga Townsend', paragraph1: 'The Townsend\'s Warbler is one of just two year-round, non-migratory, resident warblers in Western Washington. Mature males have a bright yellow and black pattern. Females and young have a similar pattern with dark-green instead of black.', birdURL: '', birdLinkText: '', img: 'lifePictures/warbler.jpg'},
{birdName: 'Pileated Woodpecker', sciName: 'Dryocopus pileatus', paragraph1: 'This is the largest woodpecker left in North America. Pileated Woodpeckers love Carpenter Ants & their larvae; although, they will also eat small native fruits like <span class="sh" id="sh3">Red Elderberry</span> and Red Huckleberry. They are year-round residents who excavate nest holes inside of tree trunks. For the last ten years, I have noticed the local pair(s) consistently utilizing dead or dying Red Alder trees for their nest sites. They are considered a keystone species because many dozens of other creatures reuse their nest sites.', birdURL: '', birdLinkText: '', img: 'lifePictures/woodPecker.jpg'},
{birdName: 'Western Red Cedar', sciName: 'Thuja plicate', paragraph1: 'Known as the Tree of Life to Native Americans, the Western Red Cedar supplied the materials for shelter, clothing, transportation and even bent-wood boxes capable of holding boiling water over an open flame. This tree is capable of living for a thousand years. <br><br> <i>The Bird eating the cedar seed in this photo is a Pine Siskin.', birdURL: '', birdLinkText: '', img: 'lifePictures/redCedar.jpeg'},
{birdName: 'Band-tailed Pigeon', sciName: 'Patagioenas fasciata', paragraph1: 'Band-tailed Pigeons are native, fruit, and seed-eating birds that breed in the Pacific Northwest. Locally, they have been seen eating the fruit of the Pacific Madrone and <span class="sh" id="sh3">Red Elderberries</span>. They migrate south to California in the Winter. This species also lives year-round in South America.They can be confused with non-native Rock Pigeons. However, the long tail with the dark band helps to distinguish them. With adults the white mark on the back of the neck also unique to <span class="sh" id="sh19">Band-tailed Pigeons</span>', birdURL: 'https://ebird.org/science/status-and-trends/batpig1/abundance-map-weekly', birdLinkText: 'Visit this eBird site to see a dynamic display of their migratory behavior.', img: 'lifePictures/bandTailedPigeon.jpeg' },
{birdName: 'Pacific Madrone', sciName: 'Arbutus menziesii', paragraph1: 'The Glossy green leaves and the reddish-orange bark make the Pacific Madrone a beautiful and unique tree. Since it has leaves instead of needles, one might think it is a deciduous tree. However it is actually an everygreen. It also flowers and gives fruit that attracts native birds. like <span class="sh" id="sh19">Band-tailed Pigeons</span>. The wood of a dead branch will dry and become very hard. Over the years, one dead branch in the Arboretum has provided nesting cavities to a half-a-dozen <span class="sh" id="sh21">Red-breasted Nuthach</span> families and a pair of <span class="sh" id="sh22">Downy Woodpeckers</span>.', birdURL: '', birdLinkText: '', img: 'lifePictures/redCedar.jpeg'},
{birdName: 'Red-Breasted Nuthatch', sciName: 'Sitta canadensis', paragraph1: 'Nuthatches excavate their own nest sites - one tiny chip at a time. In addition to eating the seeds of coniferous trees, in Spring, they also eat insects and feed them to their young. This male Nuthatch is bringing a bug home to its offspring. Curiously, they also paint resin around the entry to their nests. This <span class="sh" id="sh20">Pacific Madrone</span> branch has been dead for many years the Nuthatches most likely collected the resin from nearby Pine trees.', birdURL: '', birdLinkText: '', img: 'lifePictures/redCedar.jpeg'},
{birdName: 'Downy Woodpecker', sciName: 'Dryobates pubescens', paragraph1: 'Downy Woodpeckers are the smallest woodpecker in the PNW. The males have red on the back of their heads while females do not. In this photo a young Downy, with a sprinkle of red on its head, looking out of the nest in the dead <span class="sh" id="sh20">Pacific Madrone</span> branch, is hoping for food from it mother. They eat primarily insects. ', birdURL: '', birdLinkText: '', img: 'lifePictures/redCedar.jpeg'},
]

let whichBirdArray = [];
let modalOpen = false;
let birdViewerOpen = false;
birdViewerCont.style.display = 'none';
fishModal.display = 'none';
waterModal.display = 'none';
plantsModal.display = 'none';
floodModal.display = 'none';
shareModal.display = 'none';

document.addEventListener("keydown", event => {
    if (event.key == "Escape") {
        if (modalOpen == true) {
            hideModal();
        } else if (birdViewerModal == true) {
            hideBirdViewer();
        }
    }
})


function reveal() {
    if (event.target.matches('.st')) {
        if (birdViewerCont.style.display == 'none') {
            birdViewerCont.style.display = 'flex';
            greyLayer.style.display = 'inherit';
            birdInfoBuilder();
        }
    } else if (event.target.matches('.sh')) {
        birdInfoBuilder();
    }
    
}

function hideBirdViewer() {
    birdViewerCont.style.display = 'none';
    greyLayer.style.display = 'none';
    return birdViewerOpen = false;
}

function hideModal() {
    fishModal.style.display = 'none';
    floodModal.style.display = 'none';
    plantsModal.style.display = 'none';
    waterModal.style.display = 'none';
    shareModal.style.display = 'none';
    greyLayer.style.display = 'none';

    for (let i = 0; i < opaqueLayer.length; i++) {
        opaqueLayer[i].style.opacity = "55%";
        opaqueLayer[i].style.zIndex = "1";
    }
    floodVideo.pause();
    return modalOpen = false;
}




function clickFunction() {
    if (event.target.matches('.st') || event.target.matches('.sh')) {
        eventId = event.target.getAttribute('id'); //grab html id of clicked item
        let eventNumber = eventId.match(/\d+/g); //remove letters from id
        eventNumber = parseInt(eventNumber, 10); //convert string to integer
        whichBirdArray.shift(); //remove last number in whichBirdArray
        whichBirdArray.push(eventNumber); //push eventNumber to whichBirdArray
        reveal();
    } else if (event.target.parentElement.matches('.card')) {

        let clickedCard = event.target.parentElement;

        switch(clickedCard) {

            case document.getElementById('card1'):
                loadCard(waterModal)
                break;

            case document.getElementById('card2'):
                loadCard(floodModal)
                break;

            case document.getElementById('card3'):
                loadCard(plantsModal)
                break;

            case document.getElementById('card4'):
                loadCard(fishModal)
                break;

            case document.getElementById('card5'):
                loadCard(shareModal)
                break;

            default:
                console.log('There was an error')
                break;          
        }
    } else if (event.target.matches('#modalExit')) {
        hideModal();
    } else if (event.target.matches('#addFishLink')) {
        hideModal();
        loadCard(fishModal)
    }

}

for (i = 0; i < card.length; i++) { //Loop through the different Cards
    card[i].addEventListener('mouseover', hoverCard); //adding a listener for when a card is hovered
    card[i].addEventListener('mouseleave', leaveCard); //adding a listener for when mouse leaves a card
}

function hoverCard() { //called when user hovers over a card
    if (modalOpen == false) {
        let hoveredCardDad = event.target.parentElement; //Doing this so I can have that specific cards parent
        var hoveredCardOpacity = hoveredCardDad.getElementsByClassName('opaqueLayer'); //retargeting that cards opaque layer
        var hoveredCardText = hoveredCardDad.getElementsByTagName('p'); //targeting the text and number on that card
    


        hoveredCardOpacity[0].style.opacity = "0%";
        hoveredCardText[0].style.display = "none";
        hoveredCardText[1].style.display = "none";
    }
    
    

}

function leaveCard() { //called when user's mouse leaves card
    if (modalOpen == false) {
        let hoveredCard = event.target; //Doing this so I can have that specific cards parent
        var hoveredCardOpacity = hoveredCard.getElementsByClassName('opaqueLayer'); //retargeting that cards opaque layer
        var hoveredCardText = hoveredCard.getElementsByTagName('p'); //targeting the text and number on that card

        hoveredCardOpacity[0].style.opacity = "55%";
        hoveredCardText[0].style.display = "initial";
        hoveredCardText[1].style.display = "initial";
    }
    
}

function loadCard(x) {
    if (x.style.display != 'flex') {
        x.style.display = 'flex';
        greyLayer.style.display = 'inherit';
        for (let i = 0; i < opaqueLayer.length; i++) {
            opaqueLayer[i].style.opacity = "85%";
            opaqueLayer[i].style.zIndex = "4";
        }
        return modalOpen = true;
    } else {
        return;
    }
}



function birdInfoBuilder() {
    let i = whichBirdArray[0] - 1;
    birdPhoto.src = organismArray[i].img;
    birdNameText.innerHTML = organismArray[i].birdName;
    birdSciName.innerHTML = organismArray[i].sciName;
    birdParagraph.innerHTML = organismArray[i].paragraph1;
    birdLink.innerHTML = organismArray[i].birdLinkText;
    birdLink.setAttribute("href", organismArray[i].birdURL);
    return birdViewerModal = true;
}


exitButton.onclick = hideBirdViewer;

















