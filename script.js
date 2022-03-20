const GameContainer = document.querySelector('.GameContainer')
const refText = document.querySelector('.ReferenceText')
const inputText = document.querySelector('.InputText')
const Timer = document.querySelector('#Timer')
const ResultScreen = document.querySelector('.ResultContainer')
const TimeResult = document.querySelector('#TimeResult')
const ReplayButton = document.querySelector('#ReplayButton')
const Characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'E', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y' ,'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '.', ',', "'", '"', '/', '?', '!', ' ']
const TextsArray = [`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro explicabo accusantium repellendus. Voluptate iste cum, saepe autem voluptatem nobis nostrum reprehenderit, inventore error modi fuga at facilis, incidunt in itaque. Rerum consequatur numquam expedita velit ab obcaecati voluptates quisquam quaerat sed architecto magni nobis dignissimos dolore animi fugit eligendi esse quas ipsam. Dolores possimus accusantium consequatur esse repellendus vero laborum maiores quam nostrum magni fugiat unde eveniet facere, quidem illo similique maxime, qui corrupti cumque harum reiciendis nobis voluptates itaque. Animi, fugit.`,
`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus corporis sunt a quo velit commodi dicta, ipsum excepturi quasi soluta, nesciunt iure? Rem impedit minus perspiciatis voluptatem quas cupiditate illum.`,
`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium exercitationem non sit hic laborum officiis blanditiis cum eaque inventore. Nam architecto quos atque nisi qui odio eius, praesentium debitis ea? Explicabo accusamus ad ipsa tempora totam facere sed repellat quibusdam culpa, dolores minus qui beatae, maiores quidem hic quas! Dolorum, recusandae perspiciatis provident neque tenetur blanditiis mollitia hic vel totam! Hic eum quisquam velit saepe, reprehenderit iure totam mollitia. Laudantium necessitatibus accusamus ipsam quae totam dolorem iste perferendis aliquam sequi sint neque in atque provident rerum autem voluptatibus, cum ullam.`,
`Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, eveniet adipisci dolorum laborum id perspiciatis eius nostrum magni dolorem! Pariatur aut numquam ea, provident inventore excepturi voluptatum nostrum sit eveniet! Illum harum dolorem, doloribus necessitatibus nobis nostrum! Suscipit unde amet adipisci quibusdam et optio dolorem earum ut iste ex. Animi excepturi quisquam fugiat suscipit distinctio eaque asperiores qui ab repudiandae.`, 
`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus tempora repellendus unde illo iste, quidem eius autem voluptatibus delectus voluptatum eligendi repellat quia enim quaerat atque blanditiis. Provident, sed.`,
`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam facere est nulla voluptatibus laboriosam consectetur reprehenderit. Quae, veniam blanditiis tenetur animi consequuntur, sint, aperiam sunt velit recusandae neque eveniet delectus.`,
`Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, autem in cupiditate odio velit qui porro unde aut nostrum labore quidem. Repellendus deserunt sunt nihil ducimus. Pariatur tempore neque alias! Quaerat modi placeat sunt officiis amet nobis labore blanditiis qui tempore distinctio quia sapiente ratione obcaecati quam, nam nostrum? Hic vitae laboriosam commodi soluta, libero distinctio nobis ducimus ab unde. Est, doloremque perferendis quaerat eaque totam commodi dignissimos consequatur dolore, blanditiis possimus incidunt optio tempora. Quisquam eius dicta temporibus beatae mollitia velit, harum, nam id amet alias reiciendis aperiam qui! Error deserunt minus labore quis quod culpa facere quidem aspernatur adipisci nihil ipsa magnam porro veniam recusandae temporibus consequuntur optio delectus tempora provident, qui distinctio ipsam fugiat? Provident, similique pariatur. Iste repellendus maxime tempora dolorum non porro ab perferendis! Sit cumque in atque architecto expedita mollitia porro soluta velit corporis sed deserunt a ipsam, fuga labore tempore ipsum repellendus ex.`]

var isCounting = false, m = 0, s = 0, i = 0, startCounting = false

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

if(!isCounting){
    inputText.onkeydown = ()=>{
        isCounting = true
    }
}

// Generating random Lorem Text as a Reference
let rand = Math.floor(Math.random()*TextsArray.length)
refText.innerHTML = TextsArray[rand]

// Clearing inpText
inputText.value = ''

const timerInterval = setInterval(()=>{
    if(startCounting){
        s += 0.02
        if(s>=60){
            s = 0
            m += 1
        }
        if(m==60){
        //Alert Time's up!
        }
        Timer.innerHTML = `${m.toLocaleString('en', {minimumIntegerDigits:2,minimumFractionDigits:0,useGrouping:false})}:${s.toLocaleString('en', {minimumIntegerDigits:2,minimumFractionDigits:2,useGrouping:false})}`
    }
}, 10)

// Starting Timer
const checkTimer = setInterval(()=>{
    if(isCounting){
    // Start Counting
        startCounting = true
    }
    
}, 100)

async function transition() {
    GameContainer.style.opacity = '0'
    GameContainer.style.transform = 'scale(0.95)'
    await sleep(400);
    GameContainer.style.display = 'none'
    ResultScreen.style.display = 'flex'
    ResultScreen.style.opacity = '1'

    TimeResult.innerHTML = Timer.innerHTML
        
}

// Checking Input
inputText.addEventListener('input', ()=>{
    lenInp = inputText.value.length
    lenRef = refText.innerHTML.length
    if(inputText.value==refText.innerHTML.slice(0, lenInp)){
        inputText.style.color = 'black'
        noMistakes = true
    } else {
        inputText.style.color = 'rgb(255, 78, 116)'
        noMistakes = false
    }

    // Cheking if user won
    if(lenInp==lenRef && noMistakes){
        // User Won
        clearInterval(timerInterval)
        transition()
    }
})


// Replay Button Setup
ReplayButton.addEventListener('click', ()=>{
    location.reload()
})


// Change border color on focus
inputText.addEventListener('focus', ()=>{
    inputText.style.borderColor = 'rgb(96, 120, 255)'
})
inputText.addEventListener('blur', ()=>{
    inputText.style.borderColor = 'rgba(128, 128, 128, 0.3)'
})