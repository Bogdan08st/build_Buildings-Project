

const InstallBuildInfo = ()=>{
    const buildsItems = document.querySelectorAll('.building-item path')
    const BuildingItemAdresse = document.querySelector("#adresse")
    const BuildingItemFloor = document.querySelector("#floor")
    const BuildingItemFlats = document.querySelector("#flats")

    const BuildingItemSoldFlats = document.querySelector("#sold-flats")
    const BuildingItemActionFlats = document.querySelector('#action-flats')
    const BuildingItemReservationFlats = document.querySelector('#reservation-flats')


    buildsItems.forEach((item)=>{

        const itemFlats = item.getAttribute('data-flats')
        if (Number(itemFlats) === 0) {
            item.closest('a').classList.add("sold")
        }

        item.addEventListener('mouseover', ()=>{
            const getAttrAdresse = item.getAttribute('data-adress')
            const getAttrFloor = item.getAttribute('data-floor')
            const getAttrFlats = item.getAttribute('data-flats')

            const getSoldFlats = item.getAttribute('data-sold-flats')
            const getActionFlats = item.getAttribute('data-action-flats')
            const getReservationFlats = item.getAttribute('data-reservation-flats')

            BuildingItemAdresse.innerHTML = getAttrAdresse;
            BuildingItemFloor.innerHTML = getAttrFloor;
            BuildingItemFlats.innerHTML = getAttrFlats;
            
            BuildingItemSoldFlats.innerHTML = getSoldFlats;
            BuildingItemActionFlats.innerHTML = getActionFlats;
            BuildingItemReservationFlats.innerHTML = getReservationFlats;

        })

        item.addEventListener('click', (event) => {
            if (item.closest(".sold")){
                event.preventDefault();
            }
        })

        const SoldItem = document.querySelectorAll('.sold');
        SoldItem.forEach((sold, index) =>{
            sold.setAttribute('data-modal', 'modal-' + index)
        });
    });

    
}
document.querySelector('.build-info') ? InstallBuildInfo() : null;

function InstallModal(){
    const callModalButton = document.querySelectorAll('[data-modal]');
    const customModal = document.querySelectorAll('.modal');
    const closeModal = document.querySelectorAll('.modal-close');

    const Body = document.querySelector('body')

    customModal.forEach((modal, index) =>{
        modal.setAttribute('id', 'modal-' + index);
    });
    callModalButton.forEach((call, index) =>{
        call.addEventListener('click', () =>{
            const callModal = document.querySelector('#modal-' + index);
            callModal.style.display ='flex';
            callModal.classList.add("show-modal");
        });
    });

    closeModal.forEach((closeButton) =>{
        closeButton.addEventListener('click', onCloseModal)
    })

    function onCloseModal() {
        const openModal = document.querySelector('.show-modal');
        openModal.classList.remove('show-modal');
        openModal.style.display = 'none';
    }

    window.addEventListener('keydown', (event)=>{
        if (event.code == "Escape"){
            onCloseModal()
        }
        else if (event.code == "Space"){
            onCloseModal()
        }
    })


    //window.addEventListener('keydown', keyDownHandler);
    //function keyDownHandler(event) {
    //  console.log('Клавиша нажата:', event.key);
    //}
    
    
    window.onclick = (event=>{
        customModal.forEach((item)=>{
            event.target == item ? onCloseModal() : null;
        })
    })


}
document.querySelector('.modal') ? InstallModal() : null;

const InstallPositionBuildInfo = ()=>{
    const buildInfo = document.querySelector('.build-info')
    const containerBuild = document.querySelector('.container-build')
    
    function raportWindowSize(){
        const buildInfoHeight = buildInfo.offsetHeight;
        const containerBuildHeight = containerBuild.offsetHeight;
        const calcHeigh =  containerBuildHeight - buildInfoHeight - 20;

        buildInfo.style.top = calcHeigh + "px";
    }
    raportWindowSize()
    window.onresize = raportWindowSize;

}
document.querySelector('.build-info') ? InstallPositionBuildInfo() : null;